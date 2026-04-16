import { useState } from 'react'
import { PropertyCard } from '../../components/PropertyCard.tsx'
import { SectionCard } from '../../components/SectionCard.tsx'
import { mockFavoriteProperties } from '../../data/mockFavoriteProperties.ts'
import { mockProperties } from '../../data/mockProperties.ts'
import { useLocale } from '../../hooks/useLocale.ts'

export function FavoritePropertiesPage() {
  const { locale, t } = useLocale()
  const [savedIds, setSavedIds] = useState<string[]>(mockFavoriteProperties.map((item) => item.propertyId))

  const favoriteProperties = mockProperties.filter((property) => savedIds.includes(property.id))
  const favoriteBudgetTotal = favoriteProperties.reduce(
    (sum, property) => sum + (property.purchasePrice ?? 0),
    0,
  )

  return (
    <div className="page-grid">
      <SectionCard title={t('migrationFavorites')} description={t('migrationFavoritesDescription')}>
        <div className="stack">
          {favoriteProperties.length === 0 ? <p>{t('migrationFavoriteEmpty')}</p> : null}
          <div className="support-grid">
            <div className="mini-card">
              <strong>{locale === 'ja' ? '保存件数' : 'Saved count'}</strong>
              <p className="metric">{favoriteProperties.length}</p>
            </div>
            <div className="mini-card">
              <strong>{locale === 'ja' ? '平均月額賃料' : 'Avg monthly rent'}</strong>
              <p className="metric">
                ¥
                {favoriteProperties.length > 0
                  ? Math.round(
                      favoriteProperties.reduce((sum, property) => sum + property.monthlyRent, 0) /
                        favoriteProperties.length,
                    ).toLocaleString()
                  : '0'}
              </p>
            </div>
            <div className="mini-card">
              <strong>{locale === 'ja' ? '保存物件の購入総額' : 'Total purchase value'}</strong>
              <p className="metric">¥{favoriteBudgetTotal.toLocaleString()}</p>
            </div>
          </div>
          <div className="support-grid">
            {mockProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                saved={savedIds.includes(property.id)}
                onToggleSave={(propertyId) =>
                  setSavedIds((current) =>
                    current.includes(propertyId)
                      ? current.filter((id) => id !== propertyId)
                      : [...current, propertyId],
                  )
                }
              />
            ))}
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title={locale === 'ja' ? '次のアクション' : 'Next actions'}
        description={
          locale === 'ja'
            ? '保存した物件をもとに次の移住アクションへ進めます。'
            : 'Use your saved properties to move into the next migration step.'
        }
      >
        <div className="support-grid">
          <div className="mini-card">
            <strong>{locale === 'ja' ? '購入シミュレーターで比較' : 'Compare purchase scenarios'}</strong>
            <p>
              {locale === 'ja'
                ? '保存物件をもとに返済条件を試算して比較できます。'
                : 'Open the purchase simulator and test mortgage assumptions for your saved homes.'}
            </p>
          </div>
          <div className="mini-card">
            <strong>{locale === 'ja' ? '相談予約へつなぐ' : 'Book consultation'}</strong>
            <p>
              {locale === 'ja'
                ? '保存物件を相談材料として、担当者と比較検討できます。'
                : 'Use saved homes as discussion points in a relocation consultation.'}
            </p>
          </div>
          <div className="mini-card">
            <strong>{locale === 'ja' ? '長期賃貸へ切替' : 'Switch to long-term rental'}</strong>
            <p>
              {locale === 'ja'
                ? '購入が早い場合は、希望エリアをそのまま長期賃貸申請に使えます。'
                : 'If buying is too early, reuse your preferred area in the rental switch form.'}
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
