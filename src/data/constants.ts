import type { Chapter, Contact, Profile, Resume, WritingItem } from '../types'

export const PROFILE: Profile = {
  name: 'Sewanu Isaiah',
  tagline:
    'I build systems — and try to understand how they behave when things go wrong.',
  location: 'Lagos · Nigeria',
  portraitAlt: 'Portrait of Sewanu Isaiah',
}

export const CHAPTERS: Chapter[] = [
  {
    id: 'the-lab',
    title: 'The Lab',
    meta: '2021 – 2025',
    paragraphs: [
      'I studied Food Engineering at LAUTECH and graduated top of my department — First Class, 4.77/5.00. What pulled me in was the physics of it.',
      "My final-year research analyzed how moisture moves through cassava starch — predicting shelf life from water activity and heat; it's currently being prepared for publication. Along the way I worked the food chemistry and engineering labs, helped a team repair and optimize a convective dryer during my SWEP placement, and ran tomato-paste lines at a factory where I learned what GMP and a failed batch really mean.",
    ],
  },
  {
    id: 'the-work',
    title: 'The Work',
    meta: '2025 – now',
    paragraphs: [
      'These days I work on the unglamorous parts of fintech and messaging. At Vittas (Techstars ’22) I help build a B2B payments platform — multi-tenant accounts, authentication, and loan automation. At HARP I rebuilt their messaging UI from the ground up, unifying email, SMS, WhatsApp, and push into one product.',
      "On the side, I've been building a payment gateway obsessed with surviving retries, and an AI tool that's basically Figma for email.",
    ],
  },
  {
    id: 'beyond',
    title: 'Beyond the Work',
    paragraphs: [
      'Outside the lab I was Financial Secretary for our engineering student body, tutored friends through the courses that scared them, taught kids the basics of code at a weekend camp, and chased sponsors for the Hult Prize. I’m a member of the Nigerian Society of Engineers and GDG Ogbomosho — and still curious about food microbiology, sensory science, and where machine learning meets agriculture.',
    ],
  },
]

export const WRITING: WritingItem[] = [
  {
    title: 'Idempotency in Practice: Designing a Payment Gateway That Survives Retries',
    meta: 'Substack · 2026',
    link: {
      href: 'https://sewanuisaiah.substack.com/p/idempotency-in-practice-designing',
      label: 'Read →',
    },
  },
  {
    title:
      'effect of heat-moisture-treatment on moisture stability and thermodynamic properties of cassava starch',
    meta: 'with H. Adegbite, M. Waheed & O. Oyelade · 2025 · in preparation',
    link: {
      href: 'https://1drv.ms/w/c/09cab056071da2de/IQA7L1YHJCZQRJdfS7GI4OEwAV-u7IP01kmsSCOKJZ_a63Y?e=HUMkJa',
      label: 'Read →',
    },
  },
]

export const CONTACT: Contact = {
  email: 'is.sewanu@gmail.com',
  links: [
    { href: 'https://github.com/sewanu708', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/sewanuisaiah', label: 'LinkedIn' },
    { href: 'https://sewanuisaiah.substack.com', label: 'Substack' },
  ],
}

export const RESUME: Resume = {
  href: '/001_Sewanu_Isaiah_CV.pdf',
  downloadName: 'Sewanu_Isaiah_Resume.pdf',
  label: 'Résumé ↓',
}
