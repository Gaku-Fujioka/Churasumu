import { useContext } from 'react'
import { PageTransitionContext } from '../context/PageTransitionContextObject.ts'

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext)
  if (!ctx) {
    throw new Error('usePageTransition must be used within PageTransitionProvider')
  }
  return ctx
}
