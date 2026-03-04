# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages site (`ajoy-surfly.github.io`) that serves as a test/demo page for **Surfly** — a co-browsing and customer support tool. The site uses Jekyll with the `jekyll-theme-minimal` theme.

## Architecture

- **Root level**: Jekyll config (`_config.yml`) and GitHub Pages scaffolding
- **`sample/`**: Contains the actual Surfly integration demo page
  - `index.html` — Main HTML page that loads Surfly scripts in order
  - `surfly-js-api.js` — Surfly loader snippet (injects `surfly.js` from CDN, creates global `Surfly` object)
  - `surfly-init.js` — Initializes Surfly with a widget key and settings, adds the co-browse button
  - `surfly-settings.js` — Session event handlers (e.g., message passing between inner/outer session windows)

### Script Loading Order (important)

`surfly-js-api.js` loads first (render-blocking via `blocking="render"`), then `surfly-init.js` initializes the SDK, then `surfly-settings.js` configures session behavior. This order matters because each script depends on the prior one having set up the global `Surfly` object.

## Development

No build step. Open `sample/index.html` directly in a browser, or serve via Jekyll/GitHub Pages. The Surfly JS SDK is loaded from `https://surfly.com/surfly.js` at runtime.

## Key Details

- Widget key: defined in `surfly-init.js`
- Sessions are configured as embedded-only (`embedded_sessions_only: true`)
- The `Surfly.isInsideSession` flag distinguishes between the host page and the co-browsing session context
