export interface ProductImage {
  src: string
  alt: string
}

export interface Product {
  name: string
  description: string
  shortDescription: string
  benefits: string[]
  price: number
  originalPrice: number
  images: Record<string, ProductImage>
  rating: number
  numberOfReviews: number
}

export const product: Product = {
  name: 'DIALED',
  description: 'A unique dialing code for the EONS ecosystem',
  shortDescription: 'Get Dialed In and Combat Stress, Depression, and Anxiety Naturally',
  benefits: [
    'Directly Combats Stress, Depression, and Anxiety',
    'Powered by Quicksome™ Technology',
    'Zero-Psychoactive Effects',
    'Enhanced Focus, Creativity, and Menal Clarity',
  ],
  price: 124.00,
  originalPrice: 144.00,
  rating: 5,
  numberOfReviews: 145,
  images: {
    'image1': {
      src: '/sample1.webp',
      alt: 'The front of the Eons DIALED Product'
    },
    'image2': {
      src: '/sample2.webp',
      alt: 'Product 2'
    },
    'image3': {
      src: '/sample3.webp',
      alt: 'Product 3'
    },
    'image4': {
      src: '/sample4.webp',
      alt: 'Product 4'
    },
  }
}

