import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Expand,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Sparkles,
  X,
} from "lucide-react";
import { EventCard } from "@/components/events/EventCard";
import { getEventBySlug, getRelatedEvents, proofTypeIcons } from "@/data/events";

const SectionHeader = ({ eyebrow, title, accent }) => (
  <div className="mb-8 space-y-3">
    <span
      className="text-xs font-black tracking-[0.22em] uppercase"
      style={{ color: accent }}
    >
      {eyebrow}
    </span>
    <div className="flex items-center gap-4">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">{title}</h2>
      <div
        className="h-px flex-1 opacity-60"
        style={{
          background: `linear-gradient(90deg, ${accent}, transparent)`,
        }}
      />
    </div>
  </div>
);

const Lightbox = ({ item, onClose }) => {
  useEffect(() => {
    if (!item) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-2xl p-4 md:p-8 flex items-center justify-center animate-event-fade"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        className="absolute top-5 right-5 w-11 h-11 rounded-2xl glass flex items-center justify-center text-text-primary hover:text-google-blue transition-smooth"
        onClick={onClose}
        aria-label="Close media viewer"
      >
        <X className="w-5 h-5" />
      </button>
      <div
        className="max-w-5xl w-full animate-event-rise"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] shadow-2xl">
          <img
            src={item.src}
            alt={item.title}
            className="w-full max-h-[78vh] object-contain bg-black/30"
          />
          <div className="absolute left-0 right-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">
              {item.type}
            </span>
            <h3 className="text-xl font-bold mt-1">{item.title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ event }) => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section-container !py-14 relative">
      <SectionHeader eyebrow="Media Gallery" title="Moments & Materials" accent={event.color} />
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[170px] gap-3 md:gap-4">
        {event.images.map((image, index) => (
          <button
            key={`${image.title}-${index}`}
            type="button"
            className={`reveal group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.03] shadow-lg transition-smooth hover:-translate-y-1 ${
              image.span || ""
            }`}
            style={{
              transitionDelay: `${index * 70}ms`,
              boxShadow: `0 0 0 rgba(0,0,0,0)`,
            }}
            onClick={() => setSelected(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at 50% 20%, ${event.color}35, transparent 55%)`,
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-left">
              <span className="text-[9px] font-black tracking-[0.18em] uppercase text-text-muted">
                {image.type}
              </span>
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs md:text-sm text-text-primary font-bold truncate">
                  {image.title}
                </p>
                <Expand className="w-3.5 h-3.5 text-text-secondary shrink-0" />
              </div>
            </div>
          </button>
        ))}
      </div>
      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

const Highlights = ({ event }) => (
  <section className="section-container !py-14 relative">
    <SectionHeader eyebrow="Event Highlights" title="Signal Points" accent={event.color} />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {event.highlights.map((highlight, index) => {
        const Icon = highlight.icon;
        return (
          <div
            key={highlight.title}
            className="reveal premium-card !p-5 rounded-[20px] group"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 shadow-lg transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundColor: `${event.color}15`, color: event.color }}
            >
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold tracking-tight">{highlight.title}</h3>
            {highlight.subtitle && (
              <p
                className="mt-1 mb-3 text-[10px] font-black uppercase tracking-[0.18em]"
                style={{ color: event.color }}
              >
                {highlight.subtitle}
              </p>
            )}
            <p className="text-sm leading-relaxed text-text-secondary">{highlight.description}</p>
          </div>
        );
      })}
    </div>
  </section>
);

const Proof = ({ event }) => (
  <section className="section-container !py-14 relative">
    <SectionHeader eyebrow="Certifications & Proof" title="Documents" accent={event.color} />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {event.certificates.map((document, index) => {
        const Icon = proofTypeIcons[document.type] || proofTypeIcons.default;
        const isPdf = document.src.endsWith(".pdf");

        return (
          <a
            key={document.title}
            href={document.src}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal group premium-card !p-4 rounded-[20px] flex gap-4 items-center"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="relative w-20 h-24 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] shrink-0">
              {isPdf ? (
                <div
                  className="h-full w-full flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${event.color}30, transparent 65%)`,
                  }}
                >
                  <FileText className="w-8 h-8" style={{ color: event.color }} />
                </div>
              ) : (
                <img
                  src={document.thumbnail || document.src}
                  alt={document.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 shrink-0" style={{ color: event.color }} />
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-text-muted">
                  {document.type}
                </span>
              </div>
              <h3 className="text-base font-bold leading-tight truncate">{document.title}</h3>
              <p className="text-xs mt-1 truncate">{document.institution}</p>
              <span className="inline-flex items-center gap-2 mt-3 text-[10px] font-black uppercase tracking-[0.16em] text-text-primary">
                View / Expand <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </a>
        );
      })}
    </div>
  </section>
);

export const EventDetails = ({ slug }) => {
  const event = getEventBySlug(slug);
  const related = useMemo(() => getRelatedEvents(slug), [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!event) {
    return (
      <main className="section-container min-h-screen pt-36">
        <div className="premium-card max-w-2xl">
          <Sparkles className="w-10 h-10 text-google-blue mb-5" />
          <h1 className="text-4xl font-bold mb-3">Event not found</h1>
          <p className="mb-6">The engagement route does not match an available event.</p>
          <a href="/#seminars" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Engagements
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="event-detail-page pt-24 md:pt-28 animate-page-enter">
      <section className="section-container !pt-8 !pb-14 relative overflow-hidden">
        <div
          className="absolute -top-36 right-0 w-[520px] h-[520px] rounded-full blur-[140px] opacity-25 pointer-events-none"
          style={{ backgroundColor: event.color }}
        />
        <div className="absolute -bottom-28 -left-24 w-96 h-96 bg-google-green/10 blur-[120px] rounded-full pointer-events-none" />

        <a
          href="/#seminars"
          className="inline-flex items-center gap-2 text-xs font-black tracking-[0.18em] uppercase text-text-secondary hover:text-text-primary transition-smooth mb-7"
        >
          <ArrowLeft className="w-4 h-4" />
          Engagements
        </a>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-8 items-stretch">
          <div className="glass rounded-[24px] p-6 md:p-8 relative overflow-hidden min-h-[430px] flex flex-col justify-end">
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(10,10,10,0.92), rgba(10,10,10,0.52)), url(${event.heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background: `radial-gradient(circle at 20% 20%, ${event.color}45, transparent 32%), linear-gradient(180deg, transparent, rgba(10,10,10,0.88))`,
              }}
            />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="px-3 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase border border-white/10 bg-white/10 backdrop-blur-xl"
                  style={{ color: event.color }}
                >
                  {event.role}
                </span>
                <span className="px-3 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase border border-white/10 bg-black/20 text-text-secondary">
                  {event.type}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.98] max-w-3xl">
                {event.title}
              </h1>
              <p className="text-sm md:text-base leading-relaxed mt-5 max-w-2xl">
                {event.summary}
              </p>
            </div>
          </div>

          <aside className="premium-card !p-6 md:!p-7 rounded-[24px] flex flex-col justify-between gap-8">
            <div>
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${event.color}15`, color: event.color }}
              >
                <event.icon className="w-7 h-7" />
              </div>
              <div className="space-y-5">
                <div>
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-text-muted">
                    Organization
                  </span>
                  <h2 className="text-2xl font-bold mt-1">{event.organization}</h2>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Calendar className="w-4 h-4" style={{ color: event.color }} />
                  <span className="text-sm font-semibold">{event.year}</span>
                </div>
                <p className="text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10 bg-white/[0.04]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <div className="event-section-divider" />
      <Gallery event={event} />
      <div className="event-section-divider" />
      <Highlights event={event} />
      <div className="event-section-divider" />
      <Proof event={event} />

      <section className="section-container !pt-14 relative">
        <SectionHeader eyebrow="Related Engagements" title="Continue Exploring" accent={event.color} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((item, index) => (
            <EventCard key={item.slug} event={item} index={index} compact />
          ))}
        </div>
      </section>
    </main>
  );
};
