import React, { useState } from 'react';
import type { Project } from './projectsData';

interface FeaturedProjectCardProps {
  project: Project;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="macos-glass-thick rounded-[32px] overflow-hidden flex flex-col justify-between w-[85vw] sm:w-[360px] md:w-[400px] min-h-[540px] flex-shrink-0 snap-start transition-all hover:translate-y-[-4px]">
      <div className="w-full aspect-[16/10] relative overflow-hidden bg-black/5 group">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} preview`}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-brand-blue/5">
            <span className="material-symbols-outlined text-[48px] text-brand-blue/30">
              code
            </span>
          </div>
        )}
        <div className="absolute top-4 left-4 backdrop-blur-md bg-white/70 border border-white/80 px-3 py-1 rounded-full shadow-sm">
          <span className="text-[10px] text-on-background uppercase tracking-[0.15em] font-bold">
            {project.featured ? 'Featured' : 'Project'}
          </span>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-display-lg text-on-background font-medium leading-tight">
            {project.title}
          </h3>
          <p className="text-secondary text-[14px] leading-relaxed line-clamp-3">
            {isExpanded ? project.fullSummary : project.summary}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-3 py-1 bg-white/70 border border-white/80 rounded-xl text-[11px] text-on-background font-semibold shadow-sm"
            >
              {highlight}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-black/5 mt-auto">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="flex-1 bg-brand-blue text-white py-2.5 px-3 rounded-xl font-semibold text-[13px] hover:shadow-lg hover:shadow-brand-blue/20 transition-all active:scale-95 text-center"
          >
            {isExpanded ? 'Brief' : 'Full Summary'}
          </button>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 bg-white text-on-background py-2.5 px-3 rounded-xl font-semibold text-[13px] text-center border border-white/80 hover:bg-white/90 transition-all shadow-sm"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};