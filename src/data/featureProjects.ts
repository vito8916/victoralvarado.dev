export interface FeatureProject {
	title: string;
	description: string;
	githubUrl?: string;
	externalUrl?: string;
}

export const featureProjects: FeatureProject[] = [
	{
		title: 'RulesForAI.app',
		description: 'A web app that helps you create rules for AI agents to follow.',
		externalUrl: 'https://rulesforai.app',
	},
	{
		title: 'BpFairValue.com',
		description: 'A website that helps you calculate the fair value of a company.',
		externalUrl: 'https://bpfairvalue.com',
	},
	{
		title: 'TheClosetClique.com',
		description: 'A website that helps you find the perfect outfit for any occasion.',
		externalUrl: 'https://theclosetclique.com',
	},
	{	
		title: 'SupaNext Starter Template',
		description: 'A starter template for Next.js and Supabase projects.',
		externalUrl: 'https://supabase-nextjs-starter-template.vercel.app/',
	},
];
