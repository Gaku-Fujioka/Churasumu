import { SectionCard } from '../../components/SectionCard.tsx'
import { ResidentCard } from '../../components/ResidentCard.tsx'
import { mockResidents } from '../../data/mockResidents.ts'
import { useAuth } from '../../hooks/useAuth.ts'
import { useLocale } from '../../hooks/useLocale.ts'

export function ResidentListPage() {
  const { currentUser } = useAuth()
  const { t } = useLocale()

  const residents = mockResidents.map((resident) => ({
    ...resident,
    isSuggested: currentUser ? resident.matchTags.some((tag) => currentUser.stayPurpose.toLowerCase().includes(tag)) : false,
  }))

  return (
    <div className="page-grid">
      <SectionCard title={t('communityResidents')} description="Interests and stay style help surface simple resident matches.">
        <div className="support-grid">
          {residents.map((resident) => (
            <div key={resident.id} className="stack">
              <ResidentCard resident={resident} />
              {resident.isSuggested ? <p className="inline-note">Suggested match</p> : null}
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
