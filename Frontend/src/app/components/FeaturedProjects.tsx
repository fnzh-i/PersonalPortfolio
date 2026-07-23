import React, { useRef } from 'react';
import { PROJECTS_DATA, type Project } from './data/projectsData';
import { FeaturedProjectCard } from './data/FeaturedProjectCard';

interface FeaturedProjectsProps {
  projects?: Project[];
  allWorkLink?: string;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects = PROJECTS_DATA,
  allWorkLink = '#',
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const featuredOnlyProjects = projects.filter((project) => Boolean(project.featured));
  
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (featuredOnlyProjects.length === 0) {
    return null;
  }

  return (
    <section className="mb-20 max-w-[1280px] mx-auto relative" id="projects">
      {/* Header */}
      <div className="flex justify-between items-end mb-8 px-2 sm:px-0">
        <div>
          <h2 className="font-['Geist',sans-serif] text-[32px] font-medium text-[#1a1b1f] leading-[1.3] tracking-[-0.02em]">
            Featured Projects
          </h2>
        </div>

        <div>
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
      </div>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {featuredOnlyProjects.map((project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 pt-4">
        <button
          type="button"
          onClick={() => scroll('left')}
          className="w-11 h-11 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all text-secondary active:scale-95"
          aria-label="Scroll left"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          className="w-11 h-11 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all text-secondary active:scale-95"
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </section>
  );
};

export default FeaturedProjects;