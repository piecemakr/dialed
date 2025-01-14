'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { Skeleton } from "~/components/ui/skeleton"
import type { ProductImage } from '../types'

interface ImageGalleryProps {
  images: Record<string, ProductImage>
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [mainImage, setMainImage] = useState<string>(Object.keys(images)[0])
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})
  const imageRef = useRef<HTMLDivElement>(null)
  const thumbnailRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power2.inOut" }
      )
    }
  }, [mainImage])

  useEffect(() => {
    Object.values(thumbnailRefs.current).forEach((button) => {
      if (button) {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { scale: 1.05, duration: 0.2 })
        })
        button.addEventListener('mouseleave', () => {
          gsap.to(button, { scale: 1, duration: 0.2 })
        })
        button.addEventListener('mousedown', () => {
          gsap.to(button, { scale: 0.95, duration: 0.1 })
        })
        button.addEventListener('mouseup', () => {
          gsap.to(button, { scale: 1.05, duration: 0.1 })
        })
      }
    })
  }, [])

  const handleImageLoad = (imageKey: string) => {
    setImagesLoaded(prev => ({ ...prev, [imageKey]: true }))
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200">
        <div ref={imageRef} className="relative w-full h-full bg-gray-200 rounded-lg">
          {!imagesLoaded[mainImage] && <Skeleton className="absolute inset-0" />}
          <Image
            src={images[mainImage].src}
            alt={images[mainImage].alt}
            fill
            className={`object-cover transition-opacity duration-300 ${imagesLoaded[mainImage] ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => handleImageLoad(mainImage)}
          />
        </div>
      </div>

      <div className="flex space-x-2 overflow-x-auto py-2 px-1 scrollbar-hide">
        {Object.entries(images).map(([key, img]) => (
          <button
            key={key}
            ref={(el) => {
              if (thumbnailRefs.current) {
                thumbnailRefs.current[key] = el
              }
            }}
            onClick={() => setMainImage(key)}
            className={`relative w-16 sm:w-20 transition-colors aspect-square bg-gray-200 overflow-hidden rounded-lg flex-shrink-0`}
          >
            {!imagesLoaded[key] && <Skeleton className="absolute inset-0" />}
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover rounded transition-opacity duration-300 ${imagesLoaded[key] ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => handleImageLoad(key)}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

