import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { AppLayout } from './components/AppLayout.tsx'
import { useAuth } from './hooks/useAuth.ts'
import { useEnrollment } from './hooks/useEnrollment.ts'
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage.tsx'
import { CommunityHubPage } from './pages/community/CommunityHubPage.tsx'
import { CommunityLayoutPage } from './pages/community/CommunityLayoutPage.tsx'
import { CouponsPage } from './pages/community/CouponsPage.tsx'
import { LocalFeedPage } from './pages/community/LocalFeedPage.tsx'
import { QuestionsPage } from './pages/community/QuestionsPage.tsx'
import { ResidentListPage } from './pages/community/ResidentListPage.tsx'
import { ReviewsPage } from './pages/community/ReviewsPage.tsx'
import { WorkSpotsPage } from './pages/community/WorkSpotsPage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { ConsultationPage } from './pages/migration/ConsultationPage.tsx'
import { FavoritePropertiesPage } from './pages/migration/FavoritePropertiesPage.tsx'
import { MigrationHubPage } from './pages/migration/MigrationHubPage.tsx'
import { MigrationLayoutPage } from './pages/migration/MigrationLayoutPage.tsx'
import { PurchaseSimulatorPage } from './pages/migration/PurchaseSimulatorPage.tsx'
import { RentalSwitchPage } from './pages/migration/RentalSwitchPage.tsx'
import { SupportInfoPage } from './pages/migration/SupportInfoPage.tsx'
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

function HomeRedirect() {
  const { currentUser } = useAuth()
  const { snapshot } = useEnrollment()

  if (currentUser?.role === 'admin') {
    return <Navigate to="/admin" replace />
  }

  const hasCompletedOnboarding = Boolean(snapshot?.hasViewedContract && snapshot?.isCheckoutComplete)
  return <Navigate to={hasCompletedOnboarding ? '/stay' : '/onboarding'} replace />
}

function ResidentOnly() {
  const { currentUser } = useAuth()

  if (currentUser?.role === 'admin') {
    return <Navigate to="/admin" replace />
  }

  return <Outlet />
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<RequireAuth />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomeRedirect />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route element={<ResidentOnly />}>
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/stay" element={<StayDashboardPage />} />
            <Route path="/chat" element={<ChatbotPage />} />
            <Route path="/community" element={<CommunityLayoutPage />}>
              <Route index element={<CommunityHubPage />} />
              <Route path="residents" element={<ResidentListPage />} />
              <Route path="questions" element={<QuestionsPage />} />
              <Route path="feed" element={<LocalFeedPage />} />
              <Route path="coupons" element={<CouponsPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="work-spots" element={<WorkSpotsPage />} />
            </Route>
            <Route path="/migration" element={<MigrationLayoutPage />}>
              <Route index element={<MigrationHubPage />} />
              <Route path="consultation" element={<ConsultationPage />} />
              <Route path="simulator" element={<PurchaseSimulatorPage />} />
              <Route path="favorites" element={<FavoritePropertiesPage />} />
              <Route path="rental-switch" element={<RentalSwitchPage />} />
              <Route path="support" element={<SupportInfoPage />} />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
