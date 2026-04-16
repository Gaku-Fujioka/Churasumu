import { localizeText } from '../data/translations.ts'
import { useLocale } from '../hooks/useLocale.ts'
import type { ResidentProfile } from '../types/domain.ts'

export function ResidentCard({ resident }: { resident: ResidentProfile }) {
  const { locale } = useLocale()

  return (
    <article className="mini-card">
      <strong>{resident.displayName}</strong>
      <p>{localizeText(resident.bio, locale)}</p>
      <p>
        {resident.stayWindow} / {resident.workStyle} / {resident.language.toUpperCase()}
      </p>
      <div className="tag-row">
        {resident.interests.map((interest) => (
          <span key={interest} className="info-tag">
            {interest}
          </span>
        ))}
      </div>
    </article>
  )
}
