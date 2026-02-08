import { Presentation, Users, Mic } from "lucide-react";

const events = [
  {
    title: "Ensemble Learning in Machine Intelligence: Bias-Variance Trade-offs, Model Aggregation, and Generalization.",
    role: "Speaker",
    organization: "BNMIT Technical Seminar Series",
    year: "2025",
    description:
      "Delivered a technical seminar on ensemble learning models to better understand their place in the evolution of AI Models.",
    icon: Presentation,
  },
  {
    title: "Model United Nations - Crisis Simulation",
    role: "Organizer & Chair",
    organization: "Inter-College MUN Conference",
    year: "2024",
    description:
      "Led and moderated high-pressure crisis simulations, training delegates in structured decision-making and diplomacy.",
    icon: Users,
  },
  {
    title: "Strategy Formulations and Data Visualization Workshop",
    role: "Participant",
    organization: "Indian Institute of Technology - Madras",
    year: "2022",
    description:
      "Participated in expert-led discussions on AI security, dataset integrity, and real-world deployment challenges.",
    icon: Mic,
  },
];

export const Seminars = () => {
  return (
    <section id="seminars" className="py-32 relative overflow-hidden bg-surface/30">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Engagements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Seminars &{" "}
            <span className="font-serif italic font-normal text-white">
              Conferences
            </span>
          </h2>
          <p className="text-muted-foreground">
            Academic and professional forums where I’ve shared ideas, learned
            from peers, and engaged with the broader technical community.
          </p>
        </div>

        {/* Events Grid */}
        {/* Timeline */}
        <div className="relative max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

        <div className="space-y-12">
            {events.map((event, idx) => (
            <div key={idx} className="relative pl-16">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-surface border border-primary/40 flex items-center justify-center">
                <event.icon className="w-4 h-4 text-primary" />
                </div>

                {/* Content */}
                <div className="glass p-6 rounded-2xl border border-border hover:border-primary/40 transition-colors">
                <div className="flex flex-wrap items-center gap-3 text-sm mb-2">
                    <span className="text-primary font-medium">
                    {event.year}
                    </span>
                    <span className="text-muted-foreground">
                    {event.organization}
                    </span>
                </div>

                <h3 className="text-lg font-semibold text-secondary-foreground">
                    {event.title}
                </h3>

                <div className="text-sm text-primary mt-1">
                    {event.role}
                </div>

                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {event.description}
                </p>
                </div>
            </div>
            ))}
        </div>
        </div>
      </div>
    </section>
  );
};
