import { ComponentProps } from 'react'

export function YoutubeIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      width={20}
      height={16}
      viewBox="0 0 25 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_98_339)">
        <path
          d="M16.666 8.724C14.38 7.503 12.192 6.38 9.954 5.207v7.014c2.355-1.28 4.836-2.452 6.722-3.497h-.01z"
          fill="#fff"
        />
        <path
          d="M16.666 8.724C14.38 7.503 9.954 5.207 9.954 5.207l5.901 3.966s-1.074.596.811-.449z"
          fill="#E8E0E0"
        />
        <path
          d="M10.384 17.712c-4.747-.087-6.37-.166-7.366-.371-.674-.137-1.26-.44-1.69-.879-.332-.333-.596-.84-.801-1.544-.176-.586-.244-1.074-.342-2.266-.15-2.69-.185-4.89 0-7.347.153-1.358.227-2.969 1.24-3.909a3.326 3.326 0 011.662-.84C4.063.372 8.225.225 12.534.225c4.299 0 8.47.147 9.448.333.781.146 1.514.586 1.944 1.152.925 1.455.941 3.265 1.035 4.68.039.675.039 4.504 0 5.178-.146 2.237-.263 3.029-.596 3.85-.205.517-.38.79-.684 1.094a3.277 3.277 0 01-1.739.889c-4.109.309-7.598.376-11.558.312zm6.293-8.988C14.39 7.503 12.202 6.37 9.965 5.197v7.015c2.354-1.28 4.836-2.452 6.721-3.498l-.01.01z"
          fill="#CD201F"
        />
      </g>
      <defs>
        <clipPath id="clip0_98_339">
          <path fill="#fff" transform="translate(0 .22)" d="M0 0H25V17.56H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}