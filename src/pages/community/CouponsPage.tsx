import { useState } from 'react'
import { CouponCard } from '../../components/CouponCard.tsx'
import { SectionCard } from '../../components/SectionCard.tsx'
import { mockCoupons } from '../../data/mockCoupons.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import type { Coupon } from '../../types/domain.ts'

export function CouponsPage() {
  const { t } = useLocale()
  const [coupons, setCoupons] = useState<Coupon[]>(mockCoupons)

  return (
    <div className="page-grid">
      <SectionCard title={t('communityCoupons')} description="Save mock coupons from local partner businesses.">
        <div className="stack">
          {coupons.map((coupon) => (
            <CouponCard
              key={coupon.id}
              coupon={coupon}
              onToggleSave={(couponId) =>
                setCoupons((current) =>
                  current.map((item) => (item.id === couponId ? { ...item, saved: !item.saved } : item)),
                )
              }
            />
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
