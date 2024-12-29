import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/Graduate-Research-Coach.png"
                alt="Graduate Research Coach - Phd Coach, graduate writing coach, dissertation editor, graduate writing editor, degree completion, scientific review"
                width={32}
                height={32}
              />
              <h3 className="text-xl font-semibold text-primary">Graduate Research Coach</h3>
            </div>
            <div className="mt-4 pl-[44px]">
              <p className="text-muted-foreground italic">Feeling lost at sea?</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-3">
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
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
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
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GraduateResearchCoach.com</p>
        </div>
      </div>
    </footer>
  )
}
