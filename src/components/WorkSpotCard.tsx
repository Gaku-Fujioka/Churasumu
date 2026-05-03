import { localizeText, localizeYesNo } from '../data/translations.ts'
import { useLocale } from '../hooks/useLocale.ts'
import type { WorkSpot } from '../types/domain.ts'
import { MediaCover } from './MediaCover.tsx'

export function WorkSpotCard({ workSpot }: { workSpot: WorkSpot }) {
  const { locale } = useLocale()
  const hasCover = Boolean(workSpot.coverImageUrl)

  return (
    <article
      className={`mini-card${hasCover ? ' mini-card--with-cover mini-card--split' : ''}`}
    >
      {workSpot.coverImageUrl ? (
        <div className="mini-card__split-media">
          <MediaCover
            src={workSpot.coverImageUrl}
            alt={workSpot.name}
            aspectRatio="1 / 1"
            className="mini-card__cover media-cover--split-thumb"
          />
        </div>
      ) : null}
      <div className={hasCover ? 'mini-card__body' : undefined}>
        <strong>{workSpot.name}</strong>
        <p>{localizeText(workSpot.note, locale)}</p>
        <p>
          {workSpot.area} / Wi-Fi: {workSpot.wifi} / Power: {localizeYesNo(workSpot.power, locale)}
        </p>
        <div className="tag-row">
          {workSpot.tags.map((tag) => (
            <span key={tag} className="info-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
