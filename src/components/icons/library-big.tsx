import { ComponentProps } from 'react'

export function LibraryBigIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 3H4a1 1 0 00-1 1v16a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1z"
        stroke="url(#paint0_linear_98_147)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 3v18"
        stroke="url(#paint1_linear_98_147)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6l5.5 15.2z"
        stroke="url(#paint2_linear_98_147)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_98_147"
          x1={3}
          y1={12}
          x2={11}
          y2={12}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC4899" />
          <stop offset={1} stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_98_147"
          x1={7}
          y1={12}
          x2={8}
          y2={12}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC4899" />
          <stop offset={1} stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_98_147"
          x1={11.0374}
          y1={12}
          x2={20.4626}
          y2={12}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC4899" />
          <stop offset={1} stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  )
}
