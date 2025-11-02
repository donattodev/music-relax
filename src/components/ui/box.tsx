import clsx from 'clsx'
import type { ReactNode } from 'react'

export type BoxProps = {
  children: ReactNode
  className?: string
}

export function Box({ className, children }: BoxProps) {
  return (
    <div
      className={clsx(
        'bg-background-900 p-5 border border-background-700 rounded-md',
        className
      )}
    >
      {children}
    </div>
  )
}
