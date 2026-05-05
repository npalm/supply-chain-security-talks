# GeeCON Krakow 2026 Resources

Talk: **Supply Chain Compromise: The Anatomy of the Attack and the Blueprint for Defense**

## Monday Morning Checklist

1. Search workflows for `pull_request_target`, unchecked PR data, and `${{ github.event.* }}` inside `run:`.
2. Set default `GITHUB_TOKEN` permissions to read-only and grant write only per job.
3. Pin GitHub Actions to full commit SHAs.
4. Add dependency update cooldowns for automated dependency PRs.
5. Replace long-lived publish secrets with OIDC where possible, plus protected release branches and environment approvals.
6. Separate release jobs from untrusted build/test jobs.
7. Run risky installs and AI agents in a sandbox with limited filesystem, network, and token access.
8. Review MCP, IDE extension, agent skill, `.github/copilot-instructions.md`, `.cursor`, `.claude`, and similar automation config.

## Useful Tools

- [zizmor](https://github.com/zizmorcore/zizmor) - GitHub Actions security scanner
- [OpenSSF Scorecard](https://securityscorecards.dev/) - dependency and project security signals
- [StepSecurity Harden-Runner](https://github.com/step-security/harden-runner) - runtime egress and workflow hardening
- [GitHub Dependency Review Action](https://github.com/actions/dependency-review-action)
- [GitHub OIDC hardening](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)
- [GitHub Actions security hardening](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)

## Talk Incidents

- [Shai-Hulud v2 analysis](https://socket.dev/blog/shai-hulud-strikes-again-v2)
- [PostHog Shai-Hulud postmortem](https://posthog.com/blog/nov-24-shai-hulud-attack-post-mortem)
- [tj-actions / changed-files CISA alert](https://www.cisa.gov/news-events/alerts/2025/03/18/supply-chain-compromise-third-party-tj-actionschanged-files-cve-2025-30066-and-reviewdogaction)
- [Trivy tag poisoning advisory](https://nvd.nist.gov/vuln/detail/CVE-2026-33634)
- [Axios npm compromise](https://github.com/axios/axios/issues/10604)
- [Clinejection](https://adnanthekhan.com/posts/clinejection/)
- [Trivy OpenVSX prompt injection](https://socket.dev/blog/unauthorized-ai-agent-execution-code-published-to-openvsx-in-aqua-trivy-vs-code-extension)
- [MCP tool poisoning](https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks)
- [OpenClaw skill marketplace malware](https://socket.dev/blog/openclaw-skill-marketplace-emerges-as-active-malware-vector)
- [Bitwarden CLI incident statement](https://community.bitwarden.com/t/bitwarden-statement-on-checkmarx-supply-chain-incident/96127)
- [Mini Shai-Hulud tracker](https://socket.dev/supply-chain-attacks/mini-shai-hulud)
- [SAP CAP / Cloud MTA Mini Shai-Hulud analysis](https://socket.dev/blog/sap-cap-npm-packages-supply-chain-attack)
- [Lightning / PyTorch Lightning PyPI compromise](https://socket.dev/blog/lightning-pypi-package-compromised)
- [fast-draft OpenVSX / BlokTrooper](https://www.aikido.dev/blog/fast-draft-open-vsx-extension-compromised-by-bloktrooper)
- [GlassWorm React Native packages](https://www.aikido.dev/blog/glassworm-strikes-react-packages-phone-numbers)
- [Checkmarx security update](https://checkmarx.com/blog/checkmarx-security-update/)
- [RubyGems and Go modules poisoning](https://thehackernews.com/2026/05/poisoned-ruby-gems-and-go-modules.html)

## Core Mental Models

- Untrusted input meets trusted automation.
- Attackers do not need your code. They need your identity.
- The bug is old. AI is the amplifier.
- Every automation boundary is a security boundary.
