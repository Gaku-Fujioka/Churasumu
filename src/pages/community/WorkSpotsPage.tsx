import { SectionCard } from '../../components/SectionCard.tsx'
import { WorkSpotCard } from '../../components/WorkSpotCard.tsx'
import { mockWorkSpots } from '../../data/mockWorkSpots.ts'
import { useLocale } from '../../hooks/useLocale.ts'

export function WorkSpotsPage() {
  const { t } = useLocale()

  return (
    <div className="page-grid">
      <SectionCard title={t('communityWorkSpots')} description="Browse work-friendly cafes and coworking spaces shared by residents.">
        <div className="stack">
          {mockWorkSpots.map((spot) => (
            <WorkSpotCard key={spot.id} workSpot={spot} />
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
