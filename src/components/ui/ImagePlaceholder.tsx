import type { CSSProperties } from 'react'

interface ImagePlaceholderProps {
  filename: string
  width: number
  height: number
  aspectRatio?: string
  label?: string
  fill?: boolean
  className?: string
  style?: CSSProperties
}

export function ImagePlaceholder({
  filename,
  width,
  height,
  aspectRatio,
  label,
  fill = false,
  className,
  style,
}: ImagePlaceholderProps) {
  const ratio = aspectRatio ?? `${width}/${height}`

  const sharedContent = (
    <>
      <div
        className="absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-hairline) 1px, transparent 1px), linear-gradient(90deg, var(--color-hairline) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10 text-center px-4 select-none pointer-events-none">
        <p className="text-caption font-mono text-muted tracking-tight break-all">{filename}</p>
        <p className="text-caption text-muted-soft mt-0.5 opacity-70">
          {width} × {height} px
        </p>
      </div>
    </>
  )

  if (fill) {
    return (
      <div
        role="img"
        aria-label={label ?? filename}
        className={`absolute inset-0 overflow-hidden bg-surface-card border border-dashed border-hairline flex flex-col items-center justify-center gap-1 ${className ?? ''}`}
        style={style}
      >
        {sharedContent}
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={label ?? filename}
      className={`relative overflow-hidden bg-surface-card border border-dashed border-hairline flex flex-col items-center justify-center gap-1 ${className ?? ''}`}
      style={{ aspectRatio: ratio, ...style }}
    >
      {sharedContent}
    </div>
  )
}
