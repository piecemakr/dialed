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
  shortDescription: 'Get Dialed In and conquer Stress, Fear, and Anxiety Naturally',
  benefits: [
    'Conquer Stress, Fear, and Anxiety',
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
      src: 'https://m6abtmz27b.ufs.sh/f/JIbaFvH0FeDqZDbCfuY2JuRkvLV5fOiCWlxdETrsGajqeFSn',
      alt: 'The front of the Eons DIALED Product'
    },
    'image2': {
      src: 'https://m6abtmz27b.ufs.sh/f/JIbaFvH0FeDqaEO9OWcHs7zYQ3ZVwd1WPLfUcFvR92b8lSOe',
      alt: 'A photo of the Eons Dialed Product opened showing the quicksome tablets inside'
    },
    'image3': {
      src: 'https://m6abtmz27b.ufs.sh/f/JIbaFvH0FeDq34y4US9C9KPhfxQIUGgWlmt7AOEzJoXM60pR',
      alt: 'A stack of three Eons Dialed products'
    },
    'image4': {
      src: 'https://m6abtmz27b.ufs.sh/f/JIbaFvH0FeDq3bpXwr9C9KPhfxQIUGgWlmt7AOEzJoXM60pR',
      alt: 'Eons DIALED Supplement Facts'
    },
  }
}

