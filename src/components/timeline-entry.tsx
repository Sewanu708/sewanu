import type { TimelineEntryData } from '../types'
import { TechTags } from './tech-tags'
import styles from './timeline-entry.module.css'

export function TimelineEntry({
  title,
  org,
  period,
  highlight,
  tags,
  points,
  link,
}: TimelineEntryData) {
  return (
    <article className={styles.entry}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {org && <p className={styles.org}>{org}</p>}
        {period && <p className={styles.period}>{period}</p>}
      </header>

      {highlight && <p className={styles.highlight}>{highlight}</p>}

      {tags && tags.length > 0 && <TechTags tags={tags} />}

      {points && points.length > 0 && (
        <ul className={styles.points}>
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}

      {link && (
        <a className={styles.link} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      )}
    </article>
  )
}
