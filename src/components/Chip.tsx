import type { ReactNode } from 'react'

export function Chip({ children }: { children: ReactNode }) {
  return (
    <li className="type-chip inline-flex h-[30px] items-center rounded-chip border border-marine bg-marine px-[11px] text-lavender transition-transform duration-200 hover:scale-105 cursor-default">
      {children}
    </li>
  )
}