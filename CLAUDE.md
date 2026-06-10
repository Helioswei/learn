# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static HTML tutorial site for Kotlin Android development, written in Chinese (zh-CN). No build system, no bundler, no framework — just plain HTML and CSS served directly.

## Structure

- `index.html` — Table of contents / landing page
- `chapter01.html` through `chapter16.html` — Tutorial chapters
- `style.css` — Single shared stylesheet (Catppuccin-inspired syntax highlighting)

## Development

Preview locally by opening any HTML file in a browser, or run a local server:

```
python3 -m http.server 8000
```

## Conventions

- **Language**: All content is in Chinese. Keep all prose, UI labels, and comments in Chinese.
- **Navigation**: Every page includes a top nav bar and bottom prev/next links. When adding a new chapter, update the nav in **all** existing pages.
- **Syntax highlighting**: Code blocks use manual `<span>` tags with CSS classes for highlighting (no JS library). Classes: `.kw` (keyword), `.type`, `.str`, `.fn` (function), `.ann` (annotation), `.cmt` (comment), `.num`, `.op` (operator), `.param`.
- **Callouts**: Use `<div class="tip">` with `<div class="tip-title">` for tips, and `<div class="warning">` for warnings.
- **Content width**: max-width 860px (`.container`), responsive breakpoints at 768px and 480px.
