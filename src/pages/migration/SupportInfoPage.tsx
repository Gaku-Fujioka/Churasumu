import { FilterBar } from '../../components/FilterBar.tsx'
import { SectionCard } from '../../components/SectionCard.tsx'
import { localizeText } from '../../data/translations.ts'
import { mockSupportArticles } from '../../data/mockSupportArticles.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import { pickUi } from '../../lib/pickUi.ts'
import { useState } from 'react'
import type { SupportCategory } from '../../types/domain.ts'

type SupportFilter = 'all' | SupportCategory

const quickTipRows = [
  {
    ja: '行政手続きは転入後14日以内のものを先に確認',
    en: 'Check procedures with a 14-day deadline first after moving in.',
    zh: '优先确认迁入后14日内须完成的行政手续。',
    ko: '전입 후 14일 이내 절차를 먼저 확인하세요.',
  },
  {
    ja: '学校・保育園情報は希望エリアとセットで比較',
    en: 'Compare schools and daycare options together with preferred areas.',
    zh: '将学校与托育信息与意向区域一并比较。',
    ko: '학교·보육 정보는 희망 지역과 함께 비교하세요.',
  },
  {
    ja: '病院と交通は平日導線と休日導線の両方を確認',
    en: 'Review both weekday and weekend routes for hospitals and transport.',
    zh: '医院与交通请同时确认平日与周末动线。',
    ko: '병원·교통은 평일·주말 동선을 모두 확인하세요.',
  },
] as const

export function SupportInfoPage() {
  const { locale, t } = useLocale()
  const [filter, setFilter] = useState<SupportFilter>('all')

  const articles = filter === 'all' ? mockSupportArticles : mockSupportArticles.filter((article) => article.category === filter)

  return (
    <div className="page-grid">
      <SectionCard title={t('migrationSupport')} description={t('migrationSupportDescription')}>
        <FilterBar
          value={filter}
          onChange={setFilter}
          options={[
            { value: 'all', label: pickUi(locale, { ja: 'すべて', en: 'All', zh: '全部', ko: '전체' }) },
            {
              value: 'administration',
              label: pickUi(locale, { ja: '行政', en: 'Administration', zh: '行政', ko: '행정' }),
            },
            { value: 'school', label: pickUi(locale, { ja: '学校', en: 'School', zh: '学校', ko: '학교' }) },
            { value: 'hospital', label: pickUi(locale, { ja: '病院', en: 'Hospital', zh: '医院', ko: '병원' }) },
            { value: 'transport', label: pickUi(locale, { ja: '交通', en: 'Transport', zh: '交通', ko: '교통' }) },
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
        title={pickUi(locale, { ja: 'クイックヒント', en: 'Quick tips', zh: '快速提示', ko: '퀵 팁' })}
        description={pickUi(locale, {
          ja: '移住準備を整理しやすくする短いメモです。',
          en: 'A few reminders that help organize relocation tasks.',
          zh: '帮助整理移居准备的简短提示。',
          ko: '이주 준비를 정리하기 쉬운 짧은 메모입니다.',
        })}
      >
        <div className="support-grid">
          {quickTipRows.map((row) => (
            <div key={row.ja} className="mini-card">
              <p>{pickUi(locale, { ja: row.ja, en: row.en, zh: row.zh, ko: row.ko })}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
