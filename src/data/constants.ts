import type { Contact, Profile, TimelineSectionData } from '../types'

export const PROFILE: Profile = {
  name: 'Sewanu Isaiah',
  title: 'Software Engineer',
  location: 'Lagos, Nigeria',
  portraitAlt: 'Portrait of Sewanu Isaiah',
}

export const SECTIONS: TimelineSectionData[] = [
  {
    id: 'experience',
    label: 'Experience',
    entries: [
      {
        title: 'Junior Software Engineer',
        org: "Vittas · Techstars '22 · Remote",
        period: 'May 2026 – Present',
        tags: ['Payments', 'API Design', 'RBAC'],
        points: [
          'Built a drop-in payment UI package (Stripe-style) with secure API design and encrypted credential storage.',
          'Built role-based access control across backend and frontend for admin security and user governance.',
        ],
      },
      {
        title: 'Software Engineer Intern',
        org: "Vittas · Techstars '22 · Remote",
        period: 'Dec 2025 – May 2026',
        tags: ['NestJS', 'AWS Cognito', 'PostgreSQL', 'Mono'],
        points: [
          'Designed a multi-tenant architecture with invitation workflows and role/permission management.',
          'Integrated Mono webhooks to automate loan-repayment tracking, cutting manual reconciliation with real-time status updates.',
          'Built end-to-end two-factor authentication with AWS Cognito (backend challenge/response + frontend) aligned to OWASP best practices.',
          'Built a transaction-receipt system with dynamic PDF generation and streaming.',
        ],
      },
      {
        title: 'Frontend Engineer',
        org: 'HARP · Contract · Remote',
        period: 'Nov 2025 – Present',
        tags: ['Next.js', 'React', 'TypeScript'],
        points: [
          'Rebuilt Harp Engage — the legacy promotional-campaign UI — from scratch in Next.js.',
          'Built the Harp Messaging UI end-to-end: email, SMS, WhatsApp, and push unified into one platform (live, in testing).',
        ],
      },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    entries: [
      {
        title: 'Payment Gateway Service',
        org: 'Personal Project',
        tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
        points: [
          'Architected Authorization, Capture, Void, and Refund workflows with strong data consistency.',
          'Multi-stage idempotency layer with recovery tracking to prevent duplicate transactions under concurrency and failures.',
          'Retry with exponential backoff + jitter and token-bucket rate limiting for upstream resilience.',
        ],
      },
      {
        title: 'AI-Powered Email Template Builder',
        org: 'In Development',
        tags: ['Next.js', 'GrapesJS', 'Gemini AI', 'PostgreSQL', 'Drizzle'],
        points: [
          '“Figma for email” — drag-and-drop editor with MJML plugins for cross-client compatibility.',
          'Gemini AI chat that generates templates from natural-language prompts.',
          'Next.js server actions and API routes for data handling; encrypted storage for third-party API keys.',
        ],
      },
    ],
  },
  {
    id: 'education',
    label: 'Education',
    entries: [
      {
        title: 'B.Tech, Food Engineering',
        org: 'LAUTECH · Ogbomosho, Nigeria',
        period: '2020 – 2025',
        highlight: 'First Class Honours · CGPA 4.77 / 5.00',
        points: [
          'Best Graduating Student — 1st in the Department of Food Engineering.',
          'Federal Government of Nigeria / NNPCL Scholarship recipient.',
        ],
      },
    ],
  },
  {
    id: 'writing',
    label: 'Writing',
    entries: [
      {
        title: 'Idempotency in Practice: Designing a Payment Gateway That Survives Retries',
        org: 'Substack',
        period: 'Jun 2026',
        link: {
          href: 'https://sewanuisaiah.substack.com/p/idempotency-in-practice-designing',
          label: 'Read on Substack →',
        },
      },
    ],
  },
]

export const CONTACT: Contact = {
  email: 'is.sewanu@gmail.com',
  links: [
    { href: 'https://github.com/sewanu708', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/sewanuisaiah', label: 'LinkedIn' },
  ],
}
