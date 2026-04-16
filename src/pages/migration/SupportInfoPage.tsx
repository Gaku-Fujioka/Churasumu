import { FilterBar } from '../../components/FilterBar.tsx'
import { SectionCard } from '../../components/SectionCard.tsx'
import { localizeText } from '../../data/translations.ts'
import { mockSupportArticles } from '../../data/mockSupportArticles.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import { useState } from 'react'
import type { SupportCategory } from '../../types/domain.ts'

type SupportFilter = 'all' | SupportCategory

export function SupportInfoPage() {
  const { locale, t } = useLocale()
  const [filter, setFilter] = useState<SupportFilter>('all')

  const articles = filter === 'all' ? mockSupportArticles : mockSupportArticles.filter((article) => article.category === filter)
  const quickTips = [
    '行政手続きは転入後14日以内のものを先に確認',
    '学校・保育園情報は希望エリアとセットで比較',
    '病院と交通は平日導線と休日導線の両方を確認',
  ]

  return (
    <div className="page-grid">
      <SectionCard title={t('migrationSupport')} description={t('migrationSupportDescription')}>
        <FilterBar
          value={filter}
          onChange={setFilter}
          options={[
            { value: 'all', label: locale === 'ja' ? 'すべて' : 'All' },
            { value: 'administration', label: locale === 'ja' ? '行政' : 'Administration' },
            { value: 'school', label: locale === 'ja' ? '学校' : 'School' },
            { value: 'hospital', label: locale === 'ja' ? '病院' : 'Hospital' },
            { value: 'transport', label: locale === 'ja' ? '交通' : 'Transport' },
          ]}
        />
        <div className="stack">
          {articles.map((article) => (
            <div key={article.id} className="mini-card">
              <strong>{localizeText(article.title, locale)}</strong>
              <p>{localizeText(article.summary, locale)}</p>
              <p>{article.contact}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title={locale === 'ja' ? 'クイックヒント' : 'Quick tips'}
        description={
          locale === 'ja'
            ? '移住準備を整理しやすくする短いメモです。'
            : 'A few reminders that help organize relocation tasks.'
        }
      >
        <div className="support-grid">
          {quickTips.map((tip) => (
            <div key={tip} className="mini-card">
              <p>
                {locale === 'ja'
                  ? tip
                  : {
                      '行政手続きは転入後14日以内のものを先に確認': 'Check procedures with a 14-day deadline first after moving in.',
                      '学校・保育園情報は希望エリアとセットで比較': 'Compare schools and daycare options together with preferred areas.',
                      '病院と交通は平日導線と休日導線の両方を確認': 'Review both weekday and weekend routes for hospitals and transport.',
                    }[tip]}
              </p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
