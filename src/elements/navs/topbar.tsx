import { Logo } from '@/components/icons/logo'
import { Linker } from '@/components/ui/link'
import { MenuResponsivo } from './menu-responsivo'

export function Topbar() {
  return (
    <nav className="h-20 flex justify-between items-center relative z-150 w-full px-6 sm:px-12 animate-in fade-in duration-1000">
      <div className="flex items-center gap-6">
        <div className="sm:hidden">
          <Logo onlyIcon className="w-8 h-8" />
        </div>
        <ul className="flex items-center gap-14 max-sm:hidden">
          <li>
            <Linker.Root ancora="/">
              <Linker.Text
                className="uppercase text-[9px] font-black tracking-[0.6em] opacity-80 hover:opacity-100 transition-opacity"
                isActive
              >
                Music
              </Linker.Text>
            </Linker.Root>
          </li>

          <li>
            <Linker.Root ancora="/">
              <Linker.Text className="uppercase text-[9px] font-black tracking-[0.6em] opacity-30 hover:opacity-100 transition-opacity">
                Live
              </Linker.Text>
            </Linker.Root>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <MenuResponsivo />
      </div>
    </nav>
  )
}
