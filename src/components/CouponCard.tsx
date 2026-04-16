import { localizeText } from '../data/translations.ts'
import { useLocale } from '../hooks/useLocale.ts'
import type { Coupon } from '../types/domain.ts'

export function CouponCard({
  coupon,
  onToggleSave,
}: {
  coupon: Coupon
  onToggleSave: (couponId: string) => void
}) {
  const { locale, t } = useLocale()

  return (
    <article className="mini-card">
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
    </article>
  )
}
