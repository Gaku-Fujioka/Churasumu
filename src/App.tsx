import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { AppLayout } from './components/AppLayout.tsx'
import { useAuth } from './hooks/useAuth.ts'
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage.tsx'
import { CommunityHubPage } from './pages/community/CommunityHubPage.tsx'
import { CouponsPage } from './pages/community/CouponsPage.tsx'
import { LocalFeedPage } from './pages/community/LocalFeedPage.tsx'
import { QuestionsPage } from './pages/community/QuestionsPage.tsx'
import { ResidentListPage } from './pages/community/ResidentListPage.tsx'
import { ReviewsPage } from './pages/community/ReviewsPage.tsx'
import { WorkSpotsPage } from './pages/community/WorkSpotsPage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { OnboardingPage } from './pages/onboarding/OnboardingPage.tsx'
import { ChatbotPage } from './pages/stay/ChatbotPage.tsx'
import { StayDashboardPage } from './pages/stay/StayDashboardPage.tsx'

function RequireAuth() {
  const { currentUser } = useAuth()
  const location = useLocation()

  if (!currentUser) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return (
    <Outlet />
  )
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<RequireAuth />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/stay" element={<StayDashboardPage />} />
          <Route path="/chat" element={<ChatbotPage />} />
          <Route path="/community" element={<CommunityHubPage />} />
          <Route path="/community/residents" element={<ResidentListPage />} />
          <Route path="/community/questions" element={<QuestionsPage />} />
          <Route path="/community/feed" element={<LocalFeedPage />} />
          <Route path="/community/coupons" element={<CouponsPage />} />
          <Route path="/community/reviews" element={<ReviewsPage />} />
          <Route path="/community/work-spots" element={<WorkSpotsPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
