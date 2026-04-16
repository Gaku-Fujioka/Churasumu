import { localizeText, localizeWorkStyle } from '../data/translations.ts'
import { useLocale } from '../hooks/useLocale.ts'
import type { ResidentProfile } from '../types/domain.ts'

export function ResidentCard({ resident }: { resident: ResidentProfile }) {
  const { locale } = useLocale()

  return (
    <article className="mini-card">
      <strong>{resident.displayName}</strong>
      <p>{localizeText(resident.bio, locale)}</p>
      <p>
        {resident.stayWindow} / {localizeWorkStyle(resident.workStyle, locale)} / {resident.language.toUpperCase()}
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
