import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { HeartIcon } from '@/components/icons/heart'
import { YoutubeIcon } from '@/components/icons/youtube'
import { SpotifyIcon } from '@/components/icons/spotify'
import { AudioLinesIcon } from '@/components/icons/audio-lines'

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

export default function Favoritas() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-lg border-2 border-zinc-500/40 p-4">
      <div className="flex w-full  flex-col gap-4">
        <div className="flex flex-col  gap-4">
          <form className="flex max-w-md items-center gap-2">
            <Input placeholder="Buscar por música favorita..." />
          </form>
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Musica</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-bold uppercase">
                    Ressonância Celestial
                  </TableCell>

                  <TableCell>
                    <ul className="flex items-center justify-end gap-4">
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

                      <li>
                        <HeartIcon className="w-5" />
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
