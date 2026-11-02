# Coding boundary options · research checked 2 November 2026

The current slide and its comparison version cover useful developer choices, but mix project packaging, isolation mechanisms and lifecycle characteristics. Docker Sandboxes and a disposable VM overlap in their VM-based execution scope. The missing explicit topic is policy-managed agent runtimes and platform-managed sandbox execution. No slide replacement is selected by this research note.

## NVIDIA's announcements

- **16 March 2026:** NVIDIA announced NemoClaw for OpenClaw, combining Nemotron models with the newly announced OpenShell runtime. NemoClaw is the OpenClaw-oriented stack; OpenShell is the more general runtime relevant to this deck. [NVIDIA announcement](https://nvidianews.nvidia.com/news/nvidia-announces-nemoclaw)
- **28 September 2026:** NVIDIA announced the Open Agent Safety Platform, combining OpenShell software with the Sentry reference system design. NVIDIA describes Sentry as a separate out-of-band enforcement/monitoring layer running on BlueField-4 DPUs. This is broader infrastructure than a developer workstation sandbox. [NVIDIA announcement](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Launches-Open-Agent-Safety-Platform-to-Secure-Agents-From-Testing-to-Deployment/default.aspx)
- **21 October 2026:** NVIDIA announced the OpenShell Reference Architecture, bringing together OpenShell, Vera Rubin infrastructure, Vera CPUs and BlueField-4/Sentry. Treat the architecture announcement separately from software feature availability; the release itself includes future-availability qualifications. [NVIDIA announcement](https://nvidianews.nvidia.com/news/openshell-reference-architecture)

## What OpenShell adds

Current OpenShell documentation identifies version 0.1.6. It describes a sandbox workload separated from a trusted supervisor, declarative per-agent access policy, mediated network requests, credential injection into approved requests, and policy-change analysis. This connects the execution boundary to an operator-managed policy and lifecycle plane. These are documented capabilities, not a local security evaluation or a guarantee that arbitrary policies and integrations are safe.

Its documented compute drivers are Docker, Podman, Kubernetes and MicroVM. The supervisor transport and outer network fence vary by driver. Therefore, OpenShell is not synonymous with a microVM, and its integration with an underlying runtime must be inspected. Do not infer that the hardware Sentry reference architecture is a prerequisite for the open-source software.

- [OpenShell overview](https://docs.nvidia.com/openshell/about/overview)
- [Architecture and driver-specific boundaries](https://docs.nvidia.com/openshell/latest/about/architecture)
- [Support matrix](https://docs.nvidia.com/openshell/latest/about/support-matrix)
- [Source repository](https://github.com/NVIDIA/OpenShell)

## Coverage of the current choices

| Current choice or adjacent option | What it represents | What to inspect |
| --- | --- | --- |
| Devcontainers | A project environment definition; local and hosted deployments have different outer boundaries. | Mounts, startup code, extension location, Git/SSH forwarding and supplied identity. |
| Tool/process sandbox | OS restrictions around a tool or process and its children. Claude Code Bash and nono illustrate differing scopes. | Which processes and tools are covered, allowed reads/writes, inherited environment, network policy, exclusions and outside retries. |
| Local Docker Sandboxes / disposable VM | A VM or microVM-based workspace for the coding toolchain. Disposability is a lifecycle choice, not a separate isolation mechanism. | Shared paths, host integrations, credential access, egress, persistence and actual disposal. |
| Remote/cloud workspace | A deployment location and managed service boundary, whose isolation mechanism varies. | Provider-specific mounts, stored secrets, network rules and exposed ports. Local policies need not transfer to cloud. |
| OpenShell | A policy-managed agent runtime spanning multiple compute drivers. | Effective policy, trusted supervisor, driver isolation, credential routes, policy-change authority and auditability. |
| Kubernetes SIGs Agent Sandbox | Kubernetes lifecycle/orchestration APIs for sandbox workloads. Low-level isolation depends on the configured runtime. | RuntimeClass (such as gVisor or Kata), network enforcement, service-account identity, storage and lifecycle policy. |

Primary documentation:

- [Devcontainer specification](https://containers.dev/implementors/json_reference/)
- [VS Code credential sharing](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials)
- [Claude Code Bash sandbox scope](https://code.claude.com/docs/en/sandboxing)
- [nono OS sandbox](https://nono.sh/os-sandbox)
- [Local Docker Sandboxes security](https://docs.docker.com/ai/sandboxes/security/)
- [Docker local/cloud differences](https://docs.docker.com/ai/sandboxes/cloud/local-vs-cloud/)
- [Kubernetes Agent Sandbox documentation](https://agent-sandbox.sigs.k8s.io/docs/)
- [gVisor and Kata configuration](https://agent-sandbox.sigs.k8s.io/docs/guides/gvisor/)

## Suggested slide revision

Keep the four familiar choices, but make their coverage more accurate:

1. **Project environments** — devcontainers and hosted workspaces. Inspect the actual outer execution boundary.
2. **Tool/process sandboxes** — tool-native or OS-level restrictions. Inspect coverage and escape/retry routes.
3. **VM / microVM workspaces** — Docker Sandboxes and disposable VMs. Inspect shared resources and identity.
4. **Policy-managed agent runtimes** — NVIDIA OpenShell as a concrete example. Inspect the compute driver and effective policy.

This is a teaching grouping, not an exhaustive or mutually exclusive security taxonomy. OpenShell can use a VM backend; a devcontainer can run inside a VM; a process sandbox can run inside either. Keep local versus cloud as a deployment consideration, and Kubernetes Agent Sandbox as an additional platform-team example in resources rather than another dense card.

Credential proxies remain a related authority-control layer, applicable across these choices. They do not replace execution isolation or prevent misuse of an allowed API operation. The transition to least privilege should retain that point.

The unifying engineering questions remain: what runs inside the boundary, what crosses it, which identities can be used, who may change the policy, and how can the effective controls be verified? None of these products was installed or exercised during this research.

## Release status and maturity follow-up

Do not label an entire isolation category “early stage.” OS process isolation and VM/container mechanisms are established building blocks; agent-facing configuration, integrations and policy products can be much younger. Release status is specific to the product, version, feature and platform. The following are maintainer statements checked on 2 November, not independent operational-maturity assessments:

| Option | Current evidence |
| --- | --- |
| Devcontainers / disposable VMs | Established environment and isolation approaches. A devcontainer is still not a complete security policy; its host boundary and supplied access require review. |
| Docker Sandboxes | Docker explicitly calls its recent listed versions stable releases; v0.50.0 is dated 26 October 2026. Some interfaces and backends remain experimental. The original experimental launch article is not evidence that every current local feature is still a preview. |
| Claude Code Bash sandbox | A documented integration with product-specific coverage. The separately published Anthropic Sandbox Runtime README explicitly retains “Beta Research Preview.” Distinguish that package status from a blanket statement about every Claude Code sandbox feature. |
| nono | The current README says APIs are stabilizing ahead of 1.0 and can still change. Describe as pre-1.0 rather than inventing a formal beta/GA label. |
| NVIDIA OpenShell | Current documentation identifies v0.1.6 and explicitly defines stable releases for production use within its support matrix. Experimental interfaces and platforms remain, including Windows WSL 2. It is a young agent-runtime stack, but “everything is a research preview” would contradict its current stated release policy. |

Primary status references:

- [Docker Sandboxes stable release notes](https://docs.docker.com/ai/sandboxes/release-notes/)
- [Docker experimental environment-file feature](https://docs.docker.com/ai/sandboxes/configuration/environment-files/)
- [Claude Code Bash sandbox documentation](https://code.claude.com/docs/en/sandboxing)
- [Anthropic Sandbox Runtime README](https://github.com/anthropics/sandbox-runtime)
- [nono README](https://github.com/nolabs-ai/nono)
- [OpenShell release and compatibility policy](https://docs.nvidia.com/openshell/latest/about/support-matrix)

Suggested slide treatment: keep the four scope choices, then state “Maturity varies by tool, feature and platform.” Put exact release-status details in the notes and source links. If adding visual maturity labels, use clearly identified editorial descriptions such as established building blocks versus rapidly evolving agent tooling; do not present those as vendor certification or a security ranking.
