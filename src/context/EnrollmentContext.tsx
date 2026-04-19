import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import {
  emptyEnrollmentSnapshot,
  loadEnrollmentSnapshot,
  removeEnrollmentSnapshot,
  saveEnrollmentSnapshot,
} from '../lib/enrollmentPersistence.ts'
import { useAuth } from '../hooks/useAuth.ts'
import { ENROLLMENT_STORAGE_VERSION, type EnrollmentSnapshot } from '../types/enrollment.ts'
import { EnrollmentContext } from './EnrollmentContextObject.ts'

function mergeSnapshot(userId: string, prev: EnrollmentSnapshot | null, partial: Partial<EnrollmentSnapshot>) {
  const base = prev && prev.userId === userId ? prev : emptyEnrollmentSnapshot(userId)
  return { ...base, ...partial, userId, v: ENROLLMENT_STORAGE_VERSION }
}

export function EnrollmentProvider({ children }: { children: ReactNode }) {
  const { currentUser } = useAuth()
  const [snapshot, setSnapshot] = useState<EnrollmentSnapshot | null>(null)

  useLayoutEffect(() => {
    if (!currentUser) {
      setSnapshot(null)
      return
    }
    const loaded = loadEnrollmentSnapshot(currentUser.id)
    setSnapshot(loaded ?? emptyEnrollmentSnapshot(currentUser.id))
  }, [currentUser?.id])

  const patchSnapshot = useCallback(
    (partial: Partial<EnrollmentSnapshot>) => {
      if (!currentUser) {
        return
      }
      setSnapshot((prev) => {
        const next = mergeSnapshot(currentUser.id, prev, partial)
        saveEnrollmentSnapshot(next)
        return next
      })
    },
    [currentUser],
  )

  const cancelEnrollment = useCallback(() => {
    if (!currentUser) {
      return
    }
    const fresh = emptyEnrollmentSnapshot(currentUser.id)
    removeEnrollmentSnapshot(currentUser.id)
    setSnapshot(fresh)
  }, [currentUser])

  const value = useMemo(
    () => ({
      snapshot,
      patchSnapshot,
      cancelEnrollment,
    }),
    [snapshot, patchSnapshot, cancelEnrollment],
  )

  return <EnrollmentContext.Provider value={value}>{children}</EnrollmentContext.Provider>
}
