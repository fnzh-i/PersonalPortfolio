import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

const SkillBar = ({ name, percentage }: { name: string; percentage: string }) => (
  <div className="space-y-3">
    <div className="flex justify-between items-end">
      <span className="font-medium text-[15px] text-on-background">{name}</span>
      <span className="font-mono text-[13px] text-secondary">{percentage}</span>
    </div>
    <div className="h-[6px] bg-black/5 w-full rounded-full overflow-hidden shadow-inner">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: percentage }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-brand-blue rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <main id="skills" className="relative overflow-hidden min-h-screen pt-40 pb-24 px-6 md:px-16 scroll-mt-20 aluminum-bg">
      <div className="pointer-events-none absolute inset-0">
        <div className="ambient-wires absolute inset-0 opacity-50" />
        <div className="ambient-particles absolute inset-0 opacity-60" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto"> {/* Increased max-width for better spread */}
        
        {/* Title Section */}
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/60 backdrop-blur-xl px-4 py-1 rounded-full border border-white/80 text-brand-blue text-[11px] font-bold uppercase tracking-widest shadow-sm"
          >
            Expertise & Capabilities
          </motion.div>
          <h1 className="font-display-lg text-5xl md:text-[64px] text-on-background tracking-tight leading-[1.1]">
            Skills & <span className="inline-block pr-1 italic font-normal text-gradient-blue"> Technical Depth </span>
          </h1>
          <p className="font-body-lg text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive overview of my architectural expertise, development proficiencies, and industrial-grade tools.
          </p>
        </div>

        {/* 2-Column Grid for Competencies & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Card 1: Languages */}
          <div className="macos-glass-thick rounded-[40px] p-12 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
            <div>
              <span className="text-[11px] text-secondary uppercase tracking-[0.2em] font-bold">System Foundation</span>
              <h2 className="text-3xl font-display-lg text-on-background mt-3 mb-10">Languages & Core</h2>
              <div className="space-y-10">
                <SkillBar name="PHP / Laravel Ecosystem" percentage="95%" />
                <SkillBar name="Java / Kotlin (Mobile)" percentage="98%" />
                <SkillBar name="Python & C++ Development" percentage="85%" />
              </div>
            </div>
          </div>

          {/* Card 2: Philosophy */}
          <div className="macos-glass-thick rounded-[40px] p-12 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
            <div>
              <span className="text-[11px] text-secondary uppercase tracking-[0.2em] font-bold">Engineering Philosophy</span>
              <h2 className="text-3xl font-display-lg text-on-background mt-3">Refined Engineering</h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-secondary leading-relaxed">
                My approach to engineering is rooted in the pursuit of technical excellence. I specialize in building systems that aren't just functional, but are prepared for scale—from high-performance C++ modules to enterprise-grade Laravel applications.
              </p>
              <div className="pt-4">
                 <a href="#" className="inline-flex items-center gap-3 font-bold text-brand-blue group transition-all text-lg">
                  Download Full Resume 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Toolkit Card */}
        <section className="macos-glass-thick rounded-[40px] p-12 mb-8 relative overflow-hidden">
          <div className="max-w-xl mb-16">
            <span className="text-[11px] text-secondary uppercase tracking-[0.2em] font-bold">Infrastructure</span>
            <h2 className="text-3xl font-display-lg text-on-background mt-3 mb-4">The FNSH Toolkit</h2>
            <p className="text-lg text-secondary">Built for scale, speed, and uncompromising visual fidelity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "FRAMEWORKS & FRONTEND", 
                items: ["Laravel", "React", "Tailwind CSS", "Bootstrap", "HTML/CSS"] 
              },
              { 
                title: "BACKEND & INFRASTRUCTURE", 
                items: ["Node.js", "MySQL", "Firebase", "Docker", "AWS"] 
              },
              { 
                title: "DEVELOPMENT TOOLS", 
                items: ["Git", "Postman", "Android Studio", "Figma"] 
              }
            ].map((cat, i) => (
              <div key={i} className="space-y-6">
                <h3 className="text-[12px] text-brand-blue font-bold tracking-widest">{cat.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map(item => (
                    <span key={item} className="px-4 py-2 bg-white/40 border border-white/60 rounded-2xl text-[14px] text-on-background shadow-sm font-medium hover:bg-white/80 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Card */}
        <section className="bg-brand-blue rounded-[56px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl shadow-brand-blue/20">
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h4 className="text-4xl md:text-5xl font-display-lg text-white font-semibold leading-tight">
              Ready to apply these <span className="italic font-light text-white/90">skills</span> to your vision?
            </h4>
          </div>
          <button className="mt-10 md:mt-0 relative z-10 bg-white text-on-background px-12 py-5 rounded-3xl font-bold text-lg hover:bg-white/90 hover:-translate-y-1 transition-all active:scale-95 shadow-xl">
            Start a Conversation
          </button>
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-[80px] -ml-20 -mb-20"></div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Skills;