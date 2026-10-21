# An inspectable coding boundary

Example team policy for the lunch-poll coding task. This is an implementation contract, not configuration for a particular runtime or a claim that a devcontainer supplies these controls automatically.

| Boundary | Required state | Review evidence |
| --- | --- | --- |
| Workspace | Explicit project tree, with deliberately chosen read/write rights | Inspect actual mounts and project secrets/startup hooks; a repository mount can already contain sensitive data |
| Host access | No host home, SSH agent, Docker socket or unrelated credential directories forwarded into the workspace | Inspect runtime mounts, sockets, environment and editor/CLI credential forwarding |
| Network | Only required model endpoints, package mirrors and tools through an enforced outbound policy | Inspect runtime/network configuration; check that direct connections cannot bypass the policy |
| Identity | Narrow task credential; no general personal cloud or publishing session | Identify issuer, subject, resource, allowed actions, expiry and revocation owner |
| Runtime | Deliberate user/capabilities and an evaluated isolation boundary | Review VM/container configuration and privilege; rootless alone is not a complete sandbox |
| Lifecycle | Recreate from reviewed inputs and retain useful logs outside the environment | Record image/source selection, provisioning ownership and cleanup |

For Docker-backed workspaces, read-only inspection can begin with the actual running container:

```sh
docker inspect --format '{{json .Mounts}}' "$WORKSPACE_CONTAINER"
docker inspect --format '{{json .HostConfig}}' "$WORKSPACE_CONTAINER"
```

Review output locally: configuration can contain sensitive values. Inspect the actual outbound enforcement and all forwarded identities separately; `docker inspect` alone is not a security verification. Agent policy text and approval dialogs complement technical boundaries.

A remote model needs a network route. A fully offline environment suits some build/tool steps, while a coding agent may need an approved model endpoint. Design those phases and destinations deliberately. Reassess whether an allowed service also supplies an exfiltration route.

Sources:

- [Docker runtime options](https://docs.docker.com/engine/containers/run/)
- [Docker security model](https://docs.docker.com/engine/security/)
- [Rootless mode](https://docs.docker.com/engine/security/rootless/)
- [MCP security practices](https://modelcontextprotocol.io/docs/tutorials/security/security_best_practices)
