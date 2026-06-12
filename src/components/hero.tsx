import { PROFILE } from '../data/constants'
import portrait from '../assets/sewanu_isaiah.jpg'
import styles from './hero.module.css'

export function Hero() {
  return (
    <header className={styles.hero}>
      <img className={styles.portrait} src={portrait} alt={PROFILE.portraitAlt} />
      <div className={styles.text}>
        <h1 className={styles.name}>{PROFILE.name}</h1>
        <p className={styles.tagline}>{PROFILE.tagline}</p>
        <p className={styles.location}>{PROFILE.location}</p>
      </div>
    </header>
  )
}
