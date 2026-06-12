import { Hero } from './components/hero'
import { Timeline } from './components/timeline'
import styles from './app.module.css'

function App() {
  return (
    <main className={styles.page}>
      <Hero />
      <Timeline />
    </main>
  )
}

export default App
