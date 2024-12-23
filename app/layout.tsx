import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Graduate Research Coach',
  description: 'Graduate Research Coach - Phd Coach, graduate writing coach, dissertation editor, graduate writing editor, degree completion, scientific review',
  icons: {
    icon: '/life-preserver.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <div className="fixed inset-0 bg-background" />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8 pt-20">
            {children}
          </main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  )
}
