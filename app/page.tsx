'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SmoothLink } from '@/components/ui/smooth-link'
import { BookOpen, FlaskConical, BarChart, Glasses, Edit, BookType, PresentationIcon as PresentationChart } from 'lucide-react'
import { useEffect } from 'react'
import { smoothScrollToHash } from '@/lib/smoothScroll'
import { PageWrapper } from '@/app/components/PageWrapper'

export default function Home() {
  useEffect(() => {
    smoothScrollToHash()
  }, [])

  const getBorderColor = (index: number) => {
    const colors = ['border-cyan-200', 'border-teal-200', 'border-blue-200', 'border-green-200', 'border-emerald-200', 'border-sky-200', 'border-indigo-200'];
    return colors[index % colors.length];
  };

  return (
    <PageWrapper>
      <div className="space-y-16">
        <section className="hero-section">
          <div className="hero-content container mx-auto px-4">
            <h1 className="hero-title">The Graduate Research Coach</h1>
            <p className="hero-description mx-auto text-center">
              Are you a graduate student looking for guidance to complete your degree? At any level of graduate research, I can help <span className="hero-highlight">empower you to completion</span>.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 mt-12">
              <div className="relative group">
                <Image 
                  src="/ryan-dwight.jpg" 
                  alt="Ryan H. Dwight, PhD" 
                  width={240} 
                  height={240} 
                  className="rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-105 ring-2 ring-primary/20 ring-offset-2 ring-offset-background" 
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ryan H. Dwight, PhD</h2>
                <p className="text-xl text-muted-foreground">Graduate Research Coach</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/50 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">How Can I Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [&>*:last-child]:lg:col-start-2">
            {[
              { name: 'Coaching', icon: BookOpen, id: 'coaching' },
              { name: 'Scientific Consulting', icon: FlaskConical, id: 'scientific-consulting' },
              { name: 'Statistics', icon: BarChart, id: 'statistics' },
              { name: 'Academic Review', icon: Glasses, id: 'academic-review' },
              { name: 'Editing', icon: Edit, id: 'editing' },
              { name: 'Writing and Publication', icon: BookType, id: 'writing-and-publication' },
              { name: 'Defense Preparation', icon: PresentationChart, id: 'defense-preparation' },
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
                  ${getBorderColor(index)}
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
            <p>
              I am Dr. Dwight, a calm clear voice to help you navigate the academic and emotional obstacles and 
              challenges of higher education. With decades of experience working with masters and doctoral students 
              on improving their thesis or dissertation, I can mentor or coach you to complete the process and earn 
              your degree.
            </p>
            <p>
              Some dissertation coaches can only provide organizational or emotional support, and they avoid your 
              methods, statistics and results. Some dissertation services can provide statistical outputs for you, but 
              are unable to help you interpret the results nor prepare to defend those results. As a Graduate Research 
              Coach, I can provide a range of graduate student support services from dissertation coach, academic 
              advisor, scientific editor, methods consultant, statistics, IRB submission prep, defense prep, publication, 
              and more. I understand the entire process (masters, doctorate, PhD) from my extensive experience as a 
              researcher, Committee Chair, IRB member, and Director of two doctoral programs. I am passionate 
              about research, and I love teaching others the process so they can achieve their goals.
            </p>
            <p>
              Students appreciate my teaching style as I synthesize complex research concepts and explain them in a 
              straightforward manner (<SmoothLink href="/student-reviews" className="text-accent hover:underline">Student Reviews</SmoothLink>). I am an educator by nature and am eager to help anyone 
              who is hungry for knowledge and wanting to move forward. I have successfully mentored students from 
              around the world, and I'm comfortable working with everyone. If you're a researcher in the fields of 
              health, science, economics, or education, we can work together.
            </p>
            <p>
              Fees are dependent on the type and level of Graduate Research Services you desire. Every project is 
              different, so we can meet for a free 30-minute consultation and discuss your individual situation. Then 
              if you want to enlist my services, together we can develop a plan with clear expectations and associated 
              costs pre-determined. We will always discuss and agree on compensation before work is conducted. 
              Contact me if you want an experienced Graduate Research Coach, PhD advisor or any of the graduate 
              research services I can provide to help you get that degree in your hands.
            </p>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
