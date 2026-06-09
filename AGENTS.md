# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## What this repo is

`@singhshashi/proactive` is a React component library published to GitHub Packages (`https://npm.pkg.github.com/`). Components are authored in TypeScript with Tailwind CSS for styling and Storybook for development/documentation.

## Commands

```bash
# Develop with Storybook (primary development workflow)
pnpm storybook

# Build the library (outputs to lib/)
pnpm run build-lib

# Lint
pnpm lint

# Run Storybook interaction tests
pnpm test
```

## Publishing a new version

1. Edit `package.json` version manually or run: `npm version minor --no-git-tag-version`
2. Build: `pnpm run build-lib`
3. Commit with just the version number as the message: `git commit -m "0.12.0"`
4. Publish: `pnpm publish`

## Architecture

**Library entry point:** `src/index.ts` — all public exports must be added here.

**Build:** `tsconfig.lib.json` compiles `src/` to `lib/` (declaration files included). `*.stories.tsx`, `App.tsx`, and `main.tsx` are excluded from the library build. The `lib/` directory is what gets published via the `"files"` field in `package.json`.

**Storybook app:** `src/App.tsx` / `src/main.tsx` are only used for the Vite dev server (`pnpm dev`), not the library.

**Styling:** Tailwind CSS utility classes applied directly in component TSX. No CSS modules. `clsx` is used for conditional class composition.

**Icons:** Uses `lucide-react`. The `Icon` component (`src/components/Icon/Icon.tsx`) wraps the icon library — `IconName` is derived from the library's exported keys.

**Wizard component:** Uses React Context (`WizardContext`) to allow child steps to signal readiness. Steps call `useWizard()` → `setStepReady(stepIndex, boolean)` to enable/disable the Next button. The `Wizard` renders one child at a time by index and exposes `data-stepindex` on the content wrapper for testing.

**Component co-location:** Each component lives in `src/components/<Name>/` alongside its `*.stories.tsx` file. Stories serve as the interactive test harness (no separate unit test files).
