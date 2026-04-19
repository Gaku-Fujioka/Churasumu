import { NavLink } from 'react-router-dom'
import { useLocale } from '../hooks/useLocale.ts'
import { useAuth } from '../hooks/useAuth.ts'

export function AppHeader() {
  const { currentUser, logout } = useAuth()
  const { locale, setLocale, t } = useLocale()
  const isAdmin = currentUser?.role === 'admin'
  const residentLinks = [
    { to: '/onboarding', label: t('navOnboarding') },
    { to: '/stay', label: t('navStay') },
    { to: '/chat', label: t('navChat') },
    { to: '/community', label: t('navCommunity') },
    { to: '/migration', label: t('navMigration') },
  ]

  return (
    <header className="app-header">
      <div className="app-header__brand">
        <p className="eyebrow">{t('appTagline')}</p>
        <h1>Churasumu</h1>
      </div>

      <nav
        className="app-nav"
        aria-label={isAdmin ? 'Administrator navigation' : 'Main navigation'}
      >
        {isAdmin ? (
          <NavLink
            to="/admin"
            className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
          >
            {t('navAdmin')}
          </NavLink>
        ) : (
          residentLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))
        )}
      </nav>

      <div className="app-header__meta">
        <div className="action-row">
          <button type="button" className={locale === 'ja' ? 'choice-pill choice-pill--active' : 'choice-pill'} onClick={() => setLocale('ja')}>
            {t('languageJa')}
          </button>
          <button type="button" className={locale === 'en' ? 'choice-pill choice-pill--active' : 'choice-pill'} onClick={() => setLocale('en')}>
            {t('languageEn')}
          </button>
        </div>
        <p className="app-header__user-line">
          {currentUser ? `${currentUser.name} / ${currentUser.stayPurpose}` : t('loggedOut')}
        </p>
        <button type="button" className="ghost-button" onClick={logout}>
          {t('logout')}
        </button>
      </div>
    </header>
  )
}
