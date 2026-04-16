import { Link } from 'react-router-dom'
import { CouponCard } from '../../components/CouponCard.tsx'
import { FeedCard } from '../../components/FeedCard.tsx'
import { QuestionCard } from '../../components/QuestionCard.tsx'
import { ResidentCard } from '../../components/ResidentCard.tsx'
import { ReviewCard } from '../../components/ReviewCard.tsx'
import { SectionCard } from '../../components/SectionCard.tsx'
import { WorkSpotCard } from '../../components/WorkSpotCard.tsx'
import { mockCoupons } from '../../data/mockCoupons.ts'
import { mockFeed } from '../../data/mockFeed.ts'
import { mockQuestions } from '../../data/mockQuestions.ts'
import { mockResidents } from '../../data/mockResidents.ts'
import { mockReviews } from '../../data/mockReviews.ts'
import { mockWorkSpots } from '../../data/mockWorkSpots.ts'
import { useLocale } from '../../hooks/useLocale.ts'

export function CommunityHubPage() {
  const { t } = useLocale()

  return (
    <div className="page-grid">
      <SectionCard title={t('communityHubTitle')} description={t('communityHubDescription')}>
        <div className="support-grid">
          <div className="mini-card">
            <strong>{t('communityResidents')}</strong>
            <p>{mockResidents.length} residents</p>
            <Link className="nav-link" to="/community/residents">
              {t('viewDetails')}
            </Link>
          </div>
          <div className="mini-card">
            <strong>{t('communityQuestions')}</strong>
            <p>{mockQuestions.length} questions</p>
            <Link className="nav-link" to="/community/questions">
              {t('viewDetails')}
            </Link>
          </div>
          <div className="mini-card">
            <strong>{t('communityFeed')}</strong>
            <p>{mockFeed.length} updates</p>
            <Link className="nav-link" to="/community/feed">
              {t('viewDetails')}
            </Link>
          </div>
        </div>
      </SectionCard>

      <SectionCard title={t('communityResidents')}>
        <div className="support-grid">
          {mockResidents.slice(0, 2).map((resident) => (
            <ResidentCard key={resident.id} resident={resident} />
          ))}
        </div>
      </SectionCard>

      <SectionCard title={t('communityQuestions')}>
        <div className="stack">
          {mockQuestions.slice(0, 2).map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
      </SectionCard>

      <SectionCard title={t('communityFeed')}>
        <div className="stack">
          {mockFeed.slice(0, 2).map((post) => (
            <FeedCard key={post.id} post={post} />
          ))}
        </div>
      </SectionCard>

      <SectionCard title={t('communityCoupons')}>
        <div className="stack">
          {mockCoupons.slice(0, 1).map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} onToggleSave={() => undefined} />
          ))}
        </div>
      </SectionCard>

      <SectionCard title={t('communityReviews')}>
        <div className="stack">
          {mockReviews.slice(0, 1).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </SectionCard>

      <SectionCard title={t('communityWorkSpots')}>
        <div className="stack">
          {mockWorkSpots.slice(0, 1).map((spot) => (
            <WorkSpotCard key={spot.id} workSpot={spot} />
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
