import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DIALED Product by Eons',
    short_name: 'Dialed by Eons',
    description: 'Discover Dialed by Eons, a premium amanita mushroom-based supplement designed to help you naturally manage stress, depression, and anxiety.',
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