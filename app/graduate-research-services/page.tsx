'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent } from '@/app/components/ui/card'
import { PageWrapper } from '@/app/components/PageWrapper'
import { BookOpen, FlaskConical, BarChart, Glasses, Edit, BookType, Presentation, Clock } from 'lucide-react'

export default function GraduateResearchServices() {
  const searchParams = useSearchParams()
  const services = [
    { id: 'office-hours', icon: Clock, title: 'Office Hours' },
    { id: 'coaching', icon: BookOpen, title: 'Dissertation Coaching' },
    { id: 'scientific-review', icon: FlaskConical, title: 'Scientific Review' },
    { id: 'statistics', icon: BarChart, title: 'Statistics (Methods Review, Data Analysis, and Results Interpretation)' },
    { id: 'editorial-review', icon: Glasses, title: 'Editorial Review' },
    { id: 'graduate-writing-coach', icon: Edit, title: 'Graduate Writing Coach' },
    { id: 'defense-preparation', icon: Presentation, title: 'Defense Preparation' },
    { id: 'publication', icon: BookType, title: 'Publishing in Journal' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    // Wait a bit for the page to fully render before scrolling
    const timeoutId = setTimeout(() => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [searchParams])

  return (
    <PageWrapper>
      <div className="space-y-12 max-w-4xl mx-auto px-4 py-12">
        <h1 className="page-title">Graduate Research Services</h1>

        <div className="page-section -mx-8 md:-mx-16 bg-background/50 p-8 md:p-12">
          <h2 className="section-title text-center">How Can I Help?</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <p className="content-text text-lg leading-relaxed">
              It is extremely challenging to earn a graduate degree while still maintaining a job and personal life.
              Would you like to have a personal coach who is interested in your research and willing to help you
              succeed? I can provide a steady, reliable voice to help you navigate the stages of research for your
              thesis-dissertation.
            </p>
            <p className="content-text text-lg leading-relaxed">
              The journey is long - from graduate course work, topic search, lit review, proposal
              development, methods construction, prospectus writing and defense, IRB submission, data collection,
              statistical analyses and interpretation, presentation of results, drawing conclusions, dissertation write-
              up, defense preparation, publication, and eventually graduation. It is a daunting challenge you have
              accepted; few even attempt it, and many of those who do, are not successful.
            </p>
            <p className="content-text text-xl font-medium text-primary/90 leading-relaxed">
              <span className="bg-primary/20 block px-3 py-2 rounded-lg">
                But you are determined to succeed and graduate. That's why you're here.
              </span>
            </p>
            <p className="content-text text-lg leading-relaxed">
              Here are a few different ways I might be of help as your Graduate Research Coach.
            </p>
          </div>
        </div>

        <nav className="quick-nav" aria-label="Quick navigation">
          {services.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="quick-nav-button"
            >
              {title}
            </button>
          ))}
        </nav>

        <div className="space-y-8">
          <Card id="office-hours" className="scroll-mt-24">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Clock className="w-6 h-6" />
                <span>Office Hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                My virtual door is open for you to schedule a Zoom call anytime. It is best if I can receive information or
                questions before meeting so I can be prepared to help you work through the issue.
              </p>
            </CardContent>
          </Card>
        </div>

        {services.slice(1).map(({ id, icon: Icon, title }) => (
          <div key={id} id={id} className="page-section scroll-mt-20 relative group">
            <div className="absolute top-6 right-6">
              <div className="p-3 rounded-full bg-secondary transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110 transform relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:animate-shimmer" />
                <Icon className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-primary-dark relative z-10" />
              </div>
            </div>
            <div className="pr-24">
              <h2 className="section-title">{title}</h2>
              <div className="content-text">
                {id === 'coaching' && (
                  <p>
                    This type of coaching is less academic, and more focused on your approach to conducting graduate
                    research, while managing all the other stuff. I can share effective organizational and time management
                    strategies to help guide and motivate you to succeed. Goal setting, outlining, mapping, scheduled
                    meetings, and procrastination avoidance can be a focus. I can also be an empathetic ear for venting
                    about your Chair.
                  </p>
                )}
                {id === 'scientific-review' && (
                  <>
                    <p className="mb-4">
                      I am adept at seeing the big picture, and the practical steps needed for you to get graduate. I can 
                      provide actionable research advice and consultation to improve your study to ensure viability and 
                      scientific integrity (this type of consultation is best done early at the proposal phase).
                    </p>
                    <p>
                      Research project mapping is helpful to stay on track, and to understand where you are in the process. 
                      Knowing what tasks are ahead allows for early preparation. For example, an IRB application can be 
                      drafted while waiting for committee member feedback on the proposal. We can also work on your 
                      professional development and presentation skills.
                    </p>
                  </>
                )}
                {id === 'statistics' && (
                  <>
                    <p className="mb-4">
                      I can review the preparation of your methods section so you have a valid functioning study. Quantitative 
                      research is my expertise, and qualitative research I have some good grounding in. Early development 
                      and mapping of the proposed statistical interactions is essential. Variable identification and classification 
                      are key aspects we can explore.
                    </p>
                    <p className="mb-4">
                      For your data, I can offer potential sources of secondary data, or share 
                      methods for primary data collection. I can also help with data review, variable definitions, analysis 
                      mapping, hypothesis testing, interpretation of results, and articulating the conclusions based on results 
                      generated.
                    </p>
                    <p>
                      I can also help with the crucial step of accurately interpreting and presenting your study 
                      results for the final chapters of your thesis or dissertation.
                    </p>
                  </>
                )}
                {id === 'editorial-review' && (
                  <p>
                    Editorial Reviews focus on the grammar, formatting, references, flow of content, sentence structure,
                    and chapter construction and completeness. The detailed review will ensure you have satisfied all the
                    required protocols. Professional editing pleases committee members because it allows them to focus
                    on the content. Editorial Reviews can be provided for your proposal, IRB application, and thesis-
                    dissertation manuscript. You want to be proud of your final thesis-dissertation, and a professional
                    Editorial Review sharpens the edges before publication.
                  </p>
                )}
                {id === 'graduate-writing-coach' && (
                  <>
                    <p className="mb-4">
                      Dissertation and thesis reviews can be conducted at different levels. A basic review can be focused on 
                      the grammar, content flow, formatting, references, and chapter completeness – all needed for 
                      publication. Or a review can be focused on the scientific content including methods review, data 
                      analyses and presentation of results.
                    </p>
                    <p className="mb-4">
                      Or a full review can be conducted of your proposal or completed 
                      dissertation or thesis. Editorial reviews of your proposal (Introduction, Literature Review, Methods) can 
                      help ensure the study is ready for defense and execution. Review and consultation of IRB applications 
                      can help ensure fast approval.
                    </p>
                    <p>
                      Editorial review of your Results and Discussion sections helps ensure 
                      success for your final defense. You want to be proud of your final thesis or dissertation, and a 
                      professional editor can help sharpen the edges before publication.
                    </p>
                  </>
                )}
                {id === 'defense-preparation' && (
                  <>
                    <p className="mb-4">
                      <span className="font-semibold text-primary">Scientific Writing:</span> I can provide strategies and approaches to improve and refine your writing skills to 
                      follow scientific standards and protocols.
                    </p>
                    <p className="mb-4">
                      <span className="font-semibold text-primary">Scientific Formatting:</span> A proposal, thesis and dissertation have specific formatting requirements for the 
                      manuscript, graphs and for the references. A thorough review ensures required protocols are satisfied.
                    </p>
                    <p>
                      <span className="font-semibold text-primary">Publishing in a Journal:</span> Publishing your research in a peer-reviewed journal is not a necessary step to 
                      earn your degree, but it is rewarding (professionally and personally) to have your research available to 
                      the world. The process can be long and frustrating, and I can assist in strategy, reviews, and responding 
                      to the comments and feedback from journal reviewers.
                    </p>
                  </>
                )}
                {id === 'publication' && (
                  <p>
                    Publishing your research in a peer-reviewed journal is not a necessary step to earn your degree, but it is
                    rewarding (professionally and personally) to have your research available to the world. The process is
                    long and frustrating, but I can help in strategy, reviews, and responding to the comments and feedback
                    from journal reviewers.
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}
