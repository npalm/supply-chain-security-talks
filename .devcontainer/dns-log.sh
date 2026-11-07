#!/bin/sh
# Tail the dnscrypt-proxy query log with human-readable formatting
#
# Usage:
#   dns-log          # follow (live tail)
#   dns-log last 50  # show last 50 entries
#   dns-log blocked  # show only NX (blocked/failed) queries

LOG="/var/log/dnscrypt-proxy/query.log"
NX_LOG="/var/log/dnscrypt-proxy/nx.log"

if [ ! -f "$LOG" ]; then
  echo "No query log yet — make a DNS request first (e.g. curl https://github.com)"
  exit 0
fi

case "${1:-}" in
  last)
    COUNT="${2:-20}"
    echo "=== Last ${COUNT} DNS queries ==="
    tail -n "${COUNT}" "$LOG"
    ;;
  blocked|nx)
    if [ -f "$NX_LOG" ]; then
      echo "=== Blocked / NX queries ==="
      cat "$NX_LOG"
    else
      echo "No blocked queries recorded yet."
    fi
    ;;
  *)
    echo "=== Following DNS query log (Ctrl+C to stop) ==="
    tail -f "$LOG"
    ;;
esac
