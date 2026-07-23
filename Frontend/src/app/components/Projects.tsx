import React, { useState } from "react";
import Footer from "./Footer";
import { ProjectCard } from "./data/projectCard";
import { PROJECTS_DATA, type Project } from "./data/projectsData";
interface ProjectsProps {
  projectsList?: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projectsList = PROJECTS_DATA }) => {
  const [filter, setFilter] = useState<"all" | "featured" | "other">("all");
  const filteredProjects = projectsList.filter((project) => {
    if (filter === "featured") return project.featured;
    if (filter === "other") return !project.featured;
    return true;
  });

  return (
    <main
      id="projects"
      className="relative overflow-hidden min-h-screen pt-40 pb-24 px-6 md:px-16 scroll-mt-20 aluminum-bg"
    >
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block bg-white/60 backdrop-blur-xl px-4 py-1 rounded-full border border-white/80 text-brand-blue text-[11px] font-bold uppercase tracking-widest shadow-sm">
            Selected Work
          </div>
          <h1 className="font-display-lg text-5xl md:text-[64px] text-on-background tracking-tight leading-[1.1]">
            Projects <span className="inline-block pr-2 italic font-normal text-gradient-blue">Showcase</span>
          </h1>
          <div className="flex justify-center gap-3 pt-4">
            {(["all", "featured", "other"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  filter === tab
                    ? "bg-brand-blue text-white shadow-md"
                    : "bg-white/60 text-secondary border border-white/80 hover:bg-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <section className="macos-glass-thick rounded-[40px] p-8 md:p-12">
          <div className="grid grid-cols-1 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default Projects;