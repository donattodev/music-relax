import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabMusic } from './tabs-options/tab-music'

export function TabsHome() {
  return (
    <div className="col-span-6 rounded-md border-2 border-zinc-500/40 p-6">
      <Tabs defaultValue="music" className="w-full">
        <TabsList>
          <TabsTrigger value="music" className="font-bold uppercase">
            Músicas
          </TabsTrigger>
          <TabsTrigger value="album" className="font-bold uppercase" disabled>
            Álbuns
          </TabsTrigger>
          <TabsTrigger value="live" className="font-bold uppercase" disabled>
            Live
          </TabsTrigger>
        </TabsList>
        <TabsContent value="music" className="mt-6">
          <TabMusic />
        </TabsContent>
        <TabsContent value="album"></TabsContent>
        <TabsContent value="live"></TabsContent>
      </Tabs>
    </div>
  )
}
