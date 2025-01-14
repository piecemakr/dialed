'use client'

import { useState, useEffect } from 'react'
import gsap from 'gsap'

export function PreLoader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to({}, { duration: 0.25 })

    tl.to('.pre-loader', {
      filter: 'blur(240px)',
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => setIsVisible(false)
    })

    return () => {
      tl.kill()
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="flex flex-col items-center justify-center pre-loader fixed inset-0 z-50 bg-white">
      
    </div>
  )
}

