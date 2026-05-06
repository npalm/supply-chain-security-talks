#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const MarkdownIt = require('markdown-it');
const { buildDeck, copySharedAssets, BUILD_ROOT } = require('./build-deck');

const ROOT = path.resolve(__dirname, '..');
const SITE_DIR = path.join(ROOT, 'site');
const SESSIONS_FILE = path.join(ROOT, 'sessions.yml');
const markdown = new MarkdownIt({ html: true, linkify: true, typographer: true });

function loadSessionsConfig() {
  return yaml.load(fs.readFileSync(SESSIONS_FILE, 'utf8'));
}

function defaultResourcesPath(session) {
  return path.join(ROOT, 'decks', session.deck, 'resources.md');
}

function resolveResourcesPath(session) {
  if (session.resources) {
    return path.join(ROOT, session.resources);
  }
  return defaultResourcesPath(session);
}

function ensureCleanSiteDir() {
  fs.rmSync(SITE_DIR, { recursive: true, force: true });
  fs.mkdirSync(SITE_DIR, { recursive: true });
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

function renderLayout({
  title,
  subtitle = '',
  body,
  backLink = './',
  mode = 'content',
  assetBase = './assets/shared',
}) {
  const pageClass = mode === 'home' ? 'page-home' : 'page-content';
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600;700;800&display=swap');

    :root {
      color-scheme: dark;
      --bg: #08111f;
      --bg-deep: #050b14;
      --panel: rgba(8, 16, 31, 0.76);
      --panel-strong: rgba(7, 13, 24, 0.86);
      --panel-border: rgba(164, 200, 255, 0.18);
      --text: #e6f0ff;
      --muted: #88a1bd;
      --accent: #8be9fd;
      --accent-strong: #7ef0c3;
      --line: rgba(139, 233, 253, 0.2);
      --shadow: 0 28px 90px rgba(2, 6, 14, 0.45);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: 'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace;
      color: var(--text);
      background:
        linear-gradient(135deg, rgba(5, 11, 20, 0.86), rgba(8, 17, 31, 0.75)),
        radial-gradient(circle at 18% 18%, rgba(126, 240, 195, 0.15), transparent 22%),
        radial-gradient(circle at 88% 14%, rgba(139, 233, 253, 0.12), transparent 24%),
        url('${assetBase}/img/site-background.png') center center / cover fixed;
      padding: 28px 18px 72px;
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      pointer-events: none;
      background:
        linear-gradient(transparent 0, transparent calc(100% - 1px), rgba(255, 255, 255, 0.035) calc(100% - 1px)),
        linear-gradient(90deg, transparent 0, transparent calc(100% - 1px), rgba(255, 255, 255, 0.03) calc(100% - 1px));
      background-size: 100% 46px, 46px 100%;
      mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.55), transparent 80%);
      opacity: 0.45;
    }

    main {
      max-width: 1120px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    a { color: var(--accent); }

    .back {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 22px;
      color: var(--muted);
      text-decoration: none;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: 0.74rem;
      font-weight: 800;
    }

    .shell {
      background: var(--panel);
      border: 1px solid var(--panel-border);
      border-radius: 28px;
      backdrop-filter: blur(18px);
      box-shadow: var(--shadow);
      padding: 28px;
      overflow: hidden;
    }

    h1 {
      margin: 0 0 12px;
      font-family: 'JetBrains Mono', 'IBM Plex Mono', monospace;
      font-size: clamp(1.7rem, 4.2vw, 3.4rem);
      line-height: 1;
      letter-spacing: -0.05em;
      white-space: nowrap;
    }

    .subtitle,
    .meta {
      color: var(--muted);
    }

    .timeline {
      display: grid;
      gap: 18px;
      margin-top: 36px;
    }

    .card {
      border: 1px solid var(--panel-border);
      border-radius: 18px;
      padding: 22px;
      background: linear-gradient(180deg, rgba(11, 19, 35, 0.78), rgba(7, 13, 24, 0.88));
      position: relative;
      overflow: hidden;
      transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
    }

    .card::before {
      content: '';
      position: absolute;
      inset: 0 auto 0 0;
      width: 4px;
      background: linear-gradient(180deg, var(--accent-strong), var(--accent));
    }

    .card:hover {
      transform: translateY(-3px);
      border-color: rgba(244, 201, 107, 0.3);
      box-shadow: 0 22px 50px rgba(2, 6, 14, 0.35);
    }

    .card h2 {
      margin: 0 0 10px;
      font-size: 1.05rem;
      line-height: 1.45;
      font-weight: 600;
    }

    .card-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 18px;
    }

    .button {
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      padding: 10px 15px;
      border-radius: 999px;
      border: 1px solid rgba(139, 233, 253, 0.26);
      color: var(--text);
      background: rgba(139, 233, 253, 0.08);
      font-size: 0.86rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      transition: background 180ms ease, border-color 180ms ease;
    }

    .button:hover {
      background: rgba(244, 201, 107, 0.14);
      border-color: rgba(244, 201, 107, 0.32);
    }

    .prose {
      line-height: 1.7;
      font-size: 1.02rem;
      max-width: 70ch;
    }

    .prose h2,
    .prose h3 {
      margin-top: 1.8em;
      font-family: 'JetBrains Mono', 'IBM Plex Mono', monospace;
      letter-spacing: -0.03em;
    }

    .prose ul,
    .prose ol {
      padding-left: 1.2rem;
    }

    .prose code {
      background: rgba(15, 23, 42, 0.85);
      padding: 0.1em 0.3em;
      border-radius: 6px;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
      font-size: 0.77rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--accent);
      font-weight: 800;
    }

    .eyebrow::before {
      content: '';
      width: 42px;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--accent));
    }

    .hero {
      display: grid;
      grid-template-columns: 1fr;
      gap: 18px;
      margin-bottom: 6px;
    }

    .hero-copy {
      max-width: 860px;
    }

    .hero-copy .subtitle {
      max-width: 72ch;
      font-size: 0.98rem;
      line-height: 1.8;
    }

    .section-head {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 20px;
      margin-top: 34px;
      padding-top: 22px;
      border-top: 1px solid var(--line);
    }

    .section-head h2 {
      margin: 0;
      font-family: 'JetBrains Mono', 'IBM Plex Mono', monospace;
      font-size: clamp(1.2rem, 2vw, 1.55rem);
      letter-spacing: -0.03em;
    }

    .section-head p {
      margin: 0;
      color: var(--muted);
      max-width: 34ch;
      text-align: right;
      font-size: 0.92rem;
    }

    .card-grid {
      display: grid;
      gap: 18px;
    }

    .card-topline {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
      margin-bottom: 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(139, 233, 253, 0.08);
    }

    .card-date {
      font-size: 0.76rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--accent);
    }

    .card-kind {
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.14em;
      color: var(--muted);
    }

    .page-home .shell {
      padding: 26px;
    }

    .page-content .shell {
      max-width: 900px;
      margin: 0 auto;
      background: var(--panel-strong);
    }

    @media (max-width: 880px) {
      .hero,
      .section-head {
        grid-template-columns: 1fr;
        display: grid;
      }

      .section-head p {
        text-align: left;
      }
    }

    @media (max-width: 640px) {
      body {
        padding: 16px 12px 44px;
        background-position: center top;
      }

      .shell,
      .page-home .shell {
        padding: 22px 18px;
        border-radius: 22px;
      }

      h1 {
        font-size: 1.9rem;
        white-space: normal;
      }

      .card {
        padding: 18px;
      }
    }

    .terminal-strip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: rgba(4, 9, 18, 0.56);
      color: var(--muted);
      font-size: 0.78rem;
      margin-bottom: 18px;
    }

    .terminal-dot {
      width: 8px;
      height: 8px;
      border-radius: 999px;
      background: var(--accent-strong);
      box-shadow: 16px 0 0 #f9b06b, 32px 0 0 var(--accent);
      margin-right: 28px;
    }

    .terminal-callout {
      margin-top: 10px;
      padding: 14px 16px;
      border-left: 3px solid var(--accent);
      background: rgba(4, 9, 18, 0.5);
      color: var(--text);
      font-size: 0.92rem;
      line-height: 1.8;
    }
  </style>
</head>
<body class="${pageClass}">
  <main>
    <a class="back" href="${backLink}">Back</a>
    <section class="shell">
      <h1>${title}</h1>
      ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ''}
      ${body}
    </section>
  </main>
</body>
</html>`;
}

function copyDeckBuildToSession(session) {
  const sourceDir = path.join(BUILD_ROOT, 'decks', session.deck);
  const targetDir = path.join(SITE_DIR, session.slug);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.cpSync(path.join(sourceDir, 'index.html'), path.join(targetDir, 'index.html'));
  const deckAssets = path.join(sourceDir, 'assets');
  if (fs.existsSync(deckAssets)) {
    fs.cpSync(deckAssets, path.join(targetDir, 'assets'), { recursive: true });
  }
}

function renderResourcesPage(session) {
  const resourcePath = resolveResourcesPath(session);
  if (!fs.existsSync(resourcePath)) return false;

  const html = markdown.render(fs.readFileSync(resourcePath, 'utf8'));
  const targetDir = path.join(SITE_DIR, session.slug, 'resources');
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(
    path.join(targetDir, 'index.html'),
    renderLayout({
      title: `${session.title} Resources`,
      subtitle: `${formatDate(session.date)} · ${session.conference}`,
      body: `<div class="prose">${html}</div>`,
      backLink: '../index.html',
      assetBase: '../../assets/shared',
    }),
    'utf8',
  );
  return true;
}

function buildIndexPage(config, resourceMap) {
  const sessions = [...(config.sessions || [])].sort((a, b) => new Date(b.date) - new Date(a.date));
  const cards = sessions
    .map((session) => {
      const links = [
        `<a class="button" href="./${session.slug}/index.html">Deck</a>`,
      ];
      if (resourceMap.get(session.slug)) {
        links.push(`<a class="button" href="./${session.slug}/resources/index.html">Resources</a>`);
      }
      return `<article class="card">
        <div class="card-topline">
          <span class="card-date">${formatDate(session.date)}</span>
          <span class="card-kind">${session.conference}</span>
        </div>
        <h2>${session.title}</h2>
        <p class="meta">${session.speaker}</p>
        <div class="card-actions">${links.join('')}</div>
      </article>`;
    })
    .join('');

  const html = renderLayout({
    title: config.site?.title || 'Talks',
    subtitle: config.site?.subtitle || '',
    body: `
      <div class="hero">
        <div class="hero-copy">
          <div class="terminal-strip"><span class="terminal-dot"></span>talk-index ~/published-sessions</div>
          <span class="eyebrow">Field Notes</span>
          <p class="subtitle">${config.site?.subtitle || ''}</p>
          <div class="terminal-callout">$ ls decks/ | sort --reverse-by=date
          <br/>Published sessions, resources, and conference variants tracked from newest to oldest.</div>
        </div>
      </div>
      <div class="section-head">
        <h2>Sessions</h2>
        <p>Newest first, with direct access to slides and talk-specific resources.</p>
      </div>
      <section class="timeline card-grid">${cards}</section>`,
    backLink: './',
    mode: 'home',
    assetBase: './assets/shared',
  }).replace('<a class="back" href="./">Back</a>', '');

  fs.writeFileSync(path.join(SITE_DIR, 'index.html'), html, 'utf8');
}

function main() {
  const config = loadSessionsConfig();
  const sessions = config.sessions || [];
  const uniqueDecks = [...new Set(sessions.map((session) => session.deck))];

  ensureCleanSiteDir();
  copySharedAssets();
  fs.cpSync(path.join(BUILD_ROOT, 'assets'), path.join(SITE_DIR, 'assets'), { recursive: true });

  for (const deck of uniqueDecks) {
    buildDeck(deck);
  }

  const resourceMap = new Map();
  for (const session of sessions) {
    copyDeckBuildToSession(session);
    resourceMap.set(session.slug, renderResourcesPage(session));
  }

  buildIndexPage(config, resourceMap);
}

try {
  main();
} catch (error) {
  console.error(error.message || error);
  process.exit(1);
}
