export const ENROLLMENT_STORAGE_VERSION = 1 as const

/** ログインユーザー単位で localStorage に保存する申込・契約モック状態 */
export interface EnrollmentSnapshot {
  v: typeof ENROLLMENT_STORAGE_VERSION
  userId: string
  selectedPlanId: string
  selectedOptionIds: string[]
  contractedPropertyId: string | null
  hasViewedContract: boolean
  isCheckoutComplete: boolean
}
