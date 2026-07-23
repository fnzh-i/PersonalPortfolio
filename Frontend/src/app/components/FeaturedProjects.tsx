
import React from 'react';
import { PROJECTS_DATA, type Project } from './data/projectsData';
import { ProjectCard } from './data/projectCard';

interface FeaturedProjectsProps {
  projects?: Project[];
  allWorkLink?: string;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects = PROJECTS_DATA,
  allWorkLink = '#',
}) => {
  return (
    <section className="mb-[80px] max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-[64px]" id="projects">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <span className="font-['Geist',sans-serif] text-[11px] font-semibold text-[#5d5e63] uppercase tracking-[0.2em]">
            Portfolio
          </span>
          <h2 className="font-['Geist',sans-serif] text-[32px] font-medium text-[#1a1b1f] leading-[1.3] tracking-[-0.02em] mt-2">
            Featured Projects
          </h2>
        </div>
        <a
          href={allWorkLink}
          className="font-['Geist',sans-serif] text-[15px] text-[#5d5e63] hover:text-[#2563eb] transition-colors flex items-center gap-2 group"
        >
          All Projects{' '}
          <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;