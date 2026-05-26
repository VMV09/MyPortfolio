import PublicationEventCard from "../components/events/PublicationEventCard";
import publicationEvents from "../data/publicationevent";

export default function Publications() {
  return (
    <section
      id="publications"
      className="relative w-full px-6 md:px-12 py-24 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* HEADING */}
        <div className="mb-14 flex items-center gap-6">
          <div>
            <p className="text-zinc-400 uppercase tracking-[0.35em] text-sm font-semibold mb-3">
              Research & Publications
            </p>

            <h2 className="text-6xl md:text-5xl font-bold tracking-tight text-white leading-none">
              Publications
            </h2>
          </div>

          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-white/20 to-transparent mt-8" />
        </div>

        {/* CARDS */}
        <div className="flex flex-col gap-6 w-full">
          {publicationEvents.map((publication, index) => (
            <PublicationEventCard
              key={index}
              publication={publication}
            />
          ))}
        </div>

      </div>
    </section>
  );
}