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
		description: 'SaaS platform for fair value analysis and decision support for stock investors.',
		externalUrl: 'https://bpfairvalue.com',
	},
	{
		title: 'TheClosetClique.com',
		description: 'Student-focused fashion marketplace for renting and reselling clothing.',
		externalUrl: 'https://theclosetclique.com',
	},
	{	
		title: 'Glove-Safe',
		description: 'Glove Safe Store — a headless Shopify e-commerce storefront. The frontend is Next.js 16 (App Router, React 19) consuming the Shopify Storefront GraphQL API.',
		externalUrl: 'https://glove-safe.com',
	},
];
