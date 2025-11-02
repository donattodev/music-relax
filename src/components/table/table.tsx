import type { ComponentProps } from 'react'

type TableProps = ComponentProps<'table'>

export function Table(props: TableProps) {
  return (
    <div className="border border-background-500/20 rounded-md">
      <table className="w-full" {...props} />
    </div>
  )
}
