export const LINKS = {
  email: 'mailto:julioleonkayser@gmail.com',
  linkedin: 'https://linkedin.com/in/julio-leon-13a1783b1',
  github: 'https://github.com/julioleonkayser-spec',
  location: 'Washington, D.C.',
} as const;

export interface TimelineEntry {
  period: string;
  title: string;
  place: string;
  extra?: { label: string; href?: string };
  description: string;
  logo?: string;
}

export const CAREERS: TimelineEntry[] = [
  {
    period: 'June 2026 - Present',
    title: 'Backend AI Engineer Intern @ FlyRank AI (remote)',
    place: 'Washington, D.C.',
    description:
      'Designing and implementing agentic AI pipelines and API integration flows for production AI systems. Building components of a scalable AI system applying error-handling principles, API contracts and output evaluation. Applying AI Fluency and agentic engineering practices certified by Anthropic Academy directly in production workflows.',
    logo: '/images/flyrank.jpeg',
  },
  {
    period: 'June 2026 - Present',
    title: 'CRE Analyst Fellow / AI CRE Analyst @ Project Destined (remote)',
    place: 'Washington, D.C.',
    description:
      'Applying institutional analytical frameworks (cap rate, NOI, rent roll, cash flow projections) to evaluate office, retail and multifamily assets under core, value-add and opportunistic strategies.',
  },
  {
    period: 'May 2026 - June 2026',
    title: 'Backend Engineer @ Wells Fargo (Forage job simulation)',
    place: 'Remote',
    description:
      'Designed and implemented a relational data model with 4 JPA entities for a financial portfolio management system.',
  },
  {
    period: 'April 2026 - May 2026',
    title: 'Investment Banking Analyst @ Citi (Forage job simulation)',
    place: 'Remote',
    description:
      "Completed Citi's Investment Banking job simulation through Forage. Built a target company profile for Best Buy, constructed a 3-statement income model, and performed trading comparables analysis.",
  },
  {
    period: 'September 2024 - October 2025',
    title: 'Market & Market Expansion Analyst @ Agualitsa',
    place: 'Guayaquil, Ecuador',
    description:
      "Designed a market expansion strategy identifying 3 new distribution channels with a projected 25% revenue uplift for Ecuador's leading thread manufacturer. Delivered an AI-driven competitive intelligence tool, adopted by company leadership, cutting manual research time by ~70%.",
  },
  {
    period: 'March 2024 - May 2024',
    title: 'Travel Specialist / Travel Operations Intern @ World of TUI',
    place: 'Berlin, Germany',
    description:
      'Identified operational inefficiencies across the Berlin hub and built KPI reporting dashboards for leadership, collaborating with multicultural teams in English, Spanish, and German.',
  },
];

export interface Certification {
  name: string;
  issuer?: string;
}

export const CERTIFICATIONS: Certification[] = [
  { name: 'Claude Code in Action', issuer: 'Anthropic Academy' },
  { name: 'Introduction to Agent Skills', issuer: 'Anthropic Academy' },
  { name: 'AI Fluency Framework & Foundations', issuer: 'Anthropic Academy' },
  { name: 'Investment Banking Job Simulation', issuer: 'Citi · Forage' },
  { name: 'Investment Management Job Simulation', issuer: 'Fidelity International · Forage' },
  { name: 'Introduction to Marketing' },
];

export interface Skill {
  name: string;
  stars: number; // sobre 5, presentación visual del patrón de estrellas del original
}

export const SKILLS_LEFT: { heading: string; items: Skill[] }[] = [
  {
    heading: 'Engineering',
    items: [
      { name: 'Python', stars: 5 },
      { name: 'Node.js', stars: 4 },
      { name: 'SQL', stars: 5 },
      { name: 'REST APIs', stars: 5 },
      { name: 'RAG (Retrieval-Augmented Generation)', stars: 5 },
      { name: 'AI Agents & Tool-Calling', stars: 5 },
      { name: 'Prompt Engineering', stars: 5 },
      { name: 'Supabase / PostgreSQL', stars: 4 },
      { name: 'Row Level Security (multi-tenancy)', stars: 4 },
      { name: 'Next.js', stars: 4 },
      { name: 'TypeScript', stars: 4 },
      { name: 'Tailwind CSS', stars: 4 },
      { name: 'Vercel', stars: 4 },
      { name: 'CI/CD (GitHub Actions)', stars: 3 },
    ],
  },
];

export const SKILLS_RIGHT: { heading: string; items: Skill[] }[] = [
  {
    heading: 'Languages',
    items: [
      { name: 'Spanish (native)', stars: 5 },
      { name: 'English (daily use)', stars: 5 },
      { name: 'German (conversational)', stars: 3 },
    ],
  },
  {
    heading: 'Analysis / Others',
    items: [
      { name: 'Cap rate / NOI / DCF analysis', stars: 4 },
      { name: 'Rent roll & cash flow projections', stars: 4 },
      { name: 'Multicultural teams (US, Ecuador, Germany)', stars: 5 },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  image?: string;
  logo?: { src: string; bg: string };
  /** Visual nativo (SVG) para cards sin fotografía — ver components/ProjectVisuals.tsx */
  visual?: 'code-lines' | 'style-guide';
  rows: { label: string; value: string; href?: string; offline?: boolean }[];
}

export const PROJECTS: Project[] = [
  {
    title: 'Auditix (founder)',
    logo: { src: '/images/auditix-logo.png', bg: '#ffffff' },
    description:
      'Case & document management for accounting studios and audit firms in LatAm. Clients upload documents straight from their phone, an internal engine auto-escalates stalled engagements and tracks task ownership, and an append-only audit log keeps per-tenant row-level isolation (row-level security).',
    rows: [
      { label: 'Role', value: 'Founder' },
      { label: 'Core', value: 'Next.js, TypeScript, Supabase (Postgres + Auth + Row Level Security)' },
      {
        label: 'Infra',
        value:
          'Turso (edge data layer), Vercel Blob (document storage), Vercel Cron (scheduled auto-escalation), Resend (transactional email), Sentry (observability), n8n (internal workflow automation), Python (data-processing scripts)',
      },
      { label: 'Tooling', value: 'Developed in Cursor' },
      { label: 'Status', value: '3 firms in production · $150/mo target price' },
    ],
  },
  {
    title: 'DealScreen AI — AI Commercial Real Estate Analyst',
    image: '/images/real-estate.jpeg',
    description:
      'A 6-agent pipeline (PDF ingestion → financial extraction → underwriting → risk flagging → market research → IC memo generation) that compresses hours-long analysis workflows into seconds for institutional screening of Offering Memorandums.',
    rows: [
      { label: 'Achievement', value: 'Top 10 — Project Destined AI x CRE Hackathon' },
      { label: 'Pipeline', value: '6 agents, PDF → IC memo' },
      { label: 'Stack', value: 'Python — base language of the agent pipeline' },
      { label: 'Techniques', value: 'AI Agents, Tool-Calling, Financial Extraction, Underwriting' },
    ],
  },
  {
    title: 'ReWarm (founder)',
    visual: 'code-lines',
    description:
      'AI voice agent that reactivates dormant real-estate leads for brokerages, qualifying prospects and transferring hot leads to agents in real time — with real paying customers. Pipeline: lead ingestion → dynamic LLM prompt generation → voice synthesis → structured call logging.',
    rows: [
      { label: 'Role', value: 'Founder' },
      {
        label: 'Stack',
        value:
          'n8n (voice pipeline orchestration), Supabase (data & structured call logging), Vercel Blob, Vercel Cron, Resend (notifications), JavaScript',
      },
      { label: 'Tooling', value: 'Developed in Cursor' },
      { label: 'Status', value: 'Real paying customers' },
    ],
  },
  {
    title: 'This Portfolio — Design System Replication',
    visual: 'style-guide',
    description:
      'Rebuilt the complete design system of an external reference site from scratch — typography, palette, spacing and motion extracted from the live CSS and rendered DOM, verified with section-by-section visual QA — then adapted it to entirely different content without losing visual fidelity.',
    rows: [
      {
        label: 'Achievement',
        value:
          'Every design token traced in DESIGN_SYSTEM.md — extracted, adapted, or flagged as unverified',
      },
      {
        label: 'Stack',
        value: 'Next.js, Tailwind CSS, Playwright (computed-CSS/DOM extraction for visual QA), Vercel',
      },
      { label: 'Status', value: "Live — you're looking at it" },
    ],
  },
];
