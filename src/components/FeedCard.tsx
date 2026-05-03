import { localizeFeedType, localizeText } from '../data/translations.ts'
import { useLocale } from '../hooks/useLocale.ts'
import type { FeedPost } from '../types/domain.ts'
import { MediaCover } from './MediaCover.tsx'

export function FeedCard({ post }: { post: FeedPost }) {
  const { locale } = useLocale()
  const title = localizeText(post.title, locale)
  const hasCover = Boolean(post.coverImageUrl)

  return (
    <article
      className={`mini-card${hasCover ? ' mini-card--with-cover mini-card--split' : ''}`}
    >
      {post.coverImageUrl ? (
        <div className="mini-card__split-media">
          <MediaCover
            src={post.coverImageUrl}
            alt={title}
            aspectRatio="1 / 1"
            className="mini-card__cover media-cover--split-thumb"
          />
        </div>
      ) : null}
      <div className={hasCover ? 'mini-card__body' : undefined}>
        <div className="mini-card--row">
          <strong>{title}</strong>
          <span className="badge badge--neutral">{localizeFeedType(post.type, locale)}</span>
        </div>
        <p>{localizeText(post.description, locale)}</p>
        <p>
          {post.area} / {post.createdAt}
        </p>
      </div>
    </article>
  )
}
