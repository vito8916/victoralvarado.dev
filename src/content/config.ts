import { defineCollection, z } from 'astro:content';


const metricSchema = z.object({
    label: z.string().min(1),
    value: z.string().min(1),
    before: z.string().optional(),
    after: z.string().optional(),
    delta: z.string().optional(), // e.g. "+40%" or "-95%"
    note: z.string().optional(),
  });
  
  const linkSchema = z.object({
    label: z.string().min(1),
    url: z.string().url(),
  });
  
  const projectCaseStudyCollection = defineCollection({
    type: "content",
    schema: z.object({
      // Core identity
      title: z.string().min(1),
      
      description: z.string().min(1).max(220),
      excerpt: z.string().min(1).max(180),
  
      // Dates and visibility
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      status: z.enum(["live", "beta", "in-progress", "archived"]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
  
      // Positioning
      client: z.string().optional(), // for agency/client work
      company: z.string().optional(), // company where project was done
      industry: z.string().optional(),
      engagementType: z
        .enum(["full-time", "contract", "freelance", "personal"])
        .default("personal"),
      timeline: z.string().optional(), // e.g. "Jan 2025 – Present"
      myRole: z.string().min(1),
      team: z.array(z.string()).default([]),
  
      // Tech and platforms
      stack: z.array(z.string()).min(1),
      platforms: z.array(z.string()).default([]), // ["Web","Mobile","Back Office"]
  
      // Links
      links: z
        .object({
          live: z.string().url().optional(),
          github: z.string().url().optional(),
          caseStudyRepo: z.string().url().optional(),
          demoVideo: z.string().url().optional(),
          booking: z.string().url().optional(),
        })
        .default({}),
      additionalLinks: z.array(linkSchema).default([]),
  
      // Taxonomy
      tags: z.array(z.string()).default([]),
      categories: z.array(z.string()).default([]),
  
      // Impact
      metrics: z.array(metricSchema).default([]),
      outcomesSummary: z.array(z.string()).default([]),
  
      // Media / SEO
      coverImage: z.string().optional(), // local path in /public
      gallery: z.array(z.string()).default([]),
      ogImage: z.string().optional(),
      canonical: z.string().url().optional(),
  
      // Meta
      confidentiality: z.string().optional(), // NDA note, etc.
      locale: z.string().default("en"),
      readingTime: z.string().optional(), // optional manual override
    }),
  });

  export const collections = {
    work: defineCollection({
        schema: z.object({
            title: z.string(),
            position: z.string(),
            description: z.string(),
            company: z.string(),
            location: z.string(),
            date: z.date(),
            endDate: z.date().optional(),
            bullets: z.array(z.string()).optional(),
            tags: z.array(z.string()),
            showLink: z.boolean(),
        }),
    }),
    education: defineCollection({
        schema: z.object({
            position: z.string(),
            description: z.string(),
            company: z.string(),
            location: z.string(),
            date: z.date(),
            endDate: z.date().optional(),
            bullets: z.array(z.string()).optional(),
            tags: z.array(z.string()),
            showLink: z.boolean(),
        }),
    }),
    projects: projectCaseStudyCollection,
};