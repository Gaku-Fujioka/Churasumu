import type { CSSProperties } from 'react'

type Props = {
  src: string
  alt: string
  /** CSS aspect-ratio、例: `"16 / 9"` */
  aspectRatio?: CSSProperties['aspectRatio']
  className?: string
  loading?: 'lazy' | 'eager'
}

export function MediaCover({
  src,
  alt,
  aspectRatio = '16 / 9',
  className,
  loading = 'lazy',
}: Props) {
  return (
    <div
      className={['media-cover', className].filter(Boolean).join(' ')}
      style={{ aspectRatio }}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        sizes="(max-width: 1200px) 100vw, 1200px"
      />
    </div>
  )
}
