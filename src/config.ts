export type Site = {
    website: string;
    author: string;
    desc: string;
    title: string;
    ogImage: string;
    lightAndDarkMode: boolean;
};

export const SITE: Site = {
    website: "https://victoralvarado.dev/",
    author: "Victor Alvarado",
    desc: "An autobiographical blog about my life and my journey as a software engineer.",
    title: "Victor Alvarado",
    ogImage: "setup.jpeg",
    lightAndDarkMode: true,
};