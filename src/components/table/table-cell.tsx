import clsx from 'clsx'
import type { ComponentProps } from 'react'

type TableCellProps = ComponentProps<'td'>

export function TableCell(props: TableCellProps) {
  return (
    <td
      {...props}
      className={clsx('py-4 px-6 text-sm text-neutral-300', props.className)}
    />
  )
}
