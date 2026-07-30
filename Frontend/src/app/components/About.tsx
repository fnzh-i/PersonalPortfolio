import React, { useEffect, useRef } from 'react';
import Footer from './Footer';

interface SkillProps {
  name: string;
  percentage: string;
}

export const About: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll reveal observer
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    // Parallax effect on glass panels
    const handleMouseMove = (e: MouseEvent) => {
      const panels = document.querySelectorAll<HTMLElement>('.glass-panel');
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;

      panels.forEach((panel) => {
        panel.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 3D Apple Tilt Effect for Hero Photo
  const handlePhotoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handlePhotoMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const skills: SkillProps[] = [
    { name: 'Systems Design', percentage: '85%' },
    { name: 'System Architecture', percentage: '90%' },
    { name: 'Backend & Networking', percentage: '95%' },
  ];

  return (
    <div className="relative font-body-md text-slate-900 bg-[#f5f5f7] min-h-screen pt-12 selection:bg-brand-blue selection:text-white">
      {/* Background Ambient FX */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-wires absolute inset-0 opacity-40" />
        <div className="ambient-particles absolute inset-0 opacity-50" />
      </div>

      {/* Side Nav (Desktop only) */}
      <aside className="fixed left-0 top-0 h-full w-64 hidden lg:flex flex-col p-8 space-y-8 bg-white/60 backdrop-blur-[30px] border-r border-slate-200/80 z-40 pt-28">
        <div className="mb-8">
          <h2 className="text-xl font-medium text-slate-900">System Architect</h2>
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mt-1">
            E. Matthew Matias
          </p>
        </div>
        <nav className="flex flex-col space-y-2">
          <div className="flex items-center space-x-3 p-3 text-slate-600 hover:bg-white/80 rounded-lg cursor-pointer transition-all">
            <span className="material-symbols-outlined text-brand-blue">dashboard</span>
            <span className="text-xs uppercase tracking-wider font-semibold">Overview</span>
          </div>
          <div className="flex items-center space-x-3 p-3 text-slate-600 hover:bg-white/80 rounded-lg cursor-pointer transition-all">
            <span className="material-symbols-outlined text-brand-blue">terminal</span>
            <span className="text-xs uppercase tracking-wider font-semibold">Tech Stack</span>
          </div>
          <div className="flex items-center space-x-3 p-3 text-slate-600 hover:bg-white/80 rounded-lg cursor-pointer transition-all">
            <span className="material-symbols-outlined text-brand-blue">folder_special</span>
            <span className="text-xs uppercase tracking-wider font-semibold">Case Studies</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-white text-slate-900 rounded-lg cursor-pointer transition-all shadow-sm border border-slate-200/60">
            <span className="material-symbols-outlined text-brand-blue">person</span>
            <span className="text-xs uppercase tracking-wider font-semibold">Biography</span>
          </div>
        </nav>
      </aside>

      <main className="relative z-10 lg:ml-64 pt-12 pb-20">
        {/* Apple-Style Hero Projection Section */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Apple Floating Photo Projection */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div
                ref={cardRef}
                onMouseMove={handlePhotoMouseMove}
                onMouseLeave={handlePhotoMouseLeave}
                className="relative group w-full max-w-[440px] aspect-[4/5] rounded-[40px] p-2.5 transition-transform duration-200 ease-out cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 100%)',
                  boxShadow:
                    '0 30px 60px -12px rgba(50, 50, 93, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
                }}
              >
                {/* Back Light Glow */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-brand-blue/30 via-indigo-500/10 to-transparent blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

                {/* Glass Bezel Container */}
                <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-slate-900 border border-white/40">
                  <img
                    alt="Evert Matthew Matias"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    src="https://avatars.githubusercontent.com/u/198473281?v=4"
                  />

                  {/* Glass Reflection Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full" />

                  {/* macOS Control Status Badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-xl border border-white/20 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-200 font-medium">
                      SYS.ARCH // ACTIVE
                    </span>
                  </div>

                  {/* Floating Caption Tag */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-2xl bg-white/70 backdrop-blur-2xl border border-white/60 shadow-lg flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Evert Matthew Matias</h4>
                      <p className="text-[11px] text-slate-500 font-mono">@FANSHI • PH</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm">verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="inline-block bg-white/80 backdrop-blur-xl px-4 py-1.5 rounded-full border border-slate-200 text-brand-blue text-[11px] font-bold uppercase tracking-widest shadow-sm">
                WHO I AM
              </span>
              <h1 className="text-4xl md:text-6xl font-display-lg text-slate-900 font-semibold leading-[1.05]">
                Architecting the next <span className="text-gradient-blue italic">digital frontier</span>.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                I am Evert Matthew Matias, known in the space as{' '}
                <span className="text-brand-blue font-semibold">FANSHI</span>. A software engineer and
                student based in the Philippines, focused on building robust, high-performance
                systems from the ground up.
              </p>
            </div>
          </div>
        </section>

        {/* Core Competencies Skill Bars */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 mb-20">
          <div className="macos-glass-thick rounded-[32px] p-8 md:p-12 border border-white/80 shadow-sm">
            <span className="text-[11px] text-slate-500 uppercase tracking-[0.2em] font-bold">
              Technical Proficiency
            </span>
            <h2 className="text-3xl font-display-lg text-slate-900 mt-2 mb-8">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[15px] text-slate-900 font-medium">{skill.name}</span>
                    <span className="font-mono text-[13px] text-slate-500">{skill.percentage}</span>
                  </div>
                  <div className="h-[6px] bg-slate-200/80 w-full rounded-full overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-brand-blue rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                      style={{ width: skill.percentage }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Narrative */}
        <section className="py-20 border-y border-slate-200/80 bg-white/40 backdrop-blur-md">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 sticky top-28 h-fit">
              <h2 className="text-3xl font-display-lg text-slate-900 font-medium mb-4">
                The Self-Taught <br />
                Builder
              </h2>
              <div className="w-12 h-1 bg-brand-blue rounded-full mb-8" />
            </div>
            <div className="md:col-span-8 space-y-8">
              <p className="text-lg leading-relaxed text-slate-600 reveal-on-scroll">
                My journey began not in a classroom, but behind a glowing screen late at night,
                unraveling the mysteries of assembly and low-level architecture. As a self-taught
                engineer, I developed a visceral need to understand how things work under the
                hood—from packet header manipulation to the intricacies of server-side concurrency.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 reveal-on-scroll">
                Being based in the Philippines has shaped my perspective on efficiency and
                resilience. In an environment where connectivity and resources can be volatile, I
                learned to prioritize software that is both lightweight and incredibly durable. My
                passion lies in the "invisible" side of technology: networking protocols, database
                optimization, and cloud-native infrastructure.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="glass-panel p-6 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm">
                  <span className="material-symbols-outlined text-brand-blue mb-2">dns</span>
                  <h3 className="text-xs uppercase tracking-widest font-semibold mb-2 text-slate-900">Server-Side</h3>
                  <p className="text-sm text-slate-600">
                    Specializing in high-concurrency architectures and distributed systems.
                  </p>
                </div>
                <div className="glass-panel p-6 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm">
                  <span className="material-symbols-outlined text-brand-blue mb-2">hub</span>
                  <h3 className="text-xs uppercase tracking-widest font-semibold mb-2 text-slate-900">Networking</h3>
                  <p className="text-sm text-slate-600">
                    Expertise in protocol design and secure communication layers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Evolution */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 py-20">
          <h3 className="text-3xl font-display-lg text-slate-900 text-center mb-12">
            Professional Evolution
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl bg-white/70 border border-slate-200/80 shadow-sm flex flex-col items-center text-center space-y-4 reveal-on-scroll">
              <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h4 className="text-xl font-medium text-slate-900">CS Candidate</h4>
              <p className="text-sm text-slate-600">
                Pursuing a Bachelor of Science in Computer Science, bridging academic theory with
                real-world technical execution.
              </p>
              <div className="mt-auto pt-4 text-xs font-semibold tracking-widest text-brand-blue">
                2021 — PRESENT
              </div>
            </div>

            <div
              className="glass-panel p-8 rounded-3xl bg-white/70 border border-slate-200/80 shadow-sm flex flex-col items-center text-center space-y-4 reveal-on-scroll"
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">developer_mode_tv</span>
              </div>
              <h4 className="text-xl font-medium text-slate-900">Software Dev</h4>
              <p className="text-sm text-slate-600">
                Transitioned from hobbyist projects to professional-grade software development for
                high-stakes startups.
              </p>
              <div className="mt-auto pt-4 text-xs font-semibold tracking-widest text-brand-blue">
                2022 — PRESENT
              </div>
            </div>

            <div
              className="glass-panel p-8 rounded-3xl bg-white/70 border border-slate-200/80 shadow-sm flex flex-col items-center text-center space-y-4 reveal-on-scroll"
              style={{ transitionDelay: '200ms' }}
            >
              <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mb-2">
                <span className="material-symbols-outlined">architecture</span>
              </div>
              <h4 className="text-xl font-medium text-slate-900">Independent Research</h4>
              <p className="text-sm text-slate-600">
                Exploring the intersection of WebGL rendering and backend scalability to create
                seamless digital experiences.
              </p>
              <div className="mt-auto pt-4 text-xs font-semibold tracking-widest text-brand-blue">
                ONGOING
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 mb-20">
          <div className="bg-brand-blue rounded-[40px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden relative shadow-2xl shadow-brand-blue/20">
            <div className="relative z-10 max-w-xl text-center md:text-left space-y-3">
              <h2 className="text-3xl md:text-4xl font-display-lg text-white font-semibold leading-tight">
                Let's build something <span className="italic font-light text-white/90">exceptional</span> together.
              </h2>
              <p className="text-white/80 text-sm">
                Currently open to collaborations and architectural consulting.
              </p>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-4 w-full md:w-auto mt-8 md:mt-0">
              <a
                className="bg-white/10 hover:bg-white/20 text-white p-5 rounded-2xl flex flex-col items-center justify-center gap-1.5 backdrop-blur-md border border-white/20 transition-all active:scale-95"
                href="mailto:hello@fanshi.dev"
              >
                <span className="material-symbols-outlined text-white">mail</span>
                <span className="text-[11px] uppercase tracking-widest font-semibold">Email</span>
              </a>
              <a
                className="bg-white/10 hover:bg-white/20 text-white p-5 rounded-2xl flex flex-col items-center justify-center gap-1.5 backdrop-blur-md border border-white/20 transition-all active:scale-95"
                href="#"
              >
                <span className="material-symbols-outlined text-white">terminal</span>
                <span className="text-[11px] uppercase tracking-widest font-semibold">GitHub</span>
              </a>
              <a
                className="bg-white/10 hover:bg-white/20 text-white p-5 rounded-2xl flex flex-col items-center justify-center gap-1.5 backdrop-blur-md border border-white/20 transition-all active:scale-95"
                href="#"
              >
                <span className="material-symbols-outlined text-white">link</span>
                <span className="text-[11px] uppercase tracking-widest font-semibold">LinkedIn</span>
              </a>
              <a
                className="bg-white/10 hover:bg-white/20 text-white p-5 rounded-2xl flex flex-col items-center justify-center gap-1.5 backdrop-blur-md border border-white/20 transition-all active:scale-95"
                href="#"
              >
                <span className="material-symbols-outlined text-white">description</span>
                <span className="text-[11px] uppercase tracking-widest font-semibold">Read.cv</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;