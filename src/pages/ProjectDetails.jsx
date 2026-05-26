import { useEffect } from "react";
import { ArrowLeft, ExternalLink, Layers3 } from "lucide-react";
import { getProjectBySlug } from "@/data/flagshipProjects";

const SectionTitle = ({ eyebrow, title }) => (
  <div className="mb-5">
    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-google-blue">{eyebrow}</p>
    <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
  </div>
);

const ActionLink = ({ href, children, primary = false }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-smooth ${
      primary
        ? "bg-google-blue text-white shadow-[0_0_24px_rgba(66,133,244,0.16)] hover:bg-google-blue/90"
        : "border border-white/10 bg-white/[0.03] text-text-secondary hover:border-white/20 hover:text-text-primary"
    }`}
  >
    {children}
  </a>
);

const ProjectNotFound = () => (
  <main className="section-container min-h-screen pt-36">
    <div className="max-w-2xl rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
      <h1 className="text-3xl font-bold">Project not found</h1>
      <p className="mt-3 text-sm leading-relaxed">The case study route does not match an available flagship project.</p>
      <a href="/#flagship-projects" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-google-blue">
        <ArrowLeft className="h-4 w-4" />
        Back to Flagship Projects
      </a>
    </div>
  </main>
);

export const ProjectDetails = ({ slug }) => {
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) return <ProjectNotFound />;

  return (
    <main className="animate-page-enter pt-24 md:pt-28">
      <section className="section-container !pb-12 !pt-8">
        <div className="mx-auto max-w-5xl">
          <a
            href="/#flagship-projects"
            className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-text-secondary transition-smooth hover:text-text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Flagship Projects
          </a>

          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-google-blue">{project.organization}</p>
              <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
                {project.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <ActionLink href={project.links.live} primary>
                  Experience the Project Here! <ExternalLink className="h-4 w-4" />
                </ActionLink>
              </div>
            </div>

            <aside className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
              <div className="space-y-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted">Association</p>
                  <p className="mt-1 text-sm font-semibold text-text-primary">{project.organization}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted">Year</p>
                  <p className="mt-1 text-sm font-semibold text-text-primary">{project.year}</p>
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted">Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[11px] text-text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="event-section-divider" />

      <section className="section-container !py-12">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Overview" title="Project Context" />
          <div className="grid gap-4 md:grid-cols-3">
            {project.overview.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="event-section-divider" />

      <section className="section-container !py-12">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Screenshots" title="Product Surface" />
          <div className="grid gap-4 md:grid-cols-2">
            {project.screenshots.map((image) => (
              <figure key={image.title} className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.025]">
                <img src={image.src} alt={image.title} loading="lazy" className="aspect-[16/10] w-full object-cover opacity-90" />
                <figcaption className="border-t border-white/[0.06] px-4 py-3 text-sm font-medium text-text-secondary">
                  {image.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div className="event-section-divider" />

      <section className="section-container !py-12">
        <div className="mx-auto max-w-5xl">
          <SectionTitle eyebrow="Architecture" title="System Shape" />
          <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
              <div className="grid gap-3 sm:grid-cols-4">
                {["Input", "Logic", "Data", "Output"].map((step) => (
                  <div key={step} className="rounded-lg border border-white/[0.08] bg-background/35 p-4 text-center">
                    <Layers3 className="mx-auto h-5 w-5 text-google-blue" />
                    <p className="mt-2 text-sm font-semibold">{step}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-text-secondary">{project.architecture}</p>
            </div>
            <div className="rounded-xl border border-dashed border-white/[0.12] bg-white/[0.02] p-5">
              <p className="text-sm font-semibold text-text-primary">Architecture image placeholder</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Space reserved for a diagram or system screenshot without making the case study visually heavy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="event-section-divider" />

      <section className="section-container !pt-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-google-blue">Project Materials</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight">Explore the build</h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <ActionLink href={project.links.live} primary>
              Experience the Project Here! <ExternalLink className="h-4 w-4" />
            </ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
};
