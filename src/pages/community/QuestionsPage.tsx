import { useState } from 'react'
import { QuestionCard } from '../../components/QuestionCard.tsx'
import { SectionCard } from '../../components/SectionCard.tsx'
import { localizeText } from '../../data/translations.ts'
import { mockQuestions } from '../../data/mockQuestions.ts'
import { useLocale } from '../../hooks/useLocale.ts'
import type { QuestionPost } from '../../types/domain.ts'

export function QuestionsPage() {
  const { locale, t } = useLocale()
  const [questions, setQuestions] = useState<QuestionPost[]>(mockQuestions)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  return (
    <div className="page-grid">
      <SectionCard title={t('communityQuestions')} description={t('communityQuestionsDescription')}>
        <form
          className="stack"
          onSubmit={(event) => {
            event.preventDefault()
            if (!title.trim() || !body.trim()) {
              return
            }

            setQuestions((current) => [
              {
                id: crypto.randomUUID(),
                authorId: 'current-user',
                authorName: locale === 'ja' ? 'あなた' : 'You',
                title: { ja: title, en: title },
                body: { ja: body, en: body },
                tags: [locale === 'ja' ? '新着' : 'new'],
                createdAt: locale === 'ja' ? 'たった今' : 'now',
                solved: false,
                replies: [],
              },
              ...current,
            ])
            setTitle('')
            setBody('')
          }}
        >
          <label className="field">
            <span>{t('postQuestion')}</span>
            <input value={title} onChange={(event) => setTitle(event.target.value)} />
          </label>
          <label className="field">
            <span>{t('communityQuestionDetail')}</span>
            <textarea rows={4} value={body} onChange={(event) => setBody(event.target.value)} />
          </label>
          <button type="submit">{t('postQuestion')}</button>
        </form>
      </SectionCard>

      <SectionCard title={t('communityQuestions')}>
        <div className="stack">
          {questions.map((question) => (
            <div key={question.id} className="stack">
              <QuestionCard question={question} />
              {question.replies.map((reply) => (
                <div key={reply.id} className="chat-bubble chat-bubble--assistant">
                  <strong>{reply.authorName}</strong>
                  <p>{localizeText(reply.body, locale)}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
