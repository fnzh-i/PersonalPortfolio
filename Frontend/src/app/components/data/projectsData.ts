export type Project = {
  id: string;
  title: string;
  summary: string;
  fullSummary: string;
  highlights: string[];
  repoUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "gltch",
    title: "Gltch",
    summary: "A dynamic, multi-step e-commerce and festival campaign platform.",
    fullSummary: "It replaces traditional, cluttered festival layouts with an intuitive user experience featuring a track-filterable event schedule and a foolproof, 3-step checkout wizard designed to maximize conversions.",
    highlights: [
      "React / Next.js (App Router)",
      "Framer Motion (CSS & Glitch effects)",
      "Tailwind CSS (Brutalist Dark-Mode UI)",
    ],
    repoUrl: "https://github.com/fnzh-i/GLTCH",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "website-scraper",
    title: "Website Scraper",
    summary: "A fast utility that extracts structured data from target websites with configurable selectors.",
    fullSummary: "This project focuses on reliable data extraction from static pages. It supports configurable selectors, basic request throttling, and clean output formatting so results are easy to store or analyze. Built to be lightweight and practical for quick audits or small research tasks.",
    highlights: ["Dynamic selector configuration", "Normalized output formatting", "Pure Python implementation"],
    repoUrl: "https://github.com/fnzh-i/Website-Scraper",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    id: "gltch",
    title: "Gltch",
    summary: "A dynamic, multi-step e-commerce and festival campaign platform.",
    fullSummary: "It replaces traditional, cluttered festival layouts with an intuitive user experience featuring a track-filterable event schedule and a foolproof, 3-step checkout wizard designed to maximize conversions.",
    highlights: [
      "React / Next.js (App Router)",
      "Framer Motion (CSS & Glitch effects)",
      "Tailwind CSS (Brutalist Dark-Mode UI)",
    ],
    repoUrl: "https://github.com/fnzh-i/GLTCH",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "gltch",
    title: "Gltch",
    summary: "A dynamic, multi-step e-commerce and festival campaign platform.",
    fullSummary: "It replaces traditional, cluttered festival layouts with an intuitive user experience featuring a track-filterable event schedule and a foolproof, 3-step checkout wizard designed to maximize conversions.",
    highlights: [
      "React / Next.js (App Router)",
      "Framer Motion (CSS & Glitch effects)",
      "Tailwind CSS (Brutalist Dark-Mode UI)",
    ],
    repoUrl: "https://github.com/fnzh-i/GLTCH",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "gltch",
    title: "Gltch",
    summary: "A dynamic, multi-step e-commerce and festival campaign platform.",
    fullSummary: "It replaces traditional, cluttered festival layouts with an intuitive user experience featuring a track-filterable event schedule and a foolproof, 3-step checkout wizard designed to maximize conversions.",
    highlights: [
      "React / Next.js (App Router)",
      "Framer Motion (CSS & Glitch effects)",
      "Tailwind CSS (Brutalist Dark-Mode UI)",
    ],
    repoUrl: "https://github.com/fnzh-i/GLTCH",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
];