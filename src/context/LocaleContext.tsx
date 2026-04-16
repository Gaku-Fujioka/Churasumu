import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { translate } from '../data/translations.ts'
import { useAuth } from '../hooks/useAuth.ts'
import { LocaleContext } from './LocaleContextObject.ts'
import type { LocaleContextValue } from './LocaleContextObject.ts'
import type { AppLocale } from '../types/domain.ts'

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { currentUser } = useAuth()
  const [manualLocale, setManualLocale] = useState<AppLocale | null>(null)
  const locale = manualLocale ?? currentUser?.language ?? 'ja'

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale: setManualLocale,
      t: (key) => translate(locale, key),
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
