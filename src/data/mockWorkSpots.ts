import type { WorkSpot } from '../types/domain.ts'
import { STOCK_PHOTOS } from './stockPhotos.ts'

export const mockWorkSpots: WorkSpot[] = [
  {
    id: 'work-1',
    name: 'Koza Desk Cafe',
    coverImageUrl: STOCK_PHOTOS.workKoza,
    area: '沖縄市',
    wifi: 'fast',
    power: true,
    quietness: 'medium',
    hours: '08:00 - 20:00',
    tags: ['cafe', 'remote-work'],
    note: {
      ja: '午前中は比較的静かで、オンライン会議もしやすいです。',
      en: 'Usually calm in the morning and suitable for online meetings.',
    },
  },
  {
    id: 'work-2',
    name: 'Harbor Coworking',
    coverImageUrl: STOCK_PHOTOS.workHarbor,
    area: '北谷町',
    wifi: 'stable',
    power: true,
    quietness: 'high',
    hours: '09:00 - 22:00',
    tags: ['coworking', 'english-friendly'],
    note: {
      ja: '英語対応スタッフがいて、長時間作業にも向いています。',
      en: 'English-friendly staff and comfortable for long sessions.',
    },
  },
]
