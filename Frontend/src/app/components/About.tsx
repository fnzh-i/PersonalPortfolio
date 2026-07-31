import React, { useEffect, useRef } from "react";
import Footer from "./Footer";

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
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    // Parallax effect on glass panels
    const handleMouseMove = (e: MouseEvent) => {
      const panels = document.querySelectorAll<HTMLElement>(".glass-panel");
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;

      panels.forEach((panel) => {
        panel.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
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
    { name: "Backend & API Engineering", percentage: "95%" },
    { name: "Full-Stack Web Development", percentage: "90%" },
    { name: "Database Architecture & ORMs", percentage: "85%" },
    { name: "System Performance & Security", percentage: "80%" },
  ];

  return (
    <div className="relative font-body-md text-slate-900 bg-[#f5f5f7] min-h-screen pt-12 selection:bg-brand-blue selection:text-white">
      {/* Background Ambient FX */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-wires absolute inset-0 opacity-40" />
        <div className="ambient-particles absolute inset-0 opacity-50" />
      </div>

      {/* Side Nav (Desktop only) */}
      <aside className="fixed left-6 top-1/2 -translate-y-1/2 w-60 hidden lg:flex flex-col p-6 space-y-6 bg-white/2 backdrop-blur-sm border border-white/80 rounded-3xl shadow-xl shadow-slate-900/5 z-40 transition-all hover:bg-white/25 transform-gpu isolate">
        <nav className="flex flex-col space-y-2">
          <a
            href="#overview"
            className="flex items-center space-x-3 p-3 text-slate-600 hover:bg-white/80 rounded-lg transition-all"
          >
            <svg
              className="w-5 h-5 text-brand-blue fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" />
            </svg>
            <span className="text-xs uppercase tracking-wider font-semibold">
              Overview
            </span>
          </a>
          <a
            href="#competencies"
            className="flex items-center space-x-3 p-3 text-slate-600 hover:bg-white/80 rounded-lg transition-all"
          >
            <svg
              className="w-5 h-5 text-brand-blue fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
            </svg>
            <span className="text-xs uppercase tracking-wider font-semibold">
              Tech Stack
            </span>
          </a>
          <a
            href="#narrative"
            className="flex items-center space-x-3 p-3 text-slate-600 hover:bg-white/80 rounded-lg transition-all"
          >
            <svg
              className="w-5 h-5 text-brand-blue fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span className="text-xs uppercase tracking-wider font-semibold">
              Biography
            </span>
          </a>
          <a
            href="#evolution"
            className="flex items-center space-x-3 p-3 text-slate-600 hover:bg-white/80 rounded-lg transition-all"
          >
            <svg
              className="w-5 h-5 text-brand-blue fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.33.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.19.02-.36.07-.52l-2.55-2.55c-.16.05-.33.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.52 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.19 0 .36.02.52.07l4.56-4.55C8.02 9.35 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.35-.07.51l2.55 2.55c.16-.05.33-.07.52-.07s.35.02.51.07l3.56-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z" />
            </svg>
            <span className="text-xs uppercase tracking-wider font-semibold">
              Timeline
            </span>
          </a>
        </nav>
      </aside>
      <main className="relative z-10 max-w-[1280px] mx-auto pt-12 pb-20">
        {/* Apple-Style Hero Projection Section */}
        <section
          id="overview"
          className="max-w-[1280px] mx-auto px-6 md:px-16 mb-24"
        >
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div
                ref={cardRef}
                onMouseMove={handlePhotoMouseMove}
                onMouseLeave={handlePhotoMouseLeave}
                className="relative group w-full max-w-[440px] aspect-[4/5] rounded-[40px] p-2.5 transition-transform duration-200 ease-out cursor-pointer overflow-hidden transform-gpu"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 100%)",
                  boxShadow:
                    "0 30px 60px -12px rgba(50, 50, 93, 0.15), 0 18px 36px -18px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
                }}
              >
                {/* Back Light Glow */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-brand-blue/30 via-indigo-500/10 to-transparent blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

                {/* Glass Bezel Container */}
                <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-slate-900 border border-white/40 transform-gpu">
                  <img
                    alt="Evert Matthew Matias"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                    src="https://avatars.githubusercontent.com/u/198473281?v=4"
                  />

                  {/* FIXED: Glass Reflection Sweep Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10 transition-transform duration-1000 ease-in-out -translate-x-full group-hover:translate-x-full"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.25) 50%, transparent 80%)",
                    }}
                  />

                  {/* macOS Control Status Badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-xl border border-white/20 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-200 font-medium">
                      FULLSTACK // DEV
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-[22px] bg-white/70 backdrop-blur-2xl border border-white/80 shadow-xl shadow-black/5 flex items-center justify-between transition-all duration-300 group-hover:bg-white/80">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 tracking-tight">
                        Evert Matthew Matias
                      </h4>
                      <p className="text-[12px] text-slate-500 font-medium tracking-tight">
                        Full-Stack Engineer • NCR, PH
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="inline-block bg-white/80 backdrop-blur-xl px-4 py-1.5 rounded-full border border-slate-200 text-brand-blue text-[11px] font-bold uppercase tracking-widest shadow-sm">
                BIOGRAPHY & ENGINEERING PHILOSOPHY
              </span>
              <h1 className="text-4xl md:text-6xl font-display-lg text-slate-900 font-semibold leading-[1.1] tracking-tight">
                Building end-to-end{" "}
                <span className="text-gradient-blue italic inline-block pr-2">
                  digital applications
                </span>
                .
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                I am Evert Matthew Matias, known online as{" "}
                <span className="text-brand-blue font-semibold">FANSHI</span>. A
                full-stack & backend software dev engineer and CS student based
                in the Philippines, focused on crafting scalable web
                applications, robust APIs, and clean backend systems.
              </p>
            </div>
          </div>
        </section>

        {/* Core Competencies Skill Bars */}
        <section
          id="competencies"
          className="max-w-[1280px] mx-auto px-6 md:px-16 mb-20"
        >
          <div className="macos-glass-thick rounded-[32px] p-8 md:p-12 border border-white/80 shadow-sm">
            <span className="text-[11px] text-slate-500 uppercase tracking-[0.2em] font-bold">
              Technical Proficiency
            </span>
            <h2 className="text-3xl font-display-lg text-slate-900 mt-2 mb-8">
              Core Competencies & Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[15px] text-slate-900 font-medium">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[13px] text-slate-500">
                      {skill.percentage}
                    </span>
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
        <section
          id="narrative"
          className="py-20 border-y border-slate-200/80 bg-white/40 backdrop-blur-md"
        >
          {/* Added items-start to allow position: sticky to function */}
          <div className="max-w-[1280px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            {/* Left sticky column */}
            <div className="md:col-span-4 md:sticky md:top-28 h-fit">
              <h2 className="text-3xl font-display-lg text-slate-900 font-medium mb-4">
                The Self-Taught <br />
                Full-Stack Dev
              </h2>
              <div className="w-12 h-1 bg-brand-blue rounded-full mb-8" />
            </div>

            {/* Right content column */}
            <div className="md:col-span-8 space-y-8">
              <p className="text-lg leading-relaxed text-slate-600 reveal-on-scroll">
                My software journey started with curiosity—understanding how web
                applications handle data flow from interactive frontends down to
                the backend database layers. As a self-taught engineer currently
                pursuing a CS degree in the Philippines, I specialize in
                engineering complete web ecosystems.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 reveal-on-scroll">
                Being based in the Philippines has shaped my perspective on
                efficiency and resilience. In an environment where connectivity
                and resources can be volatile, I learned to prioritize software
                that is both lightweight and incredibly durable. My passion lies
                in the "invisible" side of technology: networking protocols,
                database optimization, and cloud-native infrastructure.
              </p>

              {/* Grid Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {/* Backend Card - Server Icon */}
                <div className="glass-panel p-6 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm">
                  <svg
                    className="w-6 h-6 text-brand-blue fill-current mb-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM6 4h2v1H6V4zm0 8h2v1H6v-1zm0 8h2v1H6v-1z" />
                  </svg>
                  <h3 className="text-xs uppercase tracking-widest font-semibold mb-2 text-slate-900">
                    Backend Development
                  </h3>
                  <p className="text-sm text-slate-600">
                    High-performance server REST APIs, authentication workflows,
                    and microservices.
                  </p>
                </div>

                {/* Frontend Card - Layout/Browser Icon */}
                <div className="glass-panel p-6 rounded-2xl bg-white/80 border border-slate-200/80 shadow-sm">
                  <svg
                    className="w-6 h-6 text-brand-blue fill-current mb-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
                  </svg>
                  <h3 className="text-xs uppercase tracking-widest font-semibold mb-2 text-slate-900">
                    Frontend Engineering
                  </h3>
                  <p className="text-sm text-slate-600">
                    Modern component-driven web applications with React,
                    TypeScript, and clean UI design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Evolution */}
        <section
          id="evolution"
          className="max-w-[1280px] mx-auto px-6 md:px-16 py-20"
        >
          <h3 className="text-3xl font-display-lg text-slate-900 text-center mb-12">
            Professional Evolution
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl bg-white/70 border border-slate-200/80 shadow-sm flex flex-col items-center text-center space-y-4 reveal-on-scroll">
              <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-slate-900">
                CS Candidate
              </h4>
              <p className="text-sm text-slate-600">
                Pursuing a Bachelor of Science in Computer Science, bridging
                academic theory with real-world technical execution.
              </p>
              <div className="mt-auto pt-4 text-xs font-semibold tracking-widest text-brand-blue">
                2021 — PRESENT
              </div>
            </div>

            <div
              className="glass-panel p-8 rounded-3xl bg-white/70 border border-slate-200/80 shadow-sm flex flex-col items-center text-center space-y-4 reveal-on-scroll"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-slate-900">
                Full-Stack Developer
              </h4>
              <p className="text-sm text-slate-600">
                Building full-stack web products, robust APIs, and
                database-driven client software solutions.
              </p>
              <div className="mt-auto pt-4 text-xs font-semibold tracking-widest text-brand-blue">
                2022 — PRESENT
              </div>
            </div>

            <div
              className="glass-panel p-8 rounded-3xl bg-white/70 border border-slate-200/80 shadow-sm flex flex-col items-center text-center space-y-4 reveal-on-scroll"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mb-2">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              </div>
              <h4 className="text-xl font-medium text-slate-900">
                Independent Projects
              </h4>
              <p className="text-sm text-slate-600">
                Developing full-stack web applications, open-source utilities,
                and exploring serverless architectures.
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
                Let's build something{" "}
                <span className="italic font-light text-white/90">
                  exceptional
                </span>{" "}
                together.
              </h2>
              <p className="text-white/80 text-sm">
                Open to full-stack engineering roles, backend API projects, and
                freelance builds.
              </p>
            </div>

            {/* Contact & Social Links Grid */}
            <div className="relative z-10 grid grid-cols-2 gap-4 w-full md:w-auto mt-8 md:mt-0">
              {/* Email Link */}
              <a
                className="bg-white/10 hover:bg-white/20 text-white p-5 rounded-2xl flex flex-col items-center justify-center gap-2 backdrop-blur-md border border-white/20 transition-all active:scale-95 group min-w-[110px]"
                href="#"
              >
                <svg
                  className="w-6 h-6 fill-current group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-[11px] uppercase tracking-widest font-semibold">
                  Email
                </span>
              </a>

              {/* GitHub Link */}
              <a
                className="bg-white/10 hover:bg-white/20 text-white p-5 rounded-2xl flex flex-col items-center justify-center gap-2 backdrop-blur-md border border-white/20 transition-all active:scale-95 group min-w-[110px]"
                href="https://github.com/fnzh-i"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-6 h-6 fill-current group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="text-[11px] uppercase tracking-widest font-semibold">
                  GitHub
                </span>
              </a>

              {/* LinkedIn Link */}
              <a
                className="bg-white/10 hover:bg-white/20 text-white p-5 rounded-2xl flex flex-col items-center justify-center gap-2 backdrop-blur-md border border-white/20 transition-all active:scale-95 group min-w-[110px]"
                href="https://www.linkedin.com/in/evertmatthewmatias/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-6 h-6 fill-current group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
                <span className="text-[11px] uppercase tracking-widest font-semibold">
                  LinkedIn
                </span>
              </a>

              {/* Read.cv Link */}
              <a
                className="bg-white/10 hover:bg-white/20 text-white p-5 rounded-2xl flex flex-col items-center justify-center gap-2 backdrop-blur-md border border-white/20 transition-all active:scale-95 group min-w-[110px]"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="w-6 h-6 fill-current group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                </svg>
                <span className="text-[11px] uppercase tracking-widest font-semibold">
                  Read.cv
                </span>
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
