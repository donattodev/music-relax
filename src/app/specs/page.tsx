import { DocsSpecs } from './docs/docs'
import { InforSpecs } from './docs/infor'

export default function Specs() {
  return (
    <main className="bg-neutral-950 text-neutral-50 min-h-screen ">
      <section className="grid grid-cols-6 gap-16 w-full items-center justify-center min-h-dvh mx-auto max-w-6xl">
        <InforSpecs />

        <DocsSpecs />
      </section>
    </main>
  )
}
