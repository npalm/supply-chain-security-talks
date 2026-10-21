# An enforced intake route

A mirror can centralize intake decisions when requests actually pass through it and blocking policies are configured. A caching proxy alone does not establish artifact approval.

For one dependency update, inspect:

- Which upstream origin, version and content hash were selected?
- Which artifact, lifecycle scripts and helper downloads will execute?
- Does the intake policy require release age, review/approval or other checks before serving it?
- What happens when metadata is absent, analysis is pending, or the artifact is already cached?
- Can developer tools, CI or helpers bypass this route with a direct registry/URL request?
- Who owns exceptions, their expiry and request/approval logs?

Preserve publication timestamps where client cooldowns need them. Pair repository policy with outbound enforcement for the execution environment. Do not assume a mirror blocks every later tool download, a supported policy covers every ecosystem, or approval proves code harmless.

One documented implementation is [JFrog Curation policies](https://docs.jfrog.com/security/docs/create-policies-1), which distinguish blocking from dry-run behavior, policy scope, waivers and pending-data handling. This is an example of the enforcement mechanism, not a product comparison or a deployed configuration.
