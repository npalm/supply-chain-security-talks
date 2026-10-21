# Release inventory example

Presentation examples, not executed commands or deployed policy.

For a project whose final package is extracted under `./dist`:

```sh
syft ./dist -o cyclonedx-json=sbom.cdx.json
osv-scanner scan source -L sbom.cdx.json
```

Use the actual final container/image or package target; reconcile with build metadata and record cataloger/format coverage and gaps. A manifest-only inventory can differ from shipped contents. OSV matches published advisories, not all unknown malware.

For every release, retain the original SBOM, final artifact digest, source commit, generation tool/version and scope. Bind evidence to that artifact using a verified attestation where required. Map deployment environments to the released digest. Re-scan retained inventories when advisories change.

Keep build-tool dependency and execution evidence separately. A production SBOM cannot establish whether malware executed on a developer machine or runner, what identities were accessible, or whether secrets were exfiltrated.

Sources fetched 21 October 2026:

- https://github.com/anchore/syft
- https://google.github.io/osv-scanner/usage/scan-source
- https://cheatsheetseries.owasp.org/cheatsheets/Dependency_Graph_SBOM_Cheat_Sheet.html
