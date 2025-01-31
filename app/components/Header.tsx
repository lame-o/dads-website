/* eslint-disable @typescript-eslint/no-unused-vars */

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
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="flex-none">
          <Link href="/" className="flex items-center space-x-1 text-2xl font-bold text-primary hover:text-accent transition-colors">
            <Image
              src="/Graduate-Research-Coach.png"
              alt="Graduate Research Coach - Phd Coach, graduate writing coach, dissertation editor, graduate writing editor, degree completion, scientific review"
              width={40}
              height={40}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="hidden 2xl:inline text-base xl:text-2xl">GraduateResearchCoach.com</span>
            <span className="hidden md:inline 2xl:hidden text-base">GRC</span>
            <span className="md:hidden text-base">GRC</span>
          </Link>
        </div>
        <div className="flex-1 flex justify-end">
          <nav className="flex items-center">
            <ul className="hidden lg:flex items-center justify-between gap-6 xl:gap-8">
              {navigationItems.map((item) => (
                <li key={item.name} className="shrink-0">
                  <Link 
                    href={item.path}
                    className={`text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm xl:text-base whitespace-nowrap ${
                      pathname === item.path ? 'bg-accent/10 text-primary' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="shrink-0">
                <Button 
                  variant="default" 
                  className="bg-accent text-accent-foreground hover:bg-accent/85 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_2px_4px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),0_4px_6px_-4px_rgba(0,0,0,0.3)] transition-all duration-300 text-sm xl:text-base whitespace-nowrap"
                  asChild
                >
                  <a href="mailto:ryanhdwight@yahoo.com?subject=Request%20for%20Free%2030-Minute%20Consultation" className="px-3 py-2">Schedule Consultation</a>
                </Button>
              </li>
            </ul>
            {/* Mobile/Tablet Menu Button - Show on screens smaller than lg */}
            <div className="lg:hidden flex items-center gap-2 order-last">
              <Button 
                variant="default" 
                className="bg-accent text-accent-foreground hover:bg-accent/85 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_2px_4px_-2px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),0_4px_6px_-4px_rgba(0,0,0,0.3)] transition-all duration-300 text-sm whitespace-nowrap order-first"
                asChild
              >
                <a href="mailto:ryanhdwight@yahoo.com?subject=Request%20for%20Free%2030-Minute%20Consultation" className="px-3 py-2">Schedule Consultation</a>
              </Button>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
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
          </nav>
        </div>
      </div>
    </header>
  )
}
