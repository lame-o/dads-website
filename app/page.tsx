/* eslint-disable react/no-unescaped-entities */

'use client'

import Image from 'next/image'
import { SmoothLink } from '@/components/ui/smooth-link'
import { BookOpen, FlaskConical, BarChart, Glasses, Edit, BookType, PresentationIcon as PresentationChart, Clock } from 'lucide-react'
import { useEffect } from 'react'
import { smoothScrollToHash } from '@/lib/smoothScroll'
import { PageWrapper } from '@/app/components/PageWrapper'

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      smoothScrollToHash(hash)
    }
  }, [])

  const getBorderColor = (index: number) => {
    const colors = ['border-cyan-200', 'border-teal-200', 'border-blue-200', 'border-green-200', 'border-emerald-200', 'border-sky-200', 'border-indigo-200'];
    return colors[index % colors.length];
  };

  return (
    <PageWrapper>
      <section className="hero-section w-screen relative -mx-[calc((100vw-100%)/2)] min-h-[500px]">
        <Image
          src="/Dissertation-Coach.jpg"
          alt="Dissertation Coach Background"
          fill
          className="object-cover opacity-100 object-[center_7%]"
          sizes="100vw"
          quality={100}
          priority
        />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h1 className="hero-title text-5xl md:text-7xl">Graduate Research Coach</h1>
          <p className="hero-description mx-auto text-center text-xl md:text-2xl max-w-4xl">
            Are you a graduate student looking for guidance to complete your degree? At any level of graduate research, I can help support you to earn your degree.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mt-8">
            <div className="relative group">
              <Image 
                src="/ryan-dwight-Graduate-Research-Coach.jpg" 
                alt="Ryan H. Dwight, PhD - The Graduate Research Coach" 
                width={220} 
                height={220} 
                className="rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-105 ring-2 ring-primary/20 ring-offset-2 ring-offset-background" 
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-5xl font-semibold mb-2 bg-white bg-clip-text text-transparent pb-1">Ryan H. Dwight, PhD</h2>
              <p className="text-2xl text-muted-foreground">Graduate Research Coach</p>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-16 mt-16">
        <section className="bg-secondary/50 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">How Can I Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <SmoothLink 
              href="/graduate-research-services#office-hours"
              className={`
                bg-background text-foreground p-6 rounded-lg
                shadow-[0_4px_6px_-1px_rgba(0,120,180,0.1),0_2px_4px_-1px_rgba(0,120,180,0.06)]
                border transition-all duration-300 ease-in-out
                hover:shadow-[0_10px_15px_-3px_rgba(0,120,180,0.1),0_4px_6px_-2px_rgba(0,120,180,0.05)]
                hover:border-primary hover:bg-primary/5
                hover:scale-105 transform
                flex flex-col items-center justify-center space-y-4
                group
                ${getBorderColor(0)}
              `}
            >
              <div className="p-3 rounded-full bg-secondary transition-colors duration-300 group-hover:bg-primary/10">
                <Clock className="w-6 h-6 text-primary group-hover:text-primary/80" />
              </div>
              <span className="text-lg font-semibold text-center transition-colors duration-300 group-hover:text-primary-dark relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">Office Hours</span>
            </SmoothLink>
            {[
              { name: 'Coaching', icon: BookOpen, id: 'coaching' },
              { name: 'Scientific Review', icon: FlaskConical, id: 'scientific-review' },
              { name: 'Statistics', icon: BarChart, id: 'statistics' },
              { name: 'Editorial Review', icon: Glasses, id: 'editorial-review' },
              { name: 'Graduate Writing Coach', icon: Edit, id: 'graduate-writing-coach' },
              { name: 'Defense Preparation', icon: PresentationChart, id: 'defense-preparation' },
              { name: 'Publication', icon: BookType, id: 'publication' },
            ].map((service, index) => (
              <SmoothLink 
                key={service.name} 
                href={`/graduate-research-services#${service.id}`}
                className={`
                  bg-background text-foreground p-6 rounded-lg
                  shadow-[0_4px_6px_-1px_rgba(0,120,180,0.1),0_2px_4px_-1px_rgba(0,120,180,0.06)]
                  border transition-all duration-300 ease-in-out
                  hover:shadow-[0_10px_15px_-3px_rgba(0,120,180,0.1),0_4px_6px_-2px_rgba(0,120,180,0.05)]
                  hover:border-primary hover:bg-primary/5
                  hover:scale-105 transform
                  flex flex-col items-center justify-center space-y-4
                  group
                  ${getBorderColor(index + 1)}
                `}
              >
                <div className="p-3 rounded-full bg-secondary transition-colors duration-300 group-hover:bg-primary/10">
                  <service.icon className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-primary-dark" />
                </div>
                <span className="text-lg font-semibold text-center transition-colors duration-300 group-hover:text-primary-dark relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">{service.name}</span>
              </SmoothLink>
            ))}
          </div>
        </section>

        <section className="bg-background p-8 rounded-lg shadow-lg interactive-hover">
          <h2 className="text-3xl font-bold mb-6 text-primary">Greetings fellow researcher,</h2>
          <div className="space-y-4 text-foreground/80">
            <p className="text-lg leading-relaxed">
              My name is <span className="font-semibold text-primary">Dr. Dwight</span>, and I here as a calm clear voice to help you navigate the stormy waters of higher
              education 🌊 I have <span className="font-semibold">decades of experience</span> working with masters and doctoral students on improving their
              thesis-dissertations, and I can help you to complete the process and earn your degree. Contact me if
              you want an experienced <span className="font-semibold text-primary">Graduate Research Coach</span>, PhD advisor or any of the graduate research
              services I can provide to help you get that degree in your hands! 🙌
            </p>
            <p className="text-lg leading-relaxed">
            ❌ Other dissertation coaches can only provide organizational or emotional support, and they avoid your
              methods, statistics and results.
            </p>
            <p className="text-lg leading-relaxed">
            ❌ Other dissertation services can provide statistical outputs for you, but
              are unable to help you interpret the results nor prepare to defend the results.
            </p>
            <p className="text-lg leading-relaxed">
              ✔️ As a <span className="font-semibold text-primary">Graduate Research
              Coach</span>, <span className="font-medium">I can provide a range of graduate student support services from</span> <span className="font-bold">dissertation coach</span>, <span className="font-semibold">academic
              advisor</span>, <span className="font-semibold">scientific editor</span>, <span className="font-semibold">methods consultant</span>, <span className="font-semibold">statistics</span>, <span className="font-semibold">IRB submission prep</span>, <span className="font-semibold">defense prep</span>, <span className="font-semibold">publication</span>,
              and more. I understand the entire process (masters, doctorate, PhD) from my extensive experience as a
              researcher, professor, Committee Chair, IRB member, and Director of two doctoral programs. I am
              passionate about research, and I love teaching others the process so they can achieve their goals 🏆
            </p>
            <p className="text-lg leading-relaxed">
              Students appreciate my teaching style as I synthesize complex research concepts and explain them in a
              straightforward manner (<SmoothLink href="/student-reviews" className="text-accent underline">Student Reviews</SmoothLink>). I am an educator by nature and am eager to help anyone
              who is hungry for knowledge and wanting to move forward. I have successfully mentored students from
              around the world, and I'm comfortable working with everyone. If you're a researcher in the fields of
              <span className="font-semibold"> health 💊</span>, <span className="font-semibold"> science 🧪</span>, <span className="font-semibold"> economics 📈</span>, or <span className="font-semibold"> education 🎓</span>, we can work together!
            </p>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
