// lib/LanguageContext.tsx
'use client'

import { createContext, useContext, useState } from 'react'
import en, { type Translations } from '@/locales/en'
import zh from '@/locales/zh'

type Lang = 'en' | 'zh'

const locales: Record<Lang, Translations> = { en, zh }

interface LanguageContextValue {
  lang: Lang
  t: Translations
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  t: en,
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const toggleLang = () => setLang((l) => (l === 'en' ? 'zh' : 'en'))
  return (
    <LanguageContext.Provider value={{ lang, t: locales[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
