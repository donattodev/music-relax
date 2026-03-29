'use client'

import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react'

export function LikeHeroHeart() {
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('liked')
    if (stored === 'true') setLiked(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('liked', liked.toString())
  }, [liked])

  return (
    <button
      type="button"
      aria-label={liked ? "Descurtir música" : "Curtir música"}
      onClick={() => setLiked(prev => !prev)}
      className="transition-all duration-300"
    >
      <Heart
        className={`
          w-5 h-5 cursor-pointer transition-all duration-300
          ${liked ? 'fill-primary stroke-primary scale-110 drop-shadow-[0_0_8px_rgba(242,162,12,0.4)]' : 'fill-none stroke-white/40 hover:stroke-primary'}
        `}
      />
    </button>
  )
}
