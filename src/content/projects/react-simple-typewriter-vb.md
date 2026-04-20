---
title: "React Simple Typewriter"
description: "A lightweight React package for typewriter text effects — zero runtime dependencies, full TypeScript types, SSR-safe for Next.js, and ~4.4KB minified."
excerpt: "Open-source npm package for typewriter animations in React and Next.js — zero deps, full TypeScript, SSR-safe."
publishDate: 2025-01-29
updatedDate: 2025-01-29
status: "live"
featured: false
draft: false

client: ""
company: "Open Source"
industry: "Developer Tools"
engagementType: "personal"
timeline: "Jan 2025 – Present"
myRole: "Creator & Maintainer"
team: ["Solo"]

stack:
  - "React"
  - "TypeScript"
  - "Rollup"
  - "Babel"
platforms:
  - "Web"
  - "npm"

links:
  live: "https://www.npmjs.com/package/react-simple-typewriter-vb"
  github: "https://github.com/vito8916/react-simple-typewriter"
additionalLinks:
  - label: "npm package"
    url: "https://www.npmjs.com/package/react-simple-typewriter-vb"

tags:
  - "Open Source"
  - "npm"
  - "React"
  - "TypeScript"
  - "Developer Tools"
categories:
  - "Library"

metrics:
  - label: "Bundle size"
    value: "~4.4KB"
    note: "Minified, ESM + CJS outputs produced by Rollup."
  - label: "Runtime dependencies"
    value: "0"
    note: "No runtime deps — only React as a peer dependency."
  - label: "Published versions"
    value: "5"
    note: "1.0.0 through 1.1.0, shipped with TypeScript types and a full build pipeline."
  - label: "License"
    value: "MIT"
    note: "Freely usable in commercial and open-source projects."
outcomesSummary:
  - "Shipped 5 stable versions (1.0.0 → 1.1.0) with TypeScript types, ESM + CJS outputs, and SSR-safe behavior for Next.js."
  - "Kept the package at ~4.4KB minified with zero runtime dependencies — safe to drop into any React project without bloat."
  - "Maintained a focused API (strings, speed, deleteSpeed, pause, loop) that covers the common cases without feature sprawl."

coverImage: ""
gallery: []
ogImage: ""
canonical: "https://www.npmjs.com/package/react-simple-typewriter-vb"

confidentiality: ""
locale: "en"
readingTime: "4 min"
---

# Lightweight typewriter effect for React.

A zero-dependency, TypeScript-first package that adds dynamic text animations to React and Next.js applications.

## Overview

**react-simple-typewriter-vb** is an open-source npm package I created to solve a common need: adding engaging typewriter-style text effects to React projects without heavyweight dependencies or complex setup.

I own the full lifecycle: API design, implementation, build pipeline, documentation, and ongoing maintenance.

<a href="https://www.npmjs.com/package/react-simple-typewriter-vb" target="_blank" rel="noopener noreferrer">View on npm →</a>

## Problem

Developers often want typewriter effects for hero sections, landing pages, or terminal-style UIs. Popular solutions either:

- Pull in heavy dependencies
- Lack TypeScript support
- Break with Next.js server-side rendering
- Offer limited customization (speed, pause, loop behavior)

I wanted a focused, modern alternative that “just works” across the React ecosystem.

## Goals

- Zero runtime dependencies
- Simple, intuitive API
- Full TypeScript support out of the box
- Next.js and SSR compatible
- Customizable typing speed, delete speed, and loop behavior
- Small bundle size (~4.4KB)

## Solution

I built a `TypeWriter` component with a single `options` prop:

- `strings` — array of text to cycle through
- `speed` — typing speed in milliseconds
- `deleteSpeed` — deletion speed (added in v1.1)
- `pause` — pause between strings
- `loop` — whether to loop continuously

The component handles the animation logic internally, uses `useRef` to avoid re-renders during typing, and works cleanly with Next.js server-side rendering when used under the `'use client'` directive.

### Usage

```bash
npm install react-simple-typewriter-vb
```

```tsx
'use client';
import { TypeWriter } from 'react-simple-typewriter-vb';

export function Hero() {
  return (
    <h1>
      I build{' '}
      <TypeWriter
        options={{
          strings: ['fast web apps', 'clean APIs', 'real products'],
          speed: 70,
          deleteSpeed: 40,
          pause: 1500,
          loop: true,
        }}
      />
    </h1>
  );
}
```

## Tech highlights

### Architecture

- Rollup for bundling ESM and CJS outputs
- Babel for transpilation and React/JSX support
- TypeScript definitions included in the package
- Peer dependencies: React 16.8+, React DOM, prop-types

### Key decisions

- **Zero dependencies** — keeps the package small and avoids version conflicts
- **`useRef` for animation** — avoids unnecessary re-renders during typing
- **Proper loop completion** — ensures full words are typed/deleted before moving to the next string
- **Next.js support** — compatible with App Router and `'use client'` directive

## Outcomes

- **5 stable releases** (1.0.0 → 1.1.0) shipped with TypeScript types, ESM + CJS outputs, and a Rollup + Babel build pipeline.
- **~4.4KB minified** with **zero runtime dependencies** — safe to drop into any React project without pulling in a transitive tree.
- **SSR-safe for Next.js** under the App Router and `'use client'` boundary — no hydration warnings.
- **Focused public API** (5 options) that covers the common hero/terminal/subtle animation cases without feature sprawl.
- **MIT licensed** and maintained on npm for anyone in the React/Next.js ecosystem to use.

## Challenges

### 1) Last word deletion when loop is false
When `loop` was `false`, the last word could be cut off during deletion. I fixed this by ensuring the component completes the full delete sequence before stopping.

### 2) Next.js SSR compatibility
Initial versions had issues with server-side rendering. I addressed this by testing with Next.js and ensuring proper handling of the `'use client'` directive and hydration.

### 3) Keeping the API simple
It was tempting to add many options. I focused on the core use case: type strings, delete, optionally loop, with configurable speeds. The API stayed minimal and easy to adopt.

## What I’d improve next

- Add support for custom cursor/blink styling
- Optional callback hooks (onType, onDelete, onComplete)
- Animation presets (e.g., “terminal”, “hero”, “subtle”)
- More examples in the README and a small demo site

## Final takeaway

react-simple-typewriter-vb reflects my approach to open-source: solve a real need with a focused, lightweight solution, ship it with good DX (TypeScript, modern tooling), and keep it maintainable for the long term.
