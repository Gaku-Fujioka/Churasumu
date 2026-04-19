import { createContext } from 'react'
import type { EnrollmentSnapshot } from '../types/enrollment.ts'

export interface EnrollmentContextValue {
  snapshot: EnrollmentSnapshot | null
  patchSnapshot: (partial: Partial<EnrollmentSnapshot>) => void
  cancelEnrollment: () => void
}

export const EnrollmentContext = createContext<EnrollmentContextValue | undefined>(undefined)
