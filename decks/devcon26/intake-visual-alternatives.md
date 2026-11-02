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

<!-- _class: control-example safe chapter-controls -->
<style scoped>
.c3layout { grid-template-columns:repeat(3,minmax(0,1fr)); gap:24px; top:205px; }
.c3panel pre { font-size:22px; line-height:1.6; padding:26px 20px; min-height:180px; }
.cooldown-scope { color:#B8C6BC; font-size:21px; margin:18px 0 0; }
.cooldown-decision { position:absolute; left:64px; right:64px; top:560px; font-size:27px; color:#E6B65E; }
</style>
<div class="c3head"><div class="c3kicker">01 · Input → execution · cooldown in practice</div><h1>Give fresh releases a cooldown</h1></div>
<div class="c3layout">
<div><div class="c3panel"><div class="c3file">pnpm · pnpm-workspace.yaml</div><pre><code>minimumReleaseAge:
  <span class="c3good">10080</span>
<span class="c3comment"># minutes = 7 days</span></code></pre></div><p class="cooldown-scope">Dependency resolution</p></div>
<div><div class="c3panel"><div class="c3file">Renovate · renovate.json</div><pre><code>{
 "minimumReleaseAge":
   <span class="c3good">"7 days"</span>
}</code></pre></div><p class="cooldown-scope">Update proposals</p></div>
<div><div class="c3panel"><div class="c3file">Dependabot · update excerpt</div><pre><code>cooldown:
  <span class="c3good">default-days: 7</span></code></pre></div><p class="cooldown-scope">Version update PRs</p></div>
</div>
<div class="cooldown-decision">Choose a delay. Review exceptions. Keep urgent fixes moving.</div>
<div class="c3bottom">Observation time helps. Review and isolate what eventually runs.</div>

<!--
SLIDE 33 · SPEAKER NOTES

Say:
Seven days is an example policy. pnpm applies a resolver setting; Renovate and Dependabot govern update proposals differently. Keep a reviewed exception path for urgent fixes. Waiting does not certify safety.

Next:
Then decide exactly which reviewed input may run.

Reference detail (not read aloud):
These are three different enforcement points, not interchangeable package-manager flags. Seven days is an example team policy. pnpm's number is minutes (available since 10.16); preserve existing workspace entries. Check lockfile reuse, registry timestamps and version-specific behavior; a mirror can omit publication metadata. Newer pnpm versions have additional strictness and missing-time controls. Dependency lifecycle approvals remain a separate policy, illustrated in examples/intake-policy.yaml. Root scripts, imports and remote helpers still need an execution boundary.

Renovate's minimumReleaseAge uses each release's timestamp. Its current default internalChecksFilter is strict; policies, automerge and supported datasources affect when branches/PRs appear. It is an update-bot policy, not a ban on a developer running another installer. Dependabot's cooldown belongs inside an updates entry, applies to version updates and does not delay security updates. Its shown excerpt needs the surrounding ecosystem, directory and schedule; examples/dependabot-cooldown.yml provides that shape. Keep a reviewed urgent-patch exception route rather than promising that every update can wait. No example was applied to this repository.

Sources:
- https://pnpm.io/settings/dependency-resolution
- https://docs.renovatebot.com/configuration-options/#minimumreleaseage
- https://docs.renovatebot.com/configuration-options/#internalchecksfilter
- https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#cooldown

Composition source: Separate cooldown examples, requested by the speaker
-->

---

<!-- _class: intake-art safe chapter-controls -->
![bg](assets/img/intake-cooldown-kitchen-v1.png)

<style scoped>
section { padding:0; }
.iv-shade { position:absolute!important; inset:0; z-index:0!important; background:linear-gradient(90deg,#0B1115C9,transparent 62%),linear-gradient(0deg,#0B1115F5 0%,#0B1115CC 25%,transparent 48%); }
.iv-head { position:absolute!important; left:64px; top:51px; width:690px; }
.iv-head .eyebrow { font-size:14px; margin-bottom:19px; }
.iv-head h1 { font-size:62px; line-height:1.05; letter-spacing:-1.7px; margin:0; }
.iv-message { position:absolute!important; left:64px; top:276px; margin:0; font-size:30px; line-height:1.3; color:#F7F4EE; }
.iv-delay { position:absolute!important; top:343px; left:64px; }
.iv-delay b { display:block; color:#E6B65E; font-size:76px; line-height:1.04; font-weight:900; letter-spacing:-3px; }
.iv-delay span { display:block; color:#C6D2CB; font-size:21px; margin-top:6px; }
.iv-options { position:absolute!important; left:64px; right:64px; top:510px; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
.iv-option { padding:15px 18px; border-top:2px solid #A5D7BB77; background:#0B171CEE; }
.iv-option h2 { color:#F7F4EE; font-size:22px; line-height:1.2; margin:0 0 7px; }
.iv-option .iv-tool { color:#B6C8BF; font-size:16px; line-height:1.3; margin:0 0 9px; }
.iv-option pre { border:0; padding:0; margin:0; background:none; color:#A5D7BB; font-size:18px; line-height:1.3; white-space:pre-wrap; overflow-wrap:anywhere; }
.iv-option code { padding:0; background:none; color:inherit; font-size:inherit; }
.iv-foot { position:absolute!important; left:64px; right:64px; bottom:28px; color:#D8C4A2; font-size:21px; line-height:1.3; margin:0; }
</style>

<div class="iv-shade"></div>
<div class="iv-head"><div class="eyebrow">01 · Input → execution</div><h1>Give fresh releases<br>a cooldown</h1></div>
<p class="iv-message">Wait. Observe. Review.</p>
<div class="iv-delay"><b>7 days</b><span>An example policy</span></div>

<div class="iv-options">
<div class="iv-option"><h2>Dependency resolution</h2><p class="iv-tool">pnpm · minutes</p><pre><code>minimumReleaseAge: 10080</code></pre></div>
<div class="iv-option"><h2>Update proposals</h2><p class="iv-tool">Renovate · config excerpt</p><pre><code>"minimumReleaseAge": "7 days"</code></pre></div>
<div class="iv-option"><h2>Version update PRs</h2><p class="iv-tool">Dependabot · update excerpt</p><pre><code>cooldown:
  default-days: 7</code></pre></div>
</div>
<p class="iv-foot">Keep a reviewed exception path for urgent fixes.</p>

<!--
COOLDOWN VISUAL ALTERNATIVE · SPEAKER NOTES

Say:
Wait, observe, then review. Seven days is an example team policy. The same intention can sit at different enforcement points: pnpm dependency resolution, Renovate proposals or Dependabot version-update PRs. Choose what fits the ecosystem and keep a reviewed path for urgent fixes.

Delivery:
Use the waiting rack and timer to explain deliberate delay before intake. The compact settings are alternatives the audience can recognize; explain their different enforcement points without reading every field. The timer is a metaphor for release age, not a claim that elapsed time proves a package safe.

Next:
Decide which exact reviewed input may run.

Reference detail (not read aloud):
Alternative to main slide 33; the main deck is unchanged. All three mechanisms are retained, with mechanism labels primary and tool names secondary. The code excerpts retain the existing seven-day policy and correct pnpm minute unit. Renovate's shown property belongs inside the complete configuration object; Dependabot's cooldown belongs inside an updates entry. Neither update bot constrains unrelated manual installs. Dependabot cooldown does not delay security updates. pnpm release-age behavior depends on version, existing lockfile resolution and publication metadata. Waiting does not review code, approve lifecycle execution or isolate what runs. Review exceptions deliberately and preserve existing configuration.

Sources and complete examples:
- https://pnpm.io/settings/dependency-resolution
- https://docs.renovatebot.com/configuration-options/#minimumreleaseage
- https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#cooldown
- examples/intake-policy.yaml
- examples/renovate-cooldown.json
- examples/dependabot-cooldown.yml

Artwork: built-in image_gen.imagegen, assets/artwork-intake-visual-alternatives-v1.json. Native labels, snippets and title remain editable.
-->

---

<!-- _class: control-example safe chapter-controls -->
<style scoped>
.pin-rows { position:absolute; left:64px; right:64px; top:198px; }
.pin-row { display:grid; grid-template-columns:190px 1fr; gap:35px; padding:20px 0; border-top:1px solid #84978C44; }
.pin-row h2 { font-size:28px; margin:0; color:#A5D7BB; }
.pin-row strong { display:block; font-size:26px; color:#F7F2E8; margin-bottom:9px; }
.pin-row code { color:#DCE9E0; font:20px/1.5 'JetBrains Mono',monospace; background:transparent; padding:0; }
.pin-row .pin-sha { font-size:18px; }
.pin-tools { position:absolute; left:64px; right:64px; top:560px; font-size:23px; color:#B8C6BC; }
.pin-tools strong { color:#E6B65E; }
</style>
<div class="c3head"><div class="c3kicker">01 · Input → execution · immutable selection in practice</div><h1>Keep reviewed inputs fixed</h1></div>
<div class="pin-rows">
<div class="pin-row"><h2>Packages</h2><div><strong>Commit the lockfile and integrity data</strong><code>pnpm install --frozen-lockfile</code></div></div>
<div class="pin-row"><h2>Actions</h2><div><strong>Allowlist reviewed Actions and pin the full commit</strong><code class="pin-sha">uses: actions/checkout@de0fac2e4500dabe0009e67214ff5f5447ce83dd</code></div></div>
<div class="pin-row"><h2>Images</h2><div><strong>Select the reviewed image digest</strong><code>image@sha256:&lt;reviewed digest&gt;</code></div></div>
</div>
<div class="pin-tools"><strong>GitHub policy:</strong> allow selected Actions and reusable workflows</div>
<div class="c3bottom">Review what may run, then fix the version that runs.</div>

<!--
SLIDE 34 · SPEAKER NOTES

Say:
Commit the lockfile, allowlist reviewed Actions and pin their commits, and select images by digest. Enforce selected external Actions and reusable workflows in GitHub policy. Local code and downloaded helpers still need review.

Next:
Assess the change before merging it.

Reference detail (not read aloud):
Return to tag hijacking: any Git tag is a mutable reference unless policy prevents changes. A full reviewed commit fixes Action selection. The checkout SHA is the verified v6.0.2 example used elsewhere in this deck. GitHub workflow dependency lockfiles are another option for onboarded workflows, currently public preview; they can cover transitive action dependencies and preserve repository identity. Their scope and reusable-workflow handling still matter. Do not imply a pinned Action also pins everything it downloads.

Package lockfiles and integrity constrain resolution; frozen installation catches drift rather than reviewing code or blocking lifecycle execution. The image digest is schematic, not a real deployable value. A digest selects content, while signatures/provenance and artifact review answer different origin and behavior questions. Keep pins maintained through reviewed bot PRs. zizmor's unpinned-uses audit checks Action reference policy, not package or image safety. Actionlint is not presented as a full-SHA enforcement tool. A configured organization policy can enforce Action SHA selection, with product/plan-specific scope. A lock can faithfully retain a malicious input, so intake review remains necessary.

Configure Actions → General to allow organization/local Actions plus selected external Actions and reusable workflows. Specify reviewed owner/repository@full-SHA entries, rather than blanket publisher wildcards. Enable the full-length Action SHA requirement where available. This policy still permits local/organization code; it does not review shell commands, helper downloads or runtime behavior. Reusable workflows need deliberate immutable references too; the Action SHA requirement does not force those workflow references to SHAs. See examples/actions-and-token-scope.md for the exact policy entry and distinction from token permissions.

Sources:
- https://docs.github.com/en/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization
- https://docs.github.com/en/actions/reference/security/secure-use
- https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles
- https://docs.zizmor.sh/audits/#unpinned-uses
- https://pnpm.io/cli/install
- https://docs.docker.com/dhi/core-concepts/digests/

Composition source: Immutable selection habits and automated maintenance/checks
-->

---

<!-- _class: intake-art safe chapter-controls -->
![bg](assets/img/intake-fixed-selection-kitchen-v1.png)

<style scoped>
section { padding:0; }
.ip-shade { position:absolute!important; inset:0; z-index:0!important; background:linear-gradient(90deg,#0B1115C9,transparent 62%),linear-gradient(0deg,#0B1115F5 0%,#0B1115CC 25%,transparent 48%); }
.ip-head { position:absolute!important; left:64px; top:51px; width:690px; }
.ip-head .eyebrow { font-size:14px; margin-bottom:19px; }
.ip-head h1 { font-size:62px; line-height:1.05; letter-spacing:-1.7px; margin:0; }
.ip-message { position:absolute!important; left:64px; top:276px; width:570px; margin:0; font-size:30px; line-height:1.3; color:#F7F4EE; }
.ip-options { position:absolute!important; left:64px; right:64px; top:510px; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
.ip-option { padding:16px 18px 19px; border-top:2px solid #A5D7BB77; background:#0B171CEE; }
.ip-option h2 { color:#F7F4EE; font-size:24px; line-height:1.2; margin:0 0 10px; }
.ip-option p { color:#A5D7BB; font-size:21px; line-height:1.3; margin:0 0 13px; }
.ip-option code { display:block; padding:0; background:none; color:#CAD7D0; font:18px/1.35 'JetBrains Mono',monospace; white-space:nowrap; }
.ip-foot { position:absolute!important; left:64px; right:64px; bottom:28px; color:#D8C4A2; font-size:21px; line-height:1.3; margin:0; }
</style>

<div class="ip-shade"></div>
<div class="ip-head"><div class="eyebrow">01 · Input → execution</div><h1>Keep reviewed<br>inputs fixed</h1></div>
<p class="ip-message">Review first.<br>Fix the selection.</p>

<div class="ip-options">
<div class="ip-option"><h2>Packages</h2><p>Lockfile + integrity</p><code>pnpm install --frozen-lockfile</code></div>
<div class="ip-option"><h2>Actions</h2><p>Full commit SHA</p><code>owner/action@&lt;full SHA&gt;</code></div>
<div class="ip-option"><h2>Images</h2><p>Content digest</p><code>image@sha256:&lt;digest&gt;</code></div>
</div>
<p class="ip-foot">Review updates before changing the selection.</p>

<!--
FIXED INPUTS VISUAL ALTERNATIVE · SPEAKER NOTES

Say:
Review first, then fix which input runs. Packages use committed lockfiles and integrity data, Actions use reviewed full commit SHAs, and images use reviewed digests. Keep those selections maintained through reviewed updates.

Delivery:
The fixed jig represents an exact selection that cannot drift when a name or tag moves. It does not establish the selected input's safety. Use the three examples as corresponding mechanisms; the full reviewed Action pin remains in the existing examples and original comparison slide.

Next:
Assess the change before merging it.

Reference detail (not read aloud):
Alternative to main slide 34; the main deck is unchanged. Action and image references contain explicit placeholders, not deployable values. Review and allowlist selected external Actions and reusable workflows in GitHub policy. Pin reusable-workflow calls separately; the Action SHA requirement and action dependency lockfiles have distinct scope. Local code, shell commands and downloaded helpers still need review. A lockfile can retain malicious code and does not block lifecycle execution; an Action pin does not pin arbitrary runtime downloads. Digests select content; signatures/provenance and review address different origin and behavior questions. A physical jig is an editorial selection metaphor, not a security boundary or certification.

Sources and complete examples:
- https://pnpm.io/cli/install
- https://docs.github.com/en/actions/reference/security/secure-use
- https://docs.github.com/en/actions/concepts/security/workflow-dependency-lockfiles
- https://docs.docker.com/dhi/core-concepts/digests/
- examples/actions-and-token-scope.md
- examples/pr-build.yml

Artwork: built-in image_gen.imagegen, assets/artwork-intake-visual-alternatives-v1.json. Native labels, examples and title remain editable.
-->
