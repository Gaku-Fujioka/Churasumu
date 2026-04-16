import type { FeedPost } from '../types/domain.ts'

export const mockFeed: FeedPost[] = [
  {
    id: 'feed-1',
    type: 'food',
    title: { ja: '北谷の朝カフェ特集', en: 'Morning cafes in Chatan' },
    description: {
      ja: '朝から作業しやすいカフェを3件ピックアップしました。',
      en: 'Three cafes that are comfortable for morning work sessions.',
    },
    area: '北谷町',
    createdAt: '2026-04-15',
    likedByCurrentUser: true,
  },
  {
    id: 'feed-2',
    type: 'event',
    title: { ja: '今週の移住相談ミートアップ', en: 'This week’s relocation meetup' },
    description: {
      ja: '移住検討者向けの交流イベントが那覇で開催されます。',
      en: 'A meetup for relocation-minded residents will be held in Naha.',
    },
    area: '那覇市',
    createdAt: '2026-04-14',
    likedByCurrentUser: false,
  },
  {
    id: 'feed-3',
    type: 'coworking',
    title: { ja: '沖縄市の新しいコワーキング', en: 'New coworking space in Okinawa City' },
    description: {
      ja: '通話ブースと高速回線つきの新施設がオープンしました。',
      en: 'A new space has opened with call booths and fast internet.',
    },
    area: '沖縄市',
    createdAt: '2026-04-13',
    likedByCurrentUser: false,
  },
]
