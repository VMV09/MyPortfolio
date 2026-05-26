import { ArrowUpRight, ExternalLink, Layers3 } from "lucide-react";
import { flagshipProjects } from "@/data/flagshipProjects";

const ProjectLink = ({ href, children, primary = false }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-medium transition-smooth ${
      primary
        ? "border border-[#7893ad]/30 bg-[#7893ad]/10 text-[#d5e0ea] shadow-[0_0_14px_rgba(120,147,173,0.07)] hover:border-[#9ab0c4]/40 hover:bg-[#7893ad]/14"
        : "border border-white/6.5 bg-white/[0.014] text-text-secondary/75 hover:border-white/11 hover:bg-white/[0.028] hover:text-text-primary/88"
    }`}
  >
    {children}
  </a>
);

const SystemRow = ({ label, items }) => (
  <p className="text-[12px] leading-6 text-text-secondary/72">
    <span className="font-medium text-text-primary/74">{label}</span>
    <span className="px-2 text-text-muted/50">-</span>
    {items.join(", ")}
  </p>
);

export const FlagshipProjects = () => {
  const project = flagshipProjects[0];

  return (
    <section className="section-container relative">
      <div className="mx-auto w-full">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-google-blue">
            Flagship Project
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Flagship Projects</h2>
          <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
            A carefully selected engineering highlight shaped around real-world public-sector workflows, automation, and reliable system design.
          </p>
        </div>

        <article className="group overflow-hidden rounded-xl border border-white/7.5 bg-white/[0.022] transition-smooth hover:-translate-y-0.5 hover:border-[#7f9fbd]/20 hover:bg-white/3 hover:shadow-[0_16px_42px_rgba(93,124,154,0.05)]">
          <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex min-w-0 flex-col justify-between gap-8 p-5 md:p-7 lg:p-8">
              <div>
                <span className="mb-5 inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#7f9fbd]/16 bg-[#7f9fbd]/7 text-[11px] font-medium text-[#9aafc1]">
                  01
                </span>

                <h3 className="max-w-2xl text-2xl font-medium leading-tight tracking-tight text-text-primary/95 md:text-[32px]">
                  <a href={`/projects/${project.slug}`} className="transition-smooth hover:text-[#b8cbe0]">
                    {project.title}
                  </a>
                </h3>

                <p className="mt-3 text-[12px] font-medium leading-5 text-text-secondary/72">
                  Built for <span className="text-[#9cafbf]/90">{project.contextName}</span>
                  <span className="px-1.5 text-text-muted/60">&middot;</span>
                  {project.year}
                </p>

                <p className="mt-5 max-w-[64ch] text-sm font-normal leading-7 text-text-secondary/78 md:text-[15px]">
                  {project.description}
                </p>
              </div>

              <div className="space-y-5">
                <div className="border-t border-white/5.5 pt-5">
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted/80">
                    Systems
                  </p>
                  <div className="space-y-1">
                    {project.systemGroups.map((group) => (
                      <SystemRow key={group.label} label={group.label} items={group.items} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <ProjectLink href={`/projects/${project.slug}`} primary>
                    View Case Study <ArrowUpRight className="h-3 w-3" />
                  </ProjectLink>
                  <ProjectLink href={project.links.live}>
                    Experience the Project Here! <ExternalLink className="h-3 w-3" />
                  </ProjectLink>
                </div>
              </div>
            </div>

            <div className="border-t border-white/6 bg-black/10 p-4 md:p-5 lg:border-l lg:border-t-0">
              <div className="flex h-full min-h-[300px] flex-col gap-3">
                <figure className="overflow-hidden rounded-lg border border-white/7.5 bg-white/2.5">
                  <img
                    src={project.previewImage}
                    alt={`${project.title} dashboard preview`}
                    loading="lazy"
                    className="aspect-16/10 w-full object-cover opacity-85 transition-smooth group-hover:opacity-95"
                  />
                </figure>

                <div className="grid flex-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/6.5 bg-white/1.8 p-4">
                    <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted/80">
                      Architecture
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {["Input", "API", "Data", "Reports"].map((node) => (
                        <div key={node} className="rounded-md border border-white/6 bg-background/35 px-3 py-2 text-[11px] text-text-secondary/78">
                          {node}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/6 bg-white/1.8 p-4">
                    <Layers3 className="h-4 w-4 text-[#9cafbf]/80" />
                    <p className="mt-3 text-sm font-medium text-text-primary/86">Administrative workflow layer</p>
                    <p className="mt-2 text-[12px] leading-6 text-text-secondary/68">
                      Records, validation, reporting, and operational visibility in one focused system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
