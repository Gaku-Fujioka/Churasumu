import type { BookingSummary, Lead, SalesSummary, TroubleReport } from '../types/domain.ts'

export const mockBookings: BookingSummary[] = [
  {
    id: 'booking-1',
    residentName: '佐藤 美咲',
    propertyName: 'Naha Bay Studio',
    planName: 'スタンダード',
    contractStatus: 'active',
  },
  {
    id: 'booking-2',
    residentName: '山城 健太',
    propertyName: 'Koza Work Loft',
    planName: 'ショート',
    contractStatus: 'draft',
  },
  {
    id: 'booking-3',
    residentName: 'Alex Wong',
    propertyName: 'Chatan Seaside Flat',
    planName: 'ロング',
    contractStatus: 'completed',
  },
]

export const initialTroubleReports: TroubleReport[] = [
  {
    id: 'report-1',
    title: 'Wi-Fi が不安定',
    category: 'wifi',
    status: 'new',
    residentName: '山城 健太',
    propertyName: 'Koza Work Loft',
    createdAt: '2026-04-14 10:00',
  },
  {
    id: 'report-2',
    title: 'エアコンの効きが弱い',
    category: 'facility',
    status: 'in_progress',
    residentName: '佐藤 美咲',
    propertyName: 'Naha Bay Studio',
    createdAt: '2026-04-13 15:20',
  },
  {
    id: 'report-3',
    title: '共用部の清掃確認',
    category: 'cleaning',
    status: 'resolved',
    residentName: 'Emma Lee',
    propertyName: 'Chatan Seaside Flat',
    createdAt: '2026-04-12 09:30',
  },
]

export const salesSummary: SalesSummary[] = [
  { label: '月間売上', value: '¥4,820,000' },
  { label: '平均稼働率', value: '85.6%' },
  { label: '今月契約数', value: '14件' },
]

export const leads: Lead[] = [
  {
    id: 'lead-1',
    name: '玉城 彩',
    source: '移住相談予約',
    interest: '那覇市で子育て環境を確認したい',
  },
  {
    id: 'lead-2',
    name: 'Chris Tan',
    source: '物件ブックマーク',
    interest: '北谷エリアの英語対応物件',
  },
  {
    id: 'lead-3',
    name: '前田 遼',
    source: 'プラン診断完了',
    interest: '1か月ワーケーション向けプラン',
  },
]
