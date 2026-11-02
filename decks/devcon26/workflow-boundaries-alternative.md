---
marp: true
size: 16:9
title: You Trust More Code Than You Ship
author: Niek Palm
paginate: false
footer: ""
style: |

  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap');
  :root { --gold:#E6B65E; --coral:#ED8A85; --green:#A5D7BB; --light-blue:#D9ECE6; --blue:#729D91; --ink:#101116; --muted:#B4B6B5; --accent:#E6B65E; }
  section { background:radial-gradient(ellipse at 85% 15%,#26342F 0,transparent 55%),linear-gradient(135deg,#101116,#171A1D); color:#F7F4EE; font-family:Inter,Arial,sans-serif; font-size:28px; line-height:1.32; padding:52px 70px 62px; overflow:hidden; }
  section > :not(header):not(footer) { position:relative; z-index:1; }
  h1 { color:#F7F4EE; font-size:66px; font-weight:900; letter-spacing:-1.8px; line-height:1.02; margin:0 0 22px; }
  h2 { color:var(--accent); font-size:34px; line-height:1.15; margin:0 0 18px; } h3 { color:var(--accent); }
  p,li { color:#E3E6E3; line-height:1.4; } strong { color:var(--accent); }
  footer { color:#B4B6B5; font:12px Menlo,monospace; left:30px; bottom:14px; } section::after { display:none; }
  section.risk { --accent:var(--coral); } section.safe { --accent:var(--green); } section.ai { --accent:#C9A9E9; }
  .eyebrow { color:var(--accent); font:700 15px/1.3 'JetBrains Mono',Menlo,monospace; text-transform:uppercase; letter-spacing:2px; margin-bottom:22px; }
  .lede { font-size:25px; line-height:1.4; max-width:780px; color:#E1E5E2; }
  .muted { color:var(--muted); } .mono,code,pre { font-family:'JetBrains Mono',Menlo,monospace; }
  code { background:#101319B8; color:#E8F4EF; border-radius:4px; padding:2px 6px; font-size:.85em; }
  pre { background:#0B0E12; color:#E8F4EF; border:1px solid #55665B; border-radius:8px; padding:18px 24px; font-size:20px; line-height:1.5; }
  pre code { background:none; padding:0; font-size:inherit; }
  pre :is(.hljs-string,.hljs-attr) { color:#BFE3D5; }
  .copy { width:49%; } .copy h1 { font-size:66px; }
  .bottom-line { position:absolute!important; left:70px; bottom:65px; max-width:1050px; font-size:22px; color:#EAD1A4; }
  .cols { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:52px; }
  .small { font-size:20px; } .caption { font-size:19px; color:#B4B6B5; }
  .audit-row { display:grid; grid-template-columns:260px minmax(0,1fr); gap:24px; padding:17px 0; border-top:1px solid #8A9E9255; font-size:24px; } .audit-row b { color:#E6B65E; }
  .two { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:34px; align-items:center; }
  .two.wide-right { grid-template-columns:minmax(0,.7fr) minmax(0,1.3fr); }
  .prompt-card { margin-top:26px; background:#101319C9; border:1px solid #ACCDB94A; border-radius:10px; padding:20px 23px; font:20px/1.6 'JetBrains Mono',Menlo,monospace; box-shadow:0 18px 48px #0007; }
  .prompt-card span { display:block; } .prompt-card .label { color:var(--gold); font-size:15px; margin-bottom:9px; text-transform:uppercase; }
  .app-frame { background:#101319; border:1px solid #ACCDB96A; border-radius:14px; overflow:hidden; box-shadow:0 24px 70px #0008; }
  .browser-bar { display:flex; gap:8px; align-items:center; background:#202A29; padding:11px 14px; }
  .browser-bar i { width:9px; height:9px; border-radius:50%; display:block; background:#ED8A85; } .browser-bar i:nth-child(2) { background:#E6B65E; } .browser-bar i:nth-child(3) { background:#A5D7BB; }
  .browser-bar b { flex:1; text-align:center; color:#C0D5CB; font:13px Menlo,monospace; }
  .app-frame video { width:100%; height:420px; object-fit:cover; object-position:50% 8%; display:block; }
  .ingredient-label { background:#101319E5; border:2px solid #C4D5C778; border-radius:10px; padding:23px 25px; box-shadow:0 30px 70px #0008; }
  .ingredient-label h2 { color:#FFF; font-size:30px; padding-bottom:13px; border-bottom:4px solid #C4D5C7; text-transform:uppercase; }
  .ingredient-label p { margin:0; display:flex; justify-content:space-between; font:19px/1.5 Menlo,monospace; padding:11px 0; border-top:1px solid #C4D5C744; }
  .ingredient-label b { color:#C4E0D0; }
  .dep-lines { display:grid; gap:22px; } .dep-line { border-left:5px solid #A5D7BB; padding:8px 0 8px 20px; color:#FFF; font-size:29px; } .dep-line:nth-child(2) { border-color:#E6B65E; } .dep-line:nth-child(3) { border-color:#ED8A85; }
  .dep-line span { display:block; color:#C8CECA; font-size:20px; margin-top:6px; }
  .inventory { display:grid; grid-template-columns:1fr 1fr; gap:42px; margin-top:32px; }
  .inventory p { font-size:24px; border-bottom:1px solid #C4D5C744; padding:12px 0; margin:0; }
  .inventory b { color:#FFF; display:inline-block; width:140px; } .identity-copy { border-left:5px solid #E6B65E; padding-left:25px; }
  .identity-copy h2 { font-size:36px; } .identity-copy p { font-size:25px; border:0; color:#EAD1A4; }
  .risk-list { display:grid; gap:15px; margin-top:30px; width:94%; } .risk-list div { border-left:5px solid #ED8A85; padding:12px 16px; background:#3A121AC2; color:#FFE9E6; font-size:25px; font-weight:800; }
  .incident-lines,.consequence-list,.lateral-path,.agent-reach { display:grid; gap:14px; margin-top:30px; }
  .incident-lines div { color:white; font-size:26px; border-left:4px solid #ED8A85; padding:6px 16px; font-weight:800; }
  .incident-lines span { display:block; color:#D7DDDA; font-size:19px; font-weight:400; margin-top:6px; }
  section.cinema::before { content:''; position:absolute; inset:0; background:linear-gradient(90deg,#0C0E13F5,#0C0E13D9 37%,#0C0E1330 68%,transparent); z-index:0; }
  section.cinema .copy { margin-top:25px; width:46%; }
  section.cinema h1 { font-size:65px; }
  .scene-line { border-left:4px solid var(--accent); padding-left:18px; margin-top:28px; color:#E1E9E2; font-size:25px; line-height:1.5; }
  .scene-line strong { display:block; color:#FFF; font-size:27px; }
  .scene-line small { display:block; color:#C0CCC3; font-size:20px; margin-top:8px; }
  section.title .copy { width:58%; margin-top:55px; } section.title h1 { font-size:82px; line-height:1.01; } section.title .byline { margin-top:40px; font-size:26px; }
  section.center { text-align:center; align-items:center; justify-content:center; } section.center h1 { font-size:88px; }
  section.chapter { background:radial-gradient(ellipse at 70% 60%,#633521,#171419 64%); }
  section.chapter h1 { color:#F2C271; font-size:100px; margin-bottom:26px; }
  section.chapter .date { font:23px Menlo,monospace; color:#ED8A85; }
  .stage-words { display:flex; gap:20px; position:absolute!important; bottom:70px; left:68px; right:68px; }
  .stage-words div { flex:1; border-top:4px solid var(--accent); padding-top:15px; } .stage-words strong { display:block; font-size:23px; color:#FFF; } .stage-words span { color:#BFC8C2; font-size:17px; }
  .pattern { display:flex; flex-direction:column; gap:16px; margin-top:15px; } .pattern span { font-size:64px; font-weight:900; letter-spacing:-2px; } .pattern span:nth-child(2) { margin-left:130px; color:#E6B65E; } .pattern span:nth-child(3) { margin-left:260px; color:#ED8A85; }
  .loop { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:45px; } .loop div { border-top:4px solid #ED8A85; padding:23px 15px; text-align:center; } .loop strong { color:#FFF; font-size:30px; } .loop span { display:block; font-size:22px; color:#BDCBC3; margin-top:12px; }
  .loop-return { border:2px solid #E6B65E; border-top:0; height:55px; margin:0 150px; position:relative; } .loop-return:before { content:'↑'; position:absolute; left:-15px; top:-23px; color:#E6B65E; font-size:35px; } .loop-label { color:#E6B65E; text-align:center; font-size:23px; margin-top:18px; }
  .metric { font-size:135px; line-height:1; font-weight:900; letter-spacing:-6px; color:#F2C271; margin:20px 0; }
  .fact-caption { font-size:19px; line-height:1.5; color:#C2CEC5; max-width:780px; }
  .compare-label { font:700 17px Menlo,monospace; color:var(--accent); text-transform:uppercase; letter-spacing:2px; margin-bottom:22px; }
  .reality { display:grid; grid-template-columns:1fr 1fr; gap:55px; margin-top:40px; } .reality h2 { color:#F4F1E8; font-size:44px; margin-bottom:22px; } .reality p { font-size:28px; margin:13px 0; }
  .control-bottom { position:absolute!important; bottom:52px; left:70px; color:#A5D7BB; font:18px Menlo,monospace; border-top:1px solid #A5D7BB55; padding-top:15px; width:480px; }
  .port-labels { position:absolute!important; right:45px; bottom:60px; display:flex; gap:18px; } .port-labels span { color:#D6EFE2; background:#101713ED; border-top:3px solid #A5D7BB; padding:10px 14px; font:18px Menlo,monospace; }
  section.export .tl, section.export .wl, section.export .al { opacity:1!important; }
  @media print { .tl,.wl,.al { opacity:1!important; } }
  section.section-divider .copy { width:58%; margin-top:25px; }
  section.section-divider h1 { color:#F7F4EE; font-size:86px; line-height:1.04; letter-spacing:-2px; margin:0 0 28px; }
  section.section-divider .divider-caption { color:#E0DED8; font-size:26px; line-height:1.4; margin:18px 0; }
  section.section-divider .divider-meta { color:var(--accent); font:600 23px/1.4 'JetBrains Mono',Menlo,monospace; margin-top:18px; }

  section.control-scene, section.control-example { padding:0; background:#121616; --accent:#A5D7BB; }
  .c3shade { position:absolute!important; inset:0; z-index:0!important; background:linear-gradient(90deg,#101414F5 0%,#101414D9 36%,#10141460 58%,transparent 78%),linear-gradient(0deg,#101414EE,transparent 33%); }
  .c3head { position:absolute!important; left:64px; top:48px; right:60px; }
  .c3kicker { color:#A5D7BB; font:600 14px/1.3 'JetBrains Mono',Menlo,monospace; text-transform:uppercase; letter-spacing:1.6px; margin-bottom:22px; }
  .c3head h1 { color:#F7F2E8; font-size:58px; line-height:1.06; letter-spacing:-1.8px; margin:0; }
  section.control-scene .c3head { top:65px; width:620px; right:auto; }
  section.control-scene .c3head h1 { font-size:69px; }
  section.control-scene.c3long .c3head h1 { font-size:60px; }
  .c3lede { font-size:27px; color:#E3E7DF; line-height:1.4; margin-top:28px; width:530px; }
  .c3points { display:grid; gap:20px; margin-top:32px; width:530px; }
  .c3points div { border-left:3px solid #A5D7BB; padding-left:17px; font-size:24px; color:#EEF0E8; line-height:1.3; }
  .c3points small { display:block; color:#BAC8BD; font-size:19px; margin-top:7px; }
  .c3edge { position:absolute!important; left:64px; bottom:40px; color:#A5D7BB; border-top:1px solid #A5D7BB66; padding-top:16px; font:16px/1.4 'JetBrains Mono',Menlo,monospace; width:535px; }
  .c3layout { position:absolute!important; left:64px; right:64px; top:190px; display:grid; grid-template-columns:1.4fr 1fr; gap:38px; }
  .c3panel { background:#1B211F; border:1px solid #66766B77; border-radius:9px; overflow:hidden; }
  .c3file { background:#26312B; color:#C9DDD0; padding:13px 20px; font:15px/1.2 'JetBrains Mono',Menlo,monospace; }
  .c3panel pre { margin:0; padding:24px 22px; border:0; border-radius:0; background:transparent; box-shadow:none; color:#EFF1E8; font:22px/1.55 'JetBrains Mono',Menlo,monospace; }
  .c3panel code { background:none; color:inherit; font:inherit; padding:0; }
  .c3panel .c3comment { color:#A5B5A9; }
  .c3panel .c3good { color:#A5D7BB; }
  .c3aside { padding-top:5px; }
  .c3aside h2 { font-size:25px; color:#F7F2E8; margin:0 0 12px; }
  .c3aside p { font-size:22px; line-height:1.4; color:#C5CEC5; margin:0 0 27px; }
  .c3aside .c3label { font:600 13px/1.3 'JetBrains Mono',Menlo,monospace; color:#A5D7BB; text-transform:uppercase; letter-spacing:1.3px; margin:0 0 10px; }
  .c3bottom { position:absolute!important; left:64px; right:64px; bottom:38px; font-size:23px; line-height:1.35; color:#E6C797; border-top:1px solid #7E806755; padding-top:19px; }
  .c3bottom code { color:#E6C797; background:none; padding:0; }
  .c3badge { display:inline-block; background:#25352B; border:1px solid #6D927B; color:#BCD8C5; padding:7px 12px; font:15px/1.2 'JetBrains Mono',Menlo,monospace; border-radius:5px; }
  .c3workflow { grid-template-columns:790px 1fr; gap:32px; top:180px; }
  .c3workflow .c3panel pre { font-size:19px; line-height:1.43; padding:18px 19px; }
  .c3workflow .c3pin { font-size:14px; }
  .c3workflow .c3aside p { font-size:20px; margin-bottom:22px; }
  .c3workflow .c3aside h2 { font-size:22px; margin-bottom:9px; }
  .c3contract { position:absolute!important; left:64px; right:64px; top:193px; }
  .c3contract-row { display:grid; grid-template-columns:170px 1fr 1.1fr; gap:25px; padding:21px 0; border-bottom:1px solid #71816C55; align-items:start; }
  .c3contract-row b { color:#A5D7BB; font-size:24px; }
  .c3contract-row span { color:#EEF0E8; font-size:23px; line-height:1.35; }
  .c3contract-row em { color:#AEBFB2; font-style:normal; font-size:21px; line-height:1.4; }
  .c3matrix { position:absolute!important; left:64px; right:64px; top:210px; }
  .c3matrix-row { display:grid; grid-template-columns:210px 1.3fr 1fr; gap:30px; align-items:center; padding:23px 20px; border-bottom:1px solid #71816C55; }
  .c3matrix-row > * { margin:0; font-size:24px; line-height:1.35; }
  .c3matrix-row b { color:#F7F2E8; }
  .c3matrix-row span { color:#BBD8C4; }
  .c3matrix-row em { color:#D4BDA0; font-size:21px; font-style:normal; }
  .c3matrix-row.c3thead { padding:0 20px 17px; }
  .c3matrix-row.c3thead > * { color:#A5B5A9; font:600 13px/1.3 'JetBrains Mono',Menlo,monospace; text-transform:uppercase; letter-spacing:1.2px; }
  .c3matrix-row.c3release { background:#233129; border-left:3px solid #A5D7BB; }
  .c3policy { grid-template-columns:1fr 1fr; top:210px; }
  .c3policy .c3panel { min-height:310px; }
  .c3policy h2 { font-size:29px; color:#F3F0E6; margin:23px 23px 17px; }
  .c3policy pre { font-size:20px; padding:5px 23px 20px; line-height:1.6; }
  .c3policy p { color:#AFC3B5; font-size:21px; margin:0 23px 25px; }
  .c3steps { position:absolute!important; left:64px; right:64px; top:227px; display:grid; grid-template-columns:repeat(3,1fr); gap:35px; }
  .c3step { border-top:3px solid #A5D7BB; padding-top:20px; }
  .c3step .c3num { color:#A5D7BB; font:600 15px/1.3 'JetBrains Mono',Menlo,monospace; }
  .c3step h2 { color:#F7F2E8; font-size:32px; line-height:1.15; margin:20px 0; }
  .c3step p { color:#C3CFC4; font-size:23px; line-height:1.4; margin:0; }
  .c3step small { display:block; color:#D4BDA0; font-size:19px; margin-top:27px; line-height:1.4; }

  /* Chapter colours: opening amber, attacks coral, controls sage. */
  section.chapter-opening { --title-color:#E6B65E; --chapter-color:#E6B65E; --accent:#E6B65E; }
  section.chapter-attacks { --title-color:#ED8A85; --chapter-color:#ED8A85; --accent:#ED8A85; }
  section.chapter-controls { --title-color:#A5D7BB; --chapter-color:#A5D7BB; --accent:#A5D7BB; }
  section.chapter-catalogue { --title-color:#F7F2E8; --chapter-color:#E6B65E; --accent:#E6B65E; }
  section.neutral-title { --title-color:#F7F2E8; }
  section:is(.chapter-opening,.chapter-attacks,.chapter-controls,.chapter-catalogue) h1 {
    color:var(--title-color)!important;
    background:none!important;
    -webkit-text-fill-color:var(--title-color)!important;
    font-family:Inter,Arial,sans-serif;
    font-weight:900;
  }
  section:is(.chapter-opening,.chapter-attacks,.chapter-controls,.chapter-catalogue) :is(.eyebrow,.kicker,.art-label,.draft-label,.oidc-kicker,.ht-kicker,.c3kicker) {
    color:var(--chapter-color)!important;
  }
  section.attack-step { justify-content:flex-start; padding-top:50px; padding-bottom:40px; }
  .attack-step-label { color:var(--coral); font:600 14px/1.4 'JetBrains Mono',Menlo,monospace; letter-spacing:1.5px; text-transform:uppercase; margin:0 0 14px; }
  section.attack-step h1 { font-size:48px; line-height:1.08; letter-spacing:-1.4px; margin:0 0 16px; }
  section.attack-step h2 { color:#D5DDD6!important; font-size:24px; line-height:1.3; margin:0 0 24px; }
  section.attack-step :is(h3,h4) { color:var(--coral)!important; }
  section.attack-step :is(.hook-box,.hunt-item,.exfil-method,.rce-box) { background:#1C2523!important; border-color:#ED8A8544!important; }
  section.attack-step .exfil-method { border-left-color:#ED8A8599!important; }
  section.attack-step .irony { color:var(--coral)!important; }
  section.chapter-attacks .art-line { border-left-color:#ED8A85!important; }
  section.chapter-attacks :is(.sub,.wed-sub) { color:#C7D1CB!important; }
  section.chapter-attacks .ai-badge { color:#EDB1AC!important; background:#ED8A851F!important; border-radius:4px!important; }
  section.chapter-attacks .chain-title { color:var(--coral)!important; font-size:38px!important; }
  section.chapter-attacks .chain-caption { color:#CAD4CD!important; }
  section.chapter-controls .agent-reach strong { color:var(--green)!important; }
  section.chapter-controls .ascii-title { color:var(--green)!important; }

---

<!-- _class: control-scene safe chapter-controls -->
![bg](assets/img/controls-kitchen-workflow-v1.png)
<div class="c3shade"></div>
<div class="c3head"><div class="c3kicker">02 · Trusted automation · principle</div><h1>Harden builds<br>and workflows</h1><div class="c3lede">Separate the work from the authority.</div><div class="c3points"><div>Fresh execution for each job<small>Dispose of the environment afterward</small></div><div>Sandbox each job<small>Files, network and identities</small></div></div></div>
<div class="c3edge">Install hooks · workflow abuse · publishing</div>

<!--
SLIDE 38 · SPEAKER NOTES

Say:
Use fresh execution, dispose of it afterward and configure filesystem, network and identity boundaries. Freshness limits surviving state; it does not stop code from spending credentials during the current run.

Next:
Make install-time execution explicit.

Reference detail (not read aloud):
The removable prep board stands for disposable execution; the separate serving pass stands for release authority. Three controls have different jobs: ephemeral environments reduce state surviving into the next run; sandbox boundaries constrain what the current run can reach; workflow hardening limits how attacker-controlled input becomes privileged execution. Use a fresh runner per untrusted job, remove it afterward and retain logs outside it. For self-hosted runners, --ephemeral deregisters a runner after one job; wiping or recreating the underlying host still needs automation. Never claim that a fresh runner cannot steal credentials while it is alive. The release station must validate the inputs it promotes; a poisoned cache, artifact, script or workspace can cross a badly designed handoff. First make install-time execution an explicit decision, then apply the same deliberate configuration to the workflow.

Sources:
- https://docs.github.com/en/actions/reference/runners/self-hosted-runners
- https://docs.github.com/en/actions/reference/runners/github-hosted-runners

Composition source: Kitchen prep-to-serving separation; ephemeral execution and release trust boundary
-->


---

<!-- _class: workflow-boundaries safe chapter-controls -->
![bg](assets/img/controls-kitchen-workflow-v1.png)

<style scoped>
section { padding:0; }
.wb-shade { position:absolute!important; inset:0; z-index:0!important; background:linear-gradient(90deg,#0B1115CC,transparent 64%),linear-gradient(0deg,#0B1115F5 0%,#0B1115CC 25%,transparent 48%); }
.wb-head { position:absolute!important; left:64px; top:51px; width:690px; }
.wb-head .eyebrow { font-size:14px; margin-bottom:19px; }
.wb-head h1 { font-size:62px; line-height:1.05; letter-spacing:-1.7px; margin:0; }
.wb-message { position:absolute!important; left:64px; top:282px; width:570px; margin:0; font-size:30px; line-height:1.3; color:#F7F4EE; }
.wb-options { position:absolute!important; left:64px; right:64px; top:490px; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
.wb-option { padding:20px 18px 23px; border-top:2px solid #A5D7BB77; background:#0B171CEE; }
.wb-option h2 { color:#F7F4EE; font-size:25px; line-height:1.2; margin:0 0 16px; }
.wb-option p { color:#C4D5CD; font-size:22px; line-height:1.35; margin:0; }
.wb-foot { position:absolute!important; left:64px; right:64px; bottom:28px; color:#D8C4A2; font-size:21px; line-height:1.3; margin:0; }
</style>

<div class="wb-shade"></div>
<div class="wb-head"><div class="eyebrow">02 · Trusted automation</div><h1>Harden builds<br>and workflows</h1></div>
<p class="wb-message">Separate the work<br>from the authority.</p>

<div class="wb-options">
<div class="wb-option"><h2>Fresh execution</h2><p>New environment.<br>Dispose after the job.</p></div>
<div class="wb-option"><h2>Bounded access</h2><p>Limit files, network<br>and available identity.</p></div>
<div class="wb-option"><h2>Separate authority</h2><p>Keep publishing access<br>out of untrusted jobs.</p></div>
</div>
<p class="wb-foot">Verify the release handoff.</p>

<!--
SLIDE 38 ALTERNATIVE · SPEAKER NOTES

Say:
Make three decisions. Start each job in a fresh environment and dispose of it afterward. Bound the files, network and identity that running code can reach. Keep publishing authority outside untrusted build jobs, and verify the source and artifacts entering release.

Delivery:
Give all three controls equal emphasis. The removable prep surface illustrates fresh execution, the separated working area illustrates bounded access, and the serving pass illustrates release authority. Connect each to the earlier install hook, workflow abuse and publishing compromise.

Next:
Make install-time execution explicit.

Reference detail (not read aloud):
Comparison alternative only; main slide 38 remains unchanged. Existing kitchen artwork is reused with editable native labels. Freshness limits state surviving across jobs; it does not stop current-run credential abuse. A runner registered with --ephemeral still needs disposal or reimaging of its host. Filesystem, network and credential boundaries require deliberate enforcement. Separate jobs alone do not create the required boundary if they share a host, workspace or available credentials. The release handoff needs review of source/ref, artifact identity and cache trust; a digest alone does not prove benign behavior. Keep release credentials out of untrusted execution and retain useful logs outside disposable hosts. Subsequent slides cover install-script approval, workflow findings and concrete identity design.

Sources:
- https://docs.github.com/en/actions/reference/runners/self-hosted-runners
- https://docs.github.com/en/actions/reference/runners/github-hosted-runners
- https://docs.github.com/en/actions/reference/security/secure-use

Composition: existing controls-kitchen-workflow-v1.png with three equally weighted native control cards. No new raster artwork.
-->

---

<!-- _class: control-example safe chapter-controls -->
<style scoped>
.script-layout { top:214px; grid-template-columns:1.15fr 1fr; gap:55px; }
.script-layout .c3panel pre { font-size:24px; line-height:1.65; padding:29px 25px; }
.script-layout .c3aside { padding-top:9px; }
.script-layout .c3aside h2 { font-size:28px; }
.script-layout .c3aside p { font-size:24px; margin-bottom:30px; }
.script-command { position:absolute!important; left:64px; right:64px; top:577px; color:#C5CEC5; font-size:24px; }
.script-command code { color:#F7F2E8; font-size:23px; padding:0; background:none; }
</style>
<div class="c3head"><div class="c3kicker">02 · Trusted automation · install-time execution</div><h1>Approve dependency install scripts</h1></div>
<div class="c3layout script-layout"><div class="c3panel"><div class="c3file">pnpm-workspace.yaml · pnpm ≥ 10.26</div><pre><code><span class="c3comment"># reject unreviewed build scripts</span>&#10;strictDepBuilds: <span class="c3good">true</span>&#10;&#10;<span class="c3comment"># start with no script exceptions</span>&#10;allowBuilds: <span class="c3good">{}</span></code></pre></div><div class="c3aside"><h2>Downloading a dependency<br>need not approve its scripts</h2><p>Review each required exception.<br>Scope it to reviewed versions.</p><h2>Keep the execution boundary</h2><p>Project scripts, imports and later<br>tool execution still need isolation.</p></div></div>
<div class="script-command"><code>pnpm install --frozen-lockfile</code></div>
<div class="c3bottom">Now assume a bad component runs. What can it reach?</div>

<!--
SLIDE 39 · SPEAKER NOTES

Say:
Approve dependency build scripts deliberately and narrowly. This pnpm example starts with no exceptions. It does not sandbox approved scripts or prevent later imports and project commands from running code.

Next:
Apply the same deliberate decisions to the workflow.

Reference detail (not read aloud):
The configuration matches examples/intake-policy.yaml and is illustrative, not active policy in this repository. allowBuilds was added in pnpm 10.26; strictDepBuilds is supported from 10.3. Explicitly set it rather than relying on version-dependent defaults. Version-qualified matchers can narrow allowances. `allowBuilds: {}` plus strictDepBuilds rejects dependency builds for which no decision is present, and may break projects until required exceptions are reviewed. It does not sandbox an approved script or prevent root/project scripts, .pnpmfile.mjs, imports, tests, agents or remote helpers from executing code. Frozen lockfile selection is separate from execution approval. Keep the policy and package-manager configuration protected, and consider restored built artifacts/cache trust and manual bypass routes. Do not describe this as stopping every Shai-Hulud variant.

Source fetched 21 October 2026:
- https://pnpm.io/settings/build
-->


---

<!-- _class: install-approval safe chapter-controls -->
![bg](assets/img/controls-kitchen-workflow-v1.png)

<style scoped>
section { padding:0; }
.sa-shade { position:absolute!important; inset:0; z-index:0!important; background:linear-gradient(90deg,#0B1115D9,transparent 66%),linear-gradient(0deg,#0B1115F5 0%,#0B1115CC 25%,transparent 48%); }
.sa-head { position:absolute!important; left:64px; top:51px; width:780px; }
.sa-head .eyebrow { font-size:14px; margin-bottom:19px; }
.sa-head h1 { font-size:60px; line-height:1.05; letter-spacing:-1.7px; margin:0; }
.sa-message { position:absolute!important; left:64px; top:269px; margin:0; font-size:29px; line-height:1.3; color:#F7F4EE; }
.sa-panel { position:absolute!important; left:64px; top:332px; width:580px; background:#0B171CF2; border:1px solid #A5D7BB55; border-radius:7px; overflow:hidden; }
.sa-file { background:#202C27; color:#C3D2C9; font:15px/1.3 'JetBrains Mono',monospace; padding:11px 18px; }
.sa-panel pre { border:0; padding:17px 20px; margin:0; background:none; color:#F7F4EE; font-size:26px; line-height:1.4; }
.sa-panel code { background:none; color:inherit; padding:0; font-size:inherit; }
.sa-value { color:#A5D7BB; }
.sa-options { position:absolute!important; left:64px; right:64px; top:510px; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
.sa-option { background:#0B171CEE; border-top:2px solid #A5D7BB77; padding:17px 18px 20px; }
.sa-option h2 { color:#F7F4EE; font-size:24px; line-height:1.2; margin:0 0 13px; }
.sa-option p { color:#C4D5CD; font-size:22px; line-height:1.3; margin:0; }
.sa-foot { position:absolute!important; left:64px; right:64px; bottom:25px; color:#D8C4A2; font-size:20px; line-height:1.3; margin:0; }
</style>

<div class="sa-shade"></div>
<div class="sa-head"><div class="eyebrow">02 · Trusted automation</div><h1>Approve dependency<br>install scripts</h1></div>
<p class="sa-message">Choose what may execute.</p>
<div class="sa-panel"><div class="sa-file">pnpm ≥ 10.26 · pnpm-workspace.yaml</div><pre><code>strictDepBuilds: <span class="sa-value">true</span>
allowBuilds: <span class="sa-value">{}</span></code></pre></div>
<div class="sa-options">
<div class="sa-option"><h2>Reject unreviewed</h2><p>No implicit<br>script approval.</p></div>
<div class="sa-option"><h2>Review exceptions</h2><p>Scope to reviewed<br>versions.</p></div>
<div class="sa-option"><h2>Keep isolation</h2><p>Approved scripts still<br>need a boundary.</p></div>
</div>
<p class="sa-foot">Project scripts and later execution remain separate.</p>

<!--
SLIDE 39 ALTERNATIVE · SPEAKER NOTES

Say:
Choose which dependency install scripts may run. This pnpm example rejects unreviewed builds and starts with no exceptions. Review required exceptions and narrow them to reviewed versions. Approval permits execution; keep its filesystem, network and identity boundary too.

Delivery:
Read the two settings together, then walk the three short decisions. Configuration is illustrative, not active repository policy. Explain that package selection and execution approval are separate; pnpm install --frozen-lockfile constrains resolution but does not replace this policy.

Next:
Apply the same deliberate decisions to the workflow.

Reference detail (not read aloud):
Comparison alternative only; main slide 39 remains unchanged. The supported configuration matches examples/intake-policy.yaml. allowBuilds was added in pnpm 10.26 and strictDepBuilds in 10.3; keep the displayed version requirement. Explicit settings avoid relying on version-dependent defaults. Empty allowBuilds plus strictDepBuilds can fail projects until required script decisions are reviewed. Version-qualified exceptions can narrow allowed builds. This does not sandbox approved scripts or prevent root/project scripts, .pnpmfile.mjs, imports, tests, agents and downloaded helpers from executing code. Review package-manager settings, manual bypass paths and restored build/cache trust. No command is executed by the presentation.

Source:
- https://pnpm.io/settings/build

Composition: existing controls-kitchen-workflow-v1.png, two-line native configuration and three short control cards. No new artwork.
-->

---

<!-- _class: defense-harden-example chapter-controls -->

<style scoped>
section { background:#101414; color:#E6EDF3; padding:36px 64px; font-family:'JetBrains Mono',Menlo,monospace; }
.ht-kicker { color:#A5D7BB; font:600 13px/1.3 'JetBrains Mono',Menlo,monospace; letter-spacing:1.5px; text-transform:uppercase; margin-bottom:12px; }
h2 { color:var(--green); font:900 48px/1.08 Inter,Arial,sans-serif; letter-spacing:-1.5px; margin:0 0 18px; }
.terminal { background:#0D1415; border:1px solid #586D625E; border-radius:10px; overflow:hidden; box-shadow:0 16px 48px #0005; }
.title-bar { display:flex; align-items:center; gap:8px; background:#202C27; border-bottom:1px solid #586D625E; padding:9px 15px; }
.dot { display:block; width:10px; height:10px; border-radius:50%; }
.dot-r { background:#ED8A85; } .dot-y { background:#E6B65E; } .dot-g { background:#A5D7BB; }
.title-bar span { color:#BBCABE; font-size:13px; margin-left:10px; }
.body { display:grid; grid-template-columns:1.8fr 1fr; }
.main { padding:17px 20px; border-right:1px solid #586D625E; font-size:18px; line-height:1.43; }
.sidebar { padding:22px 23px; font-size:18px; line-height:1.4; }
.prompt { color:#A5D7BB; } .cmd { color:#EEF2E7; } .err { color:#ED8A85; font-weight:700; }
.warn { color:#E6B65E; font-weight:700; } .loc { color:#B9C9DF; } .comment { color:#99AE9F; }
.ok { color:#A5D7BB; } .dim { color:#A5B2AA; } .pipe { color:#A5D7BB; }
.section-label { font:600 13px/1.3 'JetBrains Mono',Menlo,monospace; text-transform:uppercase; letter-spacing:1px; color:#A5D7BB; margin:0 0 17px; }
.impact-item { border-left:2px solid #728A7766; padding-left:14px; margin:0 0 23px; }
.impact-item b { color:#F0F2E8; font-size:19px; display:block; margin-bottom:7px; }
.impact-item span { color:#B7C7B9; font-size:17px; display:block; line-height:1.45; }
.runtime-note { border-top:1px solid #586D625E; padding-top:16px; color:#D8BF95; font-size:16px; line-height:1.4; }
.al { opacity:1; transition:opacity .15s; white-space:pre; min-height:1.43em; }
section.playing .al { opacity:0; } section.playing .al.v { opacity:1; }
.al-typed { display:inline; }
.al-cursor { display:inline-block; width:8px; height:1em; background:#A5D7BB; vertical-align:text-bottom; animation:htblink .8s step-end infinite; }
@keyframes htblink { 50% { opacity:0; } }
.ht-caption { color:#ACB9AE; font:14px/1.3 'JetBrains Mono',Menlo,monospace; margin-top:15px; }
</style>

<div class="ht-kicker">02 · Trusted automation · in practice</div>

## Harden your workflow

<div class="terminal">
<div class="title-bar"><i class="dot dot-r"></i><i class="dot dot-y"></i><i class="dot dot-g"></i><span>defender@ci-pipeline ~/workflows</span></div>
<div class="body">
<div class="main" id="harden-left">
<div class="al" data-d="250" data-t="1100"><span class="prompt">$</span> <span class="al-typed cmd" data-text="zizmor --persona pedantic .github/workflows/">zizmor --persona pedantic .github/workflows/</span></div>
<div class="al" data-d="250"></div>
<div class="al" data-d="350"><span class="err">error[unpinned-uses]</span>: mutable action reference</div>
<div class="al" data-d="150"> <span class="loc">--&gt; ci.yml</span></div>
<div class="al" data-d="150"> <span class="pipe">|</span> uses: actions/checkout@v6</div>
<div class="al" data-d="200"> <span class="comment">= review and pin the selected commit</span></div>
<div class="al" data-d="350"></div>
<div class="al" data-d="350"><span class="warn">warning[excessive-permissions]</span></div>
<div class="al" data-d="150"> <span class="loc">--&gt; ci.yml</span></div>
<div class="al" data-d="150"> <span class="pipe">|</span> permissions: write-all</div>
<div class="al" data-d="200"> <span class="comment">= grant only what each job needs</span></div>
<div class="al" data-d="350"></div>
<div class="al" data-d="250" data-t="1000"><span class="prompt">$</span> <span class="al-typed cmd" data-text="zizmor --fix=safe .github/workflows/">zizmor --fix=safe .github/workflows/</span></div>
<div class="al" data-d="500"><span class="comment"># Review available fixes and remaining findings</span></div>
<div class="al" data-d="250" data-t="850"><span class="prompt">$</span> <span class="al-typed cmd" data-text="git diff -- .github/workflows/">git diff -- .github/workflows/</span></div>
<div class="al" data-d="400" data-t="850"><span class="prompt">$</span> <span class="al-typed cmd" data-text="zizmor .github/workflows/">zizmor .github/workflows/</span></div>
<div class="al" data-d="250"><span class="prompt">$</span> <span class="al-cursor"></span></div>
</div>
<div class="sidebar">
<div class="section-label">What the changes interrupt</div>
<div class="impact-item"><b>Tag hijacking</b><span>Fix reviewed action selection.<br>Keep dependency pins maintained.</span></div>
<div class="impact-item"><b>Credential abuse</b><span>Default to no token grants.<br>Add required rights per job.</span></div>
<div class="impact-item"><b>Privileged execution</b><span>Review triggers and inputs.<br>Keep release authority separate.</span></div>
<div class="runtime-note">Fresh execution and sandbox boundaries still need deliberate configuration.</div>
</div>
</div>
</div>

<div class="ht-caption">Illustrative terminal reconstruction · plays on entry · click to replay</div>

<!--
SLIDE 40 · SPEAKER NOTES

Say:
Review the mutable Action reference and excessive token grants. Inspect available scanner fixes and the diff, then audit again. Trigger handling, release isolation and runner boundaries remain design work.

The September GitHub issue/comment campaign is a concrete input-handling example: attacker-controlled event text became shell code. Do not interpolate it into run scripts; pass it as data and keep untrusted-event jobs away from release credentials.

Delivery:
Scripted terminal, not a live scan. Point to one finding and its boundary at a time.
Use the campaign as workflow-abuse context, not another counted package compromise. Compromised accounts were suspected; reuse of earlier stolen tokens is unconfirmed.

Next:
Apply those boundaries during coding too.

Reference detail (not read aloud):
Reuse GEECon's two-column hardening terminal: scanner findings, fixes and engineering impact. This is a scripted presentation reconstruction, not a shell session or a current scan of this repository. No displayed command is executed. The visible diagnostics are shortened illustrative examples; severity, locations, available fixes and output vary by version/configuration. The existing deck controller types and reveals the lines on active-slide entry, cancels on departure and supports click replay. Static export shows all lines.

NARRATION: First 30 seconds: point to the action tag, then connect it to Trivy/tj-actions. A reviewed immutable reference constrains selection; it does not make malicious selected code harmless, cover arbitrary runtime downloads, or make the workflow “immune”. Workflow dependency lockfiles are another option where adopted, with their own scope. Next 30 seconds: point to write-all and explain default permissions:{} plus explicit per-job grants. This controls the GITHUB_TOKEN permissions, not separately supplied PATs/cloud sessions. Review action behavior and persisted checkout credentials as well as the permission block. Final 30 seconds: explain --fix=safe, inspect the patch, re-run the audit and resolve remaining findings. Available safe fixes do not repair every design decision. Keep trigger/input handling, untrusted PR execution, release isolation, cache/artifact trust and the actual runner sandbox in scope. Refer to the preceding principle slide for ephemeral lifecycle and enforced filesystem/network/identity boundaries.

RELATED CASE: The Register's 29 October report of Radware research describes 83 malicious GitHub items targeting 61 repositories, with the main posting burst on 1 September. Commands hidden in HTML comments reached shells through vulnerable event-text interpolation. Researchers suspected that the 74 posting accounts were compromised, partly because many had legitimate development histories; token provenance and links to earlier campaigns were not established. Posting a public issue/comment does not require repository write access. Two workflow runs contained evidence of command execution; successful repository writes and downstream software compromise were unconfirmed. This is workflow-hardening context, not an added catalogue incident or 61 confirmed compromises.

The inherited “51 auto-fixed”, “immune”, “less than one hour” and zero-cost outcome claims are intentionally removed. No patch is represented as applied to the user's repository. examples/pr-build.yml retains the illustrative pinned workflow source; the older backup slide has been removed. Monday's workflow terminal remains the later concrete recap.
Sources:
- https://github.com/npalm/supply-chain-security-talks/blob/main/decks/geecon26/slides.md
- https://docs.zizmor.sh/usage/
- https://docs.zizmor.sh/audits/#unpinned-uses
- https://docs.zizmor.sh/audits/#excessive-permissions
- https://docs.github.com/en/actions/reference/security/secure-use
- https://www.theregister.com/security/2026/10/29/attackers-turn-github-issues-into-supply-chain-campaign-against-61-public-repos-in-less-than-an-hour/5306153

Composition source: GEECon hardening terminal, adapted to the shared animation controller and corrected claim boundaries
-->


---

<!-- _class: workflow-scan safe chapter-controls -->

<style scoped>
section { background:#101414; padding:0; }
.wh-head { position:absolute!important; left:64px; right:64px; top:47px; }
.wh-head .eyebrow { font-size:14px; margin-bottom:17px; }
.wh-head h1 { font-size:56px; line-height:1.05; letter-spacing:-1.7px; margin:0; }
.wh-message { position:absolute!important; left:64px; top:166px; margin:0; font-size:27px; line-height:1.3; color:#E5EAE5; }
.wh-terminal { position:absolute!important; left:64px; right:64px; top:225px; background:#0A1214; border:1px solid #A5D7BB55; border-radius:9px; overflow:hidden; box-shadow:0 18px 45px #0004; }
.wh-bar { background:#202C27; padding:10px 16px; display:flex; align-items:center; gap:8px; }
.wh-bar i { display:block; width:10px; height:10px; border-radius:50%; background:#ED8A85; }
.wh-bar i:nth-child(2) { background:#E6B65E; }
.wh-bar i:nth-child(3) { background:#A5D7BB; }
.wh-bar span { color:#BDCCC2; font:14px/1.3 'JetBrains Mono',monospace; margin-left:8px; }
.wh-body { padding:15px 20px 18px; font:22px/1.4 'JetBrains Mono',monospace; color:#EAF0E9; }
.wh-terminal .al { opacity:1; min-height:1.4em; white-space:pre; }
section.playing .wh-terminal .al { opacity:0; }
section.playing .wh-terminal .al.v { opacity:1; }
.wh-prompt { color:#A5D7BB; }
.wh-error { color:#ED8A85; font-weight:700; }
.wh-warn { color:#E6B65E; font-weight:700; }
.wh-comment { color:#B2C4B7; }
.wh-options { position:absolute!important; left:64px; right:64px; top:549px; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
.wh-option { padding:15px 18px 17px; border-top:2px solid #A5D7BB77; background:#0B171C; }
.wh-option h2 { color:#F7F4EE; font-size:24px; line-height:1.2; margin:0 0 10px; }
.wh-option p { color:#C4D5CD; font-size:20px; line-height:1.3; margin:0; }
.wh-caption { position:absolute!important; left:64px; right:64px; bottom:24px; margin:0; color:#B6C5BC; font:15px/1.3 'JetBrains Mono',monospace; }
</style>

<div class="wh-head"><div class="eyebrow">02 · Trusted automation</div><h1>Harden your workflow</h1></div>
<p class="wh-message">Inspect. Change. Verify.</p>

<div class="terminal wh-terminal">
<div class="wh-bar"><i></i><i></i><i></i><span>defender@ci-pipeline · workflows</span></div>
<div class="wh-body">
<div class="al" data-delay="250" data-type="1000"><span class="wh-prompt">$</span> <span data-text="zizmor --persona pedantic .github/workflows/">zizmor --persona pedantic .github/workflows/</span></div>
<div class="al" data-delay="500"><span class="wh-error">error[unpinned-uses]</span>  actions/checkout@v6</div>
<div class="al" data-delay="550"><span class="wh-warn">warning[excessive-permissions]</span>  permissions: write-all</div>
<div class="al" data-delay="650" data-type="900"><span class="wh-prompt">$</span> <span data-text="zizmor --fix=safe .github/workflows/">zizmor --fix=safe .github/workflows/</span></div>
<div class="al" data-delay="500" data-type="800"><span class="wh-prompt">$</span> <span data-text="git diff -- .github/workflows/">git diff -- .github/workflows/</span></div>
<div class="al" data-delay="500" data-type="800"><span class="wh-prompt">$</span> <span data-text="zizmor .github/workflows/">zizmor .github/workflows/</span></div>
<div class="al" data-delay="400"><span class="wh-comment"># Inspect remaining findings; review behavior.</span></div>
</div>
</div>

<div class="wh-options">
<div class="wh-option"><h2>Pin Actions</h2><p>Review the selected commit.</p></div>
<div class="wh-option"><h2>Scope tokens</h2><p>Grant rights per job.</p></div>
<div class="wh-option"><h2>Review event input</h2><p>Pass untrusted text as data.</p></div>
</div>
<p class="wh-caption">Illustrative terminal · plays on entry · click to replay</p>

<!--
SLIDE 40 ALTERNATIVE · SPEAKER NOTES

Say:
Inspect two findings: a mutable Action reference and broad token grants. Apply available safe fixes, inspect the diff and run the audit again. Pin a reviewed commit, grant job-specific token rights and keep attacker-controlled event text out of executable shell interpolation.

Delivery:
The animated terminal remains the central illustration, with larger text and a shorter sequence. This is a scripted reconstruction, not a live scan or an all-clear result. Click to replay. The final comment deliberately leaves review work visible.

Next:
Apply those boundaries during coding too.

Reference detail (not read aloud):
Comparison alternative only; main slide 40 remains unchanged. Diagnostics are abbreviated illustrative examples; exact locations, severity and available fixes vary by scanner version and configuration. --fix=safe is not a promise to repair every displayed finding or release design. Review the diff and remaining findings. Full Action pins select code, while runtime downloads remain separate inputs. Workflow permissions control GITHUB_TOKEN, not separately supplied App tokens, PATs or cloud credentials. Keep fresh execution, sandbox boundaries, release authority, artifact/cache trust and trigger handling in scope. An event can be treated as data and still need safe handling by the receiving command. None of these depicted commands is executed.

The original notes retain the September issue/comment campaign as supporting context: suspected account compromise, observed command execution in two runs, no confirmed downstream repository writes or token provenance. No incident count or actor link is added by this visual revision.

Sources:
- https://docs.zizmor.sh/usage/
- https://docs.zizmor.sh/audits/#unpinned-uses
- https://docs.zizmor.sh/audits/#excessive-permissions
- https://docs.github.com/en/actions/reference/security/secure-use

Composition: native animated terminal with the main deck's shared controller, plus three short engineering decisions. No new raster artwork.
-->

---

<!-- _class: workflow-scan-large safe chapter-controls -->

<style scoped>
section { background:#101414; padding:0; }
.wh-head { position:absolute!important; left:54px; right:54px; top:40px; }
.wh-head .eyebrow { font-size:14px; margin-bottom:17px; }
.wh-head h1 { font-size:58px; line-height:1.05; letter-spacing:-1.7px; margin:0; }
.wh-message { position:absolute!important; left:54px; top:159px; margin:0; font-size:27px; line-height:1.3; color:#E5EAE5; }
.wh-terminal { position:absolute!important; left:54px; width:846px; top:220px; height:420px; box-sizing:border-box; background:#0A1214; border:1px solid #A5D7BB55; border-radius:9px; overflow:hidden; box-shadow:0 18px 45px #0004; }
.wh-bar { background:#202C27; padding:10px 16px; display:flex; align-items:center; gap:8px; }
.wh-bar i { display:block; width:10px; height:10px; border-radius:50%; background:#ED8A85; }
.wh-bar i:nth-child(2) { background:#E6B65E; }
.wh-bar i:nth-child(3) { background:#A5D7BB; }
.wh-bar span { color:#BDCCC2; font:14px/1.3 'JetBrains Mono',monospace; margin-left:8px; }
.wh-body { padding:25px 22px 24px; font:26px/1.65 'JetBrains Mono',monospace; color:#EAF0E9; }
.wh-terminal .al { opacity:1; min-height:1.65em; white-space:pre; }
section.playing .wh-terminal .al { opacity:0; }
section.playing .wh-terminal .al.v { opacity:1; }
.wh-prompt { color:#A5D7BB; }
.wh-error { color:#ED8A85; font-weight:700; }
.wh-warn { color:#E6B65E; font-weight:700; }
.wh-comment { color:#B2C4B7; }
.wh-options { position:absolute!important; left:928px; right:54px; top:220px; display:grid; grid-template-columns:1fr; gap:17px; }
.wh-option { padding:17px 18px 20px; border-top:2px solid #A5D7BB77; background:#0B171C; }
.wh-option h2 { color:#F7F4EE; font-size:25px; line-height:1.2; margin:0 0 10px; }
.wh-option p { color:#C4D5CD; font-size:21px; line-height:1.3; margin:0; }
.wh-caption { position:absolute!important; left:54px; right:54px; bottom:32px; margin:0; color:#B6C5BC; font:15px/1.3 'JetBrains Mono',monospace; }
</style>

<div class="wh-head"><div class="eyebrow">02 · Trusted automation</div><h1>Harden your workflow</h1></div>
<p class="wh-message">Inspect. Change. Verify.</p>

<div class="terminal wh-terminal">
<div class="wh-bar"><i></i><i></i><i></i><span>defender@ci-pipeline · workflows</span></div>
<div class="wh-body">
<div class="al" data-delay="250" data-type="1000"><span class="wh-prompt">$</span> <span data-text="zizmor --persona pedantic .github/workflows/">zizmor --persona pedantic .github/workflows/</span></div>
<div class="al" data-delay="500"><span class="wh-error">error[unpinned-uses]</span>  actions/checkout@v6</div>
<div class="al" data-delay="550"><span class="wh-warn">warning[excessive-permissions]</span>  write-all</div>
<div class="al" data-delay="650" data-type="900"><span class="wh-prompt">$</span> <span data-text="zizmor --fix=safe .github/workflows/">zizmor --fix=safe .github/workflows/</span></div>
<div class="al" data-delay="500" data-type="800"><span class="wh-prompt">$</span> <span data-text="git diff -- .github/workflows/">git diff -- .github/workflows/</span></div>
<div class="al" data-delay="500" data-type="800"><span class="wh-prompt">$</span> <span data-text="zizmor .github/workflows/">zizmor .github/workflows/</span></div>
<div class="al" data-delay="400"><span class="wh-comment"># Inspect remaining findings; review behavior.</span></div>
</div>
</div>

<div class="wh-options">
<div class="wh-option"><h2>Pin Actions</h2><p>Review the selected commit.</p></div>
<div class="wh-option"><h2>Scope tokens</h2><p>Grant rights per job.</p></div>
<div class="wh-option"><h2>Review event input</h2><p>Pass untrusted text as data.</p></div>
</div>
<p class="wh-caption">Illustrative terminal · plays on entry · click to replay</p>

<!--
SLIDE 40 LARGE TERMINAL ALTERNATIVE · SPEAKER NOTES

Say:
Inspect two findings: a mutable Action reference and broad token grants. Apply available safe fixes, inspect the diff and run the audit again. Pin a reviewed commit, grant job-specific token rights and keep attacker-controlled event text out of executable shell interpolation.

Delivery:
The enlarged terminal occupies the left side, with more line spacing. Three short guidance boxes are stacked on the right. The typed sequence and click-to-replay behavior are preserved. This is a scripted reconstruction, not a live scan or an all-clear result. Click to replay. The final comment deliberately leaves review work visible.

Next:
Apply those boundaries during coding too.

Reference detail (not read aloud):
Comparison alternative only; main slide 40 remains unchanged. Diagnostics are abbreviated illustrative examples; exact locations, severity and available fixes vary by scanner version and configuration. --fix=safe is not a promise to repair every displayed finding or release design. Review the diff and remaining findings. Full Action pins select code, while runtime downloads remain separate inputs. Workflow permissions control GITHUB_TOKEN, not separately supplied App tokens, PATs or cloud credentials. Keep fresh execution, sandbox boundaries, release authority, artifact/cache trust and trigger handling in scope. An event can be treated as data and still need safe handling by the receiving command. None of these depicted commands is executed.

The original notes retain the September issue/comment campaign as supporting context: suspected account compromise, observed command execution in two runs, no confirmed downstream repository writes or token provenance. No incident count or actor link is added by this visual revision.

Sources:
- https://docs.zizmor.sh/usage/
- https://docs.zizmor.sh/audits/#unpinned-uses
- https://docs.zizmor.sh/audits/#excessive-permissions
- https://docs.github.com/en/actions/reference/security/secure-use

Composition: native animated terminal with the main deck's shared controller, plus three short engineering decisions. No new raster artwork.
-->

<script>
/* Presentation-only reconstructions. No displayed command is executed. */
(() => {
  const boot = () => {
    const roots = [...document.querySelectorAll('.terminal,.wed-term,.screen')]
      .filter(root => root.querySelector('.tl,.wl,.al'));
    const runs = new WeakMap();
    const fullText = root => root.querySelectorAll('[data-text]').forEach(node => {
      node.textContent = node.dataset.text;
    });
    const reset = root => {
      runs.get(root)?.abort();
      const section = root.closest('section');
      section.classList.remove('playing', 'copilot-on', 'answer-on');
      root.classList.remove('in-vim', 'after-vim');
      root.querySelectorAll('.tl,.wl,.al').forEach(line => {
        line.style.removeProperty('opacity');
        line.classList.remove('v');
      });
      root.querySelectorAll('.inserted.show,.replacement.fixed,.vim-command-line.show')
        .forEach(node => node.classList.remove('show', 'fixed'));
      fullText(root);
    };
    const play = async root => {
      reset(root);
      const controller = new AbortController();
      runs.set(root, controller);
      const { signal } = controller;
      const section = root.closest('section');
      const wait = ms => new Promise((resolve, reject) => {
        if (signal.aborted) return reject(signal.reason);
        const cancel = () => {
          clearTimeout(timer);
          reject(signal.reason);
        };
        const timer = setTimeout(() => {
          signal.removeEventListener('abort', cancel);
          resolve();
        }, ms);
        signal.addEventListener('abort', cancel, { once: true });
      });
      const type = async (node, text, duration) => {
        node.textContent = '';
        const step = Math.max(8, duration / Math.max(text.length, 1));
        for (let i = 1; i <= text.length; i++) {
          await wait(step);
          node.textContent = text.slice(0, i);
        }
      };
      const reveal = async line => {
        await wait(Number(line.dataset.delay || line.dataset.d || 200));
        line.style.opacity = '1';
        line.classList.add('v');
        const typed = line.querySelector('[data-text]');
        if (typed) await type(typed, typed.dataset.text,
          Number(line.dataset.type || line.dataset.t || 450));
      };
      const revealAll = async selector => {
        for (const line of root.querySelectorAll(selector)) await reveal(line);
      };
      root.querySelectorAll('.tl,.wl,.al').forEach(line => { line.style.opacity = '0'; });
      section.classList.add('playing');
      try {
        await wait(250);
        if (root.dataset.special === 'workflow') {
          await revealAll('.before-vim');
          await wait(5000);
          await revealAll('.enter-vim-line');
          await wait(900);
          root.classList.add('in-vim');
          await wait(560);
          for (const line of root.querySelectorAll('.inserted')) {
            line.classList.add('show');
            await wait(310);
          }
          for (const line of root.querySelectorAll('.replacement')) {
            line.classList.add('fixed');
            await wait(430);
          }
          await wait(5000);
          root.querySelector('.vim-command-line').classList.add('show');
          await wait(1050);
          root.classList.remove('in-vim');
          root.classList.add('after-vim');
          await revealAll('.after-vim-line');
        } else if (root.dataset.special === 'agent') {
          await revealAll('.al');
          await wait(3500);
          section.classList.add('copilot-on');
          await wait(450);
          const question = root.querySelector('.question');
          await type(question, question.dataset.text, 1800);
          await wait(500);
          section.classList.add('answer-on');
          for (const line of root.querySelectorAll('.answer-line')) {
            await wait(Number(line.dataset.delay || 180));
            await type(line, line.dataset.text, Number(line.dataset.type || 600));
          }
        } else {
          await revealAll('.tl,.wl,.al');
        }
      } catch (error) {
        if (!signal.aborted) console.error('Terminal animation failed', error);
      }
    };
    let current = null;
    const sync = () => {
      const view = document.body.dataset.bespokeView;
      const active = view === 'overview' || view === 'next' ? null
        : document.querySelector('svg.bespoke-marp-active');
      if (active === current) return;
      if (current) roots.filter(root => root.closest('svg') === current).forEach(reset);
      current = active;
      if (current) roots.filter(root => root.closest('svg') === current).forEach(play);
    };
    // Marp activates the SVG wrapper. Visibility observers can start hidden slides
    // because all slide wrappers occupy the same viewport position.
    const observer = new MutationObserver(sync);
    document.querySelectorAll('svg[data-marpit-svg]').forEach(svg => {
      observer.observe(svg, { attributes: true, attributeFilter: ['class'] });
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-bespoke-view'] });
    document.addEventListener('click', event => {
      const root = event.target.closest('.terminal,.wed-term,.screen');
      if (root && roots.includes(root)) play(root);
    });
    sync();
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
</script>
