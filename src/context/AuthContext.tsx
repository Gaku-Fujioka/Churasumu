import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { mockUsers } from '../data/mockUsers.ts'
import type { MockUser } from '../types/domain.ts'
import { AuthContext } from './AuthContextObject.ts'
import type { AuthContextValue } from './AuthContextObject.ts'

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<MockUser | null>(null)

  const value = useMemo<AuthContextValue>(
    () => ({
      currentUser,
      users: mockUsers,
      loginAs: (userId: string) => {
        const nextUser = mockUsers.find((user) => user.id === userId) ?? null
        setCurrentUser(nextUser)
      },
      logout: () => setCurrentUser(null),
    }),
    [currentUser],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
