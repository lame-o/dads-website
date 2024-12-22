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
              It is <span className="font-semibold text-primary">extremely challenging</span> to earn a graduate degree while still maintaining a <span className="font-semibold text-primary">job and personal life</span>.
              Would you like to have a <span className="font-semibold bg-primary/10 px-1 rounded">personal coach</span> who is interested in your research and willing to help you
              succeed? I can provide a <span className="font-semibold italic">steady, reliable voice</span> to help you navigate the stages of research for your
              <span className="text-primary"> thesis-dissertation</span> 📚
            </p>
            <p className="content-text text-lg leading-relaxed">
              The journey is long - beginning from
              <span className="block pl-4 my-2 border-l-2 border-primary/30 text-primary/90">
                <span className="font-semibold">graduate course work</span> → 
                <span className="font-semibold"> topic search</span> → 
                <span className="font-semibold"> lit review</span> → 
                <span className="font-semibold"> proposal development</span> → 
                <span className="font-semibold"> methods construction</span> → 
                <span className="font-semibold"> prospectus writing and defense</span> → 
                <span className="font-semibold"> IRB submission</span> → 
                <span className="font-semibold"> data collection</span> → 
                <span className="font-semibold"> statistical analyses and interpretation</span> → 
                <span className="font-semibold"> presentation of results</span> → 
                <span className="font-semibold"> drawing conclusions</span> → 
                <span className="font-semibold"> dissertation write-up</span> → 
                <span className="font-semibold"> defense preparation</span> → 
                <span className="font-semibold"> publication</span>
              </span>
              and ending with <span className="font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">graduation</span> 🎓 It is a <span className="font-semibold text-primary">daunting challenge</span> you have
              accepted; few even attempt it, and many of those who do, are not successful.
            </p>
            <p className="content-text text-xl font-medium text-primary/90 leading-relaxed">
              <span className="bg-primary/20 block px-6 py-4 rounded-lg shadow-sm">
                But you are <span className="font-bold text-primary">determined to succeed and graduate</span>. That's why you're here ✔️
              </span>
            </p>
            <p className="content-text text-lg leading-relaxed">
              Here are a few different ways I might be of help as your <span className="font-semibold bg-primary/10 px-2 py-0.5 rounded">Graduate Research Coach</span>.
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
            <div className="absolute top-6 left-6">
              <div className="p-3 rounded-full bg-secondary transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-110 transform relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:animate-shimmer" />
                <Icon className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-primary-dark relative z-10" />
              </div>
            </div>
            <div>
              <h2 className="section-title pl-20">{title}</h2>
              <div className="content-text">
                {id === 'coaching' && (
                  <>
                    <p className="mb-6">
                      This type of coaching is less academic, and more focused on your <span className="font-semibold">approach to conducting graduate
                      research</span>, while managing all the other stuff. I can share effective <span className="font-semibold">organizational and time management
                      strategies</span> to help guide and motivate you to succeed. <span className="font-semibold">Goal setting, outlining, mapping, scheduled
                      meetings, and procrastination avoidance</span> can be a focus. I can also be an empathetic ear for venting
                      about your Chair.
                    </p>
                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                      <h3 className="text-lg font-semibold text-primary mb-3">✨ Special Session: The Big-Picture <span className="text-primary/80">(highly recommended)</span></h3>
                      <p className="mb-3">
                        <span className="font-medium">(2-hour package deal)</span> We will have a comprehensive big-picture discussion on conducting graduate level
                        research, and how to map your path to graduation. We will explore the process and procedures of
                        conceiving and conducting valid research.
                      </p>
                      <p>
                        The discussion will weave together topics such as the <span className="font-semibold">fields of
                        study, different methods and approaches, types of statistical testing, types of data and collection
                        methods, IRB considerations, committee expectations</span>, and much more. It will all tie together and
                        integrate your research so you come away with a <span className="font-semibold text-primary">big-picture perspective of graduate research</span>, and
                        where you fit in.
                      </p>
                    </div>
                  </>
                )}
                {id === 'scientific-review' && (
                  <>
                    <p className="mb-4">
                      <span className="font-semibold">Scientific reviews</span> of your proposal or thesis-dissertation ensure all required components are <span className="font-semibold">valid,
                      complete, and clearly presented</span>. Scientific Review at the <span className="text-primary font-semibold">proposal stage</span> focuses on the <span className="font-semibold">research
                      methods section</span> (Intro and Lit Review are not reviewed for this). Individual sections of the methods are
                      reviewed including the proposed statistical tests.
                    </p>
                    <p className="mb-4">
                      Scientific Review at the <span className="text-primary font-semibold">thesis-dissertation phase </span> 
                      focuses on the chapters for <span className="font-semibold">results and conclusions</span>. I can help with <span className="font-semibold">accurate interpretation of statistical
                      outputs</span>, so you can present the results with confidence to your committee. When they raise questions,
                      I can decipher their concerns and provide suggestions how to move forward.
                    </p>
                    <p className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <span className="font-semibold">Scientific reviews will save
                      time and repeated committee reviews</span>. You want your committee to be happy as they are the <span className="text-primary font-semibold">primary
                      target audience</span>. 🎯
                    </p>
                  </>
                )}
                {id === 'statistics' && (
                  <>
                    <p className="mb-6 text-lg font-medium">
                      Statistical support can be provided at different levels.
                    </p>

                    <div className="space-y-6">
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <h3 className="font-semibold text-primary mb-2">📊 Methods Review</h3>
                        <p>
                          A Methods Review will ensure you have a <span className="font-semibold">valid functioning study</span>. Early development
                          and mapping of the proposed statistical interactions is essential. I can assist on <span className="font-semibold">variable identification
                          and classification</span>, potential sources of secondary data or primary data collection methods, and I can
                          review the <span className="font-semibold">data set, variable definitions, analysis mapping, and proposed or calculated statistical tests</span>.
                        </p>
                      </div>

                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <h3 className="font-semibold text-primary mb-2">📈 Data Analysis</h3>
                        <p className="mb-3">
                          Most graduate students freeze up when it comes time to conduct the statistical analyses.
                          I can coach you through that fear so you are <span className="font-semibold">competent and comfortable</span> with conducting statistical
                          analysis.
                        </p>
                        <p className="mb-3">
                          I can also conduct <span className="font-semibold">quantitative data analysis services</span> for you. Descriptives, cross-tabs, t-tests,
                          correlations, generation of tables of with p-values, CI's, etc. can all be provided to you in APA format.
                        </p>
                        <p className="text-sm bg-primary/10 p-2 rounded">
                          <span className="font-medium">Note:</span> Data Analysis Services are billed at $200 per hour.
                        </p>
                      </div>

                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                        <h3 className="font-semibold text-primary mb-2">📋 Results Interpretation</h3>
                        <p>
                          I can assist in the crucial step of <span className="font-semibold">accurately interpreting your results</span>, and how to
                          best present them in your thesis-dissertation. After the long process of constructing and executing a
                          research study, it is obligatory to <span className="font-semibold">accurately communicate your results and conclusions</span>.
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {id === 'editorial-review' && (
                  <p>
                    Editorial Reviews focus on the <span className="font-semibold">grammar, formatting, references, flow of content, sentence structure,
                    and chapter construction and completeness.</span> The detailed review will ensure you have satisfied all the
                    required protocols. Professional editing pleases committee members because it allows them to focus
                    on the content. Editorial Reviews can be provided for your <span className="font-semibold">proposal, IRB application, and thesis -
                    dissertation manuscript.</span> You want to be proud of your final thesis-dissertation, and a professional
                    Editorial Review sharpens the edges before publication 📓
                  </p>
                )}
                {id === 'graduate-writing-coach' && (
                  <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                    <h3 className="text-lg font-semibold text-primary mb-3">
                       ✨ Special Session: How to write like a nerd <span className="text-primary/80">(highly recommended)</span>
                    </h3>
                    <p className="mb-4">
                      <span className="font-medium">1-hour crash course discussion</span> to
                      learn how to <span className="font-semibold">read and write like a scientist</span>. I can provide strategies and approaches to improve and
                      refine your writing skills.
                    </p>
                    <p className="mb-4">
                      We can discuss strategies that work for you regarding <span className="font-semibold">outlining, formatting,
                      chapter construction, citations, use of tables and figures</span>, and how best to present data and results. We
                      will work on <span className="font-semibold">refining your writing skills</span> to follow scientific standards and protocols, and ensure you are
                      compliant with your program's requirements. ✍️
                    </p>
                  </div>
                )}
                {id === 'defense-preparation' && (
                  <>
                    <p className="mb-4">
                      For most graduate students the oral presentations are <span className="font-semibold">frightening</span>, and for good reason. It is very
                      unsettling needing to defend your research to an audience of academics who will decide your fate. I can
                      help you prepare a <span className="font-semibold">professional presentation</span>, and help you develop the talk. A professional digital
                      presentation and well-rehearsed verbal script helps ensure your committee is happy, and your defense
                      is successful. <span className="font-semibold">We can do reviews and practice defenses until you are fully comfortable with the material
                      and the process.</span>
                    </p>
                    <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-4">
                      <p>
                        I have developed a helpful <span className="font-semibold text-primary">Graduate Defense Guide</span> 🛡️ with step-by-step discussion on how to construct a
                        professional presentation, and how to present and defend your research. In these power sessions, you
                        will learn how to share the news of your excellent research, without losing your audience. All
                        professional development skills learned will be applicable later in your personal and professional life.
                      </p>
                    </div>
                  </>
                )}
                {id === 'publication' && (
                  <p>
                    Publishing your research in a peer-reviewed journal is not a necessary step to earn your degree, but it is
                    rewarding (professionally and personally) 🏆 to have your research available to the world. The process is
                    long and frustrating, but <span className="font-semibold">I can help in strategy, reviews, and responding to the comments and feedback
                    from journal reviewers.</span>
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
