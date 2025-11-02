import clsx from 'clsx'
import type { ComponentProps, ReactNode } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode
  className?: string
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'bg-primary px-4 py-2.5 rounded-md font-semibold text-sm hover:bg-primary-950 cursor-pointer transition-all duration-300',
        className
      )}
    >
      {children}
    </button>
  )
}
