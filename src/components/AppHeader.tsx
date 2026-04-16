import { NavLink } from 'react-router-dom'
import { useLocale } from '../hooks/useLocale.ts'
import { useAuth } from '../hooks/useAuth.ts'

export function AppHeader() {
  const { currentUser, logout } = useAuth()
  const { locale, setLocale, t } = useLocale()
  const canViewAdmin = currentUser?.role === 'admin'
  const residentLinks = [
    { to: '/onboarding', label: t('navOnboarding') },
    { to: '/stay', label: t('navStay') },
    { to: '/chat', label: t('navChat') },
    { to: '/community', label: t('navCommunity') },
  ]

  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">{t('appTagline')}</p>
        <h1>Churasumu</h1>
      </div>

      <nav className="app-nav" aria-label="Main navigation">
        {residentLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
          >
            {link.label}
          </NavLink>
        ))}
        {canViewAdmin ? (
          <NavLink
            to="/admin"
            className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
          >
            {t('navAdmin')}
          </NavLink>
        ) : null}
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
        <p>{currentUser ? `${currentUser.name} / ${currentUser.stayPurpose}` : t('loggedOut')}</p>
        <button type="button" className="ghost-button" onClick={logout}>
          {t('logout')}
        </button>
      </div>
    </header>
  )
}
