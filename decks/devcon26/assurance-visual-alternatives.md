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
.review-layout { position:absolute!important; left:64px; right:64px; top:196px; display:grid; grid-template-columns:1.08fr 1fr; gap:48px; }
.review-row { padding:17px 0 19px; border-top:1px solid #71816C55; }
.review-row h2 { font-size:27px; margin:0 0 8px; color:#A5D7BB; }
.review-row p { font-size:23px; margin:0; color:#D6DED6; line-height:1.32; }
.review-policy .c3panel pre { font-size:21px; line-height:1.6; padding:25px 22px; }
.review-policy p { font-size:22px; margin:22px 0 0; color:#C5CEC5; line-height:1.4; }
.review-policy b { color:#F7F2E8; }
</style>
<div class="c3head"><div class="c3kicker">01 · Input → execution · dependency review</div><h1>Assess changes before merging</h1></div>
<div class="review-layout">
<div><div class="review-row"><h2>OpenSSF Scorecard</h2><p>Inspect upstream security practices<br>and individual findings.</p></div><div class="review-row"><h2>OSV-Scanner</h2><p>Check resolved dependencies<br>against published advisories.</p></div><div class="review-row"><h2>GitHub Dependency Review</h2><p>Review the dependency diff<br>and enforce the PR policy.</p></div></div>
<div class="review-policy"><div class="c3panel"><div class="c3file">Dependency Review · with: excerpt</div><pre><code><span class="c3comment"># fail on known vulnerabilities</span>&#10;fail-on-severity: <span class="c3good">high</span>&#10;&#10;<span class="c3comment"># show upstream risk signals</span>&#10;show-openssf-scorecard: <span class="c3good">true</span>&#10;warn-on-openssf-scorecard-level: 3</code></pre></div><p><b>Require the check before merging.</b><br>The Scorecard threshold warns;<br>the vulnerability policy can fail.</p></div>
</div>
<div class="c3bottom">A strong score and a clean advisory scan cannot certify a release.</div>

<!--
SLIDE 35 · SPEAKER NOTES

Say:
Use three signals: upstream practices from Scorecard, known advisories through OSV, and the dependency diff through Dependency Review. Make the required check deliberate. A score or clean advisory result does not certify a release.

Next:
Put the intake decision on the download path too.

Reference detail (not read aloud):
The code is an actual supported `with:` configuration excerpt, not a complete workflow. A complete example lives in examples/dependency-review.example.yml. Use a reviewed full Action commit. `fail-on-severity: high` is an illustrative team choice, not a universal threshold. `warn-on-openssf-scorecard-level` is a warning threshold; it does not fail the Action. An aggregate score is a heuristic, and individual findings are more useful than treating one numeric threshold as certification. Public data can be absent or out of date. A compromised maintainer or build can still publish malware from a project with strong practices.

OSV-Scanner matches supported dependency inputs to published advisories; it is not a guarantee of first-seen malware detection. Dependency graph coverage and submitted build dependency data affect the PR diff. Dependency Review is available for public repositories and private repositories with the applicable GitHub Advanced Security / Code Security entitlement; check the current repository plan and feature configuration. Configure branch rules/rulesets to require the check and restrict bypass and changes to the workflow. The excerpt does not itself enforce branch rules.

Sources fetched 21 October 2026:
- https://github.com/ossf/scorecard
- https://google.github.io/osv-scanner/
- https://google.github.io/osv-scanner/usage/scan-source
- https://github.com/actions/dependency-review-action
-->


---

<!-- _class: assurance-art safe chapter-controls -->
![bg](assets/img/intake-assess-kitchen-v1.png)

<style scoped>
section { padding:0; }
.av-shade { position:absolute!important; inset:0; z-index:0!important; background:linear-gradient(90deg,#0B1115CF,transparent 63%),linear-gradient(0deg,#0B1115F5 0%,#0B1115CC 25%,transparent 48%); }
.av-head { position:absolute!important; left:64px; top:51px; width:740px; }
.av-head .eyebrow { font-size:14px; margin-bottom:19px; }
.av-head h1 { font-size:60px; line-height:1.05; letter-spacing:-1.7px; margin:0; }
.av-message { position:absolute!important; left:64px; top:282px; width:570px; margin:0; font-size:30px; line-height:1.3; color:#F7F4EE; }
.av-options { position:absolute!important; left:64px; right:64px; top:510px; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
.av-option { padding:17px 18px 21px; border-top:2px solid #A5D7BB77; background:#0B171CEE; }
.av-option h2 { color:#F7F4EE; font-size:23px; line-height:1.2; margin:0 0 9px; }
.av-option small { display:block; color:#B6C8BF; font-size:16px; line-height:1.3; margin:0 0 12px; }
.av-option p { color:#A5D7BB; font-size:21px; line-height:1.3; margin:0; }
.av-foot { position:absolute!important; left:64px; right:64px; bottom:28px; color:#D8C4A2; font-size:21px; line-height:1.3; margin:0; }
</style>

<div class="av-shade"></div>
<div class="av-head"><div class="eyebrow">01 · Input → execution</div><h1>Assess changes<br>before merging</h1></div>
<p class="av-message">Three signals.<br>One review decision.</p>
<div class="av-options">
<div class="av-option"><h2>Upstream practices</h2><small>OpenSSF Scorecard</small><p>Inspect the findings</p></div>
<div class="av-option"><h2>Known advisories</h2><small>OSV-Scanner</small><p>Check resolved versions</p></div>
<div class="av-option"><h2>Dependency changes</h2><small>GitHub Dependency Review</small><p>Require the PR check</p></div>
</div>
<p class="av-foot">A score or clean scan cannot certify a release.</p>

<!--
SLIDE 35 VISUAL ALTERNATIVE · SPEAKER NOTES

Say:
Use three signals to assess the change: upstream practices, published advisories and the dependency diff. Inspect the findings and require the PR check under an explicit policy. A strong score or clean advisory result cannot certify a release.

Delivery:
The two ingredient samples and inspection bench stand for reviewing what changed before accepting it. Keep the tool names secondary to their distinct signals. The supported Dependency Review settings remain in examples/dependency-review.example.yml.

Next:
Put the intake decision on the download path too.

Reference detail (not read aloud):
Alternative only; main slide 35 remains unchanged. Existing detailed evidence and configuration caveats are preserved below.

The supporting `with:` configuration excerpt lives in examples/dependency-review.example.yml; it is not a complete workflow. Use a reviewed full Action commit. `fail-on-severity: high` is an illustrative team choice, not a universal threshold. `warn-on-openssf-scorecard-level` is a warning threshold; it does not fail the Action. An aggregate score is a heuristic, and individual findings are more useful than treating one numeric threshold as certification. Public data can be absent or out of date. A compromised maintainer or build can still publish malware from a project with strong practices.

OSV-Scanner matches supported dependency inputs to published advisories; it is not a guarantee of first-seen malware detection. Dependency graph coverage and submitted build dependency data affect the PR diff. Dependency Review is available for public repositories and private repositories with the applicable GitHub Advanced Security / Code Security entitlement; check the current repository plan and feature configuration. Configure branch rules/rulesets to require the check and restrict bypass and changes to the workflow. The excerpt does not itself enforce branch rules.

Sources fetched 21 October 2026:
- https://github.com/ossf/scorecard
- https://google.github.io/osv-scanner/
- https://google.github.io/osv-scanner/usage/scan-source
- https://github.com/actions/dependency-review-action

Artwork: built-in image_gen.imagegen; assets/artwork-assurance-visual-alternatives-v1.json. Titles, labels and examples remain editable native content.
-->

---

<!-- _class: control-example safe chapter-controls -->
<style scoped>
.mirror-flow { position:absolute!important; left:64px; right:64px; top:204px; display:grid; grid-template-columns:1fr 52px 1.22fr 52px 1fr; align-items:center; gap:14px; border-top:1px solid #71816C55; border-bottom:1px solid #71816C55; padding:24px 0; }
.mirror-flow h2 { font-size:29px; color:#F7F2E8; margin:0 0 9px; }
.mirror-flow p { font-size:21px; color:#B8C6BC; margin:0; }
.mirror-flow .mirror-arrow { font-size:39px; color:#A5D7BB; text-align:center; }
.mirror-flow .mirror-gate h2 { color:#A5D7BB; }
.mirror-detail { position:absolute!important; left:64px; right:64px; top:391px; display:grid; grid-template-columns:1fr 1fr; gap:72px; }
.mirror-detail h2 { color:#A5D7BB; font-size:25px; margin:0 0 17px; }
.mirror-detail p { color:#D6DED6; font-size:24px; margin:0 0 14px; line-height:1.35; }
</style>
<div class="c3head"><div class="c3kicker">01 · Input → execution · enforced intake</div><h1>Enforce intake through a mirror</h1></div>
<div class="mirror-flow"><div><h2>Public registries</h2><p>New packages and versions</p></div><div class="mirror-arrow">→</div><div class="mirror-gate"><h2>Policy and quarantine</h2><p>Allow, hold or reject</p></div><div class="mirror-arrow">→</div><div><h2>Developers and CI</h2><p>Use the approved route</p></div></div>
<div class="mirror-detail"><div><h2>Configure the policy</h2><p>Release age and package rules</p><p>Security checks before serving</p><p>Recorded, expiring exceptions</p></div><div><h2>Close the gaps</h2><p>Restrict direct registry access</p><p>Handle pending and missing data</p><p>Reassess already cached artifacts</p></div></div>
<div class="c3bottom">A caching proxy needs blocking policies and an enforced download path.</div>

<!--
SLIDE 36 · SPEAKER NOTES

Say:
A mirror can enforce policy before serving artifacts if blocking rules are configured and the route cannot be bypassed. Check pending analysis, missing metadata, cached artifacts and exceptions. A plain cache is not an admission decision.

Next:
Retain enough inventory to find affected releases later.

Reference detail (not read aloud):
This is a conceptual editable enforcement diagram, not a deployed product or a universal feature matrix. Release-age checks, malware analysis, ecosystem coverage and fail-closed behavior vary by product and configuration. A mirror is not a sandbox and does not automatically capture a package script downloading another executable over HTTPS. Network egress controls, package-manager origin settings and scoped registry routing must make the intended route effective. Cover developer machines as well as CI. Avoid making credentials available to arbitrary configured registry URLs.

Sonatype's documented Firewall quarantine denies newly requested policy-violating components at the proxy stage when policy actions are set to FAIL. Its documentation specifically says already cached components are audited but not automatically quarantined; respond to them separately. Disabling Firewall releases quarantined components. JFrog Curation has its own policy scope, dry-run/block distinction, waivers and handling of pending data. Do not infer identical behavior. A defined exception owner, reason and expiry is the recommended team process, not a claim that every product supplies the same fields. The full review checklist is examples/mirror-intake.md.

Sources fetched in the intake review:
- https://help.sonatype.com/en/firewall-quarantine.html
- https://docs.jfrog.com/security/docs/create-policies-1
-->


---

<!-- _class: assurance-art safe chapter-controls -->
![bg](assets/img/intake-mirror-kitchen-v1.png)

<style scoped>
section { padding:0; }
.mv-shade { position:absolute!important; inset:0; z-index:0!important; background:linear-gradient(90deg,#0B1115CF,transparent 63%),linear-gradient(0deg,#0B1115F5 0%,#0B1115CC 25%,transparent 48%); }
.mv-head { position:absolute!important; left:64px; top:51px; width:740px; }
.mv-head .eyebrow { font-size:14px; margin-bottom:19px; }
.mv-head h1 { font-size:60px; line-height:1.05; letter-spacing:-1.7px; margin:0; }
.mv-message { position:absolute!important; left:64px; top:282px; width:570px; margin:0; font-size:30px; line-height:1.3; color:#F7F4EE; }
.mv-options { position:absolute!important; left:64px; right:64px; top:510px; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
.mv-option { padding:17px 18px 21px; border-top:2px solid #A5D7BB77; background:#0B171CEE; }
.mv-option h2 { color:#F7F4EE; font-size:23px; line-height:1.2; margin:0 0 9px; }
.mv-option small { display:block; color:#B6C8BF; font-size:16px; line-height:1.3; margin:0 0 12px; }
.mv-option p { color:#A5D7BB; font-size:21px; line-height:1.3; margin:0; }
.mv-foot { position:absolute!important; left:64px; right:64px; bottom:28px; color:#D8C4A2; font-size:21px; line-height:1.3; margin:0; }
</style>

<div class="mv-shade"></div>
<div class="mv-head"><div class="eyebrow">01 · Input → execution</div><h1>Enforce intake<br>through a mirror</h1></div>
<p class="mv-message">One enforced route.<br>Allow. Hold. Reject.</p>
<div class="mv-options">
<div class="mv-option"><h2>Public registries</h2><small>Incoming packages</small><p>New versions</p></div>
<div class="mv-option"><h2>Policy + quarantine</h2><small>Configured blocking rules</small><p>Allow, hold or reject</p></div>
<div class="mv-option"><h2>Developers + CI</h2><small>Enforced download path</small><p>Approved route only</p></div>
</div>
<p class="mv-foot">Set blocking rules. Reassess caches and exceptions.</p>

<!--
SLIDE 36 VISUAL ALTERNATIVE · SPEAKER NOTES

Say:
Put a policy decision on the download route. A configured mirror can allow, hold or reject requests before developers and CI receive the artifacts. Enforce that route and handle cached components, pending analysis and exceptions deliberately.

Delivery:
Use the single receiving hatch as the route through the policy boundary. A side bay holds pending intake. This is an architectural metaphor; a caching proxy only enforces admission when blocking policies and bypass restrictions are configured.

Next:
Retain enough inventory to find affected releases later.

Reference detail (not read aloud):
Alternative only; main slide 36 remains unchanged. Existing detailed evidence and configuration caveats are preserved below.

The receiving-hatch illustration and editable flow labels are conceptual, not a deployed product or a universal feature matrix. Release-age checks, malware analysis, ecosystem coverage and fail-closed behavior vary by product and configuration. A mirror is not a sandbox and does not automatically capture a package script downloading another executable over HTTPS. Network egress controls, package-manager origin settings and scoped registry routing must make the intended route effective. Cover developer machines as well as CI. Avoid making credentials available to arbitrary configured registry URLs.

Sonatype's documented Firewall quarantine denies newly requested policy-violating components at the proxy stage when policy actions are set to FAIL. Its documentation specifically says already cached components are audited but not automatically quarantined; respond to them separately. Disabling Firewall releases quarantined components. JFrog Curation has its own policy scope, dry-run/block distinction, waivers and handling of pending data. Do not infer identical behavior. A defined exception owner, reason and expiry is the recommended team process, not a claim that every product supplies the same fields. The full review checklist is examples/mirror-intake.md.

Sources fetched in the intake review:
- https://help.sonatype.com/en/firewall-quarantine.html
- https://docs.jfrog.com/security/docs/create-policies-1

Artwork: built-in image_gen.imagegen; assets/artwork-assurance-visual-alternatives-v1.json. Titles, labels and examples remain editable native content.
-->

---

<!-- _class: control-example safe chapter-controls -->
<style scoped>
.sbom-question { position:absolute!important; left:64px; right:64px; top:187px; color:#E6C797; font-size:30px; margin:0; }
.sbom-command { position:absolute!important; left:64px; right:64px; top:258px; }
.sbom-command .c3panel pre { font-size:23px; line-height:1.65; padding:23px 25px; }
.sbom-steps { position:absolute!important; left:64px; right:64px; top:440px; display:grid; grid-template-columns:repeat(3,1fr); gap:45px; }
.sbom-step { border-top:2px solid #A5D7BB; padding-top:19px; }
.sbom-step h2 { color:#F7F2E8; font-size:27px; margin:0 0 13px; }
.sbom-step p { color:#C5CEC5; font-size:22px; line-height:1.4; margin:0; }
</style>
<div class="c3head"><div class="c3kicker">01 · Input → execution · release inventory</div><h1>Know which releases are affected</h1></div>
<p class="sbom-question">A dependency is malicious. Where did we use that version?</p>
<div class="sbom-command"><div class="c3panel"><div class="c3file">Final package directory · Syft + OSV-Scanner</div><pre><code>syft ./dist -o cyclonedx-json=sbom.cdx.json&#10;osv-scanner scan source -L sbom.cdx.json</code></pre></div></div>
<div class="sbom-steps"><div class="sbom-step"><h2>Generate per release</h2><p>Inspect the final artifact.<br>Include transitive components.</p></div><div class="sbom-step"><h2>Connect to deployment</h2><p>Retain the SBOM with its<br>artifact digest and release.</p></div><div class="sbom-step"><h2>Recheck advisories</h2><p>Query affected versions.<br>Rescan retained inventories.</p></div></div>
<div class="c3bottom">Track build-tool exposure too: code can steal credentials without shipping.</div>

<!--
SLIDE 37 · SPEAKER NOTES

Say:
Generate an SBOM for the release artifact, inspect coverage and retain its digest and deployment relationship. Recheck known advisories as information changes. Also track build-tool exposure: credential-stealing code may never ship.

Next:
Assume a bad component can still run.

Reference detail (not read aloud):
Software Bill of Materials (SBOM) means an inventory, not a safety verdict or evidence of actual execution. The commands are supported syntax, shown as a presentation example; they are not executed. `./dist` must actually be the final extracted package directory in the adopting project. Choose an image target where appropriate, including operating system packages and bundled/vendored content. Syft's supported catalogers and the analyzed artifact determine coverage; source/lockfile and final-artifact inventories can differ. Do not imply one directory scan perfectly captures every ecosystem or the build toolchain. Record scope and gaps, validate the SBOM and reconcile it with the release. An absent component is not proof of absence.

The CycloneDX filename `sbom.cdx.json` is recognized by OSV-Scanner; -L supplies that file as a supported inventory input. The scan matches known advisories and must be repeated when advisory data changes. Preserve each original SBOM with the immutable artifact digest, and bind/verify it using a signed attestation where policy requires. A signature authenticates evidence, not its completeness or code safety. Map release digests to deployed environments. Keep build dependencies, CI jobs, execution logs and accessible identities in a separate inventory to investigate tooling exposure; a shipping SBOM alone cannot tell you whether malicious code executed on a runner. This prepares the later recovery discussion without claiming prevention.

Sources fetched 21 October 2026:
- https://github.com/anchore/syft
- https://google.github.io/osv-scanner/usage/scan-source
- https://cheatsheetseries.owasp.org/cheatsheets/Dependency_Graph_SBOM_Cheat_Sheet.html
-->


---

<!-- _class: assurance-art safe chapter-controls -->
![bg](assets/img/intake-release-ledger-kitchen-v1.png)

<style scoped>
section { padding:0; }
.bv-shade { position:absolute!important; inset:0; z-index:0!important; background:linear-gradient(90deg,#0B1115CF,transparent 63%),linear-gradient(0deg,#0B1115F5 0%,#0B1115CC 25%,transparent 48%); }
.bv-head { position:absolute!important; left:64px; top:51px; width:740px; }
.bv-head .eyebrow { font-size:14px; margin-bottom:19px; }
.bv-head h1 { font-size:60px; line-height:1.05; letter-spacing:-1.7px; margin:0; }
.bv-message { position:absolute!important; left:64px; top:282px; width:570px; margin:0; font-size:30px; line-height:1.3; color:#F7F4EE; }
.bv-options { position:absolute!important; left:64px; right:64px; top:510px; display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
.bv-option { padding:17px 18px 21px; border-top:2px solid #A5D7BB77; background:#0B171CEE; }
.bv-option h2 { color:#F7F4EE; font-size:23px; line-height:1.2; margin:0 0 9px; }
.bv-option small { display:block; color:#B6C8BF; font-size:16px; line-height:1.3; margin:0 0 12px; }
.bv-option p { color:#A5D7BB; font-size:21px; line-height:1.3; margin:0; }
.bv-foot { position:absolute!important; left:64px; right:64px; bottom:28px; color:#D8C4A2; font-size:21px; line-height:1.3; margin:0; }
</style>

<div class="bv-shade"></div>
<div class="bv-head"><div class="eyebrow">01 · Input → execution</div><h1>Know which releases<br>are affected</h1></div>
<p class="bv-message">A bad version.<br>Which releases used it?</p>
<div class="bv-options">
<div class="bv-option"><h2>Generate</h2><small>Syft · final artifact</small><p>SBOM per release</p></div>
<div class="bv-option"><h2>Connect</h2><small>Release digest</small><p>Deployment mapping</p></div>
<div class="bv-option"><h2>Recheck</h2><small>OSV-Scanner</small><p>Known advisories</p></div>
</div>
<p class="bv-foot">Track build-tool exposure too: it may never ship.</p>

<!--
SLIDE 37 VISUAL ALTERNATIVE · SPEAKER NOTES

Say:
Generate a Software Bill of Materials for the final release artifact and check its coverage. Connect it to the artifact digest and deployed environments. Recheck known advisories as they change, while keeping build-tool exposure records separately.

Delivery:
The batch ledger and prepared packages illustrate traceability from ingredients to delivered releases. A retained inventory helps locate affected artifacts; it does not prove execution, secret theft or complete component coverage. The exact Syft and OSV commands remain in examples/release-inventory.md.

Next:
Assume a bad component can still run.

Reference detail (not read aloud):
Alternative only; main slide 37 remains unchanged. Existing detailed evidence and configuration caveats are preserved below.

Software Bill of Materials (SBOM) means an inventory, not a safety verdict or evidence of actual execution. The commands in examples/release-inventory.md are supported presentation examples; they are not executed. `./dist` must actually be the final extracted package directory in the adopting project. Choose an image target where appropriate, including operating system packages and bundled/vendored content. Syft's supported catalogers and the analyzed artifact determine coverage; source/lockfile and final-artifact inventories can differ. Do not imply one directory scan perfectly captures every ecosystem or the build toolchain. Record scope and gaps, validate the SBOM and reconcile it with the release. An absent component is not proof of absence.

The CycloneDX filename `sbom.cdx.json` is recognized by OSV-Scanner; -L supplies that file as a supported inventory input. The scan matches known advisories and must be repeated when advisory data changes. Preserve each original SBOM with the immutable artifact digest, and bind/verify it using a signed attestation where policy requires. A signature authenticates evidence, not its completeness or code safety. Map release digests to deployed environments. Keep build dependencies, CI jobs, execution logs and accessible identities in a separate inventory to investigate tooling exposure; a shipping SBOM alone cannot tell you whether malicious code executed on a runner. This prepares the later recovery discussion without claiming prevention.

Sources fetched 21 October 2026:
- https://github.com/anchore/syft
- https://google.github.io/osv-scanner/usage/scan-source
- https://cheatsheetseries.owasp.org/cheatsheets/Dependency_Graph_SBOM_Cheat_Sheet.html

Artwork: built-in image_gen.imagegen; assets/artwork-assurance-visual-alternatives-v1.json. Titles, labels and examples remain editable native content.
-->
