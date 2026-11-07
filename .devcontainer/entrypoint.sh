#!/bin/sh
set -eu

# Tamper-proof DNS entrypoint
# 1. Configure DNS resolution to use local proxy
# 2. Set up iptables to redirect all DNS to the proxy
# 3. Start dnscrypt-proxy
# 4. Drop CAP_NET_ADMIN (irreversible) so iptables can never be changed
# 5. exec into the container's CMD

NETWORK_MODE="${NETWORK_MODE:-audit}"

# ── 1. Point the system resolver at our proxy ───────────────────────
cat > /etc/resolv.conf <<EOF
# Managed by devcontainer entrypoint — do not edit
nameserver 127.0.0.1
EOF

# ── 2. Select configuration based on mode ───────────────────────────
case "${NETWORK_MODE}" in
  audit)
    echo "[dns-guard] Mode: AUDIT — logging all DNS queries, blocking nothing"
    cp /etc/dnscrypt-proxy/dnscrypt-proxy-audit.toml /etc/dnscrypt-proxy/dnscrypt-proxy.toml
    ;;
  strict)
    echo "[dns-guard] Mode: STRICT — logging all DNS queries, enforcing allowlist"
    cp /etc/dnscrypt-proxy/dnscrypt-proxy-strict.toml /etc/dnscrypt-proxy/dnscrypt-proxy.toml
    ;;
  *)
    echo "[dns-guard] ERROR: Unknown NETWORK_MODE '${NETWORK_MODE}' (expected 'audit' or 'strict')" >&2
    exit 1
    ;;
esac

# ── 3. iptables: redirect all DNS traffic to the proxy ──────────────
# Allow dnscrypt-proxy's own upstream queries to pass through untouched
DNSCRYPT_UID=$(id -u _dnscrypt)

iptables  -t nat -A OUTPUT -m owner --uid-owner "${DNSCRYPT_UID}" -j RETURN
ip6tables -t nat -A OUTPUT -m owner --uid-owner "${DNSCRYPT_UID}" -j RETURN

# Redirect everyone else's port-53 traffic to our proxy on 5353
iptables  -t nat -A OUTPUT -p udp --dport 53 -j DNAT --to-destination 127.0.0.1:5353
iptables  -t nat -A OUTPUT -p tcp --dport 53 -j DNAT --to-destination 127.0.0.1:5353
ip6tables -t nat -A OUTPUT -p udp --dport 53 -j DNAT --to-destination [::1]:5353
ip6tables -t nat -A OUTPUT -p tcp --dport 53 -j DNAT --to-destination [::1]:5353

echo "[dns-guard] iptables rules installed"

# ── 4. Start dnscrypt-proxy ─────────────────────────────────────────
su -s /bin/sh _dnscrypt -c \
  "dnscrypt-proxy -config /etc/dnscrypt-proxy/dnscrypt-proxy.toml &"

# Wait for the proxy to start listening
READY=0
for i in $(seq 1 30); do
  if dig +short +timeout=1 +tries=1 @127.0.0.1 -p 5353 localhost >/dev/null 2>&1; then
    echo "[dns-guard] dnscrypt-proxy is ready"
    READY=1
    break
  fi
  sleep 0.2
done
if [ "$READY" -eq 0 ]; then
  echo "[dns-guard] WARNING: dnscrypt-proxy may not have started" >&2
fi

# ── 5. Drop CAP_NET_ADMIN — irreversible ────────────────────────────
# After this, no process in this container can modify iptables rules
echo "[dns-guard] Dropping CAP_NET_ADMIN (irreversible)"
exec capsh --drop=cap_net_admin -- -c "exec $*"
