# Hardened devcontainer with tamper-proof DNS auditing/filtering
# Uses dnscrypt-proxy + iptables with CAP_NET_ADMIN dropped after setup
FROM mcr.microsoft.com/devcontainers/base:ubuntu

ARG DNSCRYPT_PROXY_VERSION=2.1.15

# Install iptables (DNS redirect), libcap2-bin (capsh for cap dropping), tini (PID 1)
RUN apt-get update && apt-get install -y --no-install-recommends \
    iptables \
    libcap2-bin \
    tini \
    dnsutils \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Download dnscrypt-proxy for the correct architecture
RUN ARCH=$(dpkg --print-architecture) && \
    case "${ARCH}" in \
        amd64) DNSCRYPT_ARCH="linux_x86_64" ;; \
        arm64) DNSCRYPT_ARCH="linux_arm64" ;; \
        *) echo "Unsupported architecture: ${ARCH}" && exit 1 ;; \
    esac && \
    curl -fsSL "https://github.com/DNSCrypt/dnscrypt-proxy/releases/download/${DNSCRYPT_PROXY_VERSION}/dnscrypt-proxy-${DNSCRYPT_ARCH}-${DNSCRYPT_PROXY_VERSION}.tar.gz" \
        -o /tmp/dnscrypt-proxy.tar.gz && \
    tar xzf /tmp/dnscrypt-proxy.tar.gz -C /tmp && \
    mv /tmp/linux-*/dnscrypt-proxy /usr/local/bin/dnscrypt-proxy && \
    chmod 755 /usr/local/bin/dnscrypt-proxy && \
    rm -rf /tmp/dnscrypt-proxy.tar.gz /tmp/linux-*

# Create dedicated user for dnscrypt-proxy (exempt from iptables redirect)
RUN useradd --system --no-create-home --shell /usr/sbin/nologin _dnscrypt

# Create log and config directories
RUN mkdir -p /var/log/dnscrypt-proxy /etc/dnscrypt-proxy && \
    chown _dnscrypt:_dnscrypt /var/log/dnscrypt-proxy

# Copy configuration files
COPY dnscrypt-proxy-audit.toml /etc/dnscrypt-proxy/dnscrypt-proxy-audit.toml
COPY dnscrypt-proxy-strict.toml /etc/dnscrypt-proxy/dnscrypt-proxy-strict.toml
COPY allowed-domains.txt /etc/dnscrypt-proxy/allowed-domains.txt
COPY blocked-domains.txt /etc/dnscrypt-proxy/blocked-domains.txt

# Copy entrypoint and log viewer
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
COPY dns-log.sh /usr/local/bin/dns-log
RUN chmod 755 /usr/local/bin/entrypoint.sh /usr/local/bin/dns-log

ENTRYPOINT ["/usr/bin/tini", "--", "/usr/local/bin/entrypoint.sh"]
CMD ["sleep", "infinity"]
