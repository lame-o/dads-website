'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-accent transition-colors">
          <Image
            src="/life-preserver.png"
            alt="Life Preserver"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span>GraduateResearchCoach.com</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6">
            {[
              { name: 'Home', path: '/' },
              { name: 'Graduate Research Services', path: '/graduate-research-services' },
              { name: 'About Me', path: '/about' },
              { name: 'Student Reviews', path: '/student-reviews' },
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.path}
                  className="text-foreground hover:text-primary transition-colors px-2 py-1 rounded"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button 
            variant="default" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule Consultation
          </Button>
        </nav>
      </div>
    </header>
  )
}
