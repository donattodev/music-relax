import type { ComponentProps } from 'react'

export function Previous(props: ComponentProps<'svg'>) {
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
        d="M45 13.643V34.36c0 1.245-1.219 2.037-2.215 1.44L25.078 25.2c-.866-.518-.866-1.882 0-2.4l17.707-10.594c.996-.6 2.215.192 2.215 1.437zm-21.428 0V34.36c0 1.245-1.22 2.037-2.216 1.44L3.65 25.2c-.867-.518-.867-1.882 0-2.4l17.706-10.594c.998-.6 2.216.192 2.216 1.437z"
        stroke="#fff"
        strokeWidth={3}
        strokeMiterlimit={10}
      />
    </svg>
  )
}
