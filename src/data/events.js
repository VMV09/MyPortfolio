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
    slug: "insight-system-launch-principals-meet",
    title: "Speaker - Bengaluru South Principal's Annual Meet 2026",
    role: "Speaker",
    organization: "Launch of INSIGHT System",
    year: "2026",
    type: "System Launch & Training",
    color: "var(--google-blue)",
    icon: Presentation,
    heroImage: "/projects/launch1.JPG",
    description:
      "Technical seminar and Q&A session between the South Bengaluru PU College Principals and System Administrators on the usage of INSIGHT System.",
    summary:
      "A focused technical seminar and training session for using the INSIGHT System that was launched as a part of easing the communication flow between PU Colleges and Deputy Director of South Bengaluru.",
    tags: ["INSIGHT System", "Public Sector", "Administrative Workflows", "Stakeholder Training", "Digital Governance"],
    images: [
      {
        src: "/projects/launch1.JPG",
        title: "INSIGHT System Launch",
        type: "Launch Session",
        span: "md:col-span-2 md:row-span-2",
      },
      { src: "/projects/launch2.jpg", title: "Principal Q&A Session", type: "Stakeholder Discussion" },
      { src: "/projects/launch3.jpg", title: "System Administrator Orientation", type: "Training Session" },
      { src: "/projects/launch4.jpg", title: "PU College Principals", type: "Launch Audience" },
      { src: "/projects/launch5.jpg", title: "INSIGHT Development Team", type: "Project Team" },
    ],
    highlights: [
      {
        icon: Mic,
        title: "Role Played",
        subtitle: "Launch Speaker & Trainer",
        description: "Led the INSIGHT launch session and introduced the portal workflow to principals and system administrators.",
      },
      {
        icon: BriefcaseBusiness,
        title: "Topics Covered",
        subtitle: "Administrative Portal Usage",
        description: "Explained login, communication, records, reporting, and operational coordination flows inside the INSIGHT System.",
      },
      {
        icon: Users,
        title: "Audience",
        subtitle: "Principals & System Administrators",
        description: "Addressed Bengaluru South PU College principals, institutional administrators, and department stakeholders.",
      },
      {
        icon: Target,
        title: "Impact",
        subtitle: "Adoption & Operational Readiness",
        description: "Helped institutions understand how to adopt INSIGHT for smoother communication with the Deputy Director's office.",
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
        title: "Hidden Markov Model Overview",
        type: "Seminar Slide",
        span: "md:col-span-2",
      },
      { src: "/HMM/S2.png", title: "Probabilistic Transitions", type: "Seminar Slide" },
      { src: "/HMM/S3.png", title: "Sequence Modeling", type: "Seminar Slide" },
      { src: "/HMM/S4.png", title: "Viterbi Algorithm", type: "Seminar Slide" },
      { src: "/HMM/S5.png", title: "AI Applications", type: "Seminar Slide" },
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
  },
  {
    slug: "ieee-project-exhibition-dropout-mitigation-runner-up",
    title: "8th National IEEE Project Exhibition 2024",
    role: "Runner-up Team",
    organization: "GSSS Institute of Engineering and Technology for Women, Mysuru",
    year: "2024",
    type: "National Project Exhibition",
    color: "var(--google-yellow)",
    icon: Trophy,
    heroImage: "/projects/dropout1.JPG",
    description:
      "Won the runners-up position with my team for Proactive Dropout Mitigation for School Students Success at the 8th National IEEE Project Exhibition 2024.",
    summary:
      "A national-level IEEE project exhibition recognition for building and presenting Proactive Dropout Mitigation for School Students Success, a technology-driven education solution focused on identifying at-risk students and supporting timely intervention.",
    tags: ["IEEE", "Project Exhibition", "Runner-up", "EdTech", "Student Success"],
    images: [
      {
        src: "/projects/dropout1.JPG",
        title: "Project Exhibition Showcase",
        type: "IEEE Exhibition",
        span: "md:col-span-2 md:row-span-2",
      },
      { src: "/projects/dropout2.JPG", title: "Project Demonstration", type: "Prototype View" },
      { src: "/projects/dropout3.jpg", title: "Team Presentation", type: "Project Demo" },
      { src: "/projects/dropout4.jpg", title: "Evaluation Moment", type: "Judging Session" },
      { src: "/projects/dropout5.JPG", title: "Runner-up Recognition", type: "Award Proof" },
    ],
    highlights: [
      {
        icon: Trophy,
        title: "Recognition",
        subtitle: "National Runner-up",
        description: "Secured the runners-up position with my team at the 8th National IEEE Project Exhibition 2024.",
      },
      {
        icon: ChartNoAxesCombined,
        title: "Project Focus",
        subtitle: "Dropout Risk Mitigation",
        description: "Presented a solution aimed at identifying students vulnerable to dropout and enabling proactive academic support.",
      },
      {
        icon: Users,
        title: "Team Contribution",
        subtitle: "Collaborative Build",
        description: "Worked with my team on the project concept, implementation, presentation, and technical explanation during evaluation.",
      },
      {
        icon: Medal,
        title: "Venue",
        subtitle: "GSSS Institute, Mysuru",
        description: "Presented the project at GSSS Institute of Engineering and Technology for Women, Mysuru, as part of the national IEEE exhibition.",
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
