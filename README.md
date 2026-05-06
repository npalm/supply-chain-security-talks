# Talk - Supply chain security

This repository has slides and demo resources for talks on software supply chain security and AI-driven development risks.

## Conferences

| When | Conference | Talk |
|------|-----------|------|
| May 2026 | [GeeCON Krakow](https://2026.geecon.org/) | [Supply Chain Compromise: The Anatomy of the Attack and the Blueprint for Defense](https://npalm.github.io/supply-chain-security-talks/geecon26/) |
| Apr 2026 | [BSides Groningen](https://bsidesgrunn.org/) | [Supply Chain Compromise: The Anatomy of the Attack and the Blueprint for Defense](https://npalm.github.io/supply-chain-security-talks/bsidesgrun26/) |
| Mar 2026 | [040coders.nl](https://www.meetup.com/040coders-nl/events/312818432/) | [Beyond the Commit: Weaponizing and Hardening GitHub Actions](https://npalm.github.io/supply-chain-security-talks/040coders26/) |
| Jan 2026 | [NDC Security](https://ndcsecurity.com/) | [Beyond the Commit: Weaponizing and Hardening GitHub Actions](https://npalm.github.io/supply-chain-security-talks/ndcsecurity26/) |
| Nov 2025 | [NDC Security & AI](https://ndcmanchester.com/) | [From CI Nightmare to Supply Chain Sentinel](https://npalm.github.io/supply-chain-security-talks/ndcmanchester25) |
| Nov 2025 | [HeapCon](https://heapcon.io/) | [From CI Nightmare to Supply Chain Sentinel](https://npalm.github.io/supply-chain-security-talks/heapcon25/) |
| Nov 2025 | [GoTech World](https://www.gotech.world/) | [From CI Nightmare to Supply Chain Sentinel](https://npalm.github.io/supply-chain-security-talks/gotechworld25/) |
| Nov 2025 | [040coders.nl (Ignite)](https://www.meetup.com/040coders-nl/) | [Weaponizing GitHub Actions](https://npalm.github.io/supply-chain-security-talks/040codersignite25/) |

## Demo resources

- [GeeCON 2026 resources](decks/geecon26/resources.md)
- [Demo Zizmor (extend version)](https://github.com/codethebuild/gh-actions-security-zizmor-demo-time)
- [Demo Zizmor](https://github.com/codethebuild/gh-actions-security-zizmor)
- [Demo GHAS](https://github.com/codethebuild/gh-actions-security-ghas)

### Security Tools & Documentation

- [Zizmor GitHub Actions Security Scanner](https://github.com/woodruffw/zizmor) - Open source tool for scanning GitHub Actions workflows
- [Zizmor Documentation](https://woodruffw.github.io/zizmor/) - Comprehensive guide and configuration options
- [GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security) - GitHub's built-in security features
- [GitHub Actions Security Hardening](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions) - Official security best practices

### Additional Resources

- [OpenSSF Scorecard](https://securityscorecards.dev/) - Security health metrics for open source projects
- [OIDC with GitHub Actions](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect) - Short-lived tokens setup
- [Dependency Review Action](https://github.com/actions/dependency-review-action) - GitHub Action for dependency analysis
- [GitHub Security Lab - Keeping your GitHub Actions](https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/) - Article serie discussing common security malpractices for GitHub Actions and workflows.
- [Harden GitHub Actions](https://www.wiz.io/blog/github-actions-security-guide) - How to Harden GitHub Actions: The Unofficial Guide
- [Cline CLI Attack](https://www.zenity.io/blog/the-cline-cli-attack-when-ai-coding-assistants-become-attack-vectors/) - When AI Coding Assistants Become Attack Vectors

## Speaker

<!-- markdownlint-disable MD013 MD033 -->
| [![Niek Palm](https://avatars.githubusercontent.com/npalm?s=100)<br />Niek Palm](https://github.com/npalm)<br /><sub>Principal Engineer - Philips</sub> |
| :---: |
<!-- markdownlint-enable MD013 MD033 -->

## Tools

The slides are written in markdown and converted to slides with [marp](https://marp.app/).

## Repository structure

```text
assets/shared/        Shared assets reused across decks
decks/<slug>/         One deck per directory
  slides.md           Marp source
  deck.yml            Deck-local metadata
  assets/             Deck-local assets
  resources.md        Optional resources page source
scripts/              Build and dev tooling
sessions.yml          Published session timeline and site registry
site/                 Generated GitHub Pages output
.build/               Intermediate build output
```

## Commands

```bash
corepack enable
pnpm install
pnpm run build:deck -- --deck geecon26
pnpm run build:deck -- --deck geecon26 --standalone
pnpm run dev -- --deck geecon26
pnpm run site
```

To preview the generated site locally:

```bash
pnpm run site
npx http-server site -c-1 -a 127.0.0.1
```

## Publishing model

- `sessions.yml` is the source of truth for the public timeline and homepage ordering.
- Each published session keeps its own public slug, such as `geecon26`.
- A session can optionally expose a resources page. If `resources:` is omitted, the site builder looks for `decks/<deck>/resources.md`.
- The homepage is generated from newest to oldest.

## Asset rules

- Put reusable assets in `assets/shared/`.
- Put talk-specific assets in `decks/<slug>/assets/`.
- Prefer deck-local assets by default. Promote files to shared only when they are intentionally reused.

## CI

- `ci.yml` validates the site build on `ubuntu-latest`.
- `pages.yml` builds the full site on PRs and uploads `site/` as a 3-day artifact preview.
- Only pushes to `main` deploy to `gh-pages`.
- `actionlint.yml`, `zizmor.yml`, `dependency-review.yml`, and `security.yml` cover workflow and dependency security checks.

## Images

This presentation uses the following sources for images:

- Own images
- [Pixabay](https://pixabay.com/)
- [DALL-E](https://labs.openai.com/)
- [Gemini](https://gemini.google/)
