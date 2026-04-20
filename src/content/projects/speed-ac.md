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
company: "NSPROS"
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

links:
  live: "https://speedairconditioning.com"
additionalLinks:
  - label: "Live site"
    url: "https://speedairconditioning.com"

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
  - label: "Lighthouse"
    value: "100 / 100 / 100 / 90"
    note: "Performance, Best Practices, and SEO at 100; Accessibility at 90."
  - label: "Audiences served"
    value: "3 segments"
    note: "Residential, property managers, and commercial — each with a tailored landing path."
  - label: "Sanity content model"
    value: "8+ schemas"
    note: "Settings, navigation, pages, services, service areas, blog, testimonials, and reusable SEO/rich-text blocks."
  - label: "Editor experience"
    value: "Embedded Studio"
    note: "Sanity Studio mounted at /studio inside the Next.js app — no separate deployment."
outcomesSummary:
  - "Shipped a fast, branded marketing site at speedairconditioning.com scoring 100/100/100 on Lighthouse Performance, Best Practices, and SEO (90 Accessibility)."
  - "Delivered three audience-specific journeys (residential, property managers, commercial) under one cohesive brand — no duplicated nav, no three-site sprawl."
  - "Established a Sanity content model with embedded Studio at /studio so marketing copy moves off hardcoded strings incrementally, on the client's schedule."
  - "Wired client-side quote and contact forms with React Hook Form, and set up React Email templates for maintainable transactional email."

coverImage: "/assets/images/projects/speed-ac/cover.png"
gallery: []
ogImage: "/assets/images/projects/speed-ac/cover.png"

locale: "en"
readingTime: "5 min"
---

# Marketing that speaks to homeowners, managers, and businesses.

HVAC companies compete on trust, speed, and clarity. **Speed AC** needed a modern site that could speak to **residential customers**, **property managers**, and **commercial** clients—without three separate brands—while keeping leads flowing through forms and future-proofing content in a CMS.

## Overview

**speed-ac** is a **Next.js** marketing website for a **South Florida** HVAC contractor. The experience is built around clear service messaging, **service-area** coverage, and **lead capture** (quote and contact). Content is backed by **Sanity**: global settings, navigation, pages, services, service areas, testimonials, blog material, and **SEO** fields—editable through **Sanity Studio** mounted at **`/studio`** inside the same app.

![Speed AC marketing site](/assets/images/projects/speed-ac/cover.png)

<a href="https://speedairconditioning.com" target="_blank" rel="noopener noreferrer">View live →</a>

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

- **Lighthouse 100 / 100 / 100 / 90** on Performance, Best Practices, SEO, and Accessibility for a multi-section marketing site.
- **One brand, three audiences** — residential, property managers, and commercial — with cohesive IA and no duplicated navigation.
- **Editors get a real CMS path** via embedded Studio at `/studio` and structured content — not one-off code changes for every tweak.
- **Modern Next.js stack** (App Router, React 19, Tailwind 4, shadcn/ui, React Hook Form, React Email) delivered as a maintainable long-term asset for the client.

## Final takeaway

Speed AC shows how I approach **local-service marketing sites**: strong **IA** and **conversion paths**, **headless content** where the business will keep iterating, and **embedded Studio** so stakeholders stay close to the product—not a separate “CMS server” mental model.
