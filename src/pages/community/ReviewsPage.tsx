import { useState } from 'react'
import { ReviewCard } from '../../components/ReviewCard.tsx'
import { SectionCard } from '../../components/SectionCard.tsx'
import { mockReviews } from '../../data/mockReviews.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import type { Review, ReviewTargetType } from '../../types/domain.ts'

export function ReviewsPage() {
  const { t } = useLocale()
  const [reviews, setReviews] = useState<Review[]>(mockReviews)
  const [targetName, setTargetName] = useState('')
  const [comment, setComment] = useState('')
  const [targetType, setTargetType] = useState<ReviewTargetType>('property')

  return (
    <div className="page-grid">
      <SectionCard title={t('communityReviews')} description="Submit and browse reviews for places used during the stay.">
        <form
          className="stack"
          onSubmit={(event) => {
            event.preventDefault()
            if (!targetName.trim() || !comment.trim()) {
              return
            }
            setReviews((current) => [
              {
                id: crypto.randomUUID(),
                authorName: 'You',
                targetType,
                targetId: crypto.randomUUID(),
                targetName,
                rating: 4,
                comment: { ja: comment, en: comment },
                createdAt: 'now',
              },
              ...current,
            ])
            setTargetName('')
            setComment('')
          }}
        >
          <label className="field">
            <span>{t('postReview')}</span>
            <input value={targetName} onChange={(event) => setTargetName(event.target.value)} />
          </label>
          <label className="field">
            <span>Target type</span>
            <select value={targetType} onChange={(event) => setTargetType(event.target.value as ReviewTargetType)}>
              <option value="property">property</option>
              <option value="shop">shop</option>
              <option value="workSpot">workSpot</option>
            </select>
          </label>
          <label className="field">
            <span>Comment</span>
            <textarea rows={3} value={comment} onChange={(event) => setComment(event.target.value)} />
          </label>
          <button type="submit">{t('postReview')}</button>
        </form>
      </SectionCard>

      <SectionCard title={t('communityReviews')}>
        <div className="stack">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
