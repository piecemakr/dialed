'use client'

import Image from 'next/image'
import { Star, ShoppingCart } from 'lucide-react'
import { Button } from "~/components/ui/button"
import type { Product } from '../types'

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-row items-end">
        <h1 className="font-black text-6xl lg:text-7xl">
          {product.name}
        </h1>
        <h2 className="font-medium text-2xl pl-1 md:pl-4 pb-2">
          by
        </h2>
        <Image 
          src='/logo.webp'
          alt='Black Eons Logo'
          width={120}
          height={33.6}
          className='pb-3 pl-3'
          priority
        />
      </div>

      <div className="flex flex-row items-end space-x-4">
        <p className="font-bold text-5xl lg:text-5xl bg-gradient-to-r from-[#E59130] to-[#813A62] text-transparent bg-clip-text">
          ${product.price.toFixed(2)}&nbsp;USD
        </p>
        <p className="line-through font-medium text-xl lg:text-2xl text-slate-800 opacity-35">
          was ${product.originalPrice.toFixed(2)} USD
        </p>
      </div>

      <div className="space-y-12">
        <div className="flex items-center space-x-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-gray-900 fill-gray-900"
              />
            ))}
          </div>
          <span className="font-semibold">{product.rating}&nbsp;Stars</span>
          <span className="text-gray-600">({product.numberOfReviews} reviews)</span>
        </div>

        <div>
          <h3 className="font-bold text-xl pb-2 text-black-800">
            BENEFITS
          </h3>
          <ul className="list-disc flex flex-col gap-1 pl-4 font-medium text-lg">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl pb-2 text-black-800">
            GET YOUR LIFE BACK
          </h3>
          <p className="font-regular text-lg">
            Dialed&apos;s unique formulation works on the subconscious level, helping you overcome limiting beliefs and negative habits, all while promoting a balanced circadian rhythm. 
          </p>
        </div>

        <div className="w-full h-px bg-gray-200 rounded-full" />
        
        <div className="flex flex-col gap-4 items-start pb-4">
          <Button 
            size="lg" 
            className="w-full md:w-auto text-lg font-medium h-14"
            onClick={() => window.location.href = 'https://eons.com/dialed'}
          >
            <ShoppingCart className="mr-2 h-5 w-5" /> Buy DIALED on Eons.com
          </Button>
          <span className="font-sans italic text-gray-700 text-xs">A 10% discount will be automatically applied to your first purchase when using any link on this page.</span>
        </div>
      </div>
    </div>
  )
}

