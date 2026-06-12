import { CONTACT } from '../data/constants'
import { ResumeLink } from './resume-link'
import styles from './contact.module.css'

export function Contact() {
  return (
    <div className={styles.contact}>
      <a className={styles.link} href={`mailto:${CONTACT.email}`}>
        {CONTACT.email}
      </a>
      <ul className={styles.links}>
        {CONTACT.links.map((link) => (
          <li key={link.label}>
            <a className={styles.link} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <ResumeLink className={styles.link} />
        </li>
      </ul>
    </div>
  )
}
