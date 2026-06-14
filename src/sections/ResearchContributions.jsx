import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Award,
  CalendarDays,
  FileImage,
  GraduationCap,
  X,
} from "lucide-react";
import ResearchContributionCard from "../components/events/ResearchContributionCard";
import researchContributions from "../data/researchContributions";

const introText =
  "Contributions spanning peer review, scholarly publications, conference presentations, and science communication activities. This section highlights involvement in the broader research ecosystem through research dissemination, academic service, and knowledge sharing.";

const ContributionDetail = ({ contribution, onClose }) => {
  useEffect(() => {
    if (!contribution) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [contribution, onClose]);

  if (!contribution) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/80 p-3 backdrop-blur-2xl md:p-6 animate-event-fade"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${contribution.title} details`}
    >
      <button
        type="button"
        className="fixed right-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-text-primary transition-smooth hover:text-google-blue"
        onClick={onClose}
        aria-label="Close contribution details"
      >
        <X className="h-5 w-5" />
      </button>

      <article
        className="max-h-[min(820px,calc(100vh-2rem))] w-full max-w-5xl overflow-y-auto rounded-xl border border-white/[0.1] bg-[#0b0b0c] shadow-2xl animate-event-rise md:max-h-[min(820px,calc(100vh-4rem))]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr]">
          <div className="p-5 md:p-6 lg:p-7">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-md border border-google-blue/20 bg-google-blue/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#c7d8ea]">
                <Award className="h-3.5 w-3.5" />
                {contribution.category}
              </span>
              <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted">
                <CalendarDays className="h-3.5 w-3.5 text-google-blue" />
                {contribution.date}
              </span>
            </div>

            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-text-muted">
              Research & Academic Contributions
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-text-primary md:text-[38px]">
              {contribution.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-text-secondary">
              {contribution.description}
            </p>

            <div className="mt-5 border-t border-white/[0.07] pt-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-text-primary">
                Detail
              </h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary/82">
                {contribution.details}
              </p>
            </div>
          </div>

          <div className="border-t border-white/[0.08] bg-black/20 p-5 md:p-6 lg:border-l lg:border-t-0">
            <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted">
              <FileImage className="h-4 w-4 text-google-blue" />
              Certificate / Presentation Image
            </div>
            <figure className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025]">
              <div className="flex max-h-[34vh] min-h-[210px] items-center justify-center bg-white/[0.015] md:min-h-[240px]">
                <img
                  src={contribution.image}
                  alt={`${contribution.title} certificate or presentation`}
                  className="max-h-[34vh] w-full object-contain opacity-95"
                />
              </div>
              <figcaption className="border-t border-white/[0.06] px-4 py-3 text-sm leading-6 text-text-secondary">
                Certificate or conference presentation photograph placeholder.
              </figcaption>
            </figure>
          </div>
        </div>
      </article>
    </div>,
    document.body
  );
};

export default function ResearchContributions() {
  const [selectedContribution, setSelectedContribution] = useState(null);

  return (
    <section
      className="section-container relative overflow-hidden"
      aria-labelledby="research-contributions-title"
    >
      <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-google-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/[0.025] blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-google-blue" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-google-blue">
                Research Ecosystem
              </span>
            </div>
            <h2
              id="research-contributions-title"
              className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl"
            >
              Research & Academic Contributions
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-7 text-text-secondary md:text-base">
            {introText}
          </p>
        </div>

        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          {["Peer Review", "Research Dissemination", "Science Communication"].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-google-blue" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-text-secondary">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4">
          {researchContributions.map((contribution, index) => (
            <ResearchContributionCard
              key={contribution.title}
              contribution={contribution}
              index={index}
              onSelect={setSelectedContribution}
            />
          ))}
        </div>
      </div>

      <ContributionDetail
        contribution={selectedContribution}
        onClose={() => setSelectedContribution(null)}
      />
    </section>
  );
}
