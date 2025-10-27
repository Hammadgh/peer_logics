import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PeerLogics - End-to-End Product Delivery',
    short_name: 'PeerLogics',
    description: 'Professional software development company specializing in web development, e-commerce, UI/UX design, medical billing, and HR management solutions.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/assests/peerlogics.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}



