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
      'Applying institutional analytical frameworks (cap rate, NOI, rent roll, cash flow projections) to evaluate office, retail and multifamily assets under core, value-add and opportunistic strategies, factoring in supply and demand, zoning and rent growth.',
  },
  {
    period: 'May 2026 - June 2026',
    title: 'Backend Engineer @ Wells Fargo (Forage job simulation)',
    place: 'Remote',
    description:
      'Designed and implemented a relational data model with 4 JPA entities for a financial portfolio management system, using UUID primary keys, explicit relationship mappings and database-level constraints.',
  },
  {
    period: 'April 2026 - May 2026',
    title: 'Investment Banking Analyst @ Citi (Forage job simulation)',
    place: 'Remote',
    description:
      "Completed Citi's Investment Banking job simulation through Forage. Built a target company profile for Best Buy, constructed a 3-statement income model, and performed trading comparables analysis.",
  },
  {
    period: '2025 - October 2025',
    title: 'Market Analyst @ Agualitsa Textile Manufacturing',
    place: 'Guayaquil, Ecuador',
    description:
      "Designed a market expansion strategy identifying 3 new distribution channels with a projected 25% revenue uplift for Ecuador's leading thread manufacturer. Delivered an AI-driven competitive intelligence tool, adopted by company leadership, cutting manual research time by ~70%.",
  },
  {
    period: 'September 2024 - January 2025',
    title: 'Market Expansion Analyst @ Agualitsa',
    place: 'Guayaquil, Ecuador',
    description:
      'Built the market expansion plan for an Ecuadorian ice company: market research, consumer trend analysis and stakeholder presentations to support the entry strategy.',
  },
  {
    period: 'March 2024 - May 2024',
    title: 'Travel Specialist / Travel Operations Intern @ World of TUI',
    place: 'Berlin, Germany',
    description:
      'Coordinated travel logistics for international clients and analysed booking trends across the Berlin hub. Identified operational inefficiencies and built KPI reporting dashboards for leadership, collaborating with multicultural teams in English, Spanish, and German.',
  },
];

/**
 * Education. Reusa TimelineEntry y el mismo componente Timeline que Careers.
 * `period` queda vacío a propósito: el export de LinkedIn no trae fechas de
 * titulación y no se inventan. Rellenar aquí cuando Julio las confirme.
 */
export const EDUCATION: TimelineEntry[] = [
  {
    period: '',
    title: 'B.S. Business Analytics & Artificial Intelligence',
    place: 'American University — Washington, D.C.',
    description:
      'Undergraduate degree combining business analytics with artificial intelligence — the academic grounding behind the agentic pipelines, RAG systems and data work in the projects above.',
  },
];

export interface Certification {
  name: string;
  issuer?: string;
  /** Anthropic Academy no expone URL por credencial: se enlaza al catálogo. */
  href?: string;
}

const ANTHROPIC_ACADEMY = 'https://academy.claude.com/';

export const CERTIFICATIONS: Certification[] = [
  { name: 'Building with the Claude API', issuer: 'Anthropic Academy', href: ANTHROPIC_ACADEMY },
  { name: 'Claude with Amazon Bedrock', issuer: 'Anthropic Academy', href: ANTHROPIC_ACADEMY },
  { name: 'Claude with Google Vertex AI', issuer: 'Anthropic Academy', href: ANTHROPIC_ACADEMY },
  { name: 'Claude Code in Action', issuer: 'Anthropic Academy', href: ANTHROPIC_ACADEMY },
  { name: 'Introduction to Agent Skills', issuer: 'Anthropic Academy', href: ANTHROPIC_ACADEMY },
  { name: 'Introduction to MCP', issuer: 'Anthropic Academy', href: ANTHROPIC_ACADEMY },
  { name: 'MCP: Advanced Topics', issuer: 'Anthropic Academy', href: ANTHROPIC_ACADEMY },
  { name: 'AI Fluency: Framework and Foundations', issuer: 'Anthropic Academy', href: ANTHROPIC_ACADEMY },
  { name: 'AI Capabilities and Limitations', issuer: 'Anthropic Academy', href: ANTHROPIC_ACADEMY },
  { name: 'Building Effective Human-Agent Teams', issuer: 'Anthropic Academy', href: ANTHROPIC_ACADEMY },
  { name: 'Introduction to Marketing', issuer: 'Anthropic Academy', href: ANTHROPIC_ACADEMY },
  { name: 'Introduction to Claude Cowork', issuer: 'Anthropic Academy', href: ANTHROPIC_ACADEMY },
  { name: 'AI Fluency for Nonprofits', issuer: 'Anthropic Academy', href: ANTHROPIC_ACADEMY },
  { name: 'Investment Banking Job Simulation', issuer: 'Citi · Forage' },
  { name: 'Investment Management Job Simulation', issuer: 'Fidelity International · Forage' },
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
    heading: 'AI Practice',
    items: [
      { name: 'AI output evaluation & QA', stars: 5 },
      { name: 'Task automation', stars: 5 },
      { name: 'Responsible & secure AI use in organizations', stars: 4 },
    ],
  },
  {
    heading: 'Languages',
    items: [
      { name: 'Spanish (native / bilingual)', stars: 5 },
      { name: 'English (full professional)', stars: 5 },
      { name: 'German (professional working)', stars: 4 },
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
  visual?: 'code-lines' | 'style-guide' | 'decision-flow';
  rows: { label: string; value: string; href?: string; offline?: boolean }[];
}

export const PROJECTS: Project[] = [
  {
    title: 'ReadyCase OS (founder)',
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
    title: 'FlyRank AI — Backend Engineering Track',
    logo: { src: '/images/flyrank.jpeg', bg: '#ffffff' },
    description:
      'Production-grade backend systems built through the FlyRank AI internship: a containerised CRUD API on PostgreSQL, a JWT-secured API with Supabase as the identity provider, a schema-validated polite scraper that survives broken pages, and an LLM-backed screening endpoint with a closed schema, timeouts, bounded retries and a cost log. The through-line is the same in all four: strict contracts at the boundary and honest failure instead of silent fallback.',
    rows: [
      { label: 'Role', value: 'Backend AI Engineer Intern' },
      {
        label: 'Task API',
        value: 'Node.js + Express + PostgreSQL in Docker Compose, with a persistent volume',
        href: 'https://github.com/julioleonkayser-spec/FlyRank-W2',
      },
      {
        label: 'Auth API',
        value: 'FastAPI + Supabase Auth — JWT verification via a reusable dependency, Swagger bearer flow',
        href: 'https://github.com/julioleonkayser-spec/flyrank-auth-login-protect',
      },
      {
        label: 'Polite scraper',
        value: 'Python + Requests + BeautifulSoup + Pydantic — rate-limited, cached, schema-validated, run reports',
        href: 'https://github.com/julioleonkayser-spec/flyrank-polite-scraper',
      },
      {
        label: 'Deal Screener',
        value: 'FastAPI + LLM — closed schema, repair-once-then-quarantine, cost log and kill switch',
        href: 'https://github.com/julioleonkayser-spec/deal-screener',
      },
      { label: 'Status', value: 'Ongoing — June 2026 to present' },
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
    title: 'AI Decision Flow',
    visual: 'decision-flow',
    description:
      'Visual workflow tool where every node on the canvas is a YES/NO decision answered by Claude. Edges are typed by the answer, so the same graph takes different paths for different inputs. Each node runs as its own durable step, and the canvas reports what every node answered — including failures — instead of hanging.',
    rows: [
      {
        label: 'Repo',
        value: 'github.com/julioleonkayser-spec/ai-decision-flow',
        href: 'https://github.com/julioleonkayser-spec/ai-decision-flow',
      },
      { label: 'Stack', value: 'Next.js (App Router), TypeScript, Tailwind, React Flow, Inngest' },
      { label: 'Model', value: 'Claude — strict YES/NO system prompt with a parser that rejects anything else' },
      { label: 'Techniques', value: 'Durable step execution, graph walking, typed edges, visible error states' },
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

/* ------------------------------------------------------------------ *
 * Navegación
 * ------------------------------------------------------------------ */

export interface NavItem {
  label: string;
  href: string;
  /** Clase de Font Awesome 6 Free (self-hosted, ver app/layout.tsx). */
  icon: string;
}

/** Un item por sección renderizada en app/page.tsx — el nav cubre el sitio entero. */
export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about-me', icon: 'fa-solid fa-user' },
  { label: 'Careers', href: '#careers', icon: 'fa-solid fa-briefcase' },
  { label: 'Education', href: '#education', icon: 'fa-solid fa-graduation-cap' },
  { label: 'Abilities', href: '#abilities', icon: 'fa-solid fa-star' },
  { label: 'Certifications', href: '#certifications', icon: 'fa-solid fa-award' },
  { label: 'Projects', href: '#projects', icon: 'fa-solid fa-diagram-project' },
  { label: 'Reflections', href: '#reflections', icon: 'fa-solid fa-pen-nib' },
  { label: 'Contact', href: '#contact', icon: 'fa-solid fa-paper-plane' },
];

/* ------------------------------------------------------------------ *
 * Reflections
 * ------------------------------------------------------------------ */

export interface Reflection {
  /** Título del prompt, tal y como lo pide la asignación. */
  prompt: string;
  /** Clase de Font Awesome 6 Free. */
  icon: string;
  /** Pista de una línea sobre qué responder. No se renderiza como respuesta. */
  hint: string;
  /**
   * La respuesta escrita por Julio. Cadena vacía => la card se pinta como
   * placeholder "to be written". Rellenar aquí y la card se renderiza sola.
   */
  answer: string;
}

export const REFLECTIONS: Reflection[] = [
  {
    prompt: 'Building Websites with AI',
    icon: 'fa-solid fa-robot',
    hint: 'What worked, what did not, and where AI actually changed how this site got built.',
    answer: '',
  },
  {
    prompt: 'Interview Question',
    icon: 'fa-solid fa-comments',
    hint: 'The interview question and your answer.',
    answer: '',
  },
  {
    prompt: 'LinkedIn Post',
    icon: 'fa-brands fa-linkedin',
    hint: 'The post you published, and what you took away from writing it.',
    answer: '',
  },
];
