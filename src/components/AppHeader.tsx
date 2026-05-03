import { useMemo, useRef } from 'react'
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

  const userLabel = useMemo(() => {
    if (!currentUser) {
      return t('loggedOut')
    }
    return `${currentUser.name} / ${currentUser.stayPurpose}`
  }, [currentUser, t])

  return (
    <header className="app-header">
      <div className="app-header__brand">
        <p className="eyebrow">{t('appTagline')}</p>
        <NavLink to="/" className="app-header__title">
          Churasumu
        </NavLink>
      </div>

      <div className="app-header__right">
        <details ref={languageDetailsRef} className="account-menu">
          <summary className="account-menu__summary" aria-label="Account menu">
            <span className="account-menu__avatar" aria-hidden="true">
              {currentUser?.name?.slice(0, 1).toUpperCase() ?? 'U'}
            </span>
          </summary>
          <div className="account-menu__panel">
            <p className="account-menu__user">{userLabel}</p>
            {currentUser?.role === 'admin' ? (
              <NavLink to="/admin" className="account-menu__link">
                {t('navAdmin')}
              </NavLink>
            ) : (
              <NavLink to="/onboarding" className="account-menu__link">
                {t('navOnboarding')}
              </NavLink>
            )}

            <div className="account-menu__divider" />

            <p className="account-menu__section">{languagePickerCollapsedSummary(locale, locale)}</p>
            <div className="account-menu__languages">
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

            <div className="account-menu__divider" />

            <button type="button" className="ghost-button account-menu__logout" onClick={logout}>
              {t('logout')}
            </button>
          </div>
        </details>
      </div>
    </header>
  )
}
