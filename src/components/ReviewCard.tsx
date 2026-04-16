import { localizeText } from '../data/translations.ts'
import { useLocale } from '../hooks/useLocale.ts'
import type { Review } from '../types/domain.ts'

export function ReviewCard({ review }: { review: Review }) {
  const { locale } = useLocale()

  return (
    <article className="mini-card">
      <div className="mini-card--row">
        <strong>{review.targetName}</strong>
        <span className="badge badge--warning">{'★'.repeat(review.rating)}</span>
      </div>
      <p>{localizeText(review.comment, locale)}</p>
      <p>
        {review.authorName} / {review.createdAt}
      </p>
    </article>
  )
}
