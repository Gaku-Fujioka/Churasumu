import type { MockUser } from '../types/domain.ts'

export const mockUsers: MockUser[] = [
  {
    id: 'user-migrant',
    name: '佐藤 美咲',
    role: 'resident',
    persona: 'migrant',
    nationality: '日本',
    language: 'ja',
    stayPurpose: '沖縄移住の下見と生活体験',
  },
  {
    id: 'user-nomad',
    name: '山城 健太',
    role: 'resident',
    persona: 'nomad',
    nationality: '日本',
    language: 'ja',
    stayPurpose: '1か月のワーケーション',
  },
  {
    id: 'user-international',
    name: 'Emma Lee',
    role: 'resident',
    persona: 'international',
    nationality: 'Singapore',
    language: 'en',
    stayPurpose: 'Mid-length stay in Okinawa (English-first support preferred)',
  },
  {
    id: 'user-admin-tamaki',
    name: '玉城 管理子',
    role: 'admin',
    persona: 'migrant',
    nationality: '日本',
    language: 'ja',
    stayPurpose: 'タマキホーム 運用・予約管理（管理者モック）',
  },
]
