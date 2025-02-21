import type { ComponentProps } from 'react'

export function Play(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={52}
      height={58}
      viewBox="0 0 52 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 12.888v32.224c0 1.938 1.889 3.169 3.445 2.24L40.99 30.866c1.347-.806 1.347-2.926 0-3.732L13.445 10.648C11.889 9.72 10 10.951 10 12.888z"
        stroke="#fff"
        strokeWidth={3.55568}
        strokeMiterlimit={10}
      />
    </svg>
  )
}
