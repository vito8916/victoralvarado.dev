export interface FeatureProject {
	title: string;
	description: string;
	githubUrl?: string;
	externalUrl?: string;
}

export const featureProjects: FeatureProject[] = [
	{
		title: 'RulesForAI.app',
		description: 'Generates structured rules for AI coding agents to improve output quality and consistency.',
		externalUrl: 'https://rulesforai.app',
	},
	{
		title: 'BpFairValue.com',
		description: 'Options trading platform—fair value pricing, premarket LOI, screener, and insights—with subscription onboarding.',
		externalUrl: 'https://bpfairvalue.com/',
	},
	{
		title: 'TheClosetClique.com',
		description: 'Student-focused fashion marketplace for renting and reselling clothing.',
		externalUrl: 'https://theclosetclique.com/',
	},
	{	
		title: 'Glove-Safe',
		description: 'Glove Safe Store — a headless Shopify e-commerce storefront. The frontend is Next.js 16 (App Router, React 19) consuming the Shopify Storefront GraphQL API.',
		externalUrl: 'https://www.glove-safe.com/',
	},
	{
		title: 'Speed AC',
		description: 'Next.js marketing site for a South Florida HVAC company—Sanity CMS with embedded Studio, multi-audience pages, and React Hook Form lead capture.',
		externalUrl: 'https://speedairconditioning.com/',
	},
];
