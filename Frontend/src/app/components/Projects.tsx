// src/app/components/data/ProjectCard.tsx
import React, { useState } from 'react';
import type { Project } from './data/projectsData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="macos-glass-thick rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-stretch justify-between w-full">
      {project.imageUrl && (
        <div className="w-full md:w-2/5 aspect-[16/10] rounded-2xl overflow-hidden border border-white/80 shadow-sm flex-shrink-0 bg-black/5">
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      <div className="flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[11px] text-secondary uppercase tracking-[0.2em] font-bold">
            {project.featured ? 'Featured Project' : 'Project'}
          </span>

          <h3 className="text-2xl md:text-3xl font-display-lg text-on-background font-medium mt-1 mb-3">
            {project.title}
          </h3>

          <p className="text-secondary text-[15px] md:text-[16px] leading-relaxed">
            {isExpanded ? project.fullSummary : project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-3 py-1.5 bg-white/70 border border-white/80 rounded-xl text-[12px] text-on-background font-medium shadow-sm"
            >
              {highlight}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-4">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="bg-brand-blue text-white px-5 py-2.5 rounded-xl font-semibold text-[14px] hover:shadow-lg hover:shadow-brand-blue/20 transition-all active:scale-95"
          >
            {isExpanded ? 'View brief summary' : 'View full summary'}
          </button>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-on-background px-5 py-2.5 rounded-xl font-semibold text-[14px] border border-white/80 hover:bg-white/90 transition-all shadow-sm"
            >
              View GitHub Repo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};