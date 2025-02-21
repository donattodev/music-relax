import type { ComponentProps } from 'react'

export function Next(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 13.643V34.36c0 1.245 1.219 2.037 2.215 1.44l17.707-10.594c.866-.519.866-1.882 0-2.4L5.215 12.213C4.22 11.606 3 12.398 3 13.643zm21.428 0V34.36c0 1.245 1.22 2.037 2.216 1.44L44.35 25.206c.867-.519.867-1.882 0-2.4L26.644 12.213c-.998-.607-2.216.185-2.216 1.43z"
        stroke="#fff"
        strokeWidth={3}
        strokeMiterlimit={10}
      />
    </svg>
  )
}
