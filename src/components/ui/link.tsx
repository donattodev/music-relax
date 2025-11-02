import clsx from 'clsx'
import Link from 'next/link'
import type { ComponentProps, ElementType, ReactNode } from 'react'

export type RootLinkProps = ComponentProps<'a'> & {
  children: ReactNode
  ancora: string
  isActive?: boolean
}

function RootLink({ children, ancora, isActive = true }: RootLinkProps) {
  return (
    <Link
      href={ancora}
      className={`flex items-center gap-4 transition-colors ${
        isActive ? 'text-primary' : 'text-white '
      }`}
    >
      {children}
    </Link>
  )
}

export type TextLinkProps = {
  children: ReactNode
  className?: string
  isActive?: boolean
}

function TextLink({ children, isActive, className }: TextLinkProps) {
  return (
    <span
      className={clsx(
        `font-bold text-sm leading-5 ${isActive ? 'text-primary' : 'text-white hover:text-primary duration-200 transition-all'}`,
        className
      )}
    >
      {children}
    </span>
  )
}

export type IconLinkProps = {
  Icon: ElementType
  isActive?: boolean
}

function IconLink({ Icon, isActive }: IconLinkProps) {
  return (
    <Icon
      className={`w-[18px] h-[18px] ${isActive ? 'text-primary' : 'text-white hover:text-primary duration-200 transition-all'}`}
    />
  )
}

export const Linker = {
  Root: RootLink,
  Text: TextLink,
  Icon: IconLink,
}
