# Speaker notes — You Trust More Code Than You Ship

Current sequence: 57 main slides (including the recording fallback) and eight appendix slides. The selected closing uses dedicated iceberg artwork with review gates integrated into the machinery, one deck QR and short profile links. The speaker introduction uses the realistic Klokgebouw background. Updated 2 November 2026. timing.json plans 40 minutes, including the live demo and animations, with the appendix reserved for questions; validate pacing in rehearsal. Evidence and technical detail remain in the native slide notes.

## Slide 1

Say:
What we ship is the visible tip. Underneath is the code and automation that builds and delivers it, often with access to much more than this application.

Next:
Introduce yourself briefly.

## Slide 2

Say:
Hi, I'm Niek Palm, Security Architect. Today we'll follow how code uses the access already present in engineering environments. Let's start with a small application.

Delivery:
Keep the introduction short. The portrait and name sit on the dark left side; the realistic Klokgebouw clock and Eindhoven skyline remain visible above and to the right.

Next:
Start with a small application.

## Slide 3

Say:
One prompt asks for an app, a repository, tests and automation. How many of you have built something this way? The visible result arrives before we have examined everything that ran.

Next:
Show the lunch poll.

## Slide 4

Say:
The lunch poll works: add an option and vote. This is the result we wanted. Now look underneath it.

Delivery:
Let the app loop run once, then pause.

Next:
Reveal the dependency inventory.

## Slide 5

Say:
Even this small app uses three direct runtime dependencies and eight indirect packages. The development tooling is separate. This is an inventory of other people's code, not a risk score.

Next:
Look at the environment preparing the application.

## Slide 6

Say:
The build relied on other people's tooling as well as their packages: tests and bundlers, CI and workflows, agent instructions, registries and services. Tokens and approvals connected that toolchain. These helped produce the app even though they are not all shipped in it.

Next:
Change one development dependency.

## Slide 7

Say:
Keep the app the same and change one development dependency. Watch what happens during installation, then look at the callback monitor.

Delivery:
Switch after this slide. Follow demo-runbook.md; do not execute the hook while preparing the deck.

Next:
Switch to the controlled live demonstration; slide 8 is the fallback.

## Slide 8

Say:
Watch the boundaries: local install, repository identity, a new workflow, then the callback. The application still works. These are demonstration values; we have not shown access to production systems.

Delivery:
Live is primary. Use this recording only on failure or after 90 seconds without the callback; identify it as recorded. Cap the live segment at four minutes. Use the poster if media also fails.

Next:
Return to the demo recap on slide 9.

## Slide 9

Say:
Nothing broke. Our dependency's postinstall hook ran locally, used the repository identity already available, committed and pushed a workflow, and that workflow exfiltrated secrets to our controlled demo endpoint. The application still worked. The hook started execution; existing identity gave it reach.

Delivery:
First trace the four steps without discussing versions. Advance once to reveal the install-hook protection and bundled-default reminder together. pnpm 10+ and npm 12 block unapproved dependency install hooks; Node 26 LTS still bundles npm 11. Check the package manager as well as Node. Keep exact patch versions in the reference detail.

Next:
Introduce untrusted input, trusted automation and existing identity.

## Slide 10

Say:
Untrusted input reaches trusted automation and gets to use an identity already there. The input might be a package, a comment or an instruction file; the identity might be a token, session or role.

Next:
Use Shai-Hulud 2.0 to walk the full chain.

## Slide 11

Say:
Go back to November 2025. Shai-Hulud 2.0 makes the machinery visible: install-time execution, credential access, propagation and additional paths for future execution.

Next:
Start at the package install.

## Slide 12

Say:
The preinstall hook starts the loader and payload with the installing process's access. A development dependency can run before the application starts and still reach valuable identity.

Next:
Follow the credential search.

## Slide 13

Say:
The payload looks through the environment and filesystem for usable credentials. It can even use security tools to help discovery. What it finds depends on the host and permissions.

Next:
A publishing token turns one compromise into distribution.

## Slide 14

Say:
Install, find a usable npm token, modify packages that identity can publish, then reach the next install. Not every machine completes this loop, but publishing authority creates the propagation opportunity.

Delivery:
Trace one complete propagation loop before moving on.

Next:
Follow the GitHub branch of the chain.

## Slide 15

Say:
The payload can send stolen material to public GitHub repositories. An allowed platform can also be an exfiltration destination; destination approval alone does not explain the operation.

Next:
Look at the path left behind for later execution.

## Slide 16

Say:
The payload can register a runner and install a workflow that turns discussion text into shell execution. This is reported capability, not proof that every infected host was later operated through it.

Next:
Explain the conditional destructive fallback.

## Slide 17

Say:
The reported destructive fallback has specific conditions: no available GitHub token and no valid npm token. Do not turn that into a claim that every blocked upload wipes the host.

Next:
Recap the full path once.

## Slide 18

Say:
Trace input to execution, then identity. The npm token creates the distribution loop; GitHub access supports exfiltration and persistence. Different identities produce different reach.

Delivery:
Follow the npm loop and the separate GitHub branches; do not read every label.

Next:
Move to a security tool's delivery path.

## Slide 19

Say:
In March 2026, Trivy itself became a delivery vehicle. A security tool runs with useful access, and the legitimate scan can still finish after the malicious code has run.

Next:
Follow the compromised scanner into LiteLLM’s release path.

## Slide 20

Say:
LiteLLM said it believed upstream Trivy initiated the compromise. Its account describes shared CI and exposed publishing credentials. The malicious PyPI versions were 1.82.7 and 1.82.8; do not invent a more precise upload sequence than the evidence supports. CloudSEK’s August reconstruction identified 2,500+ organizations potentially exposed. Each match still needs validation.

Next:
Explain how existing users received changed Trivy code through trusted tags.

## Slide 21

Say:
An unprotected tag can point to different code tomorrow. GitHub's immutable releases lock their associated tags, but Actions has no built-in policy to allow only immutable-release tags. Review and pin the full commit, then review updates deliberately. The Action may download helpers at runtime, so its pin is only one input boundary.

Delivery:
Distinguish publisher-side immutability from consumer-side enforcement. Require full-length Action SHAs; pin reusable workflows separately.

Next:
Follow another route into publishing authority: the maintainer’s workstation.

## Slide 22

Say:
The Axios maintainer describes a fake meeting and supposed Teams update that compromised his workstation. The attacker published through his account on 31 March. Mastra is a separate account-takeover example. Microsoft attributes Mastra with high confidence; Amazon's Axios attribution is medium confidence. Keep those assessments separate.

Next:
Follow another workstation identity into an editor release.

## Slide 23

Say:
Nx traces a malicious TanStack install to theft of a contributor's GitHub CLI identity, then the 18 May Nx Console release to both extension marketplaces. The owner scopes this incident to the extension. This is separate from the 2025 Nx npm incident we will see next.

Next:
Introduce the AI section without changing the trust model.

## Slide 24

Say:
AI plays two roles here. It can help attackers build and adapt an attack. And inside our environment, it can turn incoming instructions into actions using our access.

Delivery:
Point to the first slogan for attacker assistance and the second for AI acting inside our environment. Keep the explanation spoken; the slide carries only the chapter title and the two slogans.

Next:
Start with S1ngularity, an August 2025 precedent for attempted use of local AI tools. Introduce the backward step in time explicitly.

## Slide 25

Say:
Nx reported malicious postinstall code attempting to use local Claude and Gemini tools, then upload through existing GitHub CLI access. These terminals reconstruct the behavior; not every prompt necessarily succeeded.

Delivery:
Animated reconstruction starts on entry; click to replay.

Next:
Move from local tool use to delivery-workflow exploitation.

## Slide 26

Say:
This is the attacker side of the AI distinction. StepSecurity and Wiz assess AI assistance in campaigns that scanned repositories and adapted payloads around known workflow flaws. The evidence shows systematic exploitation, without measuring an AI-versus-human speedup or establishing a shared operator.

Next:
Return inside our environment: an instruction can request an authorized tool action.

## Slide 27

Say:
The WED research skill sent a ping while returning useful advice. The secret-transfer example is a hypothetical modification, not observed key theft. Review what the instructions cause a tool to do, even when the answer looks useful.

Delivery:
Both reconstructed terminals animate. Clearly distinguish the observed ping from the hypothetical secret transfer.

Next:
Broaden the view across delivery surfaces.

## Slide 28

Say:
Do not read every name. Packages, automation, editors and agent context give attackers different routes to execution and available identity. Names can cover multiple recorded waves, and some records cross surfaces.

Delivery:
Sweep across delivery areas; do not narrate the full name list.

Next:
Explain what the inventory does and does not count.

## Slide 29

Say:
The selected reviews contain 23 incidents and waves for 2025 and 95 for 2026, across 20 and 61 conservative campaign groups. Coverage differs; this is not a growth rate or an operator count. Across the examples, the trust relationship repeats.

Next:
Separate individual AI observations from annual inventory totals.

## Slide 30

Say:
These are two separate observations, not typical attack durations or stages of one operation. They illustrate adaptation after access; they do not explain the difference between annual inventory counts.

Delivery:
Keep the two reports separate, including their activity and disclosure dates.

Next:
Turn the relationship into engineering decisions.

## Slide 31

Say:
Every step creates a boundary we can design: review incoming inputs, constrain execution, scope identity and prepare to recover. We will connect each control to a path already shown.

Next:
Start before the first execution.

## Slide 32

Say:
Review inputs and allowlist Actions before they run. A publisher badge is not a review. Delay fresh releases, keep reviewed selections fixed and enforce intake where practical.

Next:
First consider when to accept a new release.

## Slide 33

Say:
Wait, observe, then review. Seven days is an example team policy. The same intention can sit at different enforcement points: pnpm dependency resolution, Renovate proposals or Dependabot version-update PRs. Choose what fits the ecosystem and keep a reviewed path for urgent fixes.

Delivery:
Use the waiting rack and timer to explain deliberate delay before intake. The compact settings are alternatives the audience can recognize; explain their different enforcement points without reading every field. The timer is a metaphor for release age, not a claim that elapsed time proves a package safe.

Next:
Decide which exact reviewed input may run.

## Slide 34

Say:
Review first, then fix which input runs. Packages use committed lockfiles and integrity data, Actions use reviewed full commit SHAs, and images use reviewed digests. Keep those selections maintained through reviewed updates.

Delivery:
The fixed jig represents an exact selection that cannot drift when a name or tag moves. It does not establish the selected input's safety. Use the three examples as corresponding mechanisms; the full reviewed Action pin remains in the existing examples and original comparison slide.

Next:
Assess the change before merging it.

## Slide 35

Say:
Use three signals to assess the change: upstream practices, published advisories and the dependency diff. Inspect the findings and require the PR check under an explicit policy. A strong score or clean advisory result cannot certify a release.

Delivery:
The two ingredient samples and inspection bench stand for reviewing what changed before accepting it. Keep the tool names secondary to their distinct signals. The supported Dependency Review settings remain in examples/dependency-review.example.yml.

Next:
Put the intake decision on the download path too.

## Slide 36

Say:
Put a policy decision on the download route. A configured mirror can allow, hold or reject requests before developers and CI receive the artifacts. Enforce that route and handle cached components, pending analysis and exceptions deliberately.

Delivery:
Use the single receiving hatch as the route through the policy boundary. A side bay holds pending intake. This is an architectural metaphor; a caching proxy only enforces admission when blocking policies and bypass restrictions are configured.

Next:
Retain enough inventory to find affected releases later.

## Slide 37

Say:
Generate a Software Bill of Materials for the final release artifact and check its coverage. Connect it to the artifact digest and deployed environments. Recheck known advisories as they change, while keeping build-tool exposure records separately.

Delivery:
The batch ledger and prepared packages illustrate traceability from ingredients to delivered releases. A retained inventory helps locate affected artifacts; it does not prove execution, secret theft or complete component coverage. The exact Syft and OSV commands remain in examples/release-inventory.md.

Next:
Assume a bad component can still run.

## Slide 38

Say:
Make three decisions. Start each job in a fresh environment and dispose of it afterward. Bound the files, network and identity that running code can reach. Keep publishing authority outside untrusted build jobs, and verify the source and artifacts entering release.

Delivery:
Give all three controls equal emphasis. The removable prep surface illustrates fresh execution, the separated working area illustrates bounded access, and the serving pass illustrates release authority. Connect each to the earlier install hook, workflow abuse and publishing compromise.

Next:
Make install-time execution explicit.

## Slide 39

Say:
Choose which dependency install scripts may run. This pnpm example rejects unreviewed builds and starts with no exceptions. Review required exceptions and narrow them to reviewed versions. Approval permits execution; keep its filesystem, network and identity boundary too.

Delivery:
Read the two settings together, then walk the three short decisions. Configuration is illustrative, not active repository policy. Explain that package selection and execution approval are separate; pnpm install --frozen-lockfile constrains resolution but does not replace this policy.

Next:
Apply the same deliberate decisions to the workflow.

## Slide 40

Say:
Inspect two findings: a mutable Action reference and broad token grants. Apply available safe fixes, inspect the diff and run the audit again. Pin a reviewed commit, grant job-specific token rights and keep attacker-controlled event text out of executable shell interpolation.

Delivery:
The enlarged terminal occupies the left side, with more line spacing. Three short guidance boxes are stacked on the right. The typed sequence and click-to-replay behavior are preserved. This is a scripted reconstruction, not a live scan or an all-clear result. Click to replay. The final comment deliberately leaves review work visible.

Next:
Apply those boundaries during coding too.

## Slide 41

Say:
Give the coding task the project, services and identity it needs. Inspect the IDE, extensions, hooks and agent tools together; they can have different execution locations and inherited access.

Delivery:
Use the bounded preparation station to introduce filesystem, network and identity decisions. The three short cards name those decisions without prescribing a particular product.

Next:
Inspect the authority already reachable there.

## Slide 42

Say:
Inspect five kinds of reach: files, data, identity, network and tools. An agent may choose another action after reading a result, but its actual reach depends on the effective configuration.

Delivery:
Keep the existing robot and hidden-machinery artwork visible. Point across the five categories; avoid implying that every agent inherits every form of access.

Next:
Choose an implementation for the same coding task.

## Slide 43

Say:
Use the same lunch-poll task across four choices: a project environment, tool or process restrictions, a VM-backed workspace, or a policy-managed agent runtime. These can combine. OpenShell manages agent access policy across multiple compute drivers; inspect both the selected driver and the effective policy. Then scope the identity available inside the chosen boundary.

Delivery:
Compare coverage and configuration, not a security ranking. The small maturity note avoids presenting these implementations as equally mature recommendations; release status is specific to the tool, feature and platform. Docker Sandboxes and disposable VMs share one card so OpenShell can be explicit. Project environments are packaging and deployment choices; their actual outer isolation varies. Tool/process coverage is product-specific. Credential proxies remain in the notes and resources as a separate authority-control layer.

Next:
Scope that remaining authority deliberately.

## Slide 44

Say:
Ask which process can spend which identity, for which resource, action and time window. Inventory every credential path; one permission block does not cover tokens, sessions, registry access and cloud roles.

Next:
Work through build and release permissions.

## Slide 45

Say:
Start with workflow-level permissions: {} and give each job only its required GITHUB_TOKEN rights. Here the release writes a GitHub Release. Separately narrow an App token's repositories and permissions. Keep its private key away from untrusted execution.

Next:
Introduce the workload identity exchange.

## Slide 46

Say:
OIDC lets a job present GitHub-signed identity claims to a provider instead of storing a long-lived publishing secret. The provider checks trust and grants temporary access. Requesting a token is separate from permission to use a target resource.

Next:
What if an accepted job runs a stranger's code?

## Slide 47

Say:
An unauthorised comment triggered openapi's release job, which checked out fork code and published using the repository's OIDC identity. All ten malicious versions had valid provenance. The job identity was genuine; its input selection was unsafe.

Next:
Separate provider trust from GitHub release enforcement.

## Slide 48

Say:
main is protected and an environment is named, but release has no approval or branch restriction. AWS accepts every subject suffix for this repository. A valid token from another permitted branch can still match. Protecting main alone does not close this path.

Delivery:
Hold the before state, then advance to the matching layout without changing the viewpoint.

Next:
Advance once and point to the changed lines.

## Slide 49

Say:
Now require the exact repository and environment subject. GitHub separately restricts release to main, requires approval and disables runtime admin bypass; protect main too. Then restrict the cloud role's actions and resources: only s3:PutObject under the example-lunch-poll/releases/ prefix. Review the actual source and artifact entering the job. LiteLLM's October update reports stolen owner credentials were used to disable branch protection. Protect the identities that can change these rules too.

Delivery:
Point to exact subject matching, branch selection, approval and bypass changes, then the compact role-permissions box. Trust controls who can assume the role; permissions control what that role can do.

Next:
Apply input review to instructions and their helpers.

## Slide 50

Say:
TrapDoor placed malicious project instructions; OX reported an MCP listing linked to a poisoned repository. Keep observed artifacts separate from proof an agent obeyed them. Follow instructions into commands, downloaded helpers, destinations and access.

Next:
Prepare for a boundary being crossed anyway.

## Slide 51

Say:
Removing the package does not revoke copied sessions or remove installed persistence. Keep useful evidence outside the suspect host, identify recovery owners and restore from a clean environment.

Next:
Rehearse one compromised publisher.

## Slide 52

Say:
Take one laptop that installed malware while holding publishing access. Who contains execution, revokes each identity and validates downstream artifacts? These are coordinated workstreams, not a universal fixed response order.

Next:
Offer a small starting action within one person's scope.

## Slide 53

Say:
Choose one project you maintain. Propose a supported cooldown, review the diff and open a small PR. Seven days is an example; preserve a route for urgent fixes. Pick one action rather than attempting the whole programme on Monday.

Delivery:
This begins a choice of small individual actions; the audience need not complete every example.

Next:
Another option is one workflow finding.

## Slide 54

Say:
Run zizmor on one existing workflow and understand one finding. Pin a reviewed Action commit or reduce token access. Use permissions: {} as the workflow default and grant each job only what it needs. Review behavior and open one focused PR.

Delivery:
The scan and edits are illustrative. No all-clear output is implied.

Next:
Inspect the coding setup before starting the next task.

## Slide 55

Say:
List tracked setup and instruction files, then use cat to read devcontainer.json. Follow startup commands and downloads. Check the actual mounts, tools and forwarded credentials, including local settings the tracked files do not show.

Delivery:
Read-only inspection first. cat displays the settings file; it does not establish that the whole setup is safe.

Next:
Use the original devcontainer-to-agent closing example.

## Slide 56

Say:
Start the reviewed devcontainer and launch Copilot inside it. Ask: What principles keep this repo safe from supply chain attacks? Let the answer recap the controls, ending with revoking exposed access and restoring trusted execution. This is an illustrative session; the boundary comes from reviewed configuration, not the startup command alone.

Delivery:
Keep the original GEECon shell → Copilot transition, typed question and answer reveal. The smaller banner omits the version and two requested tips. Click to replay.
After devcontainer exec, hold the terminal for 3.5 seconds before Copilot appears. Use that pause to explain shared access and configuration.

Next:
Close on making trust an engineering decision.

## Slide 57

Say:
You trust more code than you ship. The hidden machinery is still there. Review what enters it, constrain what can execute, and scope the identity it can use. Make that trust an engineering decision. Scan for the deck and resources. Thank you.

Delivery:
Selected closing: alternative A, detailed hidden machinery with review gates integrated into the workshops and delivery paths. Keep the same strong message. One large QR emphasizes the deck; LinkedIn appears as linkedin.com/in/niekpalm and both profiles remain clickable.
End prepared content here and leave this slide visible for questions. The 40-minute timing plan in timing.json includes the live demo and animations; validate pacing in rehearsal.

Next:
Take questions; use the catalogue only when useful.

## Slide 58

Say:
The appendix contains the incident catalogue. Names link to sources and the dates preserve activity, verified availability and disclosure distinctions. Use it for a specific question rather than reading every entry.

Delivery:
Appendix only; the seven entry pages use the dimmed divider artwork.

Next:
Open the relevant year or delivery example.

## Slide 59

Say:
This first 2026 page covers early-year entries. Pick the relevant incident and open its source. The page is part of the selected 95-record inventory, not an additional count.

Next:
Continue chronologically if the question needs it.

## Slide 60

Say:
Continue the 2026 catalogue with the next dated entries. Distinguish individual compromise episodes from recurring family names and preserve the qualifiers on dates.

Next:
Move to the next page of the same inventory.

## Slide 61

Say:
These are further entries in the same selected 2026 inventory. Use the linked source and detailed record when a date or affected scope is in question.

Next:
Continue to the remaining 2026 entries.

## Slide 62

Say:
This is the final selected 2026 catalogue page. The 21 October baseline was reconciled on 22 October. A targeted refresh checked on 31 October adds the vendor-confirmed 29 October Cursor/Claude Code extension compromise after LiteLLM. This is not a complete daily sweep; absence from this selection does not establish that another incident never happened.

Next:
Use the earlier-year pages for historical examples.

## Slide 63

Say:
The 2025 review has 23 records across 20 conservative groups. Some malicious artifacts were published earlier but were verified available during 2025. Do not add annual groups as unique operators.

Next:
Move to the bounded 2024 sample if useful.

## Slide 64

Say:
The 2024 historical sample contains 18 records across 17 bundles. It is a bounded sample with different coverage, not a complete annual census or a directly comparable growth series.

Next:
Use 2023 for another historical example.

## Slide 65

Say:
The 2023 historical sample contains 14 records across 14 bundles and includes vendor-delivery cases. Follow the source for the chosen example; do not compare totals as equal-coverage measurements.

Next:
Return to the question or closing slide.
