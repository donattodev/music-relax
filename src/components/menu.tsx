import type { ComponentProps } from 'react'

export function Menu(props: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={6} cy={6} r={5.5} stroke="#fff" />
      <circle cx={6} cy={26} r={5.5} stroke="#fff" />
      <circle cx={6} cy={46} r={5.5} stroke="#fff" />
      <circle cx={26} cy={6} r={5.5} stroke="#fff" />
      <circle cx={26} cy={26} r={5.5} stroke="#fff" />
      <circle cx={26} cy={46} r={5.5} stroke="#fff" />
      <circle cx={46} cy={6} r={5.5} stroke="#fff" />
      <circle cx={46} cy={26} r={5.5} stroke="#fff" />
      <circle cx={46} cy={46} r={5.5} stroke="#fff" />
    </svg>
  )
}
