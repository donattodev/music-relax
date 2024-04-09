'use client'

import { useState } from 'react'
import { Heart } from 'lucide-react'

export function ToggleLike() {
  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked(!liked)
  }

  return (
    <>
      <Heart
        className="w-4 cursor-pointer text-[#047A95]"
        onClick={toggleLike}
        fill={liked ? '#047A95' : 'none'}
      />
    </>
  )
}
