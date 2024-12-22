import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-primary">Graduate Research Coach</h3>
            <p className="text-sm">Empowering graduate students to complete their research and earn their degree.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/graduate-research-services" className="hover:text-accent transition-colors">Graduate Research Services</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Me</Link></li>
              <li><Link href="/student-reviews" className="hover:text-accent transition-colors">Student Reviews</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2 text-primary">Contact</h3>
            <p className="text-sm">Email: info@graduateresearchcoach.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GraduateResearchCoach.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

