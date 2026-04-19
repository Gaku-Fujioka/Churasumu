import type { AppLocale } from '../types/domain.ts'

export const LOCALE_NATIVE_NAMES: Record<AppLocale, string> = {
  ja: '日本語',
  en: 'English',
  zh: '中文',
  ko: '한국어',
}

/** 折りたたみ時の表示: 現在のUI言語で「言語：」＋選択中の言語のネイティブ表記 */
export function languagePickerCollapsedSummary(uiLocale: AppLocale, activeLocale: AppLocale) {
  const prefixes: Record<AppLocale, string> = {
    ja: '言語：',
    en: 'Language: ',
    zh: '语言：',
    ko: '언어: ',
  }
  return `${prefixes[uiLocale]}${LOCALE_NATIVE_NAMES[activeLocale]}`
}
