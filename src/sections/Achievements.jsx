import {
  Trophy,
  Award,
  BookOpen,
  Rocket,
  Users,
  Brain,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Entrepreneurship Development Cell, BNM Institute of Technology",
    highlight: "President and Operational Lead",
    description:
      "Secured top positions in multiple hackathons, including national-level competitions focused on healthcare and AI-driven solutions.",
  },
  {
    icon: BookOpen,
    title: "Research & Publications",
    highlight: "AI & ML Research",
    description:
      "Authoring review and research papers in AI/ML, with a focus on datasets, NLP, and real-world medical applications.",
  },
  {
    icon: Rocket,
    title: "Startup & Innovation Programs",
    highlight: "Future Founders Program",
    description:
      "Selected for the Future Founders Program at ED Cell BNMIT, working on problem-driven startup ideation and execution.",
  },
  {
    icon: Brain,
    title: "Domain Expertise",
    highlight: "AI • Systems • Security",
    description:
      "Hands-on experience across AI/ML, intrusion detection systems, healthcare analytics, and education technology.",
  },
  {
    icon: Users,
    title: "Leadership & Mentorship",
    highlight: "Student Leadership",
    description:
      "Led student initiatives and mentored peers through technical clubs, Model United Nations, and project-based learning.",
  },
  {
    icon: Award,
    title: "Project Impact",
    highlight: "15+ Projects Built",
    description:
      "Designed and built full-stack, ML, and data-driven projects with a strong emphasis on correctness, scalability, and impact.",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Proof of{" "}
            <span className="font-serif italic font-normal text-white">
              impact & consistency.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Highlights that reflect execution, learning depth, and measurable
            outcomes across engineering, research, and leadership.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="glass p-8 rounded-3xl border border-border hover:border-primary/40 transition-colors animate-fade-in"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-lg font-semibold mb-1 text-secondary-foreground">
                {item.title}
              </h3>

              <div className="text-primary font-medium mb-3">
                {item.highlight}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
