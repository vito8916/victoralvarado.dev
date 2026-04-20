---
title: "GloveSafe"
description: "Headless Shopify storefront for baseball and softball glove accessories: a custom bundle builder (core strap + patches), team-order leads, and performance-focused commerce UX."
excerpt: "How I shipped a Next.js storefront on Shopify for GloveSafe—bundles without fake SKUs, real inventory per patch, and checkout kept on Shopify for trust and compliance."
publishDate: 2026-04-18
updatedDate: 2026-04-18
status: "live"
featured: true
draft: false

client: "GloveSafe USA Corp"
company: "NSPROS"
industry: "E-commerce / Sporting goods"
engagementType: "contract"
timeline: "2025 – 2026"
myRole: "Full-stack engineer (Next.js storefront, Shopify integration, bundle UX)"
team:
  - "Client: product, catalog, and operations"
  - "Engineering: architecture and implementation"

stack:
  - "Next.js"
  - "React"
  - "TypeScript"
  - "Shopify"
  - "Storefront API (GraphQL)"
  - "Vercel"
platforms:
  - "Web"

links:
  live: "https://www.glove-safe.com/"
additionalLinks:
  - label: "Live store"
    url: "https://www.glove-safe.com/"

tags:
  - "E-commerce"
  - "Shopify"
  - "Next.js"
  - "Headless commerce"
  - "GraphQL"
categories:
  - "Case Study"

metrics:
  - label: "Orders shipped"
    value: "500+"
    note: "Since launch on 4 Mar 2026."
  - label: "Catalog"
    value: "3,000 SKUs"
    note: "Core straps plus hook-and-loop patches live in Shopify at launch, with headroom to 8k+."
  - label: "Team-order leads"
    value: "25"
    note: "B2B inquiries captured via the Team Orders form since launch."
  - label: "Checkout"
    value: "Shopify-hosted"
    note: "Payments, tax, and fraud tooling kept on Shopify — zero custom checkout risk."
outcomesSummary:
  - "500+ orders shipped in the first weeks post-launch (4 Mar 2026), with inventory staying accurate across bundles and singles."
  - "Catalog launched at 3,000 SKUs with an architecture and IA designed to scale to 8,000+ without re-platforming."
  - "25 B2B team-order leads captured through a lightweight form — no bespoke B2B checkout needed in v1."
  - "Shopify remained the system of record for products, inventory, and checkout; Next.js owned UX, SEO, and speed."

coverImage: "/assets/images/projects/glove-safe/cover.png"
gallery: []
ogImage: "/assets/images/projects/glove-safe/cover.png"
canonical: "https://www.glove-safe.com/"

locale: "en"
readingTime: "6 min"
---

# Commerce UX that respects inventory reality.

A modular product story—core strap, interchangeable patches, and bundles—needed a storefront that could market patches heavily while keeping stock and checkout honest.

## Overview

[GloveSafe](https://www.glove-safe.com/) sells a **wrist strap and lanyard system** for baseball and softball gloves, plus a growing catalog of **hook-and-loop patches**. The business model combines a core SKU with high-rotation patch SKUs and **bundle offers** where customers buy the core and select a fixed number of patches at a discount.

I planned and built the experience around **Shopify (backend)** and a **Next.js** storefront, using patterns from the **Vercel `nextjs-commerce`** template as a foundation—then layering custom flows for bundles, upsells, and team orders.

![GloveSafe storefront — home and hero](/assets/images/projects/glove-safe/cover.png)

<a href="https://www.glove-safe.com/" target="_blank" rel="noopener noreferrer">View live store →</a>

## Problem

Selling “bundles” in a headless stack is easy to get wrong:

- **Fake bundle SKUs** hide real inventory and create fulfillment surprises.
- **Patch-first merchandising** needs strong collection and PDP UX—patches drive revenue and repeat purchases.
- **Discount rules** must apply reliably when the cart contains multiple line items, not a single composite SKU.
- **B2B team orders** need a lightweight lead path without rebuilding checkout.

The product also needed room to scale from thousands toward **8,000+ patch SKUs** without the storefront falling over on navigation or SEO.

## Goals

- Launch a **fast, reliable storefront** with patches at the center of navigation and merchandising.
- Implement a **bundle builder**: core product + **exactly N patches** (configurable), with validation, live totals, and clear add-to-cart behavior.
- Keep **checkout on Shopify** to minimize compliance and payment risk while still feeling seamless.
- Support **Canada and US** shipping rules (e.g. free shipping above a threshold) and operational clarity for the client team.
- Provide **Team Orders** as a structured lead form (not automated B2B checkout in phase one).

## Solution

### Architecture

- **Shopify** remains the source of truth for products, variants, inventory, prices, discounts, and checkout.
- **Next.js** owns the customer experience: IA, performance, SEO, and the bundle UX.
- **Storefront API (GraphQL)** powers catalog reads; cart flows create the right line items and hand off to **Shopify checkout**.

Bundles are **not** implemented as synthetic SKUs. The customer sees one cohesive offer, but the cart contains **separate line items** for the core and each selected patch so **inventory decrements per real SKU**—matching the blueprint’s “multiple line items + automatic discount” approach.

### Bundle builder UX

The “Build your setup” style flow makes four ideas obvious:

1. What the **core** includes.
2. That the user must pick **exactly N** patches (with clear validation if the count is wrong).
3. **Price and discount** update as selections change.
4. **Add to cart** adds core + patches together in a predictable way.

Edge cases—out of stock, low stock messaging, blocking checkout until the selection is valid—are handled in the UI so support load stays low.

### Beyond the bundle

- **Collections and PDPs** for core, patches, and deals.
- **Cart upsells** suggesting additional patches.
- **Team Orders** page for bulk and custom inquiries—capture and route leads without forcing a bespoke B2B checkout in v1.

### SEO, analytics, and performance

Metadata, clean URLs, and indexable collection pages support organic discovery for patch-heavy searches. Analytics hooks target standard commerce events (view item, add to cart, begin checkout). Images and caching strategies align with **Core Web Vitals** goals for a large catalog.

## Tech highlights

| Area | Approach |
|------|----------|
| Storefront | Next.js (App Router–style stack), React, TypeScript |
| Commerce API | Shopify Storefront GraphQL API |
| Checkout | Native Shopify checkout (redirect / cart URL patterns) |
| Hosting | Vercel-aligned deployment model |
| Operations | Client manages catalog and fulfillment in Shopify Admin—no custom admin panel required for phase one |

## Delivery phases (from blueprint to launch)

Work was sequenced to reduce risk: **Shopify operational setup** (taxes, shipping zones, products, collections) → **connected storefront** → **bundle builder** → **upsell funnel** → **team orders** → **SEO/analytics hardening** → **UAT and go-live** (DNS, payment verification, test orders, inventory checks).

## Outcomes

- **500+ orders shipped** since launch on **4 Mar 2026**, with inventory staying accurate across bundles and single-SKU purchases.
- **25 B2B team-order leads** captured through a lightweight inquiry form — no custom B2B checkout needed in v1.
- **3,000 live SKUs** at launch, on an architecture sized to scale to **8,000+** without re-platforming.
- **Operational simplicity** for the business: day-to-day changes (products, prices, inventory, discounts) happen in Shopify Admin, not in code.
- **Foundation for growth** in catalog size and future enhancements (search, affiliates, deeper B2B) — without rewriting the commerce core.

## Challenges

### 1. Keeping Shopify and Next.js in sync

The hardest problem was running a fast, cache-heavy Next.js storefront **without ever drifting from Shopify's inventory truth**. A few concrete decisions shaped the solution:

- **Single source of truth.** Products, variants, prices, inventory, and discounts live in Shopify — full stop. Next.js never owns commerce state; it reads via the **Storefront GraphQL API** and composes the experience on top.
- **Cache with invalidation, not TTL guessing.** Collection and PDP pages are aggressively cached for speed, but **Shopify webhooks trigger on-demand revalidation** whenever products, inventory, or collections change. That keeps pages fast without serving stale "in stock" lies.
- **Cart lives server-side on Shopify.** The bundle builder composes line items in the UI, but the cart itself is a **Shopify Cart** object — so discount rules, taxes, and checkout hand-off all Just Work, and multiple tabs stay consistent.
- **Graceful reads during outages.** The storefront tolerates transient Storefront API slowness with sensible request timeouts and cached fallbacks, so a blip upstream doesn't blank the shelf.

### 2. Bundle discounts vs. real line items

The bundle is presented as one offer, but the cart must carry **separate line items** so inventory decrements per real SKU. Choosing between **automatic discount rules** and **controlled discount codes** had to happen early — both were tested against edge cases (partial inventory, mixed-bundle carts, abandoned-cart recovery) before committing.

### 3. Catalog scale

Thousands of patch SKUs demand disciplined **pagination, filtering, and image strategy** so collection pages stay fast as the catalog grows from 3,000 toward 8,000+ — and so Google can actually crawl and index the long tail.

### 4. UX vs. implementation honesty

The storefront must present a **single cohesive bundle** while the implementation stays **honest per SKU**. Alignment between the bundle UI (count validation, live pricing, stock messaging) and the cart's underlying line-item structure was essential to avoid "it added what?" support tickets.

## Final takeaway

GloveSafe is a practical **Shopify + Next.js** engagement: **headless where it improves experience**, **hosted checkout where it reduces risk**, and a **bundle story** that matches how the business actually stocks and ships product—one strap, many patches, infinite shelf combinations.
