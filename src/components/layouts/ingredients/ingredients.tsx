'use client'

import Image from 'next/image'

import {  ingredients } from './data/data'

export default function Ingredients() {

  return (
    <section id="ingredients" className="w-full px-4 py-12 md:py-16 lg:py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 mb-16">
          <p className="text-orange-500 font-medium mb-8">[ KEY INGREDIENTS ]</p>
          <h2 className="text-4xl md:text-6xl font-thin ">
            All-Natural Ingredients
          </h2>
          <p className="text-xl">
            Simple and all-natural ingredients that promote balance, wellness, and mental clarity. Our carefully selected components work together to support a healthier, more resilient you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="space-y-8">
              <div className="aspect-[4/3] relative bg-[#f4f4f4] rounded-lg overflow-hidden">
                <Image
                  src={ingredient.image}
                  alt={ingredient.title}
                  fill
                  className="object-cover p-8"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-thin mb-2">
                  {ingredient.title}
                </h3>
                <p className="text-gray-600 pr-10">
                  {ingredient.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


