type BadgeTone = 'neutral' | 'success' | 'warning'

const toneClassMap: Record<BadgeTone, string> = {
  neutral: 'badge badge--neutral',
  success: 'badge badge--success',
  warning: 'badge badge--warning',
}

export function StatusBadge({ label, tone = 'neutral' }: { label: string; tone?: BadgeTone }) {
  return <span className={toneClassMap[tone]}>{label}</span>
}
