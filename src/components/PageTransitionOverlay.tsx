import type { PageTransitionPhase } from '../context/PageTransitionContextObject.ts'
import './PageTransition.css'

type Props = {
  phase: PageTransitionPhase
}

export function PageTransitionOverlay({ phase }: Props) {
  const exit = phase === 'exit'
  const rootClass = [
    'page-transition-root',
    'page-transition-root--wave',
    exit ? 'page-transition-root--exit' : 'page-transition-root--enter',
  ].join(' ')

  return (
    <div className={rootClass} aria-hidden>
      <div className="page-transition-wave">
        <div className="page-transition-wave__stack">
          <svg
            className="page-transition-wave__svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className="page-transition-wave__path page-transition-wave__path--back"
              d="M0,180 C240,120 480,200 720,150 C960,100 1200,200 1440,130 L1440,320 L0,320 Z"
            />
          </svg>
          <svg
            className="page-transition-wave__svg page-transition-wave__svg--mid"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className="page-transition-wave__path page-transition-wave__path--mid"
              d="M0,200 C320,140 520,220 720,170 C920,120 1120,210 1440,150 L1440,320 L0,320 Z"
            />
          </svg>
          <svg
            className="page-transition-wave__svg page-transition-wave__svg--front"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className="page-transition-wave__path page-transition-wave__path--front"
              d="M0,220 C280,160 500,240 720,190 C940,140 1100,230 1440,170 L1440,320 L0,320 Z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
