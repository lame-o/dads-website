'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Graduate Research Services', path: '/graduate-research-services' },
    { name: 'About Me', path: '/about' },
    { name: 'Coaching Fees', path: '/coaching-fees' },
    { name: 'Student Reviews', path: '/student-reviews' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = () => {
    setIsOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-accent transition-colors">
          <Image
            src="/Graduate-Research-Coach.png"
            alt="Graduate Research Coach - Phd Coach, graduate writing coach, dissertation editor, graduate writing editor, degree completion, scientific review"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="hidden sm:inline">GraduateResearchCoach.com</span>
          <span className="sm:hidden">GRC</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <ul className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
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
          
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="text-primary text-lg font-bold mb-4">Graduate Research Coach</SheetTitle>
                <div className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={handleNavigation}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Button 
            variant="default" 
            className="bg-accent text-accent-foreground hover:bg-accent/75 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="mailto:ryanhdwight@yahoo.com?subject=Request%20for%20Free%2030-Minute%20Consultation">Schedule Consultation</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
