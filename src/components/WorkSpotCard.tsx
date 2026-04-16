import { localizeText } from '../data/translations.ts'
import { useLocale } from '../hooks/useLocale.ts'
import type { WorkSpot } from '../types/domain.ts'

export function WorkSpotCard({ workSpot }: { workSpot: WorkSpot }) {
  const { locale } = useLocale()

  return (
    <article className="mini-card">
      <strong>{workSpot.name}</strong>
      <p>{localizeText(workSpot.note, locale)}</p>
      <p>
        {workSpot.area} / Wi-Fi: {workSpot.wifi} / Power: {workSpot.power ? 'Yes' : 'No'}
      </p>
      <div className="tag-row">
        {workSpot.tags.map((tag) => (
          <span key={tag} className="info-tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
