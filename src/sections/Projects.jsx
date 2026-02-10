import { ArrowUpRight, Github, Code2, ExternalLink, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

const projects = [
  {
    title: "AI Early Warning System",
    description: "AI driven dropout risk prediction system leveraging ML models to identify at-risk students with high accuracy and deliver targeted interventions.",
    image: "/projects/dropout.jpg",
    tags: ["React", "Python", "ML", "NodeJS"],
    category: "AI/ML",
    link: "#",
    github: "#",
    color: "var(--google-blue)"
  },
  {
    title: "NL to SQL Generator",
    description: "Natural language to SQL system converting English queries into executable SQL through a custom Python execution pipeline.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Python", "PostgreSQL", "Tailwind"],
    category: "LLM Ops",
    link: "#",
    github: "#",
    color: "var(--google-red)"
  },
  {
    title: "Placement Data Analyst",
    description: "Intelligent analytics tool identifying trends and patterns in campus placement data to predict future hiring cycles.",
    image: "/projects/project3.png",
    tags: ["React", "FastAPI", "Pandas"],
    category: "Data Arch",
    link: "#",
    github: "#",
    color: "var(--google-green)"
  },
  {
    title: "Blood Bank Management",
    description: "Reliable management system for tracking blood inventory and donor data with real-time updates and notifications.",
    image: "/projects/project4.png",
    tags: ["Node.js", "MongoDB", "Socket.io"],
    category: "FinTech",
    link: "#",
    github: "#",
    color: "var(--google-yellow)"
  },
];

export const Projects = () => {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-google-blue/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-google-red/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-google-blue" />
              <span className="text-google-blue font-bold tracking-[0.3em] uppercase text-xs">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Featured <span className="text-google-blue italic">Engineering</span> <span className="text-text-primary">Masterpieces</span>
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <SpotlightCard
              key={idx}
              className="group !p-0 border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl"
              spotlightColor={`${project.color}15`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Hover Quick Actions */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/20 backdrop-blur-[2px] flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center hover:bg-google-blue hover:text-white transition-all duration-300 shadow-xl hover:scale-110"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  <a
                    href={project.github}
                    className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-google-red transition-all duration-300 shadow-xl hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-30">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass border-white/10 shadow-2xl">
                    <Sparkles className="w-3 h-3 text-google-yellow animate-pulse" />
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-10 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between group/title">
                    <h3 className="text-3xl font-bold tracking-tight text-text-primary group-hover:text-google-blue transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-base font-medium leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-black text-text-muted group-hover:text-text-primary group-hover:border-white/20 transition-all duration-300 uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Action Area */}
        <div className="mt-32 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] -z-10">
            <span className="text-[15rem] font-black uppercase tracking-tighter">ARCHIVE</span>
          </div>
          <button className="group relative px-12 py-6 rounded-3xl overflow-hidden bg-white text-black transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl hover:shadow-google-blue/20">
            <span className="relative z-10 flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em]">
              Explore Full Repository
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-google-blue translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div className="absolute inset-0 bg-google-blue opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </section>
  );
};


