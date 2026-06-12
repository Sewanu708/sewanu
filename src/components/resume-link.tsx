import { RESUME } from '../data/constants'

interface ResumeLinkProps {
  className?: string
}

export function ResumeLink({ className }: ResumeLinkProps) {
  return (
    <a className={className} href={RESUME.href} download={RESUME.downloadName}>
      {RESUME.label}
    </a>
  )
}
