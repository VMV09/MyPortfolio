import {
  Trophy,
  BookOpen,
  Rocket,
  Users,
  Brain,
  Award,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Entrepreneurship Development Cell",
    highlight: "President & Operational Lead",
    color: "var(--google-blue)",
    description: "Leading national-level hackathons and AI initiatives, focused on healthcare and social impact.",
  },
  {
    icon: BookOpen,
    title: "Research & Publications",
    highlight: "AI & ML Research",
    color: "var(--google-red)",
    description: "Authored research papers in NLP and medical analytics, exploring real-world data applications.",
  },
  {
    icon: Rocket,
    title: "Startup & Innovation",
    highlight: "Future Founders Program",
    color: "var(--google-yellow)",
    description: "Handpicked for problem-driven startup ideation and execution at ED Cell BNMIT.",
  },
  {
    icon: Brain,
    title: "Domain Expertise",
    highlight: "AI • Systems • Security",
    color: "var(--google-green)",
    description: "Deep hands-on experience in intrusion detection, healthcare analytics, and EdTech.",
  },
];

const stats = [
  { label: "Projects Completed", value: "15+", color: "var(--google-blue)" },
  { label: "Hackathons Won", value: "5+", color: "var(--google-red)" },
  { label: "Research Papers", value: "3+", color: "var(--google-yellow)" },
  { label: "Years Experience", value: "1+", color: "var(--google-green)" },
];

export const Achievements = () => {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-google-red/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-google-blue/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-[1px] bg-google-blue" />
            <span className="text-google-blue font-bold tracking-[0.3em] uppercase text-xs">Milestones</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Impact <span className="text-text-muted italic">&</span> <span className="text-google-blue">Metrics</span>
          </h2>
        </div>

        {/* High-Impact Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative group perspective-1000">
              <div className="premium-card h-full py-10 px-6 text-center border-white/5 group-hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2 overflow-hidden flex flex-col justify-center">
                {/* Background Glow */}
                <div
                  className="absolute inset-x-0 -bottom-10 h-20 blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"
                  style={{ backgroundColor: stat.color }}
                />

                <div className="relative">
                  <span
                    className="text-5xl md:text-6xl font-black tracking-tighter block mb-2 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </span>
                  <div className="h-1 w-8 mx-auto mb-4 rounded-full opacity-40" style={{ backgroundColor: stat.color }} />
                  <span className="text-[10px] font-black text-text-muted uppercase tracking-[0.2em]">
                    {stat.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="reveal group"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="premium-card relative flex flex-col md:flex-row items-center md:items-start gap-8 p-10 border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-google-blue/5">

                {/* Icon Visual */}
                <div className="relative shrink-0">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-2xl relative z-10"
                    style={{ backgroundColor: `${item.color}10`, color: item.color }}
                  >
                    <item.icon className="w-10 h-10" />
                  </div>
                  {/* Outer Glow Ring */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundColor: item.color }}
                  />
                </div>

                {/* Content Side */}
                <div className="space-y-4 text-center md:text-left">
                  <div className="space-y-1">
                    <h3 className="text-3xl font-bold text-text-primary tracking-tight leading-none group-hover:text-google-blue transition-colors">
                      {item.title}
                    </h3>
                    <div className="pt-2">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-current bg-background/40 backdrop-blur-sm"
                        style={{ color: item.color, borderColor: `${item.color}30` }}
                      >
                        {item.highlight}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed text-sm md:text-base font-medium max-w-md">
                    {item.description}
                  </p>

                  {/* Decorative Progress bar mimic */}
                  <div className="w-full h-[1px] bg-white/5 relative overflow-hidden mt-4">
                    <div
                      className="absolute inset-y-0 left-0 w-1/3 transition-all duration-700 group-hover:w-full opacity-40"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>

                {/* Numbering/Index Indicator */}
                <span className="absolute top-8 right-10 text-6xl font-black text-white/[0.02] pointer-events-none group-hover:text-white/[0.05] transition-colors">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


