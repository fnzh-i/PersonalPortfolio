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
    id: 'redrum',
    title: 'Redrum',
    summary: 'Redrum is a publicly hosted personal website that serves as a dynamic digital identity.',
    fullSummary: 'By integrating the Lanyard REST API, It showcases real-time Discord presence data, providing visitors with an interactive and engaging experience.',
    highlights: ['Vanilla JS DOM Manipulation', 'Lanyard REST API', 'No-Backend Architecture'],
    repoUrl: 'https://github.com/fnzh-i',
    liveUrl: 'https://www.redrum.top',
    imageUrl: '/projects/redrum.png', 
    featured: true,
  },
  {
    id: "mdt_mobile_integration",
    title: "MDT Mobile Integration",
    summary: "This platform optimizes civilian data management by bridging a powerful Laravel API with a flexible mobile framework.",
    fullSummary: "The result is a high-speed interface that empowers field officers to access vital information instantly, ensuring efficient performance of their duties.",
    highlights: [
      "Laravel 11 (PHP 8.2+)",
      " Docker & Docker Compose (MariaDB, PHP-FPM, Vite)",
      "RESTful API with Laravel Sanctum Authentication",
      "Retrofit (Android/Kotlin)",
    ],
    repoUrl: "https://github.com/fnzh-i/MDT-Mobile-Integration",
    imageUrl: "/projects/mdt_mobile_integration.png",
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
    imageUrl: "/projects/gltch.png",
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
];