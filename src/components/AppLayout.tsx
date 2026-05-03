import { Outlet } from 'react-router-dom'
import { AppHeader } from './AppHeader.tsx'
import { BottomNav } from './BottomNav.tsx'

export function AppLayout() {
  return (
    <div className="app-shell">
      <AppHeader />
      <main className="app-main">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
