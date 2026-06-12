import { CHAPTERS } from '../data/constants'
import { Contact } from './contact'
import { Prose } from './prose'
import { ResumeLink } from './resume-link'
import { TimelineSection } from './timeline-section'
import { Writing } from './writing'
import styles from './timeline.module.css'
import sectionStyles from './timeline-section.module.css'

const RESUME_CHAPTER_ID = 'the-work'

export function Timeline() {
  return (
    <div className={styles.timeline}>
      {CHAPTERS.map((chapter) => (
        <TimelineSection
          key={chapter.id}
          label={chapter.title}
          meta={chapter.meta}
          action={
            chapter.id === RESUME_CHAPTER_ID ? (
              <ResumeLink className={sectionStyles.action} />
            ) : undefined
          }
        >
          <Prose paragraphs={chapter.paragraphs} />
        </TimelineSection>
      ))}

      <TimelineSection label="Words">
        <Writing />
      </TimelineSection>

      <TimelineSection label="Find me">
        <Contact />
      </TimelineSection>
    </div>
  )
}
