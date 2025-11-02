import type { ComponentProps } from 'react'

type TableHeaderProps = ComponentProps<'th'>

export function TableHeader(props: TableHeaderProps) {
  return <th className="py-4 px-6 text-sm font-semibold text-left" {...props} />
}
