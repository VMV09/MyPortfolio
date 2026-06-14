export const flagshipProjects = [
  {
    slug: "ddpu-administrative-information-syste",
    title: "INSIGHT System",
    organization: "Deputy Director - Bengaluru South, Dept. of Pre-University, Govt. of Karnataka",
    contextName: "DDPU Karnataka",
    year: "2024-2025",
    previewImage: "/projects/project1.png",
    recognitionImage: "/Honor_ddpu.jpg",
    recognitionAlt: "Felicitation for the INSIGHT project at DDPU Karnataka",
    planningImages: [
      {
        title: "Initial stakeholder walkthrough",
        src: "/puboard1.jpg",
        alt: "Pre-project planning discussion for INSIGHT in the PU Board conference room",
        caption:
          "Early planning session with PU Board leadership before the INSIGHT project moved into implementation.",
        featured: true,
      },
      {
        title: "Requirement discovery",
        src: "/puboard2.JPG",
        alt: "Requirement discussion with PU Board stakeholders before project initiation",
        caption:
          "Requirement discussion with PU Board stakeholders before project initiation.",
      },
      {
        title: "Department visit",
        src: "/puboard3.JPG",
        alt: "Visit to the Department of School Education Pre-University during the planning phase",
        caption:
          "Visit to the Department of School Education, Pre-University, during the planning phase.",
      },
    ],
    description:
      "A centralized administrative platform for institutional records, reporting workflows, validation, and department-level operational visibility.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "REST APIs", "Role-based flows"],
    systemGroups: [
      { label: "Frontend", items: ["React", "Tailwind"] },
      { label: "Backend", items: ["Node.js", "Express.js"] },
      { label: "Database", items: ["MongoDB"] },
      { label: "Infrastructure", items: ["REST APIs", "Role-based workflows"] },
    ],
    links: {
      live: "https://ddpusouth.co.in",
    },
    overview: [
      {
        title: "Problem",
        body: "Administrative data and reporting work were fragmented across repeated manual processes, across 400+ Pre-Univeristy Colleges and the Office of the Deputy Director of South Bengaluru.",
      },
      {
        title: "Solution",
        body: "Built a unified data governance and administrative managementsystem for searchable records, reporting views, validation, and cleaner operational handoffs.",
      },
      {
        title: "Impact",
        body: "Reduced friction in recurring workflows, manual and hardcopy document verification, audiability, transparency and improved visibility for department-level coordination.",
      },
    ],
    screenshots: [
      { title: "Access Page of Insight", src: "/projects/project1.png" },
      { title: "Insight Login Page", src: "/projects/project3.png" },
    ],
    architecture:
      "The system follows a simple dashboard architecture: authenticated inputs, API-backed workflows, MongoDB persistence, and reporting views for administrative users.",
  },
];

export const getProjectBySlug = (slug) =>
  flagshipProjects.find((project) => project.slug === slug);
