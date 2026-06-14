import { ArrowUpRight, CheckCircle2, Database, LineChart, ShieldCheck, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI Powered Early Warning Dropout Mitigation System",
    eyebrow: "EdTech AI Platform",
    metric: "35%",
    metricLabel: "potential dropout reduction",
    accent: "var(--google-blue)",
    summary:
      "Full-stack risk intelligence platform for identifying at-risk students and coordinating verified support interventions at scale.",
    outcomes: [
      "Served 1000+ users through a Python, Flask, and SQL platform aligned to NEP 2020 support workflows.",
      "Reached 85% model accuracy using academic, behavioral, and socio-economic indicators for dropout risk detection.",
      "Launched Aadhaar-verified intervention flows to improve targeted student support and engagement visibility.",
    ],
    stack: ["Python", "Flask", "SQL", "Machine Learning", "Aadhaar Verification"],
    icon: ShieldCheck,
  },
  {
    title: "Natural Language to SQL Generator with Automated Database Execution",
    eyebrow: "NLP Systems",
    metric: "92%",
    metricLabel: "model accuracy",
    accent: "var(--google-red)",
    summary:
      "Natural-language query engine that converts English requests into executable SQL with validation, execution, and iteration loops.",
    outcomes: [
      "Improved accessibility for non-technical users by 70% across diverse natural-language query samples.",
      "Built dynamic database creation, real-time query execution, and security validation cycles in a Python and SQLite pipeline.",
      "Used Git-backed debugging cycles to deliver a 5% performance gain per iteration.",
    ],
    stack: ["Python", "SQLite", "NLP", "Query Execution", "Git"],
    icon: Database,
  },
  {
    title: "Identifying Trends and Patterns in Campus Placement Data",
    eyebrow: "Analytics & Prediction",
    metric: "30%",
    metricLabel: "prediction accuracy lift",
    accent: "var(--google-green)",
    summary:
      "Multi-year placement analytics system for understanding department performance, role demand, company behavior, and compensation patterns.",
    outcomes: [
      "Analyzed campus placement datasets across departments, roles, company types, and compensation levels.",
      "Built predictive models and visualization dashboards to turn historical placement data into planning insight.",
      "Used Pandas, NumPy, and Matplotlib to surface trends and communicate hiring-cycle patterns clearly.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Dashboards"],
    icon: LineChart,
  },
  {
    title: "Blood Bank Management System",
    eyebrow: "Healthcare Operations",
    metric: "40%",
    metricLabel: "response coordination improvement",
    accent: "var(--google-yellow)",
    summary:
      "Modular emergency-response system for donor records, inventory retrieval, real-time alerts, and reliable blood-bank operations.",
    outcomes: [
      "Engineered a full-stack Java and PHP application with MySQL-backed inventory and donor management.",
      "Implemented secure authentication, CRUD workflows, automated alerts, and normalized database design.",
      "Improved emergency response coordination through faster inventory retrieval and real-time alert effectiveness.",
    ],
    stack: ["Java", "PHP", "MySQL", "Authentication", "SDLC"],
    icon: Sparkles,
  },
];

const ProjectRow = ({ project, index }) => {
  const Icon = project.icon;
  const isOffset = index % 2 === 1;

  return (
    <article
      className={`group relative grid gap-6 border-t border-white/7 py-10 md:grid-cols-[0.62fr_1.38fr] md:gap-10 ${
        isOffset ? "lg:ml-16" : "lg:mr-16"
      }`}
    >
      <div className="flex items-start gap-5 md:block">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.025] text-text-primary/80 transition-smooth group-hover:-translate-y-1">
          <Icon className="h-5 w-5" style={{ color: project.accent }} />
        </div>

        <div className="md:mt-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-text-muted">
            0{index + 1} / {project.eyebrow}
          </p>
          <div className="mt-4 flex items-end gap-3">
            <span className="text-5xl font-black leading-none tracking-tight md:text-6xl" style={{ color: project.accent }}>
              {project.metric}
            </span>
            <span className="max-w-[11rem] pb-1 text-[11px] font-bold uppercase leading-4 tracking-[0.16em] text-text-secondary">
              {project.metricLabel}
            </span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-md border border-white/8 bg-white/[0.018] p-6 transition-smooth group-hover:border-white/14 group-hover:bg-white/[0.028] md:p-8">
        <div
          className="absolute inset-y-0 left-0 w-1 opacity-80 transition-smooth group-hover:w-1.5"
          style={{ backgroundColor: project.accent }}
        />

        <div className="grid gap-7 lg:grid-cols-[1fr_0.74fr]">
          <div className="min-w-0">
            <h3 className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-text-primary md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-[62ch] text-sm leading-7 text-text-secondary md:text-[15px]">
              {project.summary}
            </p>
          </div>

          <div className="border-t border-white/7 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">
              Build Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/8 bg-background/35 px-2.5 py-1.5 text-[11px] font-medium leading-none text-text-secondary transition-smooth group-hover:border-white/12 group-hover:text-text-primary/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3">
          {project.outcomes.map((outcome) => (
            <div key={outcome} className="flex gap-3 text-sm leading-6 text-text-secondary/86">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0" style={{ color: project.accent }} />
              <p>{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export const Projects = () => {
  return (
    <section className="section-container relative overflow-hidden">
      <div className="relative z-10">
        <div className="mb-16 grid gap-8 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-google-blue" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-google-blue">
                Projects
              </span>
            </div>
            <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-none tracking-tight md:text-6xl">
              Systems with measurable, shipped impact.
            </h2>
          </div>

          <div className="border-l border-white/10 pl-5">
            <p className="max-w-xl text-sm leading-7 text-text-secondary md:text-base">
              A minimal project index focused on outcomes, architecture choices, and evidence of execution without relying on image placeholders.
            </p>
            <a
              href="mailto:vishruthmv@gmail.com"
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-text-primary/82 transition-smooth hover:border-google-blue/45 hover:text-google-blue"
            >
              Discuss the work <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-linear-to-b from-google-blue/35 via-white/10 to-google-green/25 md:block" />
          {projects.map((project, index) => (
            <ProjectRow key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
