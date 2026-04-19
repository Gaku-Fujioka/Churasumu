import type { AppLocale } from '../types/domain.ts'

/** 画面内の短文（messages 未登録）用の4言語切替。zh/ko 未指定時は英語へフォールバック */
export function pickUi(locale: AppLocale, row: { ja: string; en: string; zh?: string; ko?: string }) {
  switch (locale) {
    case 'ja':
      return row.ja
    case 'en':
      return row.en
    case 'zh':
      return row.zh ?? row.en
    case 'ko':
      return row.ko ?? row.en
    default:
      return row.en
  }
}
