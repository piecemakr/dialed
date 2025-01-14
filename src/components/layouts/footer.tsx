'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ImageGallery } from '../elements/image-gallery'
import { ProductDetails } from '../elements/product-content'
import { product } from '../types'

export default function Footer() {
  return (
    <section className="relative flex flex-col gap-48 pt-[8rem] pb-[3rem] overflow-clip">
      <Image 
        src='/icon.png'
        alt='Icon'
        width={1000}
        height={1000}
        className='absolute top-[25%] left-[50%] -z-10 opacity-[3%]'
      />
      <div className="container">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-[6rem] items-start">
          <ImageGallery images={product.images} />
          <ProductDetails product={product} />
        </div>
      </div>
      <div className="container flex flex-col gap-12">
        <div className="flex flex-roww-full justify-between items-center">
          <Link
            href="/"
            className="hover:opacity-60 transition-all"
          >
            <Image 
              src="/logo.webp" 
              alt="Logo" 
              width={120} 
              height={100}
              className=""
              />
          </Link>
          <div className="hidden md:flex space-x-8 font-medium ">
            <Link href="#science" className="text-gray-800 hover:text-gray-600 ">The Science</Link>
            <Link href="#benefits" className="text-gray-800 hover:text-gray-600">Benefits</Link>
            <Link href="#ingredients" className="text-gray-800 hover:text-gray-600">Ingredients</Link>
            <Link href="#reviews" className="text-gray-800 hover:text-gray-600">Reviews</Link>
            <Link href="#faq" className="text-gray-800 hover:text-gray-600">FAQ</Link>
          </div>
        </div>
        <p className="text-xs font-bold uppercase tracking-[2px]">
          © {new Date().getFullYear()} Eons, All rights reserved.
          <span className="text-xs font-thin pl-2 uppercase text-gray-400 tracking-[2px]">
          &nbsp;Safe Checkout Guaranteed.
        </span>
        </p>
      </div>
    </section>
  )
}
