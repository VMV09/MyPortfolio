import { Code2, Lightbulb, Rocket, Users, Terminal, GraduationCap, Globe } from "lucide-react";

export const About = () => {
  return (
    <section className="section-container relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-google-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="space-y-4 mb-16">
        <span className="text-google-blue font-bold tracking-[0.2em] uppercase text-sm">About Me</span>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
          Engineering <span className="text-text-muted">Impact</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-6 auto-rows-[180px]">

        {/* Main Bio Card - Large */}
        <div className="premium-card md:col-span-3 lg:col-span-2 md:row-span-2 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Terminal className="w-48 h-48 text-google-blue" />
          </div>
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl font-bold text-text-primary">System Architect & Developer</h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              I'm a Computer Science engineer dedicated to building intelligent,
              scalable systems that drive real-world change. My expertise lies in
              the intersection of <span className="text-google-blue font-semibold">backend infrastructure</span>, <span className="text-google-red font-semibold">machine learning</span>, and <span className="text-google-green font-semibold">sociotechnical research</span>.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              I design systems that are as
              <span className="text-google-blue font-medium italic"> elegant </span>
              as they are
              <span className="text-google-green font-medium italic"> performant</span>.
            </p>
          </div>
        </div>

        {/* Education - Vertical */}
        <div className="premium-card md:col-span-1 lg:col-span-1 md:row-span-2 flex flex-col items-center justify-between py-8 group hover:border-google-yellow/50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-google-yellow/10 flex items-center justify-center text-google-yellow group-hover:rotate-12 transition-transform">
              <GraduationCap className="w-8 h-8" />
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-text-primary">Education</h4>
              <p className="text-sm font-medium text-google-yellow">Computer Science</p>
            </div>
          </div>

          <div className="w-full text-center space-y-4">
            <div className="space-y-1">
              <p className="text-lg font-bold text-text-primary">B.E.</p>
              <p className="text-xs text-text-muted font-medium uppercase tracking-wider">BNM Institute of Technology</p>
            </div>

            <div className="w-full h-[1px] bg-white/5" />

            <div className="space-y-1">
              <p className="text-xs font-bold text-text-secondary uppercase tracking-widest">Year</p>
              <p className="text-sm font-medium text-text-primary">2022 — 2026</p>
            </div>
          </div>
        </div>

        {/* Impact Stat - Small */}
        <div className="premium-card md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center text-center group hover:border-google-green/50">
          <h3 className="text-5xl font-bold text-google-green mb-2 group-hover:scale-110 transition-transform">98%</h3>
          <p className="text-text-muted font-medium uppercase tracking-wider text-xs">System Uptime</p>
        </div>

        {/* Location / Global - Small */}
        <div className="premium-card md:col-span-2 lg:col-span-1 flex flex-col justify-center items-center text-center group hover:border-google-red/50">
          <Globe className="w-10 h-10 text-google-red mb-4 group-hover:rotate-12 transition-transform" />
          <p className="text-text-primary font-bold">Bengaluru, India</p>
          <p className="text-text-muted text-xs uppercase tracking-wider">Based In</p>
        </div>

        {/* Philosophy Card - Horizontal */}
        <div className="premium-card md:col-span-3 lg:col-span-2 flex items-center gap-6 group hover:border-google-blue/50">
          <div className="w-16 h-16 rounded-full bg-google-blue/10 flex items-center justify-center text-google-blue flex-shrink-0 group-hover:scale-110 transition-transform">
            <Lightbulb className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-text-primary mb-2">Innovation First</h4>
            <p className="text-text-secondary text-sm">
              Exploring the frontier of ML and AI to solve complex sociotechnical challenges with creative solutions.
            </p>
          </div>
        </div>

        {/* Leadership Card - Horizontal */}
        <div className="premium-card md:col-span-3 lg:col-span-2 flex items-center gap-6 group hover:border-google-green/50">
          <div className="w-16 h-16 rounded-full bg-google-green/10 flex items-center justify-center text-google-green flex-shrink-0 group-hover:scale-110 transition-transform">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-text-primary mb-2">Community Leader</h4>
            <p className="text-text-secondary text-sm">
              Leading peer initiatives and collaborating on cross-functional research and dev teams to foster growth.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

