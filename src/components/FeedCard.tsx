import { localizeText } from '../data/translations.ts'
import { useLocale } from '../hooks/useLocale.ts'
import type { FeedPost } from '../types/domain.ts'

export function FeedCard({ post }: { post: FeedPost }) {
  const { locale } = useLocale()

  return (
    <article className="mini-card">
      <div className="mini-card--row">
        <strong>{localizeText(post.title, locale)}</strong>
        <span className="badge badge--neutral">{post.type}</span>
      </div>
      <p>{localizeText(post.description, locale)}</p>
      <p>
        {post.area} / {post.createdAt}
      </p>
    </article>
  )
}
