'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Guarantee() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current && imageRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      tl.to(imageRef.current, {
        yPercent: 10,
        ease: 'none',
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="section relative overflow-hidden bg-gray-200">
      <div ref={imageRef} className="absolute inset-0 h-[150%] -translate-y-1/2">
        <Image
          src="https://m6abtmz27b.ufs.sh/f/JIbaFvH0FeDqXxlCIKoUClRWXKygDvobGON85mAs610BHuUL"
          alt="An image of an open Eons DIALED jar with Quicksome™ tablets on the ground in front of the jar."
          fill
          objectFit='cover'
          priority
        />
      </div>

      <div className="container grid grid-cols-2 gap-24 relative h-full z-10">
        <div className="col-start-2">
          <div  className="max-w-2xl space-y-8">
            <p className="text-orange-500 font-medium mb-8 uppercase">[ Our Guarantee ]</p>
            <h2 className="text-4xl font-thin text-black sm:text-5xl md:text-6xl">
              Backed by The Eons 90-Day Guarantee
            </h2>
            <p className="text-lg text-black/80">
              Our team wants to ensure that you realize your full potential & get the results you want. With our formulations being grounded in science, we expect our products to deliver exactly what they claim 100% of the time. With that being said, if for whatever reason, you aren&apos;t fully satisfied, we will gladly refund your money! All purchases made on Eons.com are backed by our 90-day promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

