import type { ResidentProfile } from '../types/domain.ts'

export const mockResidents: ResidentProfile[] = [
  {
    id: 'resident-1',
    userId: 'user-migrant',
    displayName: '佐藤 美咲',
    persona: 'migrant',
    nationality: '日本',
    language: 'ja',
    stayWindow: '2026/04/16 - 2026/06/15',
    workStyle: 'hybrid',
    bio: {
      ja: '沖縄移住を検討中。学校や行政サービス、暮らしやすいエリアを知りたいです。',
      en: 'Considering relocation to Okinawa and looking into schools, public services, and livable neighborhoods.',
    },
    interests: ['移住準備', '地域交流', 'ファミリー向け'],
    matchTags: ['migration', 'family', 'local-life'],
  },
  {
    id: 'resident-2',
    userId: 'user-nomad',
    displayName: '山城 健太',
    persona: 'nomad',
    nationality: '日本',
    language: 'ja',
    stayWindow: '2026/04/16 - 2026/05/16',
    workStyle: 'remote',
    bio: {
      ja: '日中は仕事、夜は地元イベントに参加したいノマドワーカーです。',
      en: 'Remote worker who wants productive days and local events in the evening.',
    },
    interests: ['コワーキング', 'カフェ', 'イベント'],
    matchTags: ['remote-work', 'coffee', 'events'],
  },
  {
    id: 'resident-3',
    userId: 'user-international',
    displayName: 'Emma Lee',
    persona: 'international',
    nationality: 'Singapore',
    language: 'en',
    stayWindow: '2026/04/10 - 2026/06/30',
    workStyle: 'explorer',
    bio: {
      ja: '沖縄での長期滞在を楽しみながら、英語で交流できるコミュニティを探しています。',
      en: 'Looking for English-friendly community spaces while enjoying a long stay in Okinawa.',
    },
    interests: ['英語交流', 'ビーチ', '地域文化'],
    matchTags: ['english', 'beach', 'culture'],
  },
]
