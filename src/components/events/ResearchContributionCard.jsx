import { ArrowUpRight, CalendarDays, FileText } from "lucide-react";

export default function ResearchContributionCard({ contribution, index = 0, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(contribution)}
      className="reveal group w-full text-left"
      style={{ transitionDelay: `${index * 90}ms` }}
      aria-label={`Open details for ${contribution.title}`}
    >
      <article className="h-full overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025] transition-smooth hover:border-white/[0.14]">
        <div className="grid h-full gap-0 md:grid-cols-[200px_1fr]">
          <div className="relative h-44 overflow-hidden border-b border-white/[0.06] bg-black/20 md:h-auto md:min-h-[190px] md:border-b-0 md:border-r">
            <img
              src={contribution.image}
              alt={`${contribution.title} media preview`}
              loading="lazy"
              className="h-full w-full object-contain opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <span className="absolute left-4 top-4 rounded-md border border-white/[0.12] bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-text-secondary backdrop-blur-md">
              {contribution.category}
            </span>
          </div>

          <div className="flex min-w-0 flex-col justify-between gap-5 p-5 md:p-6">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-3.5 w-3.5 text-google-blue" />
                  {contribution.date}
                </span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>Research Contribution</span>
              </div>

              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-text-primary">
                {contribution.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-text-secondary/78">
                {contribution.description}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-secondary">
                <FileText className="h-3.5 w-3.5 text-google-blue" />
                View Details
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/[0.08] text-text-secondary">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </button>
  );
}
