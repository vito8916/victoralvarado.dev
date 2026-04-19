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
company: ""
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
  - label: "Bundle model"
    value: "Multi–line item"
    note: "Core + selected patches as real SKUs—inventory stays accurate in Shopify."
  - label: "Checkout"
    value: "Shopify-hosted"
    note: "Payments, tax, and fraud tooling without custom checkout risk."
  - label: "Catalog scale path"
    value: "3k → 8k SKUs"
    note: "Architecture and IA aimed at large patch catalogs with solid SEO."
outcomesSummary:
  - "Delivered a premium “build your bundle” flow: pick the core strap set, choose exactly N patches, see price and discount before add-to-cart."
  - "Kept Shopify as the system of record for products, inventory, and checkout while Next.js owns UX, SEO, and speed."
  - "Shipped supporting journeys: collections, PDPs, cart upsells, and Team Orders as B2B lead capture."

coverImage: "/assets/images/projects/glove-safe/cover.png"
gallery: []
ogImage: "/assets/images/projects/glove-safe/cover.png"
canonical: "https://www.glove-safe.com/"

locale: "en"
readingTime: "10 min"
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

- **Correct inventory behavior** across bundle and single-SKU purchases.
- **Clear customer path** from discovery → customize bundle → checkout.
- **Operational simplicity** for the business: day-to-day changes happen in Shopify, not in code.
- **Foundation for growth** in catalog size and future enhancements (search, affiliates, deeper B2B)—without rewriting the commerce core.

## Challenges

1. **Bundle discounts vs. line items** — The discount mechanism (automatic rules vs. controlled codes) had to be chosen early and tested against edge cases; keeping checkout on Shopify narrowed the risk surface.
2. **Catalog scale** — A large patch catalog demands disciplined **pagination, filtering, and caching** so pages stay fast as SKUs grow.
3. **UX vs. implementation** — The storefront must present a **single cohesive bundle** while the implementation stays **honest per SKU**—alignment between design and cart logic was essential.

## Final takeaway

GloveSafe is a practical **Shopify + Next.js** engagement: **headless where it improves experience**, **hosted checkout where it reduces risk**, and a **bundle story** that matches how the business actually stocks and ships product—one strap, many patches, infinite shelf combinations.
