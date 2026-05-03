import { Link } from 'react-router-dom'
import { SectionCard } from '../../components/SectionCard.tsx'
import { useLocale } from '../../hooks/useLocale.ts'

export function MigrationHubPage() {
  const { t } = useLocale()

  const entries = [
    { to: '/migration/consultation', title: t('migrationConsultation') },
    { to: '/migration/simulator', title: t('migrationSimulator') },
    { to: '/migration/favorites', title: t('migrationFavorites') },
    { to: '/migration/rental-switch', title: t('migrationRentalSwitch') },
    { to: '/migration/support', title: t('migrationSupport') },
  ]

  return (
    <>
      <SectionCard title={t('migrationHubTitle')} description={t('migrationHubDescription')}>
        <div className="support-grid">
          {entries.map((entry) => (
            <div key={entry.to} className="mini-card">
              <strong>{entry.title}</strong>
              <Link className="nav-link" to={entry.to}>
                {t('viewDetails')}
              </Link>
            </div>
          ))}
        </div>
      </SectionCard>
    </>
  )
}
