'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { Menu, X } from 'lucide-react'

import { eonsDiscount } from "~/components/global/discount"

import { track } from '@vercel/analytics';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { href: "#benefits", text: "Benefits" },
    { href: "#ingredients", text: "Ingredients" },
    { href: "#reviews", text: "Reviews" },
    { href: "#faq", text: "FAQ" },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Eons Logo"
                width={142}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-800 hover:text-gray-600">
                {link.text}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => window.location.href = eonsDiscount}
              variant="cta" 
              className="hidden sm:inline-flex"
            >
              Buy Eons DIALED
            </Button>
            <button
              className="md:hidden text-gray-800 hover:text-gray-600"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-800 hover:text-gray-600"
                onClick={() => setIsMobileMenuOpen(false)}
                
              >
                {link.text}
              </Link>
            ))}
            <Button
              onClick={() => {
                window.location.href = eonsDiscount
                setIsMobileMenuOpen(false)
                track('Purchase', { location: 'navbar' });
              }}
              variant="cta" 
              size="sm"
              className="w-full"
            >
              Buy Eons DIALED
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav
