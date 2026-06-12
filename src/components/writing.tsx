import { WRITING } from '../data/constants'
import styles from './writing.module.css'

export function Writing() {
  return (
    <ul className={styles.list}>
      {WRITING.map((item) => (
        <li key={item.title} className={styles.item}>
          {item.link ? (
            <a className={styles.title} href={item.link.href} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          ) : (
            <span className={styles.title}>{item.title}</span>
          )}
          <span className={styles.meta}>{item.meta}</span>
        </li>
      ))}
    </ul>
  )
}
