export interface EntryLink {
  href: string
  label: string
}

/** A chapter of the story — a titled passage of prose on the timeline. */
export interface Chapter {
  id: string
  title: string
  /** Optional time range, e.g. "2021 – 2025". */
  meta?: string
  paragraphs: string[]
}

export interface WritingItem {
  title: string
  meta: string
  link?: EntryLink
}

export interface Profile {
  name: string
  tagline: string
  location: string
  portraitAlt: string
}

export interface Contact {
  email: string
  links: EntryLink[]
}

export interface Resume {
  href: string
  /** Filename the browser saves the download as. */
  downloadName: string
  label: string
}
