import { createContext } from 'react'
import type { TranslationKey } from '../data/translations.ts'
import type { AppLocale } from '../types/domain.ts'

export interface LocaleContextValue {
  locale: AppLocale
  setLocale: (locale: AppLocale) => void
  t: (key: TranslationKey) => string
}

export const LocaleContext = createContext<LocaleContextValue | undefined>(undefined)
