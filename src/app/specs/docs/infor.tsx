import { GithubIcon, Link as Site } from 'lucide-react'
import Link from 'next/link'
import { Donatto } from '../icons-specs/logo-donatto'
import { Next } from '../icons-specs/next'
import { TailwindCss } from '../icons-specs/tailwind'

const project = 'Music relax'

export function InforSpecs() {
  return (
    <div className="w-1/1 flex flex-col gap-8 col-span-3">
      <Link href="https://donattodev.com.br" target="_blank">
        <Donatto className="w-56" />
      </Link>
      <p>
        <strong className="text-[#D3FF00]">{project}</strong> é o projeto
        instrumental de Felippe Donatto, criado para quem busca harmonia e
        inspiração. Com melodias envolventes e suaves, a guitarra se torna um
        portal para a paz.
      </p>

      <ul className="flex flex-col items-start gap-3">
        <h2 className="font-bold">Tecnologias</h2>
        <div className="flex items-center gap-4">
          <li className="bg-[#D3FF00] p-2 rounded-md">
            <Next className="size-6 text-primary" fill="#0a0a0a" />
          </li>
          <li className="bg-[#D3FF00] p-2 rounded-md">
            <TailwindCss className="size-6 text-primary" fill="#0a0a0a" />
          </li>
        </div>
      </ul>

      <ul className="flex flex-col items-start gap-3">
        <h2 className="font-bold">Links Uteis</h2>
        <div className="flex items-center gap-4">
          <li className="bg-[#D3FF00] p-2 rounded-md">
            <Site className="size-6" stroke='#0a0a0a' />
          </li>
          <li className="bg-[#D3FF00] p-2 rounded-md">
            <GithubIcon className="size-6" stroke="#0a0a0a" />
          </li>
        </div>
      </ul>
    </div>
  )
}
