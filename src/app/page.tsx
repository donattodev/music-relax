import { Sidebar } from '@/elements/sidebar'
import { TabsHome } from '@/elements/tabs-home'

export default function Home() {
  return (
    <>
      <div className="grid w-full max-w-6xl grid-cols-8 gap-4 max-sm:grid-cols-1">
        <Sidebar />
        <TabsHome />
      </div>
    </>
  )
}
