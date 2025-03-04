import type { ComponentProps } from 'react'

export function Instagram(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 10a6 6 0 106 6 6.006 6.006 0 00-6-6zm0 10a4 4 0 110-8 4 4 0 010 8zm6-17H10a7.007 7.007 0 00-7 7v12a7.008 7.008 0 007 7h12a7.008 7.008 0 007-7V10a7.008 7.008 0 00-7-7zm5 19a5 5 0 01-5 5H10a5 5 0 01-5-5V10a5 5 0 015-5h12a5 5 0 015 5v12zM24 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    </svg>
  )
}
