import React, { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';
import Footer from './Footer';
import { FeaturedProjects } from './FeaturedProjects';

interface SkillProps {
  name: string;
  percentage: string;
}

let hasShownPortfolioLoader = false;

const Portfolio: React.FC = () => {
  const [showLoading, setShowLoading] = useState(() => !hasShownPortfolioLoader);

  useEffect(() => {
    if (!showLoading) {
      return;
    }

    const timer = window.setTimeout(() => {
      hasShownPortfolioLoader = true;
      setShowLoading(false);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [showLoading]);

  const skills: SkillProps[] = [
    { name: 'Systems Design', percentage: '85%' },
    { name: 'System Architecture', percentage: '90%' },
    { name: 'Backend & Networking', percentage: '95%' },
  ];

  if (showLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative font-body-md text-on-background selection:bg-brand-blue selection:text-white aluminum-bg min-h-screen">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-wires absolute inset-0 opacity-50" />
        <div className="ambient-particles absolute inset-0 opacity-60" />
      </div>

      <main className="relative z-10 pt-48 max-w-[1280px] mx-auto px-16">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-20 mb-20">
          <div className="flex-1 space-y-8">
            <div className="inline-block bg-white/60 backdrop-blur-xl px-4 py-1 rounded-full border border-white/80 text-brand-blue text-[11px] font-bold uppercase tracking-widest shadow-sm">
              FULL-STACK DEVELOPER & SOFTWARE ENGINEER
            </div>
            <h1 className="font-display-lg font-medium text-5xl md:text-[64px] text-on-background leading-[1.1]">
              Evert Matthew<span className="inline-block pr-2 italic font-bold text-gradient-blue">"FANSHI"</span> Matias
            </h1>
            <p className="text-lg md:text-xl text-on-background/80 font-medium">
              Engineering digital stability for complex systems.
            </p>
            <p className="text-lg text-secondary max-w-xl leading-relaxed">
              I specialize in the intersection of
              <span className="font-medium text-on-background"> software systems, networking, and server-side architecture</span>
              —an engineering philosophy centered on technical precision, structural integrity, and high-performance execution.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-on-background text-white px-8 py-4 rounded-2xl text-[16px] font-semibold hover:bg-brand-blue transition-all shadow-xl shadow-black/5 active:scale-[0.98]">
                View Portfolio
              </button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square max-w-[420px] mx-auto">
              <div className="rounded-[48px] shadow-2xl">
                <div className="rounded-[48px] bg-white/30 macos-glass-thick p-1.5 overflow-hidden">
                  <div className="w-full h-full rounded-[42px] overflow-hidden">
                    <img 
                      className="w-full h-full object-cover" 
                      src="https://avatars.githubusercontent.com/u/198473281?v=4" 
                      alt="Minimalist abstract glass render" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="macos-glass-thick rounded-[32px] p-10">
              <span className="text-[11px] text-secondary uppercase tracking-[0.2em] font-bold">Core Competencies</span>
              <h2 className="text-3xl font-display-lg text-on-background mt-3 mb-10">Design & Engineering</h2>
              <div className="space-y-10">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-[15px] text-on-background font-medium">{skill.name}</span>
                      <span className="font-mono text-[13px] text-secondary">{skill.percentage}</span>
                    </div>
                    <div className="h-[6px] bg-white/50 w-full rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="h-full bg-brand-blue rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                        style={{ width: skill.percentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="macos-glass-thick rounded-[32px] p-10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] text-secondary uppercase tracking-[0.2em] font-bold">Experience</span>
                <h2 className="text-3xl font-display-lg text-on-background mt-3">Bridging Logic & Execution</h2>
              </div>
              <div className="space-y-8">
                <p className="text-lg text-secondary leading-relaxed">
                  A self-taught builder pursuing a CS degree in the Philippines. 
                  I thrive on engineering the systems that live under the hood—specializing in networking, 
                  server architecture, and the "process" of turning complex problems into clean, executable code.
                </p>
                <a className="inline-flex items-center gap-3 font-bold text-brand-blue group transition-all text-lg" href="#">
                  Read more
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <FeaturedProjects />

        {/* CTA Section */}
        <section className="mb-20">
          <div className="bg-brand-blue rounded-[48px] p-14 md:p-24 flex flex-col md:flex-row items-center justify-between overflow-hidden relative shadow-2xl shadow-brand-blue/20">
            <div className="relative z-10 max-w-2xl text-center md:text-left">
              <h4 className="text-4xl md:text-5xl font-display-lg text-white font-semibold leading-tight">
                Let's build something <span className="italic font-light text-white/90">exceptional</span> together.
              </h4>
            </div>
            <button className="mt-12 md:mt-0 relative z-10 bg-white text-on-background px-12 py-5 rounded-2xl font-semibold hover:bg-white/90 hover:-translate-y-1 transition-all shadow-2xl active:scale-95">
              Start a Project
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;