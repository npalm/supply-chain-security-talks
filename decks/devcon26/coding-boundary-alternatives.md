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

<!-- _class: control-scene safe c3long chapter-controls -->
![bg](assets/img/controls-kitchen-workspace-v1.png)
<div class="c3shade"></div>
<div class="c3head"><div class="c3kicker">03 · Developer execution · principle</div><h1>Isolate the<br>coding environment</h1><div class="c3lede">The IDE, agent and install scripts share the workspace.</div><div class="c3points"><div>Expose the project they need</div><div>Choose reachable tools and services</div><div>Keep unrelated identities outside</div></div></div>
<div class="c3edge">Opening laptop · S1ngularity · WED</div>

<!--
SLIDE 41 · SPEAKER NOTES

Say:
The coding environment includes the IDE, extensions, startup tasks, install hooks and agents. Expose the project and services the task needs, and keep unrelated identity outside.

Next:
Inspect the authority already reachable there.

Reference detail (not read aloud):
The coding environment includes more than the agent process. Package hooks, IDE extensions, startup tasks, dev servers and agent tools may execute there. The limited prep bay is a physical callback to workspace, filesystem, network and identity boundaries. A devcontainer or container is a packaging choice; inspect its real mounts, sockets, process privileges, credential forwarding and egress. Do not assume default tool behavior supplies the desired boundary. The exact implementation can be a VM, evaluated sandbox or configured container appropriate to the threat.
Sources:
- https://docs.docker.com/engine/security/
- https://docs.docker.com/engine/security/rootless/

Composition source: Bounded kitchen preparation bay; development execution rather than agent-only sandbox
-->


---

<!-- _class: coding-isolation safe chapter-controls -->
![bg](assets/img/controls-kitchen-workspace-v1.png)
<style scoped>
section { padding:0; }
.ci-shade { position:absolute!important; inset:0; z-index:0!important; background:linear-gradient(90deg,#0B1115D9 0%,#0B111566 48%,transparent 76%),linear-gradient(0deg,#0B1115F5 0%,#0B1115CC 25%,transparent 48%); }
.ci-head { position:absolute!important; left:64px; top:51px; width:810px; }
.ci-head .eyebrow { font-size:14px; margin-bottom:19px; }
.ci-head h1 { font-size:60px; line-height:1.05; letter-spacing:-1.7px; margin:0; }
.ci-message { position:absolute!important; left:64px; top:282px; width:570px; margin:0; font-size:30px; line-height:1.3; color:#F7F4EE; }
.ci-options { position:absolute!important; left:64px; right:64px; top:510px; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
.ci-option { padding:19px 18px 23px; border-top:2px solid #A5D7BB77; background:#0B171CEE; }
.ci-option h2 { color:#F7F4EE; font-size:25px; line-height:1.2; margin:0 0 15px; }
.ci-option p { color:#C4D5CD; font-size:22px; line-height:1.35; margin:0; }
.ci-foot { position:absolute!important; left:64px; right:64px; bottom:28px; color:#D8C4A2; font-size:21px; line-height:1.3; margin:0; }
</style>
<div class="ci-shade"></div>
<div class="ci-head"><div class="eyebrow">03 · Developer execution</div><h1>Isolate the<br>coding environment</h1></div>
<p class="ci-message">Give the task what it needs.</p>
<div class="ci-options">
<div class="ci-option"><h2>Files</h2><p>Share the project.</p></div>
<div class="ci-option"><h2>Network</h2><p>Choose reachable services.</p></div>
<div class="ci-option"><h2>Identity</h2><p>Keep unrelated access out.</p></div>
</div>
<p class="ci-foot">Check the IDE, extensions, hooks and agent tools.</p>

<!--
SLIDE 41 ALTERNATIVE · SPEAKER NOTES

Say:
Give the coding task the project, services and identity it needs. Inspect the IDE, extensions, hooks and agent tools together; they can have different execution locations and inherited access.

Delivery:
Use the bounded preparation station to introduce filesystem, network and identity decisions. The three short cards name those decisions without prescribing a particular product.

Next:
Inspect the authority already reachable there.

Reference detail (not read aloud):
Comparison alternative only; main slide 41 remains unchanged. Existing detailed evidence and product caveats are preserved below. All artwork is reused; titles and control labels are editable native content.

The coding environment includes more than the agent process. Package hooks, IDE extensions, startup tasks, dev servers and agent tools may execute there. The limited prep bay is a physical callback to workspace, filesystem, network and identity boundaries. A devcontainer or container is a packaging choice; inspect its real mounts, sockets, process privileges, credential forwarding and egress. Do not assume default tool behavior supplies the desired boundary. The exact implementation can be a VM, evaluated sandbox or configured container appropriate to the threat.
Sources:
- https://docs.docker.com/engine/security/
- https://docs.docker.com/engine/security/rootless/

Composition source: Bounded kitchen preparation bay; development execution rather than agent-only sandbox
-->

---

<!-- _class: risk chapter-controls -->

![bg](assets/img/reference/borrowed-trust-cutaway.png)

<style scoped>
section::before { background: linear-gradient(90deg, rgba(1,8,20,.99), rgba(1,8,20,.9) 48%, rgba(1,8,20,.28)); content: ''; inset: 0; position: absolute; }
.copy { background: linear-gradient(90deg, rgba(1,8,20,.94), rgba(1,8,20,.78)); border: 1px solid rgba(248,85,105,.22); box-shadow: 0 24px 60px rgba(0,0,0,.28); padding: 18px 22px; width: 49%; }
.copy h1 { font-size: 1.92em; }
.agent-reach { display: grid; gap: 0; margin-top: 24px; }
.agent-reach div { align-items: baseline; border-bottom: 1px solid rgba(189,240,255,.2); display: grid; gap: 14px; grid-template-columns: 125px 1fr; padding: 8px 0; }
.agent-reach strong { color: #fda4af; font-family: 'JetBrains Mono', monospace; font-size:19px; }
.agent-reach span { color: #fff; font-size:22px; font-weight: 800; }
.bottom-line { background: rgba(1,8,20,.84); padding: 8px 12px; }
</style>

<div class="copy">
<div class="eyebrow">Package execution is only one path</div>

# The agent may inherit your reach

<div class="agent-reach">
<div><strong>FILES</strong><span>Workstation and repositories</span></div>
<div><strong>DATA</strong><span>Documents, prompts, databases</span></div>
<div><strong>IDENTITY</strong><span>Tokens, keys, cloud sessions</span></div>
<div><strong>NETWORK</strong><span>Connected services</span></div>
<div><strong>TOOLS</strong><span>Shell, browser, deployment</span></div>
</div>
</div>

<div class="bottom-line">More input sources can reach more tools and identities.</div>

<!--
SLIDE 42 · SPEAKER NOTES

Say:
Look at files, data, identity, network and tools together. An agent can choose another action after reading a result, but available reach still depends on its actual configuration.

Next:
Choose an implementation for the same coding task.

Reference detail (not read aloud):
Point to files, data, identity, network and tools. Explain that AI adds instruction-bearing context and can interpret results to choose another action. Access depends on configuration; some products isolate by default, others inherit considerable local or connected authority. Build execution and release authority will be separated in the identity example on slide 45. Now identify the files, data, identities, network and tools available during coding.
Composition source: Prompt to Product 16
-->



---

<!-- _class: coding-reach safe chapter-controls -->
![bg](assets/img/reference/borrowed-trust-cutaway.png)
<style scoped>
section { padding:0; }
.cr-shade { position:absolute!important; inset:0; z-index:0!important; background:linear-gradient(90deg,#0B1115D9 0%,#0B111566 48%,transparent 76%),linear-gradient(0deg,#0B1115F5 0%,#0B1115CC 25%,transparent 48%); }
.cr-head { position:absolute!important; left:64px; top:51px; width:810px; }
.cr-head .eyebrow { font-size:14px; margin-bottom:19px; }
.cr-head h1 { font-size:60px; line-height:1.05; letter-spacing:-1.7px; margin:0; }
.cr-message { position:absolute!important; left:64px; top:282px; width:570px; margin:0; font-size:30px; line-height:1.3; color:#F7F4EE; }
.cr-options { position:absolute!important; left:64px; right:64px; top:510px; display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:14px; }
.cr-option { padding:19px 15px 23px; border-top:2px solid #A5D7BB77; background:#0B171CEE; }
.cr-option h2 { color:#F7F4EE; font-size:23px; line-height:1.2; margin:0 0 15px; }
.cr-option p { color:#C4D5CD; font-size:20px; line-height:1.35; margin:0; }
.cr-foot { position:absolute!important; left:64px; right:64px; bottom:28px; color:#D8C4A2; font-size:21px; line-height:1.3; margin:0; }
</style>
<div class="cr-shade"></div>
<div class="cr-head"><div class="eyebrow">03 · Developer execution</div><h1>The agent may<br>inherit your reach</h1></div>
<p class="cr-message">Inspect what it can reach.</p>
<div class="cr-options">
<div class="cr-option"><h2>Files</h2><p>Workspace<br>and repos</p></div>
<div class="cr-option"><h2>Data</h2><p>Documents<br>and stores</p></div>
<div class="cr-option"><h2>Identity</h2><p>Tokens<br>and sessions</p></div>
<div class="cr-option"><h2>Network</h2><p>Connected<br>services</p></div>
<div class="cr-option"><h2>Tools</h2><p>Shell<br>and deployment</p></div>
</div>
<p class="cr-foot">Inspect the effective configuration.</p>

<!--
SLIDE 42 ALTERNATIVE · SPEAKER NOTES

Say:
Inspect five kinds of reach: files, data, identity, network and tools. An agent may choose another action after reading a result, but its actual reach depends on the effective configuration.

Delivery:
Keep the existing robot and hidden-machinery artwork visible. Point across the five categories; avoid implying that every agent inherits every form of access.

Next:
Choose an implementation for the same coding task.

Reference detail (not read aloud):
Comparison alternative only; main slide 42 remains unchanged. Existing detailed evidence and product caveats are preserved below. All artwork is reused; titles and control labels are editable native content.

Point to files, data, identity, network and tools. Explain that AI adds instruction-bearing context and can interpret results to choose another action. Access depends on configuration; some products isolate by default, others inherit considerable local or connected authority. Build execution and release authority will be separated in the identity example on slide 45. Now identify the files, data, identities, network and tools available during coding.
Composition source: Prompt to Product 16
-->

---

<!-- _class: control-example safe chapter-controls -->
<style scoped>
.boundary-options { position:absolute; left:64px; right:64px; top:195px; }
.boundary-option { display:grid; grid-template-columns:285px 300px 1fr; gap:28px; padding:17px 0; min-height:58px; border-top:1px solid #A5D7BB44; align-items:start; }
.boundary-option h2 { color:#A5D7BB; font-size:26px; line-height:1.15; margin:0; }
.boundary-option small { display:block; color:#B0BDB5; font-size:18px; line-height:1.4; margin-top:6px; }
.boundary-option p { color:#EDF0E9; font-size:23px; line-height:1.3; margin:0; }
.boundary-option .inspect { color:#C7D4CB; }
</style>
<div class="c3head"><div class="c3kicker">03 · Developer execution · in practice</div><h1>Choose the coding boundary</h1></div>
<div class="boundary-options">
<div class="boundary-option"><div><h2>Devcontainers</h2><small>VS Code · CLI · Codespaces</small></div><p>A project environment</p><p class="inspect">Inspect mounts and available Git / SSH authority.</p></div>
<div class="boundary-option"><div><h2>Docker Sandboxes</h2><small>Local microVM boundary</small></div><p>The coding toolchain<br>inside a VM</p><p class="inspect">Review shared paths, egress and credential proxy.</p></div>
<div class="boundary-option"><div><h2>AI tool sandbox</h2><small>e.g. Claude Code Bash</small></div><p>A tool-specific<br>execution boundary</p><p class="inspect">Which tools run outside?<br>Can commands retry outside?</p></div>
<div class="boundary-option"><div><h2>Disposable VM</h2><small>Or a remote workspace</small></div><p>A fresh environment<br>for the task</p><p class="inspect">Limit attached identities and outbound access.</p></div>
</div>
<div class="c3bottom">Credential proxies: Docker Sandboxes · nono · Infisical Agent Vault</div>

<!--
SLIDE 43 · SPEAKER NOTES

Say:
Use the lunch-poll task across these options. Inspect a devcontainer's mounts and forwarded credentials; distinguish a local microVM from a tool-specific Bash sandbox. Docker Sandboxes and nono also support credential proxying, alongside Infisical Agent Vault. Hiding the key does not prevent misuse of allowed API operations.

Next:
Scope that remaining authority deliberately.

Reference detail (not read aloud):
Walk the SAME lunch-poll coding task through these choices, not four unrelated product pitches. A devcontainer describes a project environment; local VS Code, the devcontainer CLI and a cloud-hosted Codespace do not inherit identical host mounts or identities. VS Code can reuse local Git helpers and forward an SSH agent. Codespaces hosts its devcontainer on a VM; inspect its supplied tokens, secrets and reach too. Review the actual configuration before installs and startup tasks.

Docker's current LOCAL Sandboxes product uses a microVM, with explicit workspace sharing, proxied networking and a host-side MCP integration. Choose direct/clone/mountless behavior and inspect policy, shared skills and host processes. It differs from an ordinary docker run and from cloud-product defaults; do not use an older CLI example blindly.

Claude Code illustrates the tool-native category: its Bash sandbox covers shell commands and children. Other file/web tools, hooks and local MCP processes have separate boundaries. Inspect activation, excluded commands, unsandboxed retries and failure behavior. A whole-environment VM can cover more of the toolchain, but still needs deliberate mounts, network, identity and disposal. These are implementation choices, not a security ranking or proof the product is hardened by default.

Credential brokering is an additional layer, not an execution sandbox. Here Agent Vault means Infisical's HTTP credential proxy. Keep it outside the agent boundary, scope proxy/service authority and enforce the route. Its unmatched-host behavior requires review; keeping raw keys hidden does not prevent abuse of an allowed API. The next identity module explains that remaining authority. See design/boundary-options.md and examples/coding-boundary.md. Product documentation was checked on 20 October; no product was installed or evaluated here. OpenShell and Kubernetes SIGs agent-sandbox are further platform-team options in the resources, not extra tools to explain on this slide.

Sources:
- https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials
- https://containers.dev/implementors/json_reference/
- https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers
- https://docs.docker.com/ai/sandboxes/security/
- https://code.claude.com/docs/en/sandboxing
- https://github.com/Infisical/agent-vault
- https://docs.agent-vault.dev/learn/services


Credential handling checked 21 October: local Docker Sandboxes can inject service credentials in the host proxy while the sandbox sees a placeholder. Review per-sandbox bindings and scope. OAuth passthrough can expose real token responses. SSH-agent forwarding is a separate authority path and is enabled by default in the documented local setup; private keys staying on the host does not stop signing/authentication through a forwarded agent. Local MCP processes remain outside the VM boundary.

nono documents Linux Landlock/macOS Seatbelt filesystem restrictions and a separate credential proxy for configured API routes. Its environment-variable injection mode exposes the secret to the child; do not equate that mode with proxy isolation. Review the chosen profile, network enforcement and platform support. Neither tool was installed or evaluated here. Keeping a key unreadable does not prevent an allowed request from abusing the authority behind it.

Additional primary sources fetched 21 October 2026:
- https://docs.docker.com/ai/sandboxes/configuration/credentials
- https://docs.docker.com/ai/sandboxes/security/isolation
- https://nono.sh/
- https://nono.sh/os-sandbox
- https://nono.sh/credential-injection

Composition source: One coding task, concrete environment choices and inspection actions
-->

---

<!-- _class: coding-options safe chapter-controls -->
<style scoped>
section { background:#101414; padding:0; }
.co-head { position:absolute!important; left:64px; right:64px; top:51px; }
.co-head .eyebrow { font-size:14px; margin-bottom:19px; }
.co-head h1 { font-size:58px; line-height:1.05; letter-spacing:-1.7px; margin:0; }
.co-message { position:absolute!important; left:64px; top:166px; margin:0; color:#E5EAE5; font-size:27px; line-height:1.3; }
.co-options { position:absolute!important; left:64px; right:64px; top:223px; display:grid; grid-template-columns:1fr 1fr; gap:22px; }
.co-option { padding:20px 24px 23px; background:#0B171C; border-top:2px solid #A5D7BB88; }
.co-option h2 { color:#F7F4EE; font-size:29px; line-height:1.15; margin:0 0 10px; }
.co-option .co-scope { color:#A5D7BB; font-size:22px; line-height:1.3; margin:0 0 14px; }
.co-option .co-inspect { color:#C4D5CD; font-size:21px; line-height:1.35; margin:0; }
.co-maturity { position:absolute!important; left:64px; right:64px; bottom:70px; color:#B8C8BF; font-size:19px; line-height:1.3; margin:0; }
.co-foot { position:absolute!important; left:64px; right:64px; bottom:28px; color:#D8C4A2; font-size:21px; line-height:1.3; margin:0; }
</style>
<div class="co-head"><div class="eyebrow">03 · Developer execution</div><h1>Choose the coding boundary</h1></div>
<p class="co-message">Same task. Different boundaries. Options can combine.</p>
<div class="co-options">
<div class="co-option"><h2>Project environments</h2><p class="co-scope">Devcontainers · hosted workspaces</p><p class="co-inspect">Inspect mounts, startup code and forwarding.</p></div>
<div class="co-option"><h2>Tool / process sandboxes</h2><p class="co-scope">Claude Code Bash · nono</p><p class="co-inspect">Check coverage, exclusions and outside retries.</p></div>
<div class="co-option"><h2>VM / microVM workspaces</h2><p class="co-scope">Docker Sandboxes · disposable VMs</p><p class="co-inspect">Inspect shared resources, identity and egress.</p></div>
<div class="co-option"><h2>Policy-managed runtimes</h2><p class="co-scope">NVIDIA OpenShell</p><p class="co-inspect">Inspect the compute driver and effective policy.</p></div>
</div>
<p class="co-maturity">Maturity varies by tool, feature and platform. Evaluate the actual boundary.</p>
<p class="co-foot">Then scope the identity inside the boundary.</p>

<!--
SLIDE 43 ALTERNATIVE · SPEAKER NOTES

Say:
Use the same lunch-poll task across four choices: a project environment, tool or process restrictions, a VM-backed workspace, or a policy-managed agent runtime. These can combine. OpenShell manages agent access policy across multiple compute drivers; inspect both the selected driver and the effective policy. Then scope the identity available inside the chosen boundary.

Delivery:
Compare coverage and configuration, not a security ranking. The small maturity note avoids presenting these implementations as equally mature recommendations; release status is specific to the tool, feature and platform. Docker Sandboxes and disposable VMs share one card so OpenShell can be explicit. Project environments are packaging and deployment choices; their actual outer isolation varies. Tool/process coverage is product-specific. Credential proxies remain in the notes and resources as a separate authority-control layer.

Next:
Scope that remaining authority deliberately.

Reference detail (not read aloud):
Comparison alternative only; main slide 43 remains unchanged. Existing detailed evidence and product caveats are preserved below. All artwork is reused; titles and control labels are editable native content.

Research refresh · 2 November 2026:
The four groups are a teaching aid, not mutually exclusive security categories. OpenShell v0.1.6 documents Docker, Podman, Kubernetes and MicroVM compute drivers, a trusted supervisor, declared access policy, mediated egress and credential injection into approved requests. Its actual isolation depends on the driver and effective configuration; do not describe every OpenShell deployment as a VM or equate the software with NVIDIA's Sentry hardware reference system. NemoClaw is the OpenClaw-oriented stack, while OpenShell is the relevant general runtime example here. The October reference-architecture announcement is distinct from individual feature availability.

Local Docker Sandboxes uses microVM isolation; its cloud deployment has different integrations and network-policy scope. A disposable VM still needs explicit mounts, egress, identity and disposal. Claude Code Bash and nono illustrate differing tool/process scopes; inspect their supported enforcement and any routes outside the chosen boundary. Kubernetes SIGs Agent Sandbox adds workload lifecycle/orchestration; low-level isolation depends on the selected RuntimeClass, such as gVisor or Kata. Keep it as an additional platform-team reference. Credential handling and policy-change authority need review across every option. No product was installed or evaluated during this research.

Current primary sources:
- https://docs.nvidia.com/openshell/about/overview
- https://docs.nvidia.com/openshell/latest/about/architecture
- https://docs.nvidia.com/openshell/latest/about/support-matrix
- https://nvidianews.nvidia.com/news/openshell-reference-architecture
- https://docs.docker.com/ai/sandboxes/cloud/local-vs-cloud/
- https://code.claude.com/docs/en/sandboxing
- https://nono.sh/os-sandbox
- https://agent-sandbox.sigs.k8s.io/docs/guides/gvisor/
- coding-boundary-research-2026-11-02.md


Walk the SAME lunch-poll coding task through these choices, not four unrelated product pitches. A devcontainer describes a project environment; local VS Code, the devcontainer CLI and a cloud-hosted Codespace do not inherit identical host mounts or identities. VS Code can reuse local Git helpers and forward an SSH agent. Codespaces hosts its devcontainer on a VM; inspect its supplied tokens, secrets and reach too. Review the actual configuration before installs and startup tasks.

Docker's current LOCAL Sandboxes product uses a microVM, with explicit workspace sharing, proxied networking and a host-side MCP integration. Choose direct/clone/mountless behavior and inspect policy, shared skills and host processes. It differs from an ordinary docker run and from cloud-product defaults; do not use an older CLI example blindly.

Claude Code illustrates the tool-native category: its Bash sandbox covers shell commands and children. Other file/web tools, hooks and local MCP processes have separate boundaries. Inspect activation, excluded commands, unsandboxed retries and failure behavior. A whole-environment VM can cover more of the toolchain, but still needs deliberate mounts, network, identity and disposal. These are implementation choices, not a security ranking or proof the product is hardened by default.

Credential brokering is an additional layer, not an execution sandbox. Here Agent Vault means Infisical's HTTP credential proxy. Keep it outside the agent boundary, scope proxy/service authority and enforce the route. Its unmatched-host behavior requires review; keeping raw keys hidden does not prevent abuse of an allowed API. The next identity module explains that remaining authority. See design/boundary-options.md and examples/coding-boundary.md. Product documentation was checked on 20 October; no product was installed or evaluated here. OpenShell and Kubernetes SIGs agent-sandbox are further platform-team options in the resources, not extra tools to explain on this slide.

Sources:
- https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials
- https://containers.dev/implementors/json_reference/
- https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers
- https://docs.docker.com/ai/sandboxes/security/
- https://code.claude.com/docs/en/sandboxing
- https://github.com/Infisical/agent-vault
- https://docs.agent-vault.dev/learn/services


Credential handling checked 21 October: local Docker Sandboxes can inject service credentials in the host proxy while the sandbox sees a placeholder. Review per-sandbox bindings and scope. OAuth passthrough can expose real token responses. SSH-agent forwarding is a separate authority path and is enabled by default in the documented local setup; private keys staying on the host does not stop signing/authentication through a forwarded agent. Local MCP processes remain outside the VM boundary.

nono documents Linux Landlock/macOS Seatbelt filesystem restrictions and a separate credential proxy for configured API routes. Its environment-variable injection mode exposes the secret to the child; do not equate that mode with proxy isolation. Review the chosen profile, network enforcement and platform support. Neither tool was installed or evaluated here. Keeping a key unreadable does not prevent an allowed request from abusing the authority behind it.

Additional primary sources fetched 21 October 2026:
- https://docs.docker.com/ai/sandboxes/configuration/credentials
- https://docs.docker.com/ai/sandboxes/security/isolation
- https://nono.sh/
- https://nono.sh/os-sandbox
- https://nono.sh/credential-injection

Composition source: One coding task, concrete environment choices and inspection actions
-->
