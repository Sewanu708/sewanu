import type { ReactNode } from 'react'
import styles from './timeline-section.module.css'

interface TimelineSectionProps {
  label: string
  meta?: string
  /** Optional element shown in the header (e.g. a résumé link). */
  action?: ReactNode
  children: ReactNode
}

export function TimelineSection({ label, meta, action, children }: TimelineSectionProps) {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.label}>{label}</h2>
        {(meta || action) && (
          <div className={styles.aside}>
            {meta && <span className={styles.meta}>{meta}</span>}
            {action}
          </div>
        )}
      </div>
      <div className={styles.body}>{children}</div>
    </section>
  )
}
