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
                href="#projects"
                className="bg-on-background text-white px-8 py-4 rounded-2xl text-[15px] font-semibold hover:bg-brand-blue transition-all shadow-xl shadow-black/5 active:scale-[0.98]"
              >
                View Case Studies
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
          <div className="flex-1 w-full relative">
            <div className="aspect-square max-w-[380px] md:max-w-[420px] mx-auto">
              <div className="rounded-[48px] shadow-2xl">
                <div className="rounded-[48px] bg-white/30 macos-glass-thick p-2 overflow-hidden">
                  <div className="w-full h-full rounded-[40px] overflow-hidden bg-slate-900/90 relative group">
                    <img
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                      src="https://avatars.githubusercontent.com/u/198473281?v=4"
                      alt="Evert Matthew Matias Profile"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="text-xs font-mono uppercase tracking-widest text-brand-blue">
                        E. Matthew Matias
                      </p>
                      <p className="text-sm font-semibold">
                        Full-Stack Software Engineer
                      </p>
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
