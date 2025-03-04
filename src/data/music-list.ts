interface MusicTypes {
  id: number
  music: string
  author: string
  album: string
  url: string
}

export const music: MusicTypes[] = [
  {
    id: 1,
    music: 'Ressonância Celestial',
    author: 'Felippe Donatto',
    album: 'Ecos',
    url: '/audio/ressonancia-celestial.mpeg',
  },
  {
    id: 2,
    music: 'Alvorecer Melódico',
    author: 'Felippe Donatto',
    album: 'Ecos',
    url: '/audio/alvorecer-melodico.mpeg',
  },
]
