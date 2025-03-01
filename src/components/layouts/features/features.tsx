'use client'

import Image from 'next/image'

import { Button } from '~/components/ui/button'
import { features } from './data/data'

import { eonsDiscount } from "~/components/global/discount"

import { track } from '@vercel/analytics';

export default function Eons() {
  return (
    <section id="benefits" className="section relative overflow-hidden bg-gray-50 py-12 sm:py-24">
      <div className="container relative h-full z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-36">
          <div className="w-full lg:w-1/2">
            <p className="text-orange-500 font-medium mb-4 sm:mb-8 uppercase text-sm sm:text-base">[ BENEFITS ]</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-black mb-8">
              Get Your Life Back
            </h2>
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-medium leading-6">
                  All Natural Ingredients
                </h3>
                <p className="text-sm sm:text-md text-black/80">
                  Eons DIALED Tablets contain a powerful blend of natural ingredients, carefully chosen to work in harmony to promote a deep and peaceful slumber.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-medium leading-6">
                  Rapid Dissolve Sublingual Format
                </h3>
                <p className="text-sm sm:text-md text-black/80">
                  The technology that powers Eons DIALED tablets enables the product to simply dissolve under your tongue and directly enter your blood stream vs products that are swallowed. The Quicksome™ technology facilitates the delivery of less actives, more effectively, and bypasses the gastrointestinal tract and related harsh stomach acids common with typical orally consumed products.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    window.location.href = eonsDiscount
                    track('Purchase', { location: 'navbar' });
                  }}
                >
                  Buy Eons DIALED 
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.h2} className="p-4 sm:p-6 bg-white rounded-md">
                <Image 
                  src={feature.icon} 
                  alt={feature.alt}
                  width={48}
                  height={48}
                  className="mb-4 sm:mb-6 p-2 sm:p-3 bg-gradient-to-r from-[#E59130] to-[#813A62] rounded-sm" 
                />
                  
                <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-4 leading-6">
                  {feature.h2}
                </h3>
                <p className="text-xs sm:text-sm font-thin">
                  {feature.description}
                </p>
              </div>
            ))}
          </div> 
        </div>
      </div>
    </section>
  )
}

