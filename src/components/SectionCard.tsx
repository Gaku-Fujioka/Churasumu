import type { ReactNode } from 'react'

export type SectionCardTone = 'default' | 'spotlight' | 'quiet'

export function SectionCard({
  title,
  description,
  children,
  tone = 'default',
  className,
}: {
  title: string
  description?: string
  children: ReactNode
  tone?: SectionCardTone
  className?: string
}) {
  const toneClass =
    tone === 'spotlight' ? 'section-card--spotlight' : tone === 'quiet' ? 'section-card--quiet' : ''

  return (
    <section className={['section-card', toneClass, className].filter(Boolean).join(' ')}>
      <div className="section-card__header">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      <div className="section-card__body">{children}</div>
    </section>
  )
}
