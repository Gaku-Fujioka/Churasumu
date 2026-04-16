import type { MigrationConsultationRequest } from '../types/domain.ts'

export const mockMigrationConsultations: MigrationConsultationRequest[] = [
  {
    id: 'consult-1',
    userName: '佐藤 美咲',
    topic: 'school',
    preferredDate: '2026-04-20 14:00',
    preferredArea: '那覇市',
    note: '子育てしやすいエリアと学校事情を知りたいです。',
    status: 'requested',
  },
  {
    id: 'consult-2',
    userName: 'Chris Tan',
    topic: 'housing',
    preferredDate: '2026-04-22 11:00',
    preferredArea: '北谷町',
    note: '英語対応の住宅購入相談を希望します。',
    status: 'confirmed',
  },
]
