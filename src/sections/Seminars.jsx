import { Presentation, Users, Mic } from "lucide-react";

const events = [
  {
    title: "Ensemble Learning in Machine Intelligence",
    role: "Speaker",
    organization: "BNMIT Technical Seminar Series",
    year: "2025",
    color: "var(--google-blue)",
    description: "Detailed exploration of Bias-Variance tradeoffs and Model Aggregation in modern AI architectures.",
    icon: Presentation,
  },
  {
    title: "Model United Nations",
    role: "Chairperson",
    organization: "Inter-College MUN Conference",
    year: "2024",
    color: "var(--google-red)",
    description: "Led high-pressure crisis simulations and mentored delegates in international policy articulation.",
    icon: Users,
  },
  {
    title: "Data Visualization Workshop",
    role: "Participant",
    organization: "IIT Madras - Strategy Labs",
    year: "2022",
    color: "var(--google-yellow)",
    description: "Hands-on training in scalable data storytelling and dataset integrity for clinical applications.",
    icon: Mic,
  },
];

export const Seminars = () => {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-google-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-google-red/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="mb-20 space-y-4">
        <span className="text-google-blue font-bold tracking-[0.2em] uppercase text-sm">Community</span>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
          Key <span className="text-text-muted">Engagements</span>
        </h2>
        <div className="w-20 h-1 bg-google-blue rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="reveal group h-full"
            style={{ transitionDelay: `${idx * 150}ms` }}
          >
            <div className="premium-card relative flex flex-col h-full p-8 transition-all duration-500 hover:-translate-y-2 border-white/5 hover:border-white/10">

              {/* Icon Header */}
              <div className="mb-8 relative">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg"
                  style={{ backgroundColor: `${event.color}15`, color: event.color }}
                >
                  <event.icon className="w-8 h-8" />
                </div>
                {/* Decorative glow behind icon */}
                <div className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"
                  style={{ backgroundColor: event.color }} />
              </div>

              {/* Date & Org */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border border-white/10 bg-white/5"
                  style={{ color: event.color }}>
                  {event.year}
                </span>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest truncate">
                  {event.organization}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-3 flex-grow">
                <h3 className="text-2xl font-bold text-text-primary tracking-tight leading-tight group-hover:text-google-blue transition-colors">
                  {event.title}
                </h3>
                <div className="text-xs font-bold text-google-green uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-google-green" />
                  {event.role}
                </div>
                <p className="text-text-secondary leading-relaxed text-sm pt-2">
                  {event.description}
                </p>
              </div>

              {/* Interaction Hint */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-medium text-text-muted uppercase tracking-tighter">Event Details</span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-google-blue transition-colors">
                  <Presentation className="w-3 h-3 text-text-muted group-hover:text-google-blue" />
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20 transition-opacity group-hover:opacity-40 overflow-hidden">
                <div className="absolute -top-8 -right-8 w-16 h-16 rotate-45" style={{ backgroundColor: event.color }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

