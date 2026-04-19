import { useContext } from 'react'
import { EnrollmentContext } from '../context/EnrollmentContextObject.ts'

export function useEnrollment() {
  const value = useContext(EnrollmentContext)
  if (!value) {
    throw new Error('useEnrollment must be used within EnrollmentProvider')
  }
  return value
}
