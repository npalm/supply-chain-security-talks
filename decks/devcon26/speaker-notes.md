# Speaker notes — You Trust More Code Than You Ship

Current sequence: 58 main slides and eight appendix slides. The selected closing returns to the opening iceberg with explicit trust checkpoints, one deck QR and short profile links. The speaker introduction uses the realistic Klokgebouw background. Updated 31 October 2026. Rehearse timing; timing.json is the earlier baseline. Evidence and technical detail remain in the native slide notes.

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
Nothing broke. Our dependency's postinstall hook ran locally, used the repository identity already available, committed and pushed a workflow, and that workflow sent the Actions secrets context to our controlled callback. The application still worked.

Dependency preinstall and postinstall hooks have been blocked by default in pnpm since version 10, and npm 12 now blocks them too unless explicitly allowed. Our demo used postinstall; preinstall is another hook covered by the same protection.

But Node 26 became LTS on 28 October, and its first LTS release, 26.13.0, still ships npm 11.20.0. A stock install therefore still runs these dependency hooks by default. Upgrading Node to the new LTS does not automatically give you npm 12's protection. The hook is the entry point; local identity is what let it reach trusted automation.

Delivery:
Recap the left-hand demo chain first. Click or advance once to reveal the right-hand install-hook protections. The Node 26/npm 11 default reminder stays visible.

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
Explain how existing users received changed code.

## Slide 20

Say:
An unprotected tag can point to different code tomorrow. GitHub's immutable releases lock their associated tags, but Actions has no built-in policy to allow only immutable-release tags. Review and pin the full commit, then review updates deliberately. The Action may download helpers at runtime, so its pin is only one input boundary.

Delivery:
Distinguish publisher-side immutability from consumer-side enforcement. Require full-length Action SHAs; pin reusable workflows separately.

Next:
Follow release access into LiteLLM.

## Slide 21

Say:
LiteLLM said it believed upstream Trivy initiated the compromise. Its account describes shared CI and exposed publishing credentials. The malicious PyPI versions were 1.82.7 and 1.82.8; do not invent a more precise upload sequence than the evidence supports.

Next:
Separate later exposure reconstruction from confirmed breaches.

## Slide 22

Say:
Later researchers reconstructed a wider set of exposed credentials and organizations. Those matches need validation. They are not 2,500 confirmed LiteLLM breaches, and overlapping datasets cannot be added together.

Next:
Show the social-engineering route into a publisher account.

## Slide 23

Say:
The Axios maintainer describes a fake meeting and supposed Teams update that compromised his workstation. The attacker published through his account on 31 March. Mastra is a separate account-takeover example. Microsoft attributes Mastra with high confidence; Amazon's Axios attribution is medium confidence. Keep those assessments separate.

Next:
Follow another workstation identity into an editor release.

## Slide 24

Say:
Nx traces a malicious TanStack install to theft of a contributor's GitHub CLI identity, then the 18 May Nx Console release to both extension marketplaces. The owner scopes this incident to the extension. This is separate from the 2025 Nx npm incident we will see next.

Next:
Introduce the AI section without changing the trust model.

## Slide 25

Say:
AI adds instruction-bearing inputs and can help choose and adapt actions. It does not replace the input, execution and identity relationship. Start with an August 2025 precedent.

Next:
Play the S1ngularity reconstruction.

## Slide 26

Say:
Nx reported malicious postinstall code attempting to use local Claude and Gemini tools, then upload through existing GitHub CLI access. These terminals reconstruct the behavior; not every prompt necessarily succeeded.

Delivery:
Animated reconstruction starts on entry; click to replay.

Next:
Move from local tool use to delivery-workflow exploitation.

## Slide 27

Say:
hackerbot-claw and prt-scan show adaptation around existing workflow flaws. AI assistance is an investigator assessment, not proof of unrestricted autonomy. The examples do not establish a shared operator.

Next:
Show how an instruction can request an authorized tool action.

## Slide 28

Say:
The WED research skill sent a ping while returning useful advice. The secret-transfer example is a hypothetical modification, not observed key theft. Review what the instructions cause a tool to do, even when the answer looks useful.

Delivery:
Both reconstructed terminals animate. Clearly distinguish the observed ping from the hypothetical secret transfer.

Next:
Broaden the view across delivery surfaces.

## Slide 29

Say:
Do not read every name. Packages, automation, editors and agent context give attackers different routes to execution and available identity. Names can cover multiple recorded waves, and some records cross surfaces.

Delivery:
Sweep across delivery areas; do not narrate the full name list.

Next:
Explain what the inventory does and does not count.

## Slide 30

Say:
The selected reviews contain 23 incidents and waves for 2025 and 95 for 2026, across 20 and 61 conservative campaign groups. Coverage differs; this is not a growth rate or an operator count. Across the examples, the trust relationship repeats.

Next:
Separate individual AI observations from annual inventory totals.

## Slide 31

Say:
These are two separate observations, not typical attack durations or stages of one operation. They illustrate adaptation after access; they do not explain the difference between annual inventory counts.

Delivery:
Keep the two reports separate, including their activity and disclosure dates.

Next:
Turn the relationship into engineering decisions.

## Slide 32

Say:
Every step creates a boundary we can design: review incoming inputs, constrain execution, scope identity and prepare to recover. We will connect each control to a path already shown.

Next:
Start before the first execution.

## Slide 33

Say:
Review inputs and allowlist Actions before they run. A publisher badge is not a review. Delay fresh releases, keep reviewed selections fixed and enforce intake where practical.

Next:
First consider when to accept a new release.

## Slide 34

Say:
Seven days is an example policy. pnpm applies a resolver setting; Renovate and Dependabot govern update proposals differently. Keep a reviewed exception path for urgent fixes. Waiting does not certify safety.

Next:
Then decide exactly which reviewed input may run.

## Slide 35

Say:
Commit the lockfile, allowlist reviewed Actions and pin their commits, and select images by digest. Enforce selected external Actions and reusable workflows in GitHub policy. Local code and downloaded helpers still need review.

Next:
Assess the change before merging it.

## Slide 36

Say:
Use three signals: upstream practices from Scorecard, known advisories through OSV, and the dependency diff through Dependency Review. Make the required check deliberate. A score or clean advisory result does not certify a release.

Next:
Put the intake decision on the download path too.

## Slide 37

Say:
A mirror can enforce policy before serving artifacts if blocking rules are configured and the route cannot be bypassed. Check pending analysis, missing metadata, cached artifacts and exceptions. A plain cache is not an admission decision.

Next:
Retain enough inventory to find affected releases later.

## Slide 38

Say:
Generate an SBOM for the release artifact, inspect coverage and retain its digest and deployment relationship. Recheck known advisories as information changes. Also track build-tool exposure: credential-stealing code may never ship.

Next:
Assume a bad component can still run.

## Slide 39

Say:
Use fresh execution, dispose of it afterward and configure filesystem, network and identity boundaries. Freshness limits surviving state; it does not stop code from spending credentials during the current run.

Next:
Make install-time execution explicit.

## Slide 40

Say:
Approve dependency build scripts deliberately and narrowly. This pnpm example starts with no exceptions. It does not sandbox approved scripts or prevent later imports and project commands from running code.

Next:
Apply the same deliberate decisions to the workflow.

## Slide 41

Say:
Review the mutable Action reference and excessive token grants. Inspect available scanner fixes and the diff, then audit again. Trigger handling, release isolation and runner boundaries remain design work.

The September GitHub issue/comment campaign is a concrete input-handling example: attacker-controlled event text became shell code. Do not interpolate it into run scripts; pass it as data and keep untrusted-event jobs away from release credentials.

Delivery:
Scripted terminal, not a live scan. Point to one finding and its boundary at a time.
Use the campaign as workflow-abuse context, not another counted package compromise. Compromised accounts were suspected; reuse of earlier stolen tokens is unconfirmed.

Next:
Apply those boundaries during coding too.

## Slide 42

Say:
The coding environment includes the IDE, extensions, startup tasks, install hooks and agents. Expose the project and services the task needs, and keep unrelated identity outside.

Next:
Inspect the authority already reachable there.

## Slide 43

Say:
Look at files, data, identity, network and tools together. An agent can choose another action after reading a result, but available reach still depends on its actual configuration.

Next:
Choose an implementation for the same coding task.

## Slide 44

Say:
Use the lunch-poll task across these options. Inspect a devcontainer's mounts and forwarded credentials; distinguish a local microVM from a tool-specific Bash sandbox. Docker Sandboxes and nono also support credential proxying, alongside Infisical Agent Vault. Hiding the key does not prevent misuse of allowed API operations.

Next:
Scope that remaining authority deliberately.

## Slide 45

Say:
Ask which process can spend which identity, for which resource, action and time window. Inventory every credential path; one permission block does not cover tokens, sessions, registry access and cloud roles.

Next:
Work through build and release permissions.

## Slide 46

Say:
Start with workflow-level permissions: {} and give each job only its required GITHUB_TOKEN rights. Here the release writes a GitHub Release. Separately narrow an App token's repositories and permissions. Keep its private key away from untrusted execution.

Next:
Introduce the workload identity exchange.

## Slide 47

Say:
OIDC lets a job present GitHub-signed identity claims to a provider instead of storing a long-lived publishing secret. The provider checks trust and grants temporary access. Requesting a token is separate from permission to use a target resource.

Next:
What if an accepted job runs a stranger's code?

## Slide 48

Say:
An unauthorised comment triggered openapi's release job, which checked out fork code and published using the repository's OIDC identity. All ten malicious versions had valid provenance. The job identity was genuine; its input selection was unsafe.

Next:
Separate provider trust from GitHub release enforcement.

## Slide 49

Say:
main is protected and an environment is named, but release has no approval or branch restriction. AWS accepts every subject suffix for this repository. A valid token from another permitted branch can still match. Protecting main alone does not close this path.

Delivery:
Hold the before state, then advance to the matching layout without changing the viewpoint.

Next:
Advance once and point to the changed lines.

## Slide 50

Say:
Now require the exact repository and environment subject. GitHub separately restricts release to main, requires approval and disables runtime admin bypass; protect main too. Then restrict the cloud role's actions and resources. Review the actual source and artifact entering the job. LiteLLM's October update reports stolen owner credentials were used to disable branch protection. Protect the identities that can change these rules too.

Delivery:
Point to exact subject matching, branch selection, approval and bypass changes. Environment subject and role permissions answer different questions.

Next:
Apply input review to instructions and their helpers.

## Slide 51

Say:
TrapDoor placed malicious project instructions; OX reported an MCP listing linked to a poisoned repository. Keep observed artifacts separate from proof an agent obeyed them. Follow instructions into commands, downloaded helpers, destinations and access.

Next:
Prepare for a boundary being crossed anyway.

## Slide 52

Say:
Removing the package does not revoke copied sessions or remove installed persistence. Keep useful evidence outside the suspect host, identify recovery owners and restore from a clean environment.

Next:
Rehearse one compromised publisher.

## Slide 53

Say:
Take one laptop that installed malware while holding publishing access. Who contains execution, revokes each identity and validates downstream artifacts? These are coordinated workstreams, not a universal fixed response order.

Next:
Offer a small starting action within one person's scope.

## Slide 54

Say:
Choose one project you maintain. Propose a supported cooldown, review the diff and open a small PR. Seven days is an example; preserve a route for urgent fixes. Pick one action rather than attempting the whole programme on Monday.

Delivery:
This begins a choice of small individual actions; the audience need not complete every example.

Next:
Another option is one workflow finding.

## Slide 55

Say:
Run zizmor on one existing workflow and understand one finding. Pin a reviewed Action commit or reduce token access. Use permissions: {} as the workflow default and grant each job only what it needs. Review behavior and open one focused PR.

Delivery:
The scan and edits are illustrative. No all-clear output is implied.

Next:
Inspect the coding setup before starting the next task.

## Slide 56

Say:
List tracked setup and instruction files, then use cat to read devcontainer.json. Follow startup commands and downloads. Check the actual mounts, tools and forwarded credentials, including local settings the tracked files do not show.

Delivery:
Read-only inspection first. cat displays the settings file; it does not establish that the whole setup is safe.

Next:
Use the original devcontainer-to-agent closing example.

## Slide 57

Say:
Start the reviewed devcontainer and launch Copilot inside it. Ask: What principles keep this repo safe from supply chain attacks? Let the answer recap the controls. This is an illustrative session; the boundary comes from reviewed configuration, not the startup command alone.

Delivery:
Keep the original GEECon shell → Copilot transition, typed question and answer reveal. The smaller banner omits the version and two requested tips. Click to replay.
After devcontainer exec, hold the terminal for 3.5 seconds before Copilot appears. Use that pause to explain shared access and configuration.

Next:
Close on making trust an engineering decision.

## Slide 58

Say:
You trust more code than you ship. The hidden machinery is still there. Review what enters it, constrain what can execute, and scope the identity it can use. Make that trust an engineering decision. Scan for the deck and resources. Thank you.

Delivery:
Selected closing: the opening iceberg returns with three explicit trust checkpoints and a reviewed route toward the shipped application. Keep the same strong message. One large QR emphasizes the deck; LinkedIn appears as linkedin.com/in/niekpalm and both profiles remain clickable.
End prepared content here and leave this slide visible for questions. Timing is for rehearsal; timing.json remains the earlier baseline.

Next:
Take questions; use the catalogue only when useful.

## Slide 59

Say:
The appendix contains the incident catalogue. Names link to sources and the dates preserve activity, verified availability and disclosure distinctions. Use it for a specific question rather than reading every entry.

Delivery:
Appendix only; the seven entry pages use the dimmed divider artwork.

Next:
Open the relevant year or delivery example.

## Slide 60

Say:
This first 2026 page covers early-year entries. Pick the relevant incident and open its source. The page is part of the selected 95-record inventory, not an additional count.

Next:
Continue chronologically if the question needs it.

## Slide 61

Say:
Continue the 2026 catalogue with the next dated entries. Distinguish individual compromise episodes from recurring family names and preserve the qualifiers on dates.

Next:
Move to the next page of the same inventory.

## Slide 62

Say:
These are further entries in the same selected 2026 inventory. Use the linked source and detailed record when a date or affected scope is in question.

Next:
Continue to the remaining 2026 entries.

## Slide 63

Say:
This is the final selected 2026 catalogue page. The 21 October baseline was reconciled on 22 October. A targeted refresh checked on 31 October adds the vendor-confirmed 29 October Cursor/Claude Code extension compromise after LiteLLM. This is not a complete daily sweep; absence from this selection does not establish that another incident never happened.

Next:
Use the earlier-year pages for historical examples.

## Slide 64

Say:
The 2025 review has 23 records across 20 conservative groups. Some malicious artifacts were published earlier but were verified available during 2025. Do not add annual groups as unique operators.

Next:
Move to the bounded 2024 sample if useful.

## Slide 65

Say:
The 2024 historical sample contains 18 records across 17 bundles. It is a bounded sample with different coverage, not a complete annual census or a directly comparable growth series.

Next:
Use 2023 for another historical example.

## Slide 66

Say:
The 2023 historical sample contains 14 records across 14 bundles and includes vendor-delivery cases. Follow the source for the chosen example; do not compare totals as equal-coverage measurements.

Next:
Return to the question or closing slide.
