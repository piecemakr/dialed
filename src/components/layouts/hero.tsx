'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

import { Button } from "~/components/ui/button"

import { eonsDiscount } from "~/components/global/discount"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const imageRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
    }
  }, [scrollY])

  useEffect(() => {
    if (headlineRef.current) {
      const words = headlineRef.current.innerText.split(' ')
      headlineRef.current.innerHTML = words
        .map(word => `<span class="inline-block overflow-hidden pb-2"><span class="inline-block">${word}</span></span>`)
        .join(' ')

      gsap.fromTo(
        headlineRef.current.querySelectorAll('span > span'),
        { y: '-105%' },
        { 
          y: '0%', 
          duration: 1.2, 
          ease: 'power3.out',
          stagger: 0.1,
          delay: 1,
        }
      )
    }
  }, [])

  return (
    <section className="relative px-4 sm:px-8 min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0" ref={imageRef}>
        <Image
          src="https://m6abtmz27b.ufs.sh/f/JIbaFvH0FeDq3ZuAca9C9KPhfxQIUGgWlmt7AOEzJoXM60pR"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/10 to-transparent" />
      </div>

      <div className="container relative min-h-screen flex items-center">
        <div className="max-w-2xl space-y-6 sm:space-y-8 py-12 sm:py-20">
          <h1 ref={headlineRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-black">
            Conquer Your Stress, Fear, and Anxiety,{' '}
            <span className="bg-gradient-to-r from-[#813A62] to-[#E59130] text-transparent bg-clip-text font-bold">
              Completely Naturally
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-black">
            DIALED was created as an all-natural solution to help you live your best life, 
            free from the grips of stress, anxiety, and fear.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => window.location.href = eonsDiscount}
            >
              Buy Eons DIALED 
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-gray-800 hover:bg-gray-100 h-12 px-8 text-md uppercase"
              onClick={() => window.location.href = '#learn-more'}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

