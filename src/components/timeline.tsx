import { SECTIONS } from '../data/constants'
import { Contact } from './contact'
import { TimelineEntry } from './timeline-entry'
import { TimelineSection } from './timeline-section'
import styles from './timeline.module.css'

export function Timeline() {
  return (
    <div className={styles.timeline}>
      {SECTIONS.map((section) => (
        <TimelineSection key={section.id} label={section.label}>
          {section.entries.map((entry, i) => (
            <TimelineEntry key={i} {...entry} />
          ))}
        </TimelineSection>
      ))}

      <TimelineSection label="Contact">
        <Contact />
      </TimelineSection>
    </div>
  )
}
