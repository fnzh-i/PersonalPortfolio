// ProjectCard.tsx
import React from 'react';
import type { Project } from './projectsData';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white/70 backdrop-blur-[50px] saturate-[200%] border border-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.04),inset_0_0_0_1px_rgba(255,255,255,0.4)] rounded-[32px] overflow-hidden group flex flex-col justify-between">
      
      {/* Image or Icon Preview */}
      <div className="aspect-[16/10] overflow-hidden relative bg-[#2563eb]/5 flex items-center justify-center">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} Preview`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <span className="material-symbols-outlined text-[64px] text-[#2563eb]/20 group-hover:text-[#2563eb]/30 transition-colors">
            {project.iconName || 'code'}
          </span>
        )}
        <div className="absolute inset-0 bg-[#2563eb]/0 group-hover:bg-[#2563eb]/5 transition-colors pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-['Geist',sans-serif] text-[20px] font-medium text-[#1a1b1f] mb-2">
            {project.title}
          </h3>
          <p className="font-['Inter',sans-serif] text-[15px] text-[#5d5e63] mb-6 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/60 border border-white/80 rounded-lg text-[11px] font-['Geist',sans-serif] font-semibold text-[#5d5e63] shadow-sm uppercase tracking-[0.1em]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};