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
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/60 backdrop-blur-xl px-4 py-1 rounded-full border border-white/80 text-brand-blue text-[11px] font-bold uppercase tracking-widest shadow-sm"
          >
            What I Bring To The Table
          </motion.div>
          <h1 className="font-display-lg text-5xl md:text-[64px] text-on-background tracking-tight leading-[1.1]">
            Skills & <span className="inline-block pr-1 italic font-normal text-gradient-blue"> Capabilities </span>
          </h1>
          <p className="font-body-lg text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            A look at my core strengths, how I approach digital products, and what I specialize in delivering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="macos-glass-thick rounded-[40px] p-12 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
            <div>
              <span className="text-[11px] text-secondary uppercase tracking-[0.2em] font-bold">Core Strengths</span>
              <h2 className="text-3xl font-display-lg text-on-background mt-3 mb-10">Development Focus</h2>
              <div className="space-y-8">
                <SkillBar name="Frontend & Interfaces (React / Next.js)" percentage="92%" />
                <SkillBar name="Web Apps & Backends (Laravel / PHP)" percentage="95%" />
                <SkillBar name="Mobile Apps (Android / Java / Kotlin)" percentage="98%" />
                <SkillBar name="Software Engineering (Python / C++)" percentage="85%" />
              </div>
            </div>
          </div>

          <div className="macos-glass-thick rounded-[40px] p-12 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
            <div>
              <span className="text-[11px] text-secondary uppercase tracking-[0.2em] font-bold">My Approach</span>
              <h2 className="text-3xl font-display-lg text-on-background mt-3">Quality Engineering</h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-secondary leading-relaxed">
                I don't just write code that works—I build software that lasts. 
                My goal is to create fast, reliable, and secure applications 
                that can seamlessly grow alongside your users and your business goals.
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

        <section className="space-y-8 mb-12">
          <div className="max-w-xl">
            <span className="text-[11px] text-secondary uppercase tracking-[0.2em] font-bold">Areas of Expertise</span>
            <h2 className="text-3xl font-display-lg text-on-background mt-3 mb-2">How I Can Help</h2>
            <p className="text-lg text-secondary">Practical skills applied to bring your digital concepts to life.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M2 12h20M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
                    <path d="M6 16v-1M10 16v-3M14 16v-2" />
                  </svg>
                ),
                title: "Interactive User Interfaces",
                desc: "Using React to craft beautiful, responsive websites that load fast, animate smoothly, and adjust nicely to any mobile phone or desktop screen."
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="20" height="8" x="2" y="2" rx="2" />
                    <rect width="20" height="8" x="2" y="14" rx="2" />
                    <line x1="6" x2="6.01" y1="6" y2="6" />
                    <line x1="6" x2="6.01" y1="18" y2="18" />
                  </svg>
                ),
                title: "Cloud & Deployment",
                desc: "Setting up secure cloud environments and automating deployments so updates launch smoothly and safely."
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                ),
                title: "API Connections",
                desc: "Building invisible bridges that allow different apps, web systems, and databases to securely talk to each other."
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="16" height="16" x="4" y="4" rx="2" />
                    <rect width="6" height="6" x="9" y="9" rx="1" />
                    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
                  </svg>
                ),
                title: "Database Management",
                desc: "Organizing application data efficiently, ensuring fast loading speeds, smart storage, and quick recall."
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="4 17 10 11 14 15 20 9" />
                    <polyline points="14 9 20 9 20 15" />
                  </svg>
                ),
                title: "Speed Optimization",
                desc: "Finding and fixing performance slowdowns to make web pages and features feel snappy and responsive."
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 11 2 2 4-4" />
                  </svg>
                ),
                title: "Testing & Stability",
                desc: "Writing code checks that test features automatically, keeping apps bug-free and completely stable before going live."
              }
            ].map((skill, idx) => (
              <div key={idx} className="macos-glass-thick rounded-[32px] p-8 hover:border-brand-blue/30 transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/80 border border-white rounded-2xl flex items-center justify-center shadow-sm">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-medium text-on-background">{skill.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-brand-blue rounded-[56px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl shadow-brand-blue/20">
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h4 className="text-4xl md:text-5xl font-display-lg text-white font-semibold leading-tight">
              Ready to apply these <span className="italic font-light text-white/90">capabilities</span> to your vision?
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