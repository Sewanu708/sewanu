import styles from './prose.module.css'

interface ProseProps {
  paragraphs: string[]
}

export function Prose({ paragraphs }: ProseProps) {
  return (
    <div className={styles.prose}>
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  )
}
