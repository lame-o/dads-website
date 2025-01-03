import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Image
                src="/Graduate-Research-Coach.png"
                alt="Graduate Research Coach - Phd Coach, graduate writing coach, dissertation editor, graduate writing editor, degree completion, scientific review"
                width={28}
                height={28}
                className="md:w-[32px] md:h-[32px]"
              />
              <h3 className="text-lg md:text-xl font-semibold text-primary">Graduate Research Coach</h3>
            </div>
            <div className="mt-3 md:mt-4 text-center md:text-left md:pl-[44px]">
              <p className="text-muted-foreground italic">Feeling lost at sea?</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent hover:underline transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/graduate-research-services" className="text-muted-foreground hover:text-accent hover:underline transition-colors duration-200">
                  Graduate Research Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent hover:underline transition-colors duration-200">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/coaching-fees" className="text-muted-foreground hover:text-accent hover:underline transition-colors duration-200">
                  Coaching Fees
                </Link>
              </li>
              <li>
                <Link href="/student-reviews" className="text-muted-foreground hover:text-accent hover:underline transition-colors duration-200">
                  Student Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-primary">Contact</h3>
            <div className="space-y-2 md:space-y-3 text-muted-foreground">
              <p>
                <a 
                  href="mailto:ryanhdwight@yahoo.com?subject=Request%20for%20Free%2030-Minute%20Consultation" 
                  className="hover:text-accent hover:underline transition-colors duration-200"
                >
                  Schedule a Free Consultation
                </a>
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-primary/10 text-center text-muted-foreground text-sm md:text-base">
          <p>&copy; {new Date().getFullYear()} GraduateResearchCoach.com</p>
        </div>
      </div>
    </footer>
  )
}
