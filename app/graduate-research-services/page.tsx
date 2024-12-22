'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent } from '@/app/components/ui/card'
import { PageWrapper } from '@/app/components/PageWrapper'

export default function GraduateResearchServices() {
  const searchParams = useSearchParams()
  const services = [
    'coaching',
    'scientific-consulting',
    'statistics',
    'academic-review',
    'editing',
    'writing-and-publication',
    'defense-preparation'
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

        <div className="page-section">
          <h2 className="section-title">How Can I Help?</h2>
          <div className="space-y-4">
            <p className="content-text">
              I understand the challenges of seeking a graduate degree while still needing to work and maintain a 
              personal home life. Depending on your needs, I can be a steady voice to help you navigate any or all of 
              the stages of research for a thesis or dissertation.
            </p>
            <p className="content-text">
              The journey is long from course work, topic focus, lit review, proposal development, methods construction, 
              prospectus writing and defense, IRB submission, data collection, statistical analyses and interpretation, 
              presentation of results, drawing conclusions, dissertation write-up, defense preparation, publication, 
              and eventually graduation. It's a challenging adventure you have embarked upon, few attempt it, and many who do, are not successful.
            </p>
            <p className="content-text">
              You are a graduate research student determined to succeed and graduate. That's why you're here. 
              There are many ways I can be of help on your quest. You will not be farmed off to an unqualified 
              contractor, I will work with you directly, fully focused on helping you succeed.
            </p>
            <p className="content-text">
              As a Graduate Research Coach, below is the range of potential areas I may be of assistance. 
              You decide how best to engage my graduate research services.
            </p>
          </div>
        </div>

        <nav className="quick-nav" aria-label="Quick navigation">
          {services.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="quick-nav-button"
            >
              {id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </nav>

        {services.map((id) => (
          <div key={id} id={id} className="page-section scroll-mt-20">
            <h2 className="section-title">{id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
            <div className="content-text">
              {id === 'coaching' && (
                <p>
                  I can provide organizational and time management strategies to help empower and motivate you to 
                  succeed. Goal setting and procrastination avoidance can be a focus. I can also be an empathetic ear to 
                  vent about your Chair or other challenges you are juggling. This role is more focused on your approach 
                  to conducting graduate research while managing external responsibilities.
                </p>
              )}
              {id === 'scientific-consulting' && (
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
                <p>
                  I can review the preparation of your methods section so you have a valid functioning study. Quantitative 
                  research is my expertise, and qualitative research I have some good grounding in. Early development 
                  and mapping of the proposed statistical interactions is essential. Variable identification and classification 
                  are key aspects we can explore. For your data, I can offer potential sources of secondary data, or share 
                  methods for primary data collection. I can also help with data review, variable definitions, analysis 
                  mapping, hypothesis testing, interpretation of results, and articulating the conclusions based on results 
                  generated. I can also help with the crucial step of accurately interpreting and presenting your study 
                  results for the final chapters of your thesis or dissertation.
                </p>
              )}
              {id === 'academic-review' && (
                <p>
                  Academic consultation and review of your proposal and final dissertation or thesis is helpful to ensure 
                  success. Addressing the concerns of committee members is critical. My feedback will be thorough and 
                  provide suggestions to move forward when obstacles are presented.
                </p>
              )}
              {id === 'editing' && (
                <p>
                  Dissertation and thesis reviews can be conducted at different levels. A basic review can be focused on 
                  the grammar, content flow, formatting, references, and chapter completeness – all needed for 
                  publication. Or a review can be focused on the scientific content including methods review, data 
                  analyses and presentation of results. Or a full review can be conducted of your proposal or completed 
                  dissertation or thesis. Editorial reviews of your proposal (Introduction, Literature Review, Methods) can 
                  help ensure the study is ready for defense and execution. Review and consultation of IRB applications 
                  can help ensure fast approval. Editorial review of your Results and Discussion sections helps ensure 
                  success for your final defense. You want to be proud of your final thesis or dissertation, and a 
                  professional editor can help sharpen the edges before publication.
                </p>
              )}
              {id === 'writing-and-publication' && (
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
              {id === 'defense-preparation' && (
                <p>
                  A professional PowerPoint presentation and well-rehearsed verbal script help ensure your successful 
                  defense of your proposal and final dissertation or thesis. I have developed a guide for defense 
                  presentations that will help you construct your presentation, and prepare for the defense.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}
