import type { ReactNode } from 'react'

type SectionLabelProps = { children: ReactNode; withRule?: boolean; caps?: boolean }

export function SectionLabel({ children, withRule = false, caps = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      {withRule && <span aria-hidden className="h-px w-7 bg-marine" />}
      <p className={`type-mono text-moss-ink ${caps ? 'uppercase' : ''}`}>{children}</p>
    </div>
  )
}