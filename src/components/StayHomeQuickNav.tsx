import { Link, NavLink } from 'react-router-dom'
import { useLocale } from '../hooks/useLocale.ts'

function IconHouse() {
  return (
    <svg className="stay-home-quick-nav__deco" viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M12 36L40 14l28 22v30a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V36Z"
        fill="url(#shq-house)"
        opacity="0.95"
      />
      <rect x="32" y="44" width="16" height="18" rx="1" fill="#fff" fillOpacity="0.9" />
      <defs>
        <linearGradient id="shq-house" x1="12" y1="14" x2="64" y2="64">
          <stop stopColor="#f472b6" />
          <stop offset="1" stopColor="#e11d48" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function IconPeople() {
  return (
    <svg className="stay-home-quick-nav__deco" viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="28" cy="30" r="10" fill="#a78bfa" />
      <path
        d="M12 64c0-8 7-14 16-14s16 6 16 14H12Z"
        fill="#7c3aed"
      />
      <circle cx="52" cy="32" r="8" fill="#c4b5fd" />
      <path
        d="M40 64c0-6 5-11 12-11s12 5 12 11H40Z"
        fill="#6d28d9"
      />
    </svg>
  )
}

function IconMap() {
  return (
    <svg className="stay-home-quick-nav__deco" viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M20 18l12 4 16-6 12 4v48l-16-5-16 5-12-4V18Z"
        fill="url(#shq-map)"
        stroke="#0ea5e9"
        strokeWidth="1.5"
      />
      <circle cx="40" cy="36" r="5" fill="#f97316" />
      <defs>
        <linearGradient id="shq-map" x1="20" y1="16" x2="56" y2="64">
          <stop stopColor="#7dd3fc" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function IconChat() {
  return (
    <svg className="stay-home-quick-nav__deco" viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M16 24c0-4 3-7 7-7h36c4 0 7 3 7 7v20c0 4-3 7-7 7H32l-12 8V24Z"
        fill="url(#shq-chat)"
      />
      <path d="M28 32h24M28 40h16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="shq-chat" x1="16" y1="17" x2="64" y2="56">
          <stop stopColor="#fcd34d" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function IconCoupon() {
  return (
    <svg className="stay-home-quick-nav__deco" viewBox="0 0 80 80" fill="none" aria-hidden>
      <rect x="14" y="22" width="52" height="38" rx="6" fill="url(#shq-coupon)" />
      <circle cx="40" cy="41" r="10" fill="#fff" fillOpacity="0.35" />
      <path d="M40 35v12M34 41h12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="shq-coupon" x1="14" y1="22" x2="66" y2="60">
          <stop stopColor="#86efac" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function IconStripCar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 14l2-5h12l2 5v3H4v-3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="17" r="1.6" fill="currentColor" />
      <circle cx="16" cy="17" r="1.6" fill="currentColor" />
    </svg>
  )
}

function IconStripHeart() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 19s-6.5-4.35-6.5-9A4 4 0 0 1 12 8a4 4 0 0 1 6.5 2 4 4 0 0 1-6.5 9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconStripNews() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 4h12v16H6V4Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 8h6M9 12h10M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconStripStar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 4l2 5 5 .5-4 3 1.5 5L12 15l-4.5 2.5L9 12 5 9.5 10 9l2-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconStripDesk() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 10h14v8H5v-8Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 18v3M15 18v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function IconStripLife() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 8v8M9 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function StayHomeQuickNav() {
  const { t } = useLocale()

  const strip = [
    { to: '/migration/consultation', label: t('stayHomeStripConsult'), icon: IconStripCar },
    { to: '/migration/favorites', label: t('stayHomeStripFavorites'), icon: IconStripHeart },
    { to: '/community/feed', label: t('stayHomeStripFeed'), icon: IconStripNews },
    { to: '/community/reviews', label: t('stayHomeStripReviews'), icon: IconStripStar },
    { to: '/community/work-spots', label: t('stayHomeStripWorkSpots'), icon: IconStripDesk },
    { to: '/migration/support', label: t('stayHomeStripSupport'), icon: IconStripLife },
  ]

  return (
    <section className="stay-home-quick-nav" aria-label={t('stayHomeQuickNavAria')}>
      <div className="stay-home-quick-nav__grid">
        <NavLink
          to="/stay"
          end
          className={({ isActive }) =>
            `stay-home-quick-nav__tile stay-home-quick-nav__tile--lg stay-home-quick-nav__tile--rose ${isActive ? 'stay-home-quick-nav__tile--active' : ''}`
          }
        >
          <span className="stay-home-quick-nav__label">{t('stayHomeQuickStay')}</span>
          <IconHouse />
        </NavLink>
        <NavLink
          to="/community"
          className={({ isActive }) =>
            `stay-home-quick-nav__tile stay-home-quick-nav__tile--lg stay-home-quick-nav__tile--violet ${isActive ? 'stay-home-quick-nav__tile--active' : ''}`
          }
        >
          <span className="stay-home-quick-nav__label">{t('stayHomeQuickCommunity')}</span>
          <IconPeople />
        </NavLink>
        <Link
          className="stay-home-quick-nav__tile stay-home-quick-nav__tile--sm stay-home-quick-nav__tile--sky"
          to="/migration"
        >
          <span className="stay-home-quick-nav__label">{t('stayHomeQuickMigration')}</span>
          <IconMap />
        </Link>
        <Link className="stay-home-quick-nav__tile stay-home-quick-nav__tile--sm stay-home-quick-nav__tile--amber" to="/chat">
          <span className="stay-home-quick-nav__label">{t('stayHomeQuickChat')}</span>
          <IconChat />
        </Link>
        <Link
          className="stay-home-quick-nav__tile stay-home-quick-nav__tile--sm stay-home-quick-nav__tile--mint"
          to="/community/coupons"
        >
          <span className="stay-home-quick-nav__label">{t('stayHomeQuickCoupons')}</span>
          <IconCoupon />
        </Link>
      </div>

      <div className="stay-home-quick-nav__strip-wrap">
        <div className="stay-home-quick-nav__strip" role="list">
          {strip.map((item) => {
            const Ico = item.icon
            return (
              <Link key={item.to} className="stay-home-quick-nav__strip-item" to={item.to} role="listitem">
                <span className="stay-home-quick-nav__strip-icon" aria-hidden>
                  <Ico />
                </span>
                <span className="stay-home-quick-nav__strip-label">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
