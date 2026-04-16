import { useState } from 'react'
import type { FormEvent } from 'react'
import { SectionCard } from '../../components/SectionCard.tsx'
import { localizeText } from '../../data/translations.ts'
import { mockFaq } from '../../data/mockFaq.ts'
import { useLocale } from '../../hooks/useLocale.ts'

interface Message {
  id: string
  role: 'user' | 'assistant'
  text: string
}

export function ChatbotPage() {
  const { locale, t } = useLocale()
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      role: 'assistant',
      text: t('chatbotGreeting'),
    },
  ])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!input.trim()) {
      return
    }

    const normalized = input.toLowerCase()
    const matchedFaq = mockFaq.find((faq) =>
      faq.keywords.some((keyword) => normalized.includes(keyword.toLowerCase())),
    )

    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), role: 'user', text: input },
      {
        id: crypto.randomUUID(),
        role: 'assistant',
        text: matchedFaq ? localizeText(matchedFaq.answer, locale) : t('chatbotFallback'),
      },
    ])
    setInput('')
  }

  return (
    <div className="page-grid">
      <SectionCard
        title={t('chatbotTitle')}
        description={t('chatbotDescription')}
      >
        <div className="stack">
          <div className="chat-window">
            {messages.map((message) => (
              <div
                key={message.id}
                className={message.role === 'assistant' ? 'chat-bubble chat-bubble--assistant' : 'chat-bubble'}
              >
                <strong>{message.role === 'assistant' ? 'Churasumu Bot' : 'You'}</strong>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <form className="action-row" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={t('chatbotPlaceholder')}
            />
            <button type="submit">{t('chatbotSend')}</button>
          </form>
        </div>
      </SectionCard>
    </div>
  )
}
