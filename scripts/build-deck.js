#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const DECKS_DIR = path.join(ROOT, 'decks');
const BUILD_ROOT = path.join(ROOT, '.build');
const DECK_BUILD_ROOT = path.join(BUILD_ROOT, 'decks');
const SHARED_ASSETS_SRC = path.join(ROOT, 'assets', 'shared');
const SHARED_ASSETS_DST = path.join(BUILD_ROOT, 'assets', 'shared');

function parseArgs(argv) {
  const args = { standalone: false };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--deck') {
      args.deck = argv[i + 1];
      i += 1;
    } else if (arg === '--standalone') {
      args.standalone = true;
    }
  }
  return args;
}

function getDeckDir(deck) {
  return path.join(DECKS_DIR, deck);
}

function ensureDeckExists(deck) {
  const deckDir = getDeckDir(deck);
  if (!deck || !fs.existsSync(path.join(deckDir, 'slides.md'))) {
    throw new Error(`Unknown deck: ${deck}`);
  }
  return deckDir;
}

function copyDirIfExists(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.cpSync(src, dst, { recursive: true });
}

function copySharedAssets() {
  if (!fs.existsSync(SHARED_ASSETS_SRC)) return;
  fs.mkdirSync(path.dirname(SHARED_ASSETS_DST), { recursive: true });
  fs.rmSync(SHARED_ASSETS_DST, { recursive: true, force: true });
  fs.cpSync(SHARED_ASSETS_SRC, SHARED_ASSETS_DST, { recursive: true });
}

function resolveMarpBin() {
  const binName = process.platform === 'win32' ? 'marp.cmd' : 'marp';
  return path.join(ROOT, 'node_modules', '.bin', binName);
}

function mimeTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const map = {
    '.gif': 'image/gif',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.webm': 'video/webm',
    '.webp': 'image/webp',
  };
  return map[ext] || 'application/octet-stream';
}

function buildStandalone(deckBuildDir) {
  const inputPath = path.join(deckBuildDir, 'index.html');
  const outputPath = path.join(deckBuildDir, 'standalone.html');
  let html = fs.readFileSync(inputPath, 'utf8');

  const refs = new Set();
  const pattern = /(?:\.\.\/\.\.\/assets\/shared|assets)\/[A-Za-z0-9_./-]+\.(?:gif|jpe?g|png|svg|webm|webp)/g;
  for (const match of html.matchAll(pattern)) {
    refs.add(match[0]);
  }

  for (const ref of refs) {
    const absolutePath = path.resolve(deckBuildDir, ref);
    if (!fs.existsSync(absolutePath)) {
      continue;
    }
    const data = fs.readFileSync(absolutePath).toString('base64');
    const dataUri = `data:${mimeTypeFor(absolutePath)};base64,${data}`;
    html = html.split(ref).join(dataUri);
  }

  fs.writeFileSync(outputPath, html, 'utf8');
}

function buildDeck(deck, options = {}) {
  const deckDir = ensureDeckExists(deck);
  const deckBuildDir = path.join(DECK_BUILD_ROOT, deck);
  const marpBin = resolveMarpBin();

  fs.mkdirSync(DECK_BUILD_ROOT, { recursive: true });
  fs.rmSync(deckBuildDir, { recursive: true, force: true });
  fs.mkdirSync(deckBuildDir, { recursive: true });

  copySharedAssets();
  copyDirIfExists(path.join(deckDir, 'assets'), path.join(deckBuildDir, 'assets'));

  const result = spawnSync(
    marpBin,
    ['slides.md', '--html', '--allow-local-files', '-o', path.join(deckBuildDir, 'index.html')],
    {
      cwd: deckDir,
      stdio: 'inherit',
    },
  );

  if (result.status !== 0) {
    throw new Error(`Marp build failed for deck: ${deck}`);
  }

  if (options.standalone) {
    buildStandalone(deckBuildDir);
  }

  return deckBuildDir;
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (!args.deck) {
      throw new Error('Usage: node scripts/build-deck.js --deck <deck-slug> [--standalone]');
    }
    buildDeck(args.deck, { standalone: args.standalone });
  } catch (error) {
    console.error(error.message || error);
    process.exit(1);
  }
}

module.exports = {
  BUILD_ROOT,
  DECK_BUILD_ROOT,
  buildDeck,
  copySharedAssets,
  getDeckDir,
  parseArgs,
};
