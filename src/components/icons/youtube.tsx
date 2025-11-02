import type { ComponentProps } from 'react'

export function YouTube(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_30_127)">
        <path
          d="M24.03 6.975c0-2.11-1.552-3.807-3.469-3.807A170.465 170.465 0 0012.61 3h-.843c-2.7 0-5.354.047-7.95.169-1.913 0-3.464 1.706-3.464 3.815a69.731 69.731 0 00-.165 5.006 72.583 72.583 0 00.16 5.011c0 2.11 1.551 3.82 3.464 3.82 2.728.127 5.526.183 8.372.178 2.85.01 5.64-.05 8.372-.178 1.917 0 3.468-1.71 3.468-3.82.113-1.673.165-3.342.16-5.016.01-1.668-.04-3.339-.153-5.01zM9.89 16.589V7.378l6.797 4.603-6.796 4.608z"
          fill="#F2A20C"
        />
      </g>
      <defs>
        <clipPath id="clip0_30_127">
          <path fill="#fff" transform="translate(.188)" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
