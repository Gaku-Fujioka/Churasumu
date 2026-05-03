import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { SectionCard } from '../components/SectionCard.tsx'
import { useAuth } from '../hooks/useAuth.ts'
import { useLocale } from '../hooks/useLocale.ts'

export function LoginPage() {
  const { currentUser, users, loginAs } = useAuth()
  const { t } = useLocale()
  const navigate = useNavigate()
  const location = useLocation()

  if (currentUser) {
    return <Navigate to="/" replace />
  }

  const from = (location.state as { from?: { pathname?: string } } | undefined)?.from?.pathname

  return (
    <div className="page-grid">
      <SectionCard
        title={t('loginTitle')}
        description={t('loginDescription')}
      >
        <div className="stack">
          {users.map((user) => (
            <button
              key={user.id}
              type="button"
              className="select-card"
              onClick={() => {
                loginAs(user.id)
                navigate(from ?? '/')
              }}
            >
              <strong>{user.name}</strong>
              <span>
                {t('loginPersonaLabel')}: {user.persona} / {user.nationality} / {user.stayPurpose}
              </span>
            </button>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
