import { NavLink, Outlet } from 'react-router-dom'
import { useLocale } from '../../hooks/useLocale.ts'

export function MigrationLayoutPage() {
  const { t } = useLocale()

  const tabs = [
    { to: '/migration', label: t('navMigration'), end: true },
    { to: '/migration/consultation', label: t('migrationConsultation') },
    { to: '/migration/simulator', label: t('migrationSimulator') },
    { to: '/migration/favorites', label: t('migrationFavorites') },
    { to: '/migration/rental-switch', label: t('migrationRentalSwitch') },
    { to: '/migration/support', label: t('migrationSupport') },
  ] as const

  return (
    <div className="page-grid">
      <div className="subtabs" aria-label="Migration sections">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={'end' in tab ? tab.end : false}
            className={({ isActive }) => (isActive ? 'subtab-pill subtab-pill--active' : 'subtab-pill')}
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  )
}

