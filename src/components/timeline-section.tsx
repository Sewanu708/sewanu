import type { ReactNode } from 'react'
import styles from './timeline-section.module.css'

interface TimelineSectionProps {
  label: string
  children: ReactNode
}

export function TimelineSection({ label, children }: TimelineSectionProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.label}>{label}</h2>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
