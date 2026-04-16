import { localizeText } from '../data/translations.ts'
import { useLocale } from '../hooks/useLocale.ts'
import type { QuestionPost } from '../types/domain.ts'

export function QuestionCard({ question }: { question: QuestionPost }) {
  const { locale, t } = useLocale()

  return (
    <article className="mini-card">
      <div className="mini-card--row">
        <strong>{localizeText(question.title, locale)}</strong>
        <span className={question.solved ? 'badge badge--success' : 'badge badge--neutral'}>
          {question.solved ? t('communityQuestionStatusSolved') : t('communityQuestionStatusOpen')}
        </span>
      </div>
      <p>{localizeText(question.body, locale)}</p>
      <p>
        {question.authorName} / {question.createdAt}
      </p>
      <div className="tag-row">
        {question.tags.map((tag) => (
          <span key={tag} className="info-tag">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  )
}
