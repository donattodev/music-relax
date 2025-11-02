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
      onClick={() => setLiked(prev => !prev)}
      className="transition-all duration-300"
    >
      <Heart
        className={`
          w-7 h-7 cursor-pointer transition-all duration-300
          ${liked ? 'fill-primary stroke-primary animated bounce' : 'fill-none stroke-primary'}
        `}
      />
    </button>
  )
}
