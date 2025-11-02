import { Linker } from '@/components/ui/link'
import { MenuResponsivo } from './menu-responsivo'

export function Topbar() {
  return (
    <nav className="px-6 h-16 flex justify-between items-center">
      <ul className="flex  items-center gap-8">
        <li>
          <Linker.Root ancora="/">
            <Linker.Text className="uppercase" isActive>
              Music
            </Linker.Text>
          </Linker.Root>
        </li>

        <li>
          <Linker.Root ancora="/">
            <Linker.Text className="uppercase">Live</Linker.Text>
          </Linker.Root>
        </li>
      </ul>

      <MenuResponsivo />
    </nav>
  )
}
