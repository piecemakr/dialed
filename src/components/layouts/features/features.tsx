'use client'

import Image from 'next/image'

import { Button } from '~/components/ui/button'
import { features } from './data/data'

import { eonsDiscount } from "~/components/global/discount"

export default function eons() {
  return (
    <section id="benefits" className="section relative overflow-hidden bg-gray-50">
      <div className="container grid grid-cols-2 gap-36 relative h-full z-10">
        
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={feature.h2} className="p-6 bg-white rounded-md">
              <Image 
                src={feature.icon} 
                alt={feature.alt}
                width={48}
                height={48}
                className="mb-6 p-3 bg-gradient-to-r from-[#E59130] to-[#813A62] rounded-sm" 
              />
                
              <h3 className="text-lg font-medium mb-4 leading-6">
                {feature.h2}
              </h3>
              <p className="text-sm font-thin ">
                {feature.description}
              </p>
            </div>
          ))}
        </div> 
          
        <div className="col-start-2 max-w-2xl space-y-8">
          <p className="text-orange-500 font-medium mb-8 uppercase">[ BENEFITS ]</p>
          <h2 className="text-4xl font-thin text-black sm:text-5xl md:text-6xl">
            Get Your Life Back
          </h2>
          <div className="space-y-2">
            <h3 className="text-xl font-medium leading-6">
              All Natural Ingredients
            </h3>
            <p className="text-md text-black/80">
              Eons DIALED Tablets contain a powerful blend of natural ingredients, carefully chosen to work in harmony to promote a deep and peaceful slumber.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-medium leading-6">
              Rapid Dissolve Sublingual Format
            </h3>
            <p className="text-md text-black/80">
              The technology that powers Eons DIALED tablets enables the product to simply dissolve under your tongue and directly enter your blood stream vs products that are swallowed. The Quicksome™ technology facilitates the delivery of less actives, more effectively, and bypasses the gastrointestinal tract and related harsh stomach acids common with typical orally consumed products.
            
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              size="lg"
              onClick={() => window.location.href = eonsDiscount}
            >
              Buy Eons DIALED 
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}