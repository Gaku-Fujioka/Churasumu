import { ENROLLMENT_STORAGE_VERSION, type EnrollmentSnapshot } from '../types/enrollment.ts'

const storageKey = (userId: string) => `churasumu.enrollment.v${ENROLLMENT_STORAGE_VERSION}:${userId}`

export function emptyEnrollmentSnapshot(userId: string): EnrollmentSnapshot {
  return {
    v: ENROLLMENT_STORAGE_VERSION,
    userId,
    selectedPlanId: '',
    selectedOptionIds: [],
    contractedPropertyId: null,
    hasViewedContract: false,
    isCheckoutComplete: false,
  }
}

export function loadEnrollmentSnapshot(userId: string): EnrollmentSnapshot | null {
  try {
    const raw = localStorage.getItem(storageKey(userId))
    if (!raw) {
      return null
    }
    const parsed = JSON.parse(raw) as EnrollmentSnapshot
    if (parsed.v !== ENROLLMENT_STORAGE_VERSION || parsed.userId !== userId) {
      return null
    }
    return parsed
  } catch {
    return null
  }
}

export function saveEnrollmentSnapshot(snapshot: EnrollmentSnapshot) {
  try {
    localStorage.setItem(storageKey(snapshot.userId), JSON.stringify(snapshot))
  } catch {
    // ignore quota / private mode
  }
}

export function removeEnrollmentSnapshot(userId: string) {
  try {
    localStorage.removeItem(storageKey(userId))
  } catch {
    // ignore
  }
}
