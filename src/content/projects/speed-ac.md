---
title: "Speed Air Conditioning"
description: "Next.js marketing site for a South Florida HVAC company—multi-audience pages, service-area coverage, Sanity CMS with embedded Studio, React Hook Form lead capture, and React Email templates."
excerpt: "A branded marketing and lead-generation site: App Router Next.js, Tailwind and shadcn/ui, Motion, and a Sanity content model editors can grow into."
publishDate: 2026-04-18
updatedDate: 2026-04-18
status: "live"
featured: true
draft: false

client: "Speed Air Conditioning"
company: ""
industry: "HVAC / Home services"
engagementType: "contract"
timeline: "2025 – 2026"
myRole: "Full-stack engineer (Next.js app, Sanity schemas, forms, email templates)"
team:
  - "Client: services, service areas, and marketing priorities"
  - "Engineering: frontend, CMS integration, and content model"

stack:
  - "Next.js 16"
  - "React 19"
  - "TypeScript"
  - "Tailwind CSS 4"
  - "shadcn/ui"
  - "Radix UI"
  - "Motion"
  - "React Hook Form"
  - "Sanity"
  - "next-sanity"
  - "React Email"
platforms:
  - "Web"

links: {}

tags:
  - "Next.js"
  - "Sanity"
  - "CMS"
  - "Marketing site"
  - "Lead generation"
  - "Local services"
categories:
  - "Case Study"

metrics:
  - label: "Audiences"
    value: "3 segments"
    note: "Residential, property managers, and commercial paths with tailored pages."
  - label: "Content"
    value: "Sanity-backed"
    note: "Schemas for settings, navigation, pages, services, areas, blog, testimonials, SEO."
  - label: "Editor experience"
    value: "/studio"
    note: "Embedded Sanity Studio in the Next.js app for in-context authoring."
outcomesSummary:
  - "Shipped a section-rich marketing experience: hero, services, process, about, stats, testimonials, emergency CTA, blog teaser, and service-area coverage."
  - "Built client-side quote and contact flows with React Hook Form on top of a responsive, branded UI."
  - "Established a Sanity content model and embedded Studio so marketing copy can move off hardcoded strings over time."

coverImage: "/assets/images/projects/speed-ac/cover.png"
gallery: []
ogImage: "/assets/images/projects/speed-ac/cover.png"

locale: "en"
readingTime: "9 min"
---

# Marketing that speaks to homeowners, managers, and businesses.

HVAC companies compete on trust, speed, and clarity. **Speed AC** needed a modern site that could speak to **residential customers**, **property managers**, and **commercial** clients—without three separate brands—while keeping leads flowing through forms and future-proofing content in a CMS.

## Overview

**speed-ac** is a **Next.js** marketing website for a **South Florida** HVAC contractor. The experience is built around clear service messaging, **service-area** coverage, and **lead capture** (quote and contact). Content is backed by **Sanity**: global settings, navigation, pages, services, service areas, testimonials, blog material, and **SEO** fields—editable through **Sanity Studio** mounted at **`/studio`** inside the same app.

![Speed AC marketing site](/assets/images/projects/speed-ac/cover.png)

## What shipped

### Homepage and marketing surface

The home page brings together the story end-to-end: **hero**, **services**, **process**, **about**, **stats**, **testimonials**, an **emergency CTA**, a **blog** teaser, and **service-area** sections—so visitors can self-select and convert without hunting.

### Audience-specific journeys

Dedicated routes support distinct intents:

- **AC Services** — residential-focused service detail and trust building.
- **Property Managers** — messaging tuned for multi-unit and ongoing relationships.
- **Commercial** — B2B-oriented positioning.
- **Service Areas** — geography and coverage made explicit for local SEO and user confidence.
- **Contact** — a clear path to reach the business.

**Responsive header and footer** navigation ties the IA together with consistent branding.

### Leads and communication

- **Quote and contact forms** run on the client with **React Hook Form**, keeping validation and UX snappy.
- **React Email** supports template development (`pnpm email:dev` for a local preview server), so transactional and lead-related emails stay maintainable alongside the app.

### Content management

**Sanity Studio** is **embedded** at `/studio` (not a separate deploy), which lowers friction for editors and keeps CMS configuration versioned with the site.

Schemas cover:

- Global **site settings** and **navigation**
- **Homepage** and other **marketing pages**
- **Services** and **service areas**
- **Blog** posts and categories
- **Testimonials**
- Reusable **SEO** and **rich text** building blocks

The model is designed so **hardcoded marketing strings can migrate into Sanity incrementally**—practical for a live project that must ship before every paragraph lives in the CMS.

## Tech stack

| Layer | Choices |
|--------|---------|
| Framework | **Next.js 16** (App Router), **React 19**, **TypeScript** |
| UI | **Tailwind CSS 4**, **shadcn/ui**, **Radix** primitives |
| Motion | **Motion** for animation |
| Forms | **React Hook Form** |
| CMS | **Sanity** + **next-sanity** |
| Email | **React Email** |
| Tooling | **pnpm** for installs and scripts |

## Challenges

1. **One brand, multiple buyers** — Copy and IA had to signal residential, PM, and commercial value without cluttering the nav or duplicating everything three times. Separate landing-style pages plus a shared home story balanced that.
2. **CMS without a big-bang migration** — Shipping with a full Sanity model while some content remains static requires discipline: schemas first, then gradual content moves so launches are not blocked.
3. **Local services + SEO** — Service-area and service pages need consistent metadata and structure; Sanity SEO fields and reusable objects support that as content grows.

## Outcomes

- A **cohesive marketing and lead funnel** aligned with how HVAC customers actually search and decide.
- **Editors get a real CMS path** via embedded Studio and structured content—not one-off code changes for every tweak.
- A **stack that matches 2026-era Next.js** practice: App Router, typed forms, component-driven UI, and headless content.

## Final takeaway

Speed AC shows how I approach **local-service marketing sites**: strong **IA** and **conversion paths**, **headless content** where the business will keep iterating, and **embedded Studio** so stakeholders stay close to the product—not a separate “CMS server” mental model.
