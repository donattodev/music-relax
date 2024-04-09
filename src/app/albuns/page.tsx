import Link from 'next/link'
import Image from 'next/image'
import { YoutubeIcon } from '@/components/icons/youtube'
import { SpotifyIcon } from '@/components/icons/spotify'
import { AudioLinesIcon } from '@/components/icons/audio-lines'

import album from '../../../public/cover.jpg'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Albuns() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-lg border-2 border-zinc-500/40 p-4">
      <div className="flex w-full  flex-col gap-4">
        <div className="flex flex-col  gap-4">
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Capa</TableHead>
                  <TableHead className="max-sm:hidden">Álbum</TableHead>
                  <TableHead className="max-sm:hidden">Autor</TableHead>
                  <TableHead className="max-sm:text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Image
                      width={450}
                      height={450}
                      src={album}
                      className="w-16 cursor-pointer rounded-md ring-pink-600 hover:ring-2"
                      alt=""
                    />
                  </TableCell>

                  <TableCell className="font-bold uppercase max-sm:hidden ">
                    Ecos
                  </TableCell>

                  <TableCell className="font-semibold max-sm:hidden">
                    Felippe Donatto
                  </TableCell>

                  <TableCell>
                    <ul className="flex items-center gap-4 max-sm:justify-end">
                      <li>
                        <Link href="/" target="_blanck">
                          <YoutubeIcon className="w-5" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/" target="_blanck"></Link>
                        <SpotifyIcon className="w-5" />
                      </li>
                      <li>
                        <Link href={``}>
                          <AudioLinesIcon className="w-5" />
                        </Link>
                      </li>
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}
