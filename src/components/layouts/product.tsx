'use client'

import Image from 'next/image'
import { ImageGallery } from '~/components/elements/image-gallery'
import { ProductDetails } from '~/components/elements/product-content'
import { product } from '~/components/types'

export default function Product() {
  return (
    <section id="learn-more" className="section flex flex-col gap-48 relative overflow-clip">
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
    </section>
  )
}

