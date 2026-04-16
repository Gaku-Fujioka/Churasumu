import { localizeFeature } from '../data/translations.ts'
import { useLocale } from '../hooks/useLocale.ts'
import type { Property } from '../types/domain.ts'

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

  return (
    <article className="mini-card">
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
    </article>
  )
}
