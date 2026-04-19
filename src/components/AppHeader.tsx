import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { LOCALE_NATIVE_NAMES, languagePickerCollapsedSummary } from '../lib/languagePicker.ts'
import { useLocale } from '../hooks/useLocale.ts'
import { useAuth } from '../hooks/useAuth.ts'
import type { AppLocale } from '../types/domain.ts'

const localeOrder: AppLocale[] = ['ja', 'en', 'zh', 'ko']

export function AppHeader() {
  const { currentUser, logout } = useAuth()
  const { locale, setLocale, t } = useLocale()
  const languageDetailsRef = useRef<HTMLDetailsElement>(null)
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
        <details ref={languageDetailsRef} className="language-picker">
          <summary className="language-picker__summary">
            {languagePickerCollapsedSummary(locale, locale)}
          </summary>
          <div className="language-picker__panel">
            {localeOrder.map((code) => (
              <button
                key={code}
                type="button"
                className={locale === code ? 'choice-pill choice-pill--active' : 'choice-pill'}
                onClick={() => {
                  setLocale(code)
                  languageDetailsRef.current?.removeAttribute('open')
                }}
              >
                {LOCALE_NATIVE_NAMES[code]}
              </button>
            ))}
          </div>
        </details>
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
