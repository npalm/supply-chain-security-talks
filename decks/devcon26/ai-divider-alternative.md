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

<!-- _class: cinema ai section-divider chapter-attacks -->
![bg brightness:0.65](assets/img/reference/attackers-ai-superpowers-food-factory.png)
<div class="copy">
<div class="eyebrow">03 · AI amplification</div>
<h1>AI joined<br>the attack chain</h1>
<div class="divider-caption">More inputs. More reach.<br>Faster adaptation.</div>
</div>

<!--
SLIDE 24 · SPEAKER NOTES

Say:
AI adds instruction-bearing inputs and can help choose and adapt actions. It does not replace the input, execution and identity relationship. Start with an August 2025 precedent.

Next:
Play the S1ngularity reconstruction.

Reference detail (not read aloud):
AI involvement predates these 2026 cases. Introduce the next example explicitly as an August 2025 precedent, before Shai-Hulud 2.0. The chronology is intentional.

Composition source: GEECon 35
-->



---

<!-- _class: ai-roles chapter-attacks -->
![bg](assets/img/reference/attackers-ai-superpowers-food-factory.png)

<style scoped>
section { padding:0; }
section::before { content:''; position:absolute; inset:0; z-index:0; background:linear-gradient(90deg,#071017F0 0%,#071017D9 46%,#07101766 100%); }
.ai2-head { position:absolute!important; left:64px; right:64px; top:66px; }
.ai2-head .eyebrow { margin-bottom:18px; }
.ai2-head h1 { font-size:68px; line-height:1.04; margin:0; letter-spacing:-1.8px; }
.ai2-lede { position:absolute!important; left:64px; top:277px; margin:0; font-size:27px; color:#E5EAE5; }
.ai2-roles { position:absolute!important; left:64px; right:64px; top:355px; display:grid; grid-template-columns:1fr 1fr; gap:28px; }
.ai2-role { background:#0B161DEF; border-top:4px solid #ED8A85; padding:23px 26px 25px; }
.ai2-role:last-child { border-top-color:#E6B65E; }
.ai2-role .ai2-label { color:#ED8A85; font:600 16px/1.3 'JetBrains Mono',monospace; letter-spacing:.7px; text-transform:uppercase; margin-bottom:17px; }
.ai2-role:last-child .ai2-label { color:#E6B65E; }
.ai2-role h2 { font-size:29px; line-height:1.18; color:#F7F4EE; margin:0 0 16px; }
.ai2-role p { color:#CDD8D6; font-size:24px; line-height:1.4; margin:0; }
.ai2-lens { position:absolute!important; left:64px; right:64px; bottom:49px; padding-top:21px; border-top:1px solid #B1C2BA55; display:flex; align-items:center; gap:21px; font-size:23px; font-weight:600; color:#F7F4EE; }
.ai2-lens i { color:#E6B65E; font-style:normal; }
</style>

<div class="ai2-head"><div class="eyebrow">03 · AI amplification</div><h1>AI joined<br>the attack chain</h1></div>
<p class="ai2-lede">More inputs. More reach. Faster adaptation.</p>

<div class="ai2-roles">
<div class="ai2-role"><div class="ai2-label">For the attacker</div><h2>Build and adapt attacks</h2><p>AI can help with targeting,<br>payloads and adaptation.</p></div>
<div class="ai2-role"><div class="ai2-label">Inside our environment</div><h2>Turn instructions into actions</h2><p>AI can use the tools and identity<br>we make available.</p></div>
</div>

<div class="ai2-lens"><span>Untrusted input</span><i aria-hidden="true">→</i><span>Trusted automation</span><i aria-hidden="true">→</i><span>Existing identity</span></div>

<!--
AI DIVIDER ALTERNATIVE · SPEAKER NOTES

Say:
AI plays two roles here. It can help attackers build and adapt an attack. And inside our environment, it can turn incoming instructions into actions using our access. The input, automation and identity relationship is still the same.

Delivery:
Point first to attacker assistance, then to the tools and identity inside our environment. Keep the distinction visible as the examples unfold. Investigator assessments of AI use are separate from observed execution or a measured speed comparison.

Next:
Start inside the victim environment with an August 2025 precedent: S1ngularity attempted to use local AI tools. Explicitly introduce the backward step in time. Later, hackerbot-claw illustrates attacker assistance and adaptation; the WED research PoC illustrates instruction-bearing input reaching an authorized tool.

Reference detail (not read aloud):
This duplicates the current slide 24 divider for comparison. It changes only editable layout, text and narration; the existing artwork is reused. The main deck is unchanged. The two roles can occur in the same operation and are not mutually exclusive actor categories. Actual reach depends on tool configuration and available authority. Do not infer that every malicious prompt succeeded or that AI caused the inventory difference.

Sources already carried by the example slides:
- https://nx.dev/blog/s1ngularity-postmortem
- https://www.stepsecurity.io/blog/hackerbot-claw-github-actions-exploitation
- https://www.wiz.io/blog/six-accounts-one-actor-inside-the-prt-scan-supply-chain-campaign
- https://x.com/theonejvo/status/2015892980851474595
-->

---

<!-- _class: ai-roles-minimal chapter-attacks -->
![bg](assets/img/reference/attackers-ai-superpowers-food-factory.png)

<style scoped>
section { padding:0; }
.ai3-shade { position:absolute!important; inset:0; z-index:0!important; background:linear-gradient(90deg,#071017E8 0%,#07101788 52%,#07101722 100%),linear-gradient(0deg,#071017F2 0%,#071017AA 30%,transparent 60%); }
.ai3-head { position:absolute!important; left:64px; right:64px; top:88px; }
.ai3-head .eyebrow { margin-bottom:22px; }
.ai3-head h1 { font-size:76px; line-height:1.03; margin:0; letter-spacing:-2px; }
.ai3-slogans { position:absolute!important; left:64px; right:64px; bottom:99px; display:grid; grid-template-columns:1fr 1fr; gap:52px; }
.ai3-slogans h2 { border-left:4px solid #ED8A85; padding:4px 0 4px 24px; margin:0; color:#F7F4EE; font-size:43px; line-height:1.15; letter-spacing:-.7px; }
.ai3-slogans h2:last-child { border-left-color:#E6B65E; }
</style>

<div class="ai3-shade"></div>
<div class="ai3-head"><div class="eyebrow">03 · AI amplification</div><h1>AI joined<br>the attack chain</h1></div>
<div class="ai3-slogans"><h2>Build and adapt<br>attacks</h2><h2>Turn instructions<br>into actions</h2></div>

<!--
AI DIVIDER MINIMAL ALTERNATIVE · SPEAKER NOTES

Say:
AI plays two roles here. It can help attackers build and adapt an attack. And inside our environment, it can turn incoming instructions into actions using our access.

Delivery:
Point to the first slogan for attacker assistance and the second for AI acting inside our environment. Keep the explanation spoken; the slide carries only the chapter title and the two slogans.

Next:
Start with S1ngularity, an August 2025 precedent for attempted use of local AI tools. Introduce the backward step in time explicitly.

Reference detail (not read aloud):
Minimal variation of the preceding two-role divider. Same existing artwork and distinction, with the explanatory paragraphs, role labels, introductory slogan and bottom trust-model strip removed. The main deck remains unchanged. Actual AI use, success and authority depend on the evidence and configuration described on each following case slide.
-->
