import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { PageTransitionOverlay } from '../components/PageTransitionOverlay.tsx'
import { PAGE_TRANSITION_MS } from '../lib/pageTransitionTimings.ts'
import { PageTransitionContext } from './PageTransitionContextObject.ts'
import type { PageTransitionPhase } from './PageTransitionContextObject.ts'

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false)
  const [phase, setPhase] = useState<PageTransitionPhase>('enter')
  const reducedMotionRef = useRef(false)

  useLayoutEffect(() => {
    reducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const runPageTransition = useCallback(async (options: { onCovered: () => void | Promise<void> }) => {
    if (reducedMotionRef.current) {
      await options.onCovered()
      return
    }

    setPhase('enter')
    setVisible(true)

    await new Promise<void>((r) => setTimeout(r, PAGE_TRANSITION_MS.enter))

    await options.onCovered()

    setPhase('exit')
    await new Promise<void>((r) => setTimeout(r, PAGE_TRANSITION_MS.exit))

    setVisible(false)
    setPhase('enter')
  }, [])

  const value = useMemo(() => ({ runPageTransition }), [runPageTransition])

  return (
    <PageTransitionContext.Provider value={value}>
      {children}
      {visible ? <PageTransitionOverlay phase={phase} /> : null}
    </PageTransitionContext.Provider>
  )
}
