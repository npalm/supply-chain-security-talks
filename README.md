# Supply Chain Security Talks

Conference slide decks and companion resources for Niek Palm's supply chain security talks.

## Structure

```text
assets/shared/        Shared assets reused across decks
decks/<slug>/         One deck per directory
  slides.md           Marp source
  deck.yml            Deck-local metadata
  assets/             Deck-local assets
  resources.md        Optional resources page source
scripts/              Build and dev tooling
sessions.yml          Published session timeline and site registry
site/                 Generated GitHub Pages output
.build/               Intermediate build output
```

## Commands

```bash
corepack enable
pnpm install
pnpm run build:deck -- --deck geecon26
pnpm run build:deck -- --deck geecon26 --standalone
pnpm run dev -- --deck geecon26
pnpm run site
```

## Publishing model

- `sessions.yml` is the source of truth for the public timeline.
- Each session keeps its existing public slug, such as `geecon26`.
- A session can optionally expose a resources page. If `resources:` is omitted, the site builder looks for `decks/<deck>/resources.md`.
- The homepage is generated from newest to oldest.

## Asset rules

- Put reusable assets in `assets/shared/`.
- Put talk-specific assets in `decks/<slug>/assets/`.
- Prefer deck-local assets by default. Promote files to shared only when they are intentionally reused.

## CI

- `ci.yml` validates the site build on `ubuntu-latest`.
- `pages.yml` builds the full site on PRs and uploads `site/` as a 3-day artifact preview.
- Only pushes to `main` deploy to `gh-pages`.
- `actionlint.yml`, `zizmor.yml`, `dependency-review.yml`, and `security.yml` cover workflow and dependency security checks.
