'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/components/ui/button'

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Eons Logo"
                width={142}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 font-medium ">
            <Link href="#science" className="text-gray-800 hover:text-gray-600 ">The Science</Link>
            <Link href="#benefits" className="text-gray-800 hover:text-gray-600">Benefits</Link>
            <Link href="#ingredients" className="text-gray-800 hover:text-gray-600">Ingredients</Link>
            <Link href="#reviews" className="text-gray-800 hover:text-gray-600">Reviews</Link>
            <Link href="#faq" className="text-gray-800 hover:text-gray-600">FAQ</Link>
          </div>
          <div className="flex items-center">
            <Button variant="cta" size="lg">
              Buy Eons DIALED
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav

