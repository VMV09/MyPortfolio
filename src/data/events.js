import {
  Award,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  FileBadge,
  FileText,
  GraduationCap,
  Lightbulb,
  Medal,
  Mic,
  Presentation,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";

export const engagementEvents = [
  {
    slug: "ensemble-learning-machine-intelligence",
    title: "Ensemble Learning in Machine Intelligence",
    role: "Speaker",
    organization: "BNMIT Technical Seminar Series",
    year: "2025",
    type: "Technical Seminar",
    color: "var(--google-blue)",
    icon: Presentation,
    heroImage: "/hero-bg.jpg",
    description:
      "Detailed exploration of Bias-Variance tradeoffs and Model Aggregation in modern AI architectures.",
    summary:
      "A focused technical seminar translating ensemble methods into practical model-building intuition, with emphasis on tradeoffs, aggregation strategies, and production-minded evaluation.",
    tags: ["Machine Learning", "Ensembles", "Bias-Variance", "Model Aggregation", "Generalization"],
    images: [
      {
        src: "/hero-bg.jpg",
        title: "Seminar Banner",
        type: "Banner",
        span: "md:col-span-2 md:row-span-2",
      },
      { src: "/projects/project1.png", title: "Model Workflow", type: "Workshop Snapshot" },
      { src: "/projects/project2.png", title: "Technical Demo", type: "Stage Image" },
      { src: "/projects/project3.png", title: "Discussion Notes", type: "Audience" },
      { src: "/companies/puboard.jpg", title: "Institution Context", type: "Venue" },
    ],
    highlights: [
      {
        icon: Mic,
        title: "Role Played",
        subtitle: "Session Lead",
        description: "Delivered the core technical session as speaker.",
      },
      {
        icon: Brain,
        title: "Topics Covered",
        subtitle: "Core ML Concepts",
        description: "Bagging, boosting, variance control, and ensemble reliability.",
      },
      {
        icon: Users,
        title: "Audience",
        subtitle: "Applied Learners",
        description: "Designed for students building applied ML foundations.",
      },
      {
        icon: Target,
        title: "Impact",
        subtitle: "Theory to Practice",
        description: "Turned abstract model behavior into usable engineering intuition.",
      },
    ],
    certificates: [
      {
        title: "Speaker Recognition",
        institution: "BNMIT Technical Seminar Series",
        src: "/projects/project4.png",
        type: "Certificate",
      },
      {
        title: "Seminar Brief",
        institution: "BNMIT",
        src: "/resume.pdf",
        thumbnail: "/hero-bg.jpg",
        type: "Brochure",
      },
    ],
  },
  {
    slug: "model-united-nations-chairperson",
    title: "Hidden Markov Models: Foundation of AI",
    role: "Speaker",
    organization: "BNMIT Technical Seminar Series",
    year: "2024",
    type: "Technical Seminar",
    color: "var(--google-red)",
    icon: Users,
    heroImage: "/HMM/hmm.png",
    description:
      "Delivered a comprehensive overview of Hidden Markov Models and their contribution in development and advancement of AI.",
    summary:
      "A leadership-heavy conference role focused on moderation, crisis-room judgment, and helping delegates convert policy positions into clear diplomatic argument.",
    tags: ["Markov Chains", "Probabilistic Models", "Stochastic Processes", "Viterbi Algorithm", "AI Foundations"],
    images: [
      {
        src: "/HMM/S1.png",
        span: "md:col-span-2",
      },
      { src: "/HMM/S2.png"},
      { src: "/HMM/S3.png"},
      { src: "/HMM/S4.png"},
      { src: "/HMM/S5.png"},
    ],
    highlights: [
      {
        icon: BriefcaseBusiness,
        title: "Role Played",
        subtitle: "Technical Presenter & Research Lead",
        description: "Designed and delivered a seminar breaking down Hidden Markov Models, probablistic transitions, and sequnce prediction concepts.",
      },
      {
        icon: Lightbulb,
        title: "Key Contribution",
        subtitle: "Simplified Complex AI Concepts",
        description: "Explained real-world application sof HMMs in speech recognition, NLP, and predictive systems using intutive examples.",
      },
      {
        icon: Users,
        title: "Audience",
        subtitle: "Inter-College Cohort, Technical and Academic Peers",
        description: "Presented to students and faculty members with discussions around machine learning fundamentals and probablistic modelling.",
      },
      {
        icon: Award,
        title: "Recognition",
        subtitle: "Seminar Excellence and Top Speaker",
        description: "Appreciated for making mathematically intensvice concepts accessible through structured visual explnantions and practical insights.",
      },
    ],
    certificates: [
      {
        title: "Chairperson Appointment",
        institution: "Inter-College MUN Conference",
        src: "/projects/project2.png",
        type: "Offer Letter",
      },
      {
        title: "Committee Recognition",
        institution: "MUN Secretariat",
        src: "/projects/project4.png",
        type: "Recognition",
      },
    ],
  },
  {
    slug: "data-visualization-workshop",
    title: "Data Visualization Workshop",
    role: "Participant",
    organization: "IIT Madras - Strategy Labs",
    year: "2022",
    type: "Workshop",
    color: "var(--google-yellow)",
    icon: Mic,
    heroImage: "/projects/dropout.jpg",
    description:
      "Hands-on training in scalable data storytelling and dataset integrity for clinical applications.",
    summary:
      "An applied analytics workshop centered on clear visual communication, dataset trust, and communicating insights responsibly in high-context domains.",
    tags: ["Data Visualization", "Analytics", "Storytelling", "Clinical Data"],
    images: [
      {
        src: "/projects/dropout.jpg",
        title: "Workshop Case Study",
        type: "Workshop Snapshot",
        span: "md:col-span-2 md:row-span-2",
      },
      { src: "/projects/project1.png", title: "Dashboard View", type: "Photo" },
      { src: "/projects/project2.png", title: "Visualization Sprint", type: "Banner" },
      { src: "/projects/project3.png", title: "Dataset Review", type: "Audience" },
      { src: "/projects/project4.png", title: "Completion Proof", type: "Certificate" },
    ],
    highlights: [
      {
        icon: ChartNoAxesCombined,
        title: "Role Played",
        subtitle: "Hands-On Participant",
        description: "Participated in hands-on visualization and critique exercises.",
      },
      {
        icon: BookOpen,
        title: "Topics Covered",
        subtitle: "Visual Analytics",
        description: "Data integrity, visual hierarchy, chart choice, and narrative flow.",
      },
      {
        icon: GraduationCap,
        title: "Outcome",
        subtitle: "Sharper Judgment",
        description: "Built sharper judgment for insight-first analytics presentation.",
      },
      {
        icon: Medal,
        title: "Recognition",
        subtitle: "Program Completion",
        description: "Completed a specialized workshop under IIT Madras Strategy Labs.",
      },
    ],
    certificates: [
      {
        title: "Workshop Certificate",
        institution: "IIT Madras - Strategy Labs",
        src: "/projects/project4.png",
        type: "Certificate",
      },
      {
        title: "Program Brochure",
        institution: "IIT Madras",
        src: "/resume.pdf",
        thumbnail: "/projects/dropout.jpg",
        type: "Brochure",
      },
    ],
  },
];

export const proofTypeIcons = {
  Brochure: FileText,
  Certificate: FileBadge,
  "Offer Letter": FileText,
  Recognition: Trophy,
  default: Sparkles,
};

export const getEventBySlug = (slug) =>
  engagementEvents.find((event) => event.slug === slug);

export const getRelatedEvents = (slug, limit = 3) => {
  const current = getEventBySlug(slug);
  return engagementEvents
    .filter((event) => event.slug !== slug)
    .sort((a, b) => {
      const aShared = a.tags.filter((tag) => current?.tags.includes(tag)).length;
      const bShared = b.tags.filter((tag) => current?.tags.includes(tag)).length;
      return bShared - aShared;
    })
    .slice(0, limit);
};
