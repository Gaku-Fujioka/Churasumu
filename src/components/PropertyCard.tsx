import { localizeFeature } from '../data/translations.ts'
import { useLocale } from '../hooks/useLocale.ts'
import type { Property } from '../types/domain.ts'
import { MediaCover } from './MediaCover.tsx'

export function PropertyCard({
  property,
  saved,
  onToggleSave,
}: {
  property: Property
  saved?: boolean
  onToggleSave?: (propertyId: string) => void
}) {
  const { locale, t } = useLocale()
  const hasCover = Boolean(property.coverImageUrl)

  return (
    <article className={`mini-card${hasCover ? ' mini-card--with-cover' : ''}`}>
      {property.coverImageUrl ? (
        <MediaCover
          src={property.coverImageUrl}
          alt={property.name}
          aspectRatio="2.5 / 1"
          className="mini-card__cover media-cover--thumbnail"
        />
      ) : null}
      <div className={hasCover ? 'mini-card__body' : undefined}>
        <div className="mini-card--row">
          <div>
            <strong>{property.name}</strong>
            <p>
              {property.city} / ¥{property.monthlyRent.toLocaleString()}
            </p>
          </div>
          {onToggleSave ? (
            <button type="button" onClick={() => onToggleSave(property.id)}>
              {saved ? t('saved') : t('save')}
            </button>
          ) : null}
        </div>
        <div className="tag-row">
          {property.features.map((feature) => (
            <span key={feature} className="info-tag">
              {localizeFeature(feature, locale)}
            </span>
          ))}
        </div>
        {property.purchasePrice ? (
          <p>
            {t('migrationPropertyPurchasePrice')}: ¥{property.purchasePrice.toLocaleString()}
          </p>
        ) : null}
      </div>
    </article>
  )
}
