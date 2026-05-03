import { localizeText } from '../data/translations.ts'
import { useLocale } from '../hooks/useLocale.ts'
import type { Coupon } from '../types/domain.ts'
import { MediaCover } from './MediaCover.tsx'

export function CouponCard({
  coupon,
  onToggleSave,
}: {
  coupon: Coupon
  onToggleSave: (couponId: string) => void
}) {
  const { locale, t } = useLocale()
  const hasCover = Boolean(coupon.coverImageUrl)

  return (
    <article
      className={`mini-card${hasCover ? ' mini-card--with-cover mini-card--split' : ''}`}
    >
      {coupon.coverImageUrl ? (
        <div className="mini-card__split-media">
          <MediaCover
            src={coupon.coverImageUrl}
            alt={coupon.shopName}
            aspectRatio="1 / 1"
            className="mini-card__cover media-cover--split-thumb"
          />
        </div>
      ) : null}
      <div className={hasCover ? 'mini-card__body' : undefined}>
        <div className="mini-card--row">
          <strong>{coupon.shopName}</strong>
          <button type="button" onClick={() => onToggleSave(coupon.id)}>
            {coupon.saved ? t('saved') : t('save')}
          </button>
        </div>
        <p>{localizeText(coupon.discountLabel, locale)}</p>
        <p>{localizeText(coupon.description, locale)}</p>
        <p>
          {coupon.area} / {coupon.expiresAt}
        </p>
      </div>
    </article>
  )
}
