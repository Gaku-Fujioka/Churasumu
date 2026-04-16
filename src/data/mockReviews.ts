import type { Review } from '../types/domain.ts'

export const mockReviews: Review[] = [
  {
    id: 'review-1',
    authorName: '山城 健太',
    targetType: 'property',
    targetId: 'prop-okinawa-city',
    targetName: 'Koza Work Loft',
    rating: 4,
    comment: {
      ja: 'デスクが広く、平日の作業環境がとても良かったです。',
      en: 'The desk was spacious and made weekday work very comfortable.',
    },
    createdAt: '2026-04-12',
  },
  {
    id: 'review-2',
    authorName: 'Emma Lee',
    targetType: 'workSpot',
    targetId: 'work-2',
    targetName: 'Harbor Coworking',
    rating: 5,
    comment: {
      ja: '英語でも利用しやすく、スタッフが親切でした。',
      en: 'Very easy to use in English and the staff were helpful.',
    },
    createdAt: '2026-04-11',
  },
]
