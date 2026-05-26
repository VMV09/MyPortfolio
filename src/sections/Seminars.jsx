import { EventCard } from "@/components/events/EventCard";
import { engagementEvents } from "@/data/events";

export const Seminars = () => {
  return (
    <section className="section-container relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-google-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-google-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mb-20 space-y-4">
        <span className="text-google-blue font-bold tracking-[0.2em] uppercase text-sm">Community</span>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
          Key <span className="text-text-muted">Engagements</span>
        </h2>
        <div className="w-20 h-1 bg-google-blue rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {engagementEvents.map((event, idx) => (
          <EventCard key={event.slug} event={event} index={idx} />
        ))}
      </div>
    </section>
  );
};
