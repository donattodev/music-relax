import type { ComponentProps } from 'react'

type TableRowProps = ComponentProps<'tr'>

export function TableRow(props: TableRowProps) {
  return (
    <tr
      className="border-b border-background-500/20 hover:bg-background-500/10"
      {...props}
    />
  )
}
