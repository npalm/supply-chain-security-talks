#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { buildDeck, copySharedAssets, getDeckDir, parseArgs } = require('./build-deck');

const ROOT = path.resolve(__dirname, '..');

function resolveBin(name) {
  const binName = process.platform === 'win32' ? `${name}.cmd` : name;
  return path.join(ROOT, 'node_modules', '.bin', binName);
}

function copyDeckAssets(deck) {
  const deckDir = getDeckDir(deck);
  const source = path.join(deckDir, 'assets');
  const target = path.join(ROOT, '.build', 'decks', deck, 'assets');
  fs.rmSync(target, { recursive: true, force: true });
  if (fs.existsSync(source)) {
    fs.cpSync(source, target, { recursive: true });
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.deck) {
    throw new Error('Usage: node scripts/dev-deck.js --deck <deck-slug>');
  }

  buildDeck(args.deck);
  const deckDir = getDeckDir(args.deck);
  const marpBin = resolveBin('marp');
  const httpServerBin = resolveBin('http-server');
  const buildDir = path.join(ROOT, '.build');
  const buildOutput = path.join(buildDir, 'decks', args.deck, 'index.html');

  const marp = spawn(
    marpBin,
    ['slides.md', '--html', '--allow-local-files', '-o', buildOutput, '-w'],
    {
      cwd: deckDir,
      stdio: 'inherit',
    },
  );

  const server = spawn(
    httpServerBin,
    [buildDir, '-c-1', '-a', '127.0.0.1', '-o', `/decks/${args.deck}/index.html`],
    {
      cwd: ROOT,
      stdio: 'inherit',
    },
  );

  fs.watch(
    deckDir,
    { recursive: true },
    (_eventType, filename) => {
      if (!filename || !filename.startsWith('assets/')) return;
      copySharedAssets();
      copyDeckAssets(args.deck);
    },
  );

  const shutdown = (code = 0) => {
    marp.kill('SIGTERM');
    server.kill('SIGTERM');
    process.exit(code);
  };

  marp.on('exit', (code) => {
    if (code && code !== 0) shutdown(code);
  });
  server.on('exit', (code) => {
    if (code && code !== 0) shutdown(code);
  });

  process.on('SIGINT', () => shutdown(0));
  process.on('SIGTERM', () => shutdown(0));
}

try {
  main();
} catch (error) {
  console.error(error.message || error);
  process.exit(1);
}
