import { createContext } from 'react'
import type { MockUser } from '../types/domain.ts'

export interface AuthContextValue {
  currentUser: MockUser | null
  users: MockUser[]
  loginAs: (userId: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)
