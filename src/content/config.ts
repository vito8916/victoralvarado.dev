import { defineCollection, z } from 'astro:content';

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
            tags: z.array(z.string()),
            showLink: z.boolean(),
        }),
    }),
    projects: defineCollection({
        schema: z.object({
            title: z.string(),
            description: z.string(),
            company: z.string(),
            startDate: z.date(),
            endDate: z.date().optional(),
            tags: z.array(z.string()),
            showLink: z.boolean(),
        }),
    }),
};