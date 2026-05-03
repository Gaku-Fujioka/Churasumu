import { NavLink, Outlet } from 'react-router-dom'
import { useLocale } from '../../hooks/useLocale.ts'

export function CommunityLayoutPage() {
  const { t } = useLocale()

  const tabs = [
    { to: '/community', label: t('navCommunity'), end: true },
    { to: '/community/residents', label: t('communityResidents') },
    { to: '/community/questions', label: t('communityQuestions') },
    { to: '/community/feed', label: t('communityFeed') },
    { to: '/community/coupons', label: t('communityCoupons') },
    { to: '/community/reviews', label: t('communityReviews') },
    { to: '/community/work-spots', label: t('communityWorkSpots') },
  ] as const

  return (
    <div className="page-grid">
      <div className="subtabs" aria-label="Community sections">
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

