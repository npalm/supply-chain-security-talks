# Practical controls examples

Presentation material supporting the cooldown, immutable selection, coding-boundary and OIDC examples, plus the retained static workflow example file. The main workflow example uses the GEECon-style animated hardening terminal. These files are not active repository policy, workflow deployment or executed demonstration scripts. Adapt and review before using them in a project.

- [Dependency intake](intake-policy.yaml): pnpm >= 10.26, explicit seven-day delay, unreviewed dependency build scripts rejected, no initial exceptions. The sample install command is `pnpm install --frozen-lockfile`. Project scripts and later execution still require isolation. Review lockfile/metadata behavior and the package manager version.
- [Renovate cooldown](renovate-cooldown.json) and [Dependabot cooldown](dependabot-cooldown.yml): seven-day update policies at the bot layer. Renovate needs usable release timestamps and respects its stability settings. Dependabot cooldown applies to version updates, not security updates. These policies do not constrain an unrelated manual install.
- [Mirror intake contract](mirror-intake.md): review, age and approval policies at an enforced intake route, including cached/pending data and bypass checks.
- [Actions allowlist and token scope](actions-and-token-scope.md): selected reviewed Actions, workflow-default `permissions: {}`, job-specific grants and separately narrowed App installation tokens.
- [PR build](pr-build.yml): npm-project example with a lockfile, a read-only job token and no persisted checkout credential. The complete official checkout v6.0.2 pin was confirmed using `git ls-remote` on 20 October 2026. The code itself still needs review. A hosted runner has outbound access and `ubuntu-latest` is a mutable platform choice; enforce the required execution boundary separately.
- [Coding boundary](coding-boundary.md): an explicit filesystem/network/identity contract and read-only inspection starting points.
- [OIDC trust](oidc-trust.example.json) and [role permissions](oidc-permissions.example.json): fictional AWS account, repository IDs and bucket. The first controls role assumption; the second controls allowed resource actions. They are deliberately separate.

The OIDC example uses the immutable subject shape for a repository with owner/repository IDs. Match the exact subject emitted for the real repository: older repositories can use the earlier name-only form unless migrated, while newer repositories/renames/transfers can use the ID-bearing form. Do not copy the fictional values. An environment subject requires separately configured environment protection, branch/tag restrictions and reviewers appropriate to the deployment. `environment: release` does not create those gates. The GitHub job needs deliberate `id-token: write` authorization; that grant does not define the resulting cloud role's resource permissions.

A short lifetime reduces some credential reuse, but malicious code in an authorized job can still spend the credential immediately. Keep untrusted execution and release authority separate, including cache/artifact trust and workflow-edit rights.

These examples were checked against primary documentation on 20 October 2026. They have not been deployed or runtime-tested; the deck build does not execute them.

## Primary references

- [pnpm dependency resolution](https://pnpm.io/settings/dependency-resolution)
- [pnpm build-script policy](https://pnpm.io/settings/build)
- [GitHub workflow secure use](https://docs.github.com/en/actions/reference/security/secure-use)
- [Checkout pinned source](https://github.com/actions/checkout/tree/de0fac2e4500dabe0009e67214ff5f5447ce83dd)
- [Ephemeral self-hosted runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners)
- [zizmor audit rules](https://docs.zizmor.sh/audits/)
- [OIDC claims and subject formats](https://docs.github.com/en/actions/reference/security/oidc)
- [OIDC with AWS](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws)
- [GitHub deployment review gates](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/review-deployments)

- [Renovate release age](https://docs.renovatebot.com/configuration-options/#minimumreleaseage)
- [Dependabot cooldown](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#cooldown)
- [JFrog Curation policy enforcement example](https://docs.jfrog.com/security/docs/create-policies-1)

## Release gates paired with OIDC · 21 October 2026

[GitHub release controls](github-release-controls.example.tf) pairs with the AWS trust example. It configures a pre-existing repository's `release` environment, approval by a listed team, no self-review, no environment admin bypass, an exact `main` branch deployment policy and separate protection of `main` including administrator enforcement. The team ID and status check name are illustrative. Only one listed required reviewer needs to approve. Required environment reviewers have visibility/plan limits: current Free/Pro/Team plans offer them only for public repositories; consult the GitHub plan documentation for private/internal repositories.

The custom environment branch selector uses `protected_branches = false` to select custom branch policies, plus `custom_branch_policies = true` and `branch_pattern = "main"`. This is independent of protecting `main` with `github_branch_protection`. No tag rule is included. Ensure there are no additional wider deployment policies or overlapping branch rules in the real repository. Configure CODEOWNERS and restrict workflow/protection-policy edit rights. An administrator able to change the configuration can still remove these controls.

The slide shows labelled literal attribute excerpts; the `.tf` file contains complete resource blocks. Provider authentication, provider version selection, ownership and existing state must be configured for the target organization. No Terraform apply or live settings mutation was performed.

- [Environment configuration and plan coverage](https://docs.github.com/en/actions/how-tos/deploy/configure-and-manage-deployments/manage-environments)
- [Provider: environment](https://raw.githubusercontent.com/integrations/terraform-provider-github/main/docs/resources/repository_environment.md)
- [Provider: branch deployment policy](https://raw.githubusercontent.com/integrations/terraform-provider-github/main/docs/resources/repository_environment_deployment_policy.md)
- [Provider: branch protection](https://raw.githubusercontent.com/integrations/terraform-provider-github/main/docs/resources/branch_protection.md)

## Two-step OIDC example

Slides 49–50 use matching layouts, with GitHub controls left and AWS role trust right. The before configuration deliberately leaves a gap despite protecting main: [GitHub before](github-release-controls-before.example.tf) has no required environment reviewers and no deployment branch restriction, while [AWS before](oidc-trust-before.example.json) accepts all context suffixes for the named repository through StringLike. The subject is scoped to the fictional repository, not repo:* across GitHub. Jobs still need a valid token and id-token: write. These are anti-examples for explanation; do not deploy them. The after files remain [GitHub release controls](github-release-controls.example.tf) and [exact AWS trust](oidc-trust.example.json).


## Dependency assessment and release inventory · 21 October 2026

- [Dependency Review configuration](dependency-review.example.yml): a `with:` excerpt for a separately pinned Dependency Review Action; known-vulnerability severity can fail while the Scorecard threshold warns. Require the check in branch rules. This is not an installed workflow.
- [SBOM command examples](release-inventory.md): Syft generation for a final package directory, OSV advisory matching and a release/deployment mapping checklist. Coverage depends on the actual artifact, catalogers and metadata. Preserve build-tool exposure evidence separately.

Main slides 36–38 cover assessment, mirror enforcement and SBOM. Slide 40 puts install-script approval under workflow hardening. The existing intake-policy.yaml remains illustrative, not this repository's configuration.
