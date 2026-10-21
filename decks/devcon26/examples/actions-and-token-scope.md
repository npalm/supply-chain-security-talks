# Actions allowlist and token scope

Teaching excerpts for slides 32, 34 and 45. These are not active repository policy or complete workflows.

## Review which Actions may run

In organization **Settings → Actions → General**, choose **Allow OWNER, and select non-OWNER, actions and reusable workflows**. Add specific reviewed external references under the specified Actions/reusable-workflows option, for example:

```text
actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd
```

This is the deck's previously verified checkout v6.0.2 reference, not approval of all `actions/*`. Avoid broad publisher patterns or enabling all verified Marketplace creators as a substitute for review. Require full-length Action commit SHAs where supported; deliberately pin reusable workflows too. Local and organization code still require review, as do shell commands and downloaded helpers. Maintain approved references with reviewed update PRs.

## Grant GITHUB_TOKEN access at job level

```yaml
# Workflow-level default
permissions: {}

jobs:
  build:
    permissions:
      contents: read
    # runs-on and build steps omitted

  release:
    needs: build
    environment: release
    permissions:
      contents: write
    # runs-on, artifact verification and GitHub Release steps omitted
```

This release example publishes a GitHub Release. `contents: write` permits other repository writes too; it is not a release-only permission. An npm/cloud publisher needs its own target authorization. Configure actual environment approval and branch/bypass controls separately. `permissions: {}` removes default grants; it does not prohibit explicit broader grants in another job. Scope private-dependency credentials separately and do not persist build credentials into a release path.

## Narrow a separately minted App installation token

The following is a `with:` excerpt for a separately reviewed, full-SHA-pinned `actions/create-github-app-token` step. Do not interpret it as a complete step or put the App key in an untrusted build.

```yaml
with:
  client-id: ${{ vars.APP_CLIENT_ID }}
  private-key: ${{ secrets.APP_PRIVATE_KEY }}
  owner: ${{ github.repository_owner }}
  repositories: ${{ github.event.repository.name }}
  permission-contents: read
```

It requests one repository and read-only contents permission. The requested access cannot exceed the App installation. Use that output token only where needed. Its permissions are independent of `GITHUB_TOKEN` and `permissions:`.

For this Action, owner without repositories can select all repositories in that owner's installation; omitting both defaults to the current repository. Missing permission inputs inherit installation permissions. Direct REST creation defaults to all installation repositories if neither `repositories` nor `repository_ids` is supplied. Explicit scope makes the intention reviewable across these differences. The App key remains able to request other tokens within the App's access: narrow the App/installation itself and protect the key as well.

## Primary sources fetched 21 October 2026

- [Actions policy and allowlist syntax](https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)
- [Workflow and job permissions](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)
- [App-token Action inputs and defaults](https://github.com/actions/create-github-app-token)
- [Installation access-token REST scope](https://docs.github.com/en/rest/apps/apps#create-an-installation-access-token-for-an-app)
