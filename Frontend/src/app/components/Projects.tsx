import React, { useState } from "react";
import Footer from "./Footer";

type Project = {
  id: string;
  title: string;
  summary: string;
  fullSummary: string;
  highlights: string[];
  repoUrl: string;
};

const projects: Project[] = [
  {
    id: "website-scraper",
    title: "Website Scraper",
    summary:
      "A fast utility that extracts structured data from target websites with configurable selectors.",
    fullSummary:
      "This project focuses on reliable data extraction from static pages. It supports configurable selectors, basic request throttling, and clean output formatting so results are easy to store or analyze. Built to be lightweight and practical for quick audits or small research tasks.",
    highlights: ["Dynamic selector configuration", "Normalized output formatting", "Pure Python implementation"],
    repoUrl: "https://github.com/fnzh-i/Website-Scraper",

  },
  {
    id: "gltch",
    title: "Gltch",
    summary:"The project involves creating a dynamic, multi-step e-commerce and campaign website.",
    fullSummary: "It replaces traditional, cluttered festival layouts with an intuitive user experience featuring a track-filterable event schedule and a foolproof, 3-step checkout wizard designed to maximize conversions.",
    highlights: ["React / Next.js (App Router)","Framer Motion (High-energy CSS transitions & Glitch effects)","Tailwind CSS (Brutalist Dark-Mode UI)"],
    repoUrl: "https://github.com/fnzh-i/GLTCH",
  },
];

const Projects: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const toggleSummary = (projectId: string) => {
    setExpandedProjectId((current) => (current === projectId ? null : projectId));
  };

  return (
    <main
      id="projects"
      className="relative overflow-hidden min-h-screen pt-40 pb-24 px-6 md:px-16 scroll-mt-20 aluminum-bg"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="ambient-wires absolute inset-0 opacity-50" />
        <div className="ambient-particles absolute inset-0 opacity-60" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-white/60 backdrop-blur-xl px-4 py-1 rounded-full border border-white/80 text-brand-blue text-[11px] font-bold uppercase tracking-widest shadow-sm">
            Selected Work
          </div>
          <h1 className="font-display-lg text-5xl md:text-[64px] text-on-background tracking-tight leading-[1.1]">
            Projects <span className="inline-block pr-2 italic font-normal text-gradient-blue">Showcase</span>
          </h1>
          <p className="font-body-lg text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            Hand-picked builds that highlight systems thinking, performance, and reliability.
          </p>
        </div>

        <section className="macos-glass-thick rounded-[40px] p-10 md:p-12">
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => {
              const isExpanded = expandedProjectId === project.id;

              return (
                <article
                  key={project.id}
                  className="techstack-card rounded-[32px] border border-white/60 bg-white/40 p-8 md:p-10"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="space-y-4">
                      <div className="text-[11px] text-secondary uppercase tracking-[0.2em] font-bold">
                        Featured Project
                      </div>
                      <h2 className="text-3xl font-display-lg text-on-background">
                        {project.title}
                      </h2>
                      <p className="text-secondary text-lg leading-relaxed">
                        {isExpanded ? project.fullSummary : project.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-4 py-2 bg-white/70 border border-white/80 rounded-2xl text-[13px] text-on-background shadow-sm font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 min-w-[210px]">
                      <button
                        type="button"
                        onClick={() => toggleSummary(project.id)}
                        className="bg-brand-blue text-white px-6 py-3 rounded-2xl font-semibold text-[15px] hover:shadow-lg hover:shadow-brand-blue/20 transition-all active:scale-95"
                      >
                        {isExpanded ? "View brief summary" : "View full summary"}
                      </button>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white text-on-background px-6 py-3 rounded-2xl font-semibold text-[15px] text-center border border-white/80 hover:bg-white/90 transition-all"
                      >
                        View GitHub Repo
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Projects;
