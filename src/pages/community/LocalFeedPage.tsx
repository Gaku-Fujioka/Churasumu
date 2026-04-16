import { useState } from 'react'
import { FeedCard } from '../../components/FeedCard.tsx'
import { FilterBar } from '../../components/FilterBar.tsx'
import { SectionCard } from '../../components/SectionCard.tsx'
import { mockFeed } from '../../data/mockFeed.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import type { FeedType } from '../../types/domain.ts'

type FeedFilter = 'all' | FeedType

export function LocalFeedPage() {
  const { t } = useLocale()
  const [filter, setFilter] = useState<FeedFilter>('all')

  const filtered = filter === 'all' ? mockFeed : mockFeed.filter((post) => post.type === filter)

  return (
    <div className="page-grid">
      <SectionCard title={t('communityFeed')} description={t('communityFeedDescription')}>
        <FilterBar
          value={filter}
          onChange={setFilter}
          options={[
            { value: 'all', label: t('viewDetails') === '詳細を見る' ? 'すべて' : 'All' },
            { value: 'event', label: t('viewDetails') === '詳細を見る' ? 'イベント' : 'Event' },
            { value: 'food', label: t('viewDetails') === '詳細を見る' ? '飲食' : 'Food' },
            { value: 'coworking', label: t('viewDetails') === '詳細を見る' ? 'コワーキング' : 'Coworking' },
            { value: 'news', label: t('viewDetails') === '詳細を見る' ? 'ニュース' : 'News' },
          ]}
        />
        <div className="stack">
          {filtered.map((post) => (
            <FeedCard key={post.id} post={post} />
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
