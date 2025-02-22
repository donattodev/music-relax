import type { ComponentProps } from 'react'

export function Pause(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={52}
      height={58}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
        stroke="#ffffff"
        strokeWidth={32}
        strokeMiterlimit={10}
      />
      <path
        d="M208 192v128m96-128v128"
        stroke="#ffffff"
        strokeWidth={32}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </svg>
  )
}
