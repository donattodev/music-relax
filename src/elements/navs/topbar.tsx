import { Linker } from '@/components/ui/link'
import { MenuResponsivo } from './menu-responsivo'

export function Topbar() {
  return (
    <nav className="h-20 flex justify-between items-center relative z-50 w-full px-12 animate-in fade-in duration-1000">
      <ul className="flex items-center gap-14">
        <li>
          <Linker.Root ancora="/">
            <Linker.Text className="uppercase text-[9px] font-black tracking-[0.6em] opacity-80 hover:opacity-100 transition-opacity" isActive>
              Music
            </Linker.Text>
          </Linker.Root>
        </li>

        <li>
          <Linker.Root ancora="/">
            <Linker.Text className="uppercase text-[9px] font-black tracking-[0.6em] opacity-30 hover:opacity-100 transition-opacity">Live</Linker.Text>
          </Linker.Root>
        </li>
      </ul>

      <div className="hover:scale-105 transition-transform flex items-center">
        <MenuResponsivo />
      </div>
    </nav>
  )
}
