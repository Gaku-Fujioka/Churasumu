import { createContext } from 'react'

export type PageTransitionPhase = 'enter' | 'exit'

export interface RunPageTransitionOptions {
  onCovered: () => void | Promise<void>
}

export interface PageTransitionContextValue {
  runPageTransition: (options: RunPageTransitionOptions) => Promise<void>
}

export const PageTransitionContext = createContext<PageTransitionContextValue | undefined>(undefined)
