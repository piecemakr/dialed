import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DIALED Product by Eons',
    short_name: 'DIALED by Eons',
    description: 'Discover DIALED by Eons, a premium amanita mushroom-based supplement designed to help you naturally manage stress, fear, and anxiety.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}