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
		title: 'SupaNext Starter Template',
		description: 'Production-ready Next.js + Supabase starter to ship secure SaaS apps faster',
		externalUrl: 'https://supabase-nextjs-starter-template.vercel.app/',
	},
];
