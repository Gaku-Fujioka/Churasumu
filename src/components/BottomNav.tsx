import { NavLink } from 'react-router-dom'
import { useLocale } from '../hooks/useLocale.ts'

function TabIcon({ name }: { name: 'stay' | 'community' | 'migration' | 'chat' }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  } as const

  switch (name) {
    case 'stay':
      return (
        <svg {...common}>
          <path
            d="M4 10.5l8-6 8 6V20a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 20v-9.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M10 21v-6a2 2 0 0 1 4 0v6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'community':
      return (
        <svg {...common}>
          <path
            d="M8.5 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm13 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M2 20c.8-3 3-4.5 5.5-4.5S12 17 12.8 20M11.2 20c.8-3 3-4.5 5.5-4.5S21.2 17 22 20"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'migration':
      return (
        <svg {...common}>
          <path
            d="M12 22s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      )
    case 'chat':
      return (
        <svg {...common}>
          <path
            d="M6 18.5c-1.7-1.2-2.8-3-2.8-5.1C3.2 9.3 7 6 12 6s8.8 3.3 8.8 7.4S17 20.8 12 20.8c-1.2 0-2.4-.2-3.4-.6L5.2 22l.8-3.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

export function BottomNav() {
  const { t } = useLocale()

  const tabs = [
    { to: '/stay', key: 'navStay' as const, icon: 'stay' as const },
    { to: '/community', key: 'navCommunity' as const, icon: 'community' as const },
    { to: '/migration', key: 'navMigration' as const, icon: 'migration' as const },
    { to: '/chat', key: 'navChat' as const, icon: 'chat' as const },
  ]

  return (
    <nav className="bottom-nav" aria-label="Primary tabs">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) => (isActive ? 'bottom-nav__item bottom-nav__item--active' : 'bottom-nav__item')}
        >
          <span className="bottom-nav__icon">
            <TabIcon name={tab.icon} />
          </span>
          <span className="bottom-nav__label">{t(tab.key)}</span>
        </NavLink>
      ))}
    </nav>
  )
}

