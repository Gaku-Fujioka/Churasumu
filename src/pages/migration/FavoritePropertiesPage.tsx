import { useState } from 'react'
import { PropertyCard } from '../../components/PropertyCard.tsx'
import { SectionCard } from '../../components/SectionCard.tsx'
import { mockFavoriteProperties } from '../../data/mockFavoriteProperties.ts'
import { mockProperties } from '../../data/mockProperties.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import { pickUi } from '../../lib/pickUi.ts'

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
              <strong>
                {pickUi(locale, { ja: '保存件数', en: 'Saved count', zh: '保存件数', ko: '저장 건수' })}
              </strong>
              <p className="metric">{favoriteProperties.length}</p>
            </div>
            <div className="mini-card">
              <strong>
                {pickUi(locale, { ja: '平均月額賃料', en: 'Avg monthly rent', zh: '平均月租', ko: '평균 월세' })}
              </strong>
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
              <strong>
                {pickUi(locale, {
                  ja: '保存物件の購入総額',
                  en: 'Total purchase value',
                  zh: '收藏房源购入总额',
                  ko: '저장 매물 매입 총액',
                })}
              </strong>
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
        title={pickUi(locale, { ja: '次のアクション', en: 'Next actions', zh: '下一步', ko: '다음 액션' })}
        description={pickUi(locale, {
          ja: '保存した物件をもとに次の移住アクションへ進めます。',
          en: 'Use your saved properties to move into the next migration step.',
          zh: '基于已保存房源继续移居相关操作。',
          ko: '저장한 매물을 바탕으로 다음 이주 단계로 진행합니다.',
        })}
      >
        <div className="support-grid">
          <div className="mini-card">
            <strong>
              {pickUi(locale, {
                ja: '購入シミュレーターで比較',
                en: 'Compare purchase scenarios',
                zh: '用购房模拟器比较',
                ko: '구매 시뮬레이터로 비교',
              })}
            </strong>
            <p>
              {pickUi(locale, {
                ja: '保存物件をもとに返済条件を試算して比較できます。',
                en: 'Open the purchase simulator and test mortgage assumptions for your saved homes.',
                zh: '以收藏房源为基准试算还款条件并比较。',
                ko: '저장 매물로 상환 조건을 시산해 비교할 수 있습니다.',
              })}
            </p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, { ja: '相談予約へつなぐ', en: 'Book consultation', zh: '预约咨询', ko: '상담 예약으로' })}
            </strong>
            <p>
              {pickUi(locale, {
                ja: '保存物件を相談材料として、担当者と比較検討できます。',
                en: 'Use saved homes as discussion points in a relocation consultation.',
                zh: '将收藏房源作为材料与负责人比较讨论。',
                ko: '저장 매물을 상담 자료로 담당자와 비교 검토할 수 있습니다.',
              })}
            </p>
          </div>
          <div className="mini-card">
            <strong>
              {pickUi(locale, {
                ja: '長期賃貸へ切替',
                en: 'Switch to long-term rental',
                zh: '切换到长租',
                ko: '장기 임대로 전환',
              })}
            </strong>
            <p>
              {pickUi(locale, {
                ja: '購入が早い場合は、希望エリアをそのまま長期賃貸申請に使えます。',
                en: 'If buying is too early, reuse your preferred area in the rental switch form.',
                zh: '若购房尚早，可将意向区域直接用于长租申请。',
                ko: '구매가 이르면 희망 지역을 그대로 장기 임대 신청에 활용할 수 있습니다.',
              })}
            </p>
          </div>
        </div>
      </SectionCard>
    </div>
  )
}
