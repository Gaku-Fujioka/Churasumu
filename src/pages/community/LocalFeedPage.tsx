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
      <SectionCard title={t('communityFeed')} description="Filter local updates by category.">
        <FilterBar
          value={filter}
          onChange={setFilter}
          options={[
            { value: 'all', label: 'All' },
            { value: 'event', label: 'Event' },
            { value: 'food', label: 'Food' },
            { value: 'coworking', label: 'Coworking' },
            { value: 'news', label: 'News' },
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
