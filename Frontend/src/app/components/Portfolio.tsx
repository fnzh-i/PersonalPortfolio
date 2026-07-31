import React, { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import Footer from "./Footer";
import { FeaturedProjects } from "./FeaturedProjects";

let hasShownPortfolioLoader = false;

const Portfolio: React.FC = () => {
  const [showLoading, setShowLoading] = useState(
    () => !hasShownPortfolioLoader,
  );

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

  if (showLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative font-body-md text-on-background selection:bg-brand-blue selection:text-white aluminum-bg min-h-screen">
      {/* Background Ambient FX */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-wires absolute inset-0 opacity-50" />
        <div className="ambient-particles absolute inset-0 opacity-60" />
      </div>

      <main className="relative z-10 pt-36 md:pt-48 max-w-[1280px] mx-auto px-6 md:px-16">
        {/* Landing Hero */}
        <section className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-28">
          <div className="flex-1 space-y-6 md:space-y-8">
            <div className="inline-block bg-white/60 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/80 text-brand-blue text-[11px] font-bold uppercase tracking-widest shadow-sm">
              FULL-STACK SOFTWARE ENGINEER
            </div>
            <h1 className="font-display-lg font-medium text-4xl sm:text-5xl md:text-[64px] text-on-background leading-[1.1]">
              Engineering scalable solutions across the{" "}
              <span className="inline-block pr-2 italic font-bold text-gradient-blue">
                entire stack
              </span>
              .
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-xl leading-relaxed">
              Building robust backend architectures, resilient APIs, and
              seamless modern web interfaces designed for performance and scale.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="/projects"
                className="bg-on-background text-white px-8 py-4 rounded-2xl text-[15px] font-semibold hover:bg-brand-blue transition-all shadow-xl shadow-black/5 active:scale-[0.98]"
              >
                View Architecture & Code
              </a>
              <a
                href="/about"
                className="bg-white/70 hover:bg-white text-slate-800 border border-slate-200/80 px-8 py-4 rounded-2xl text-[15px] font-semibold transition-all backdrop-blur-md active:scale-[0.98]"
              >
                About & Bio →
              </a>
            </div>
          </div>

          {/* Clean Graphic Display */}
          {/* Clean Graphic Display - Apple Hardware & UI Presentation */}
          <div className="flex-1 w-full relative flex justify-center items-center">
            <div className="aspect-square w-full max-w-[380px] md:max-w-[420px] relative group">
              {/* Ambient Backlight Glow (Hardware Projection) */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/30 via-indigo-500/20 to-transparent blur-3xl opacity-40 group-hover:opacity-75 transition-opacity duration-700 pointer-events-none rounded-[56px]" />

              {/* Outer Hardware Enclosure (Aluminum/Glass Finish) */}
              <div
                className="relative w-full h-full rounded-[48px] p-2.5 transition-transform duration-500 ease-out transform-gpu group-hover:scale-[1.015] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 100%)",
                  boxShadow:
                    "0 30px 60px -12px rgba(15, 23, 42, 0.18), 0 18px 36px -18px rgba(0, 0, 0, 0.22), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
                }}
              >
                {/* Inner Display Bezel */}
                <div className="relative w-full h-full rounded-[38px] overflow-hidden bg-slate-950 border border-white/40 shadow-inner transform-gpu">
                  {/* Avatar Image (Full Color Always) */}
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src="https://avatars.githubusercontent.com/u/198473281?v=4"
                    alt="Evert Matthew Matias Profile"
                  />

                  {/* Dynamic Specular Glass Reflection Sweep */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10 transition-transform duration-1000 ease-in-out -translate-x-full group-hover:translate-x-full"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.25) 50%, transparent 80%)",
                    }}
                  />

                  {/* Ambient Bottom Gradient for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 pointer-events-none" />

                  {/* macOS Control Center Status Pill (Top-Left) */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-xl border border-white/20 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-wider uppercase text-slate-200 font-medium">
                      ONLINE // DEV
                    </span>
                  </div>

                  {/* Floating Glass Meta Tag (Bottom) */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-2xl bg-slate-950/40 backdrop-blur-md border border-white/20 shadow-xl shadow-black/20 flex items-center justify-between transition-all duration-300 group-hover:bg-slate-950/60 group-hover:border-white/35">
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-mono uppercase tracking-widest text-slate-300/90 font-semibold">
                        Evert Matthew Matias
                      </p>
                      <p className="text-sm font-semibold text-white/95 tracking-tight">
                        Full-Stack Software Engineer
                      </p>
                    </div>

                    {/* Glassmorphic Verification Badge */}
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/40 group-hover:text-white">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="mb-28">
          <FeaturedProjects />
        </section>

        {/* CTA Section */}
        <section className="mb-20">
          <div className="bg-brand-blue rounded-[48px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between overflow-hidden relative shadow-2xl shadow-brand-blue/20">
            <div className="relative z-10 max-w-2xl text-center md:text-left space-y-3">
              <h4 className="text-3xl md:text-5xl font-display-lg text-white font-semibold leading-tight">
                Let's build something{" "}
                <span className="italic font-light text-white/90">
                  exceptional
                </span>{" "}
                together.
              </h4>
              <p className="text-white/80 text-sm md:text-base">
                Available for full-stack engineering, backend service
                development, and web application projects.
              </p>
            </div>
            <a
              href="mailto:hello@fanshi.dev"
              className="mt-8 md:mt-0 relative z-10 bg-white text-on-background px-10 py-4 rounded-2xl font-semibold hover:bg-white/90 hover:-translate-y-1 transition-all shadow-2xl active:scale-95 text-center"
            >
              Start a Project
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
