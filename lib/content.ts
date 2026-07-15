export const LINKS = {
  email: 'mailto:julioleonkayser@gmail.com',
  linkedin: 'https://linkedin.com/in/julio-leon-13a1783b1',
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
    period: 'Current - June 2026',
    title: 'Backend AI Engineer Intern @ FlyRank AI (remote)',
    place: 'Washington, D.C.',
    description:
      'Designing and implementing agentic AI pipelines and API integration flows for production AI systems. Building components of a scalable AI system applying error-handling principles, API contracts and output evaluation. Applying AI Fluency and agentic engineering practices certified by Anthropic Academy directly in production workflows.',
    logo: '/images/flyrank.jpeg',
  },
  {
    period: 'Current - June 2026',
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
      { label: 'Stack', value: 'Next.js + PostgreSQL on Vercel' },
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
      { label: 'Techniques', value: 'AI Agents, Tool-Calling, Financial Extraction, Underwriting' },
    ],
  },
  {
    title: 'ReWarm (founder)',
    image: '/images/rewarm-logo.jpg',
    description:
      'AI voice agent that reactivates dormant real-estate leads for brokerages, qualifying prospects and transferring hot leads to agents in real time — with real paying customers. Pipeline: lead ingestion → dynamic LLM prompt generation → voice synthesis → structured call logging.',
    rows: [
      { label: 'Role', value: 'Founder' },
      { label: 'Status', value: 'Real paying customers' },
      { label: 'Pipeline', value: 'Lead ingestion → LLM prompts → voice synthesis → call logging' },
    ],
  },
];
