import styles from './tech-tags.module.css'

interface TechTagsProps {
  tags: string[]
}

export function TechTags({ tags }: TechTagsProps) {
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  )
}
