import type { SupportArticle } from '../types/domain.ts'

export const mockSupportArticles: SupportArticle[] = [
  {
    id: 'support-1',
    category: 'administration',
    title: {
      ja: '住民票・各種行政手続き',
      en: 'Resident registration and public procedures',
    },
    summary: {
      ja: '転入届、国民健康保険、マイナンバー手続きの案内です。',
      en: 'Guidance for move-in notification, health insurance, and My Number procedures.',
    },
    contact: '那覇市役所 / 098-000-1000',
  },
  {
    id: 'support-2',
    category: 'school',
    title: {
      ja: '学校・保育園の情報',
      en: 'Schools and daycare information',
    },
    summary: {
      ja: '子育て世帯向けに、学校区と保育園相談窓口をまとめています。',
      en: 'School districts and daycare contact points for families.',
    },
    contact: '教育相談窓口 / 098-000-2000',
  },
  {
    id: 'support-3',
    category: 'hospital',
    title: {
      ja: '病院・クリニック案内',
      en: 'Hospitals and clinics',
    },
    summary: {
      ja: '主要な総合病院と夜間対応クリニックを掲載しています。',
      en: 'Main general hospitals and after-hours clinics.',
    },
    contact: '医療案内センター / 098-000-3000',
  },
  {
    id: 'support-4',
    category: 'transport',
    title: {
      ja: '交通・通勤手段ガイド',
      en: 'Transport and commuting guide',
    },
    summary: {
      ja: 'ゆいレール、バス、カーシェアの使い分けを案内します。',
      en: 'How to use monorail, bus, and car share options.',
    },
    contact: '交通案内 / 098-000-4000',
  },
]
