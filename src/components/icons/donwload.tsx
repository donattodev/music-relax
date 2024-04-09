import { ComponentProps } from 'react'

export function DonwloadgIcon(props: ComponentProps<'svg'>) {
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
        d="M4 14.899A7 7 0 1115.71 8h1.79a4.5 4.5 0 012.5 8.242"
        stroke="url(#paint0_linear_98_157)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12v9"
        stroke="url(#paint1_linear_98_157)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 17l4 4 4-4"
        stroke="url(#paint2_linear_98_157)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_98_157"
          x1={2.00256}
          y1={9.62234}
          x2={22.0005}
          y2={9.62234}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC4899" />
          <stop offset={1} stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_98_157"
          x1={12}
          y1={16.5}
          x2={13}
          y2={16.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC4899" />
          <stop offset={1} stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_98_157"
          x1={8}
          y1={19}
          x2={16}
          y2={19}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC4899" />
          <stop offset={1} stopColor="#F59E0B" />
        </linearGradient>
      </defs>
    </svg>
  )
}
