import React from "react";
import Footer from "./Footer";

const categories = [
  {
    title: "Languages",
    kicker: "Core Systems",
    items: ["PHP", "Java", "Kotlin", "Python", "C++", "TypeScript"],
  },
  {
    title: "Frameworks",
    kicker: "Product Delivery",
    items: ["Laravel", "React", "Vite", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Data",
    kicker: "Persistence",
    items: ["MySQL", "MariaDB", "Firebase", "Supabase", "SQLite"],
  },
  {
    title: "Infrastructure",
    kicker: "Operations",
    items: ["Docker", "AWS", "NGINX", "Linux"],
  },
  {
    title: "Tooling",
    kicker: "Workflow",
    items: ["Git", "Postman", "Figma", "Android Studio", "VS Code"],
  },
  {
    title: "Practices",
    kicker: "Engineering",
    items: ["System Design", "API Design", "Performance", "Testing"],
  },
];

const TechStack: React.FC = () => {
  return (
    <main id="stack" className="relative overflow-hidden min-h-screen pt-40 pb-24 px-6 md:px-16 scroll-mt-20 aluminum-bg">
      <div className="pointer-events-none absolute inset-0">
        <div className="ambient-wires absolute inset-0 opacity-50" />
        <div className="ambient-particles absolute inset-0 opacity-60" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block bg-white/60 backdrop-blur-xl px-4 py-1 rounded-full border border-white/80 text-brand-blue text-[11px] font-bold uppercase tracking-widest shadow-sm">
            Platform Capabilities
          </div>
          <h1 className="font-display-lg text-5xl md:text-[64px] text-on-background tracking-tight leading-[1.1]">
            Tech Stack <span className="inline-block pr-2 italic font-normal text-gradient-blue">Blueprint</span>
          </h1>
          <p className="font-body-lg text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
            A focused overview of the tools, frameworks, and infrastructure I use to ship reliable systems.
          </p>
        </div>

        <section className="macos-glass-thick rounded-[40px] p-12 mb-8 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="techstack-card rounded-[28px] border border-white/60 bg-white/40 p-8 shadow-sm">
                <div className="mb-6">
                  <span className="text-[11px] text-secondary uppercase tracking-[0.2em] font-bold">
                    {category.kicker}
                  </span>
                  <h2 className="text-2xl font-display-lg text-on-background mt-3">
                    {category.title}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 bg-white/70 border border-white/80 rounded-2xl text-[14px] text-on-background shadow-sm font-medium hover:bg-white/90 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-brand-blue rounded-[56px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl shadow-brand-blue/20">
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h4 className="text-4xl md:text-5xl font-display-lg text-white font-semibold leading-tight">
              Need a stack that scales with your product?
            </h4>
            <p className="mt-4 text-white/90 text-lg">
              I design systems that balance speed, clarity, and long-term maintainability.
            </p>
          </div>
          <button className="mt-10 md:mt-0 relative z-10 bg-white text-on-background px-12 py-5 rounded-3xl font-bold text-lg hover:bg-white/90 hover:-translate-y-1 transition-all active:scale-95 shadow-xl">
            Discuss a Build
          </button>

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-[80px] -ml-20 -mb-20"></div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default TechStack;
