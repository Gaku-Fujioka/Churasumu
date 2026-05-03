import { Link } from 'react-router-dom'
import { MediaCover } from '../../components/MediaCover.tsx'
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
import { STOCK_PHOTOS } from '../../data/stockPhotos.ts'
import { useLocale } from '../../hooks/useLocale.ts'

export function CommunityHubPage() {
  const { t } = useLocale()

  return (
    <div className="page-grid page-grid--rhythm">
      <div className="community-hub-intro-band community-hub-intro-band--split">
        <div className="community-hub-intro-band__figure">
          <MediaCover
            src={STOCK_PHOTOS.communityHubHero}
            alt={t('communityHubCoverAlt')}
            aspectRatio="4 / 3"
            className="media-cover--community-intro"
            loading="eager"
          />
        </div>
        <header className="community-hub-lede community-hub-lede--in-band">
          <p className="eyebrow">{t('communityHubKicker')}</p>
          <h1 className="community-hub-lede__title">{t('communityHubTitle')}</h1>
          <p className="community-hub-lede__desc">{t('communityHubDescription')}</p>
        </header>
      </div>

      <nav className="community-hub-priority-grid" aria-label={t('communityHubPriorityNavAria')}>
        <Link className="community-hub-priority-tile community-hub-priority-tile--rose" to="/community/residents">
          <span>{t('communityResidents')}</span>
          <p className="community-hub-priority-tile__meta">{mockResidents.length} members</p>
        </Link>
        <Link className="community-hub-priority-tile community-hub-priority-tile--sky" to="/community/questions">
          <span>{t('communityQuestions')}</span>
          <p className="community-hub-priority-tile__meta">{mockQuestions.length} threads</p>
        </Link>
        <Link className="community-hub-priority-tile community-hub-priority-tile--amber" to="/community/feed">
          <span>{t('communityFeed')}</span>
          <p className="community-hub-priority-tile__meta">{mockFeed.length} updates</p>
        </Link>
      </nav>

      <SectionCard tone="spotlight" title={t('communityHubPreviewSectionTitle')}>
        <div className="support-grid">
          <div className="stack community-hub-spotlight-block">
            <p className="eyebrow">
              {t('communityResidents')}
            </p>
            <div className="support-grid">
              {mockResidents.slice(0, 2).map((resident) => (
                <ResidentCard key={resident.id} resident={resident} />
              ))}
            </div>
            <Link className="nav-link" to="/community/residents">
              {t('viewDetails')}
            </Link>
          </div>
          <div className="stack community-hub-spotlight-block">
            <p className="eyebrow">
              {t('communityQuestions')}
            </p>
            <div className="stack">
              {mockQuestions.slice(0, 2).map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
            </div>
            <Link className="nav-link" to="/community/questions">
              {t('viewDetails')}
            </Link>
          </div>
        </div>
      </SectionCard>

      <div className="page-section-cluster">
        <SectionCard tone="quiet" title={t('communityFeed')}>
          <div className="stack">
            {mockFeed.slice(0, 2).map((post) => (
              <FeedCard key={post.id} post={post} />
            ))}
            <Link className="nav-link" to="/community/feed">
              {t('viewDetails')}
            </Link>
          </div>
        </SectionCard>

        <SectionCard tone="quiet" title={t('communityCoupons')}>
          <div className="stack">
            {mockCoupons.slice(0, 1).map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} onToggleSave={() => undefined} />
            ))}
            <Link className="nav-link" to="/community/coupons">
              {t('viewDetails')}
            </Link>
          </div>
        </SectionCard>
      </div>

      <div className="page-section-cluster page-rhythm-loose">
        <SectionCard tone="quiet" title={t('communityReviews')}>
          <div className="stack">
            {mockReviews.slice(0, 1).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
            <Link className="nav-link" to="/community/reviews">
              {t('viewDetails')}
            </Link>
          </div>
        </SectionCard>

        <SectionCard tone="quiet" title={t('communityWorkSpots')}>
          <div className="stack">
            {mockWorkSpots.slice(0, 1).map((spot) => (
              <WorkSpotCard key={spot.id} workSpot={spot} />
            ))}
            <Link className="nav-link" to="/community/work-spots">
              {t('viewDetails')}
            </Link>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
