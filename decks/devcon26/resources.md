# You Trust More Code Than You Ship

Niek Palm · DevCon Bucharest, DevOps Con · 4 November 2026

[DevCon Bucharest](https://www.dev-con.ro/) · [Official talk and speaker page](https://www.dev-con.ro/speakers/4-Niek+Palm) · DevOps Con · **10:15–11:00** (event local time)

## Monday morning checklist

Choose **one repository or coding task you control**. Pick one action; review the result before expanding the scope.

1. **One project: propose a dependency cooldown.** Inspect the existing package-manager configuration. For supported pnpm versions, `minimumReleaseAge: 10080` is a seven-day example. Preserve existing settings, review the diff and open a small PR. Keep urgent fixes possible; a cooldown does not certify safety or remove a bad version already locked.
2. **One workflow: review one finding.** Run `zizmor` on an existing workflow. Understand one Action-reference or permission finding, make a focused change and review the diff. Select a reviewed full commit when pinning. This is a proposed repository change, not a claim that the scanner fixes every trust boundary.
3. **One coding setup: inspect it, then use a reviewed devcontainer.** Inspect tracked startup/instruction files and your tool's real settings before the next task. Follow helpers and downloads. Check mounts, connected tools and forwarded credentials; remove access that task does not need. Tracked files alone are not the entire configuration. Review `.devcontainer/devcontainer.json`, the image, startup hooks, mounts and forwarded credentials. For a known reviewed environment with the required CLI/tools installed, `devcontainer up --workspace-folder .` followed by `devcontainer exec --workspace-folder . copilot` puts the coding task inside it. The restored GEECon closing sequence then asks the agent to recap the supply-chain principles; treat the displayed answer as an illustration to review, not an assessment. A devcontainer does not automatically isolate host identity or restrict network access.

**Optional next small step:** generate an SBOM for one release artifact, inspect its coverage and retain it with the artifact digest. cdxgen, Syft and Trivy are options; choose the target and analysis mode deliberately. Scan a supported inventory against known advisories and recheck it later. Build-tool exposure still needs separate records.

Broader mirror enforcement, runner isolation, publishing trust and recovery rehearsals stay in the engineering controls and example material. The Monday actions are a practical starting point for an individual contributor.

## Practical examples from the controls section

[Example files and limitations](https://github.com/npalm/supply-chain-security-talks/tree/main/decks/devcon26/examples): pnpm intake policy, Renovate/Dependabot cooldowns, a mirror-intake review contract, a pinned PR-build workflow, coding-environment boundary contract, and separate OIDC trust/permission examples. These are teaching material to adapt and review, not active repository configuration or deployed controls.

## Intake habits

Treat release age and immutable selection as separate decisions. Set an explicit cooldown in the package manager and/or update bot, with reviewed exceptions for urgent changes. Maintain reviewed lockfiles, Action commits and image digests through update PRs. Check Action reference policy with zizmor.

Allowlist reviewed external Actions and reusable workflows in GitHub policy, and pin reviewed references. Local code, shell commands and helper downloads still need review. Start workflow token permissions at `permissions: {}` and grant only what each job needs. Restrict separately minted App tokens to the required repository and permissions. See the [worked excerpts](https://github.com/npalm/supply-chain-security-talks/blob/main/decks/devcon26/examples/actions-and-token-scope.md).

A mirror with configured blocking policies can centralize artifact review and intake decisions. Verify that coding and CI environments actually use that route, including cached packages, missing metadata and helper downloads. A plain cache does not perform this review automatically.

- [Renovate minimum release age](https://docs.renovatebot.com/configuration-options/#minimumreleaseage)
- [Dependabot cooldown](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#cooldown), for version updates rather than security updates
- [Example of mirror policy enforcement](https://docs.jfrog.com/security/docs/create-policies-1)

## Engineering references

- [GitHub Actions allowlist policy](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)
- [Workflow/job token permissions](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)
- [GitHub App token scoping](https://github.com/actions/create-github-app-token)
- [GitHub Actions secure use](https://docs.github.com/en/actions/reference/security/secure-use)
- [Workflow dependency lockfiles](https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles) — public preview; includes transitive action selection and source identity. Reusable workflow dependencies follow the defining repository's lockfile. Reviewed full SHAs remain an option where the lockfile is not adopted.
- [GitHub OIDC concepts](https://docs.github.com/en/actions/concepts/security/openid-connect)
- [npm trusted publishers](https://docs.npmjs.com/trusted-publishers)
- [pnpm settings](https://pnpm.io/settings) and [installation options](https://pnpm.io/cli/install)
- [zizmor workflow analysis](https://github.com/zizmorcore/zizmor)
- [OpenSSF Scorecard](https://github.com/ossf/scorecard)
- [OSV-Scanner](https://google.github.io/osv-scanner/) and [source/SBOM scanning](https://google.github.io/osv-scanner/usage/scan-source)
- [GitHub Dependency Review Action](https://github.com/actions/dependency-review-action)
- [cdxgen SBOM generation](https://github.com/cdxgen/cdxgen), with [execution/permission controls](https://github.com/cdxgen/cdxgen/blob/master/docs/PERMISSIONS.md)
- [Syft SBOM generation](https://github.com/anchore/syft)
- [Trivy SBOM generation](https://trivy.dev/docs/latest/supply-chain/sbom/)
- [Release SBOM scope and evidence](https://cheatsheetseries.owasp.org/cheatsheets/Dependency_Graph_SBOM_Cheat_Sheet.html)
- [StepSecurity Harden-Runner](https://github.com/step-security/harden-runner)
- [VS Code devcontainer credential forwarding](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials) and [Codespaces devcontainers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)
- [Docker Sandboxes credential proxy](https://docs.docker.com/ai/sandboxes/configuration/credentials), including sandbox scope, passthrough and separate SSH forwarding considerations
- [nono](https://nono.sh/): [OS sandbox](https://nono.sh/os-sandbox) and [credential injection](https://nono.sh/credential-injection). Proxy injection keeps supported API keys outside; environment injection exposes them to the child. Review the actual profile and platform.
- [Docker Sandboxes security model](https://docs.docker.com/ai/sandboxes/security/), local microVM workspace/network sharing
- [Claude Code Bash sandbox](https://code.claude.com/docs/en/sandboxing), including tools outside its coverage and retry behavior
- [Infisical Agent Vault](https://github.com/Infisical/agent-vault) and [proxy service rules](https://docs.agent-vault.dev/learn/services), an additional credential layer
- Platform-team options: [NVIDIA OpenShell](https://github.com/NVIDIA/OpenShell), [Kubernetes SIGs agent-sandbox](https://github.com/kubernetes-sigs/agent-sandbox). Evaluate actual runtime, network, identity and persistence configuration; these products were not locally evaluated here.
- [MCP security practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices)

## Cases in the main talk

- Shai-Hulud 2.0: [Socket original investigation](https://socket.dev/blog/shai-hulud-strikes-again-v2), [Datadog technical analysis](https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/), [PostHog owner postmortem](https://posthog.com/blog/nov-24-shai-hulud-attack-post-mortem)
- Trivy / LiteLLM: [Aqua advisory](https://github.com/aquasecurity/trivy/security/advisories/GHSA-69fq-xp46-6x23), [LiteLLM incident report](https://docs.litellm.ai/blog/security-update-march-2026)
- Axios: [affected project incident thread](https://github.com/axios/axios/issues/10636). Maintainer social engineering and malicious npm releases, shown before the AI section.
- Later exposure reconstruction: [CloudSEK, August](https://www.cloudsek.com/blog/ai-supply-chain-breach-2500-companies-434000-cicd-pipelines), [SOCRadar, updated September](https://socradar.io/blog/litellm-supply-chain-attack/). Reconstructed exposure is distinct from confirmed organizational breach; their datasets overlap.
- hackerbot-claw: [StepSecurity original investigation](https://www.stepsecurity.io/blog/hackerbot-claw-github-actions-exploitation)
- S1ngularity: [Nx owner postmortem](https://nx.dev/blog/s1ngularity-postmortem)
- WED skill PoC: [Jamieson O’Reilly’s original research](https://x.com/theonejvo/status/2015892980851474595). The demonstrated action was a ping; the talk labels secret exfiltration as a hypothetical modification.
- Recent AI observations: [Google GTIG, September 2026](https://cloud.google.com/blog/topics/threat-intelligence/from-prompting-to-autonomy-the-evolution-of-adversarial-ai), [Anthropic, September 2026](https://www.anthropic.com/threat-intelligence-report-september-2026). Case durations are individual observations, not industry averages.

## Research and source deck

The research inventory records activity and disclosure dates, counting rules, primary evidence, uncertainty and excluded disclosures. The deck's selected 2026 catalogue now contains **95 records across 61 conservative campaign groups**: the 94-record / 60-group baseline reconciled on 22 October through the 21 October LiteLLM episode, plus one deck-local addition for [Cursor's 29 October Claude Code extension compromise](https://cursor.com/blog/claude-code-extension-security-notice). This targeted refresh was checked on **31 October 2026**; it is not a complete daily sweep. Individual incidents link to public sources in the deck's appendix.

The broader research baseline is 113 records / 75 conservative campaign bundles / 17 delivery surfaces. That baseline has not been updated here for the deck-local Cursor entry. The separate 2025 review contains 23 records across 20 groups. None of these totals is a global census or an AI-attributed count.

The technical narrative evolves the [GEECon Krakow deck](https://npalm.github.io/supply-chain-security-talks/geecon26/) from 13 May 2026. The opening controlled demonstration is recorded. Its visible values and environment belong to the demonstration, and do not establish access to production systems.

## Historical appendix

The bounded 2023 audit has 14 incidents/waves; the 2024 audit has 18. These historical samples have different coverage from the 2025/2026 selections and do not establish a worldwide trend.

## Image attribution

The Eindhoven speaker background incorporates ["Klokgebouw en Ketelhuisplein"](https://commons.wikimedia.org/wiki/File:Klokgebouw_en_Ketelhuisplein.jpg) by **Peter Beekmans**, licensed under [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). The building was isolated, resized, desaturated, graded for an evening scene and composited into the illustrated skyline, with an added reflection and vignette. The result is an illustrative city composite, not a documentary viewpoint. The original speaker background is preserved separately as an asset.
