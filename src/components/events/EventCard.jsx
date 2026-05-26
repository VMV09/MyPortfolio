import { Presentation } from "lucide-react";

export const EventCard = ({ event, index = 0, compact = false }) => {
  const Icon = event.icon;

  return (
    <a
      href={`/events/${event.slug}`}
      className="reveal group h-full block"
      style={{ transitionDelay: `${index * 120}ms` }}
      aria-label={`Open event details for ${event.title}`}
    >
      <div
        className={`premium-card relative flex flex-col h-full transition-all duration-500 hover:-translate-y-2 border-white/5 hover:border-white/10 ${
          compact ? "p-6" : "p-8"
        }`}
      >
        <div className={compact ? "mb-5 relative" : "mb-8 relative"}>
          <div
            className={`rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg ${
              compact ? "w-12 h-12" : "w-16 h-16"
            }`}
            style={{ backgroundColor: `${event.color}15`, color: event.color }}
          >
            <Icon className={compact ? "w-6 h-6" : "w-8 h-8"} />
          </div>
          <div
            className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"
            style={{ backgroundColor: event.color }}
          />
        </div>

        <div className="flex items-center gap-3 mb-4 min-w-0">
          <span
            className="px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border border-white/10 bg-white/5 shrink-0"
            style={{ color: event.color }}
          >
            {event.year}
          </span>
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest truncate">
            {event.organization}
          </span>
        </div>

        <div className="space-y-3 flex-grow">
          <h3
            className={`font-bold text-text-primary tracking-tight leading-tight transition-colors ${
              compact ? "text-xl" : "text-2xl"
            }`}
            style={{ "--hover-color": event.color }}
          >
            <span className="group-hover:text-[color:var(--hover-color)] transition-colors">
              {event.title}
            </span>
          </h3>
          <div className="text-xs font-bold text-google-green uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-google-green" />
            {event.role}
          </div>
          <p className={`text-text-secondary leading-relaxed ${compact ? "text-xs" : "text-sm"} pt-2`}>
            {event.description}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-medium text-text-muted uppercase tracking-tighter">
            Event Details
          </span>
          <div
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-colors"
            style={{ color: event.color }}
          >
            <Presentation className="w-3 h-3 text-current" />
          </div>
        </div>

        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20 transition-opacity group-hover:opacity-40 overflow-hidden">
          <div
            className="absolute -top-8 -right-8 w-16 h-16 rotate-45"
            style={{ backgroundColor: event.color }}
          />
        </div>
      </div>
    </a>
  );
};
