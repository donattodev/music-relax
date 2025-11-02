'use client'

import { Logo } from '@/components/icons/logo'
import { Linker } from '@/components/ui/link'
import {
  Disc,
  LibraryBig,
  MicVocal,
  Music,
  PanelRightClose,
  PanelRightOpen,
  Radio,
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SocialMedia } from './social-media'

interface SidebarProps {
  onCollapseChange?: (collapsed: boolean) => void
}

export default function Sidebar({ onCollapseChange }: SidebarProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  useEffect(() => {
    onCollapseChange?.(sidebarCollapsed)
  }, [sidebarCollapsed, onCollapseChange])

  return (
    <aside
      className={`${
        sidebarCollapsed ? 'w-20' : 'w-64'
      } bg-background-900 transition-all duration-300 ease-in-out flex flex-col max-sm:hidden`}
    >
      <div
        className={`h-16 flex items-center  px-4 w-full ${
          sidebarCollapsed ? 'justify-center' : 'justify-between'
        }`}
      >
        {!sidebarCollapsed && (
          <Link href="/" className="-ml-1">
            <Logo className="w-[157px]" />
          </Link>
        )}
        <button
          type="button"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent rounded-md p-2 cursor-pointer"
        >
          {sidebarCollapsed ? (
            <PanelRightClose className="h-5 w-5 text-primary" />
          ) : (
            <PanelRightOpen className="h-5 w-5" />
          )}
        </button>
      </div>

      <nav
        className={`flex-1 flex flex-col gap-4 p-4 mt-6 ${
          sidebarCollapsed ? 'items-center' : 'items-start'
        }`}
      >
        <ul className="flex flex-col gap-5">
          <li>
            <Linker.Root ancora="/" className="">
              <Linker.Icon Icon={Music} />
              {sidebarCollapsed ? '' : <Linker.Text>Explore</Linker.Text>}
            </Linker.Root>
          </li>
          <li>
            <Linker.Root ancora="/albuns">
              <Linker.Icon Icon={Disc} />
              {sidebarCollapsed ? '' : <Linker.Text>Albuns</Linker.Text>}
            </Linker.Root>
          </li>
          <li>
            <Linker.Root ancora="/artists">
              <Linker.Icon Icon={MicVocal} />
              {sidebarCollapsed ? '' : <Linker.Text>Artists</Linker.Text>}
            </Linker.Root>
          </li>
          <li>
            <Linker.Root ancora="/">
              <Linker.Icon Icon={Radio} />
              {sidebarCollapsed ? '' : <Linker.Text>Live</Linker.Text>}
            </Linker.Root>
          </li>
        </ul>

        <ul className="flex flex-col gap-5">
          <li className="my-2 font-bold">
            {sidebarCollapsed ? '' : <h2>Playlist</h2>}
          </li>

          <li>
            <Linker.Root ancora="/">
              <Linker.Icon Icon={LibraryBig} />
              {sidebarCollapsed ? '' : <Linker.Text>Pop</Linker.Text>}
            </Linker.Root>
          </li>
          <li>
            <Linker.Root ancora="/">
              <Linker.Icon Icon={LibraryBig} />
              {sidebarCollapsed ? '' : <Linker.Text>Rock</Linker.Text>}
            </Linker.Root>
          </li>
          <li>
            <Linker.Root ancora="/">
              <Linker.Icon Icon={LibraryBig} />
              {sidebarCollapsed ? '' : <Linker.Text>Lofi</Linker.Text>}
            </Linker.Root>
          </li>
          <li>
            <Linker.Root ancora="/">
              <Linker.Icon Icon={LibraryBig} />
              {sidebarCollapsed ? '' : <Linker.Text>Classic</Linker.Text>}
            </Linker.Root>
          </li>
        </ul>
        {sidebarCollapsed === false ? <SocialMedia /> : ''}
      </nav>

      {sidebarCollapsed ? (
        ''
      ) : (
        <footer className="p-4 text-sm font-medium text-neutral-600 max-sm:hidden">
          &copy;{' '}
          <Link
            href="https://donattodev.com.br"
            className="hover:text-primary hover:font-bold duration-200 transition-colors"
            target="_blank"
          >
            Donatto Dev
          </Link>{' '}
          2025
        </footer>
      )}
    </aside>
  )
}
