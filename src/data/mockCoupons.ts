import type { Coupon } from '../types/domain.ts'
import { STOCK_PHOTOS } from './stockPhotos.ts'

export const mockCoupons: Coupon[] = [
  {
    id: 'coupon-1',
    shopName: 'Seaside Coffee',
    coverImageUrl: STOCK_PHOTOS.couponCoffee,
    category: 'food',
    area: '北谷町',
    discountLabel: { ja: 'ドリンク10%OFF', en: '10% off drinks' },
    description: {
      ja: 'ワーケーション利用者向けの平日限定クーポンです。',
      en: 'Weekday-only coupon for workation guests.',
    },
    expiresAt: '2026-05-31',
    eligibility: { ja: '滞在者アカウント提示', en: 'Show your resident account' },
    saved: true,
  },
  {
    id: 'coupon-2',
    shopName: 'Naha Bike Share',
    coverImageUrl: STOCK_PHOTOS.couponBike,
    category: 'activity',
    area: '那覇市',
    discountLabel: { ja: '初回利用30分無料', en: 'First 30 minutes free' },
    description: {
      ja: '市内回遊を試しやすい短時間クーポンです。',
      en: 'A short-use coupon to help you explore the city.',
    },
    expiresAt: '2026-06-15',
    eligibility: { ja: '初回利用のみ', en: 'First-time users only' },
    saved: false,
  },
]
