export interface EntryLink {
  href: string
  label: string
}

/** A single item on the timeline — used for experience, projects, education, writing. */
export interface TimelineEntryData {
  title: string
  org?: string
  period?: string
  /** Emphasized one-liner, e.g. a degree result. */
  highlight?: string
  tags?: string[]
  points?: string[]
  link?: EntryLink
}

export interface TimelineSectionData {
  id: string
  label: string
  entries: TimelineEntryData[]
}

export interface Profile {
  name: string
  title: string
  location: string
  portraitAlt: string
}

export interface Contact {
  email: string
  links: EntryLink[]
}
