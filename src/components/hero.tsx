import { PROFILE } from '../data/constants'
import portrait from '../assets/portrait.png'
import styles from './hero.module.css'

export function Hero() {
  return (
    <header className={styles.hero}>
      <img className={styles.portrait} src={portrait} alt={PROFILE.portraitAlt} />
      <h1 className={styles.name}>{PROFILE.name}</h1>
      <p className={styles.title}>{PROFILE.title}</p>
      <p className={styles.location}>{PROFILE.location}</p>
    </header>
  )
}
