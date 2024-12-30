import Image from 'next/image'
import { PageWrapper } from '@/app/components/PageWrapper'
import { Linkedin, Globe } from 'lucide-react'
import { FadeText } from "@/components/ui/fade-text";

export default function About() {
  return (
    <PageWrapper>
      <div className="flex gap-8 max-w-6xl mx-auto px-4 py-12">
        <div className="w-full">
          <div className="mb-8 px-4 text-center">
            <FadeText 
              text="About Me"
              direction="down"
              className="page-title !m-0 !p-0 inline-block"
            />
          </div>

          <div className="mb-12 max-w-3xl mx-auto">
            <Image 
              src="/PhD-Graduate-Research-Coach.png" 
              alt="PhD Graduate Research Coach" 
              width={1200} 
              height={600} 
              className="rounded-lg shadow-lg w-full aspect-[2/1] object-cover" 
            />
          </div>

          <div className="space-y-12">
            <div className="page-section relative">
              <div className="absolute top-4 right-4 flex gap-4">
                <a 
                  href="https://ryandwight.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors flex flex-col items-center"
                >
                  <Globe className="w-7 h-7" />
                  <span className="text-xs mt-1">Website</span>
                </a>
                <a 
                  href="https://linkedin.com/in/ryan-dwight-04155429" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors flex flex-col items-center"
                >
                  <Linkedin className="w-7 h-7" />
                  <span className="text-xs mt-1">LinkedIn</span>
                </a>
              </div>
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div>
                  <h2 className="section-title">Ryan H. Dwight, PhD</h2>
                  <h3 className="text-2xl mb-4 text-primary/90 font-medium">Graduate Research Coach</h3>
                  <div className="content-text space-y-4 leading-relaxed w-full">
                    <p className="flex items-start gap-2 ml-4">
                      <span className="text-xl text-primary">➜</span>
                      <span className="flex-1">I have been a <span className="font-bold">leading researcher and academic</span> in the <span className="font-medium">environmental health sciences</span> arena</span> 
                      <span className="text-2xl ml-auto"></span>
                    </p>

                    <p className="flex items-start gap-2 ml-4">
                      <span className="text-xl text-primary">➜</span>
                      <span className="flex-1">My career path has traveled in the <span className="font-medium">private sector, academia, and the Federal government</span></span>
                      <span className="text-2xl ml-auto"></span>
                    </p>

                    <p className="flex items-start gap-2 ml-4">
                      <span className="text-xl text-primary">➜</span>
                      <span className="flex-1">I am an experienced <span className="font-bold">manager, scientific researcher, analytical thinker, educator, and critical problem solver</span></span>
                      <span className="text-2xl ml-auto"></span>
                    </p>

                    <p className="flex items-start gap-2 ml-4">
                      <span className="text-xl text-primary">➜</span>
                      <span className="flex-1">Along the way I have supervised <span className="font-medium">dozens of faculty and hundreds of students</span></span>
                      <span className="text-2xl ml-auto"></span>
                    </p>

                    <p className="flex items-start gap-2 ml-4">
                      <span className="text-xl text-primary">➜</span>
                      <span className="flex-1">I have <span className="font-medium">developed research programs</span>, <span className="font-medium">conceived new approaches</span>, and produced and presented <span className="font-medium">budgets and annual reports</span></span>
                      <span className="text-2xl ml-auto"></span>
                    </p>

                    <p className="flex items-start gap-2 ml-4">
                      <span className="text-xl text-primary">➜</span>
                      <span className="flex-1">I am a <span className="font-medium">clear communicator</span>, and am <span className="font-medium">comfortable working with everyone</span></span>
                      <span className="text-2xl ml-auto"></span>
                    </p>

                    <p className="flex items-start gap-2 ml-4">
                      <span className="text-xl text-primary">➜</span>
                      <span className="flex-1">My <span className="font-medium">range of experiences and knowledge</span> allow me to <span className="font-bold text-primary animate-pulse">empower, inspire and motivate</span> graduate research students to <span className="font-medium">achieve their academic goals</span></span>
                      <span className="text-2xl ml-auto"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="page-section">
              <h2 className="section-title">Education</h2>
              <ul className="space-y-3">
                <li className="list-item content-text">PhD: UC Irvine, Doctor of Philosophy in Environmental Health Science and Policy</li>
                <li className="list-item content-text">BA: UC San Diego, Bachelor of Arts in Biology, minors in Organic Chemistry and U.S. History</li>
              </ul>
            </div>

            <div className="page-section">
              <h2 className="section-title">Employment</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">The Graduate Research Coach, 2023 to present</h3>
                  <p className="font-medium text-muted-foreground mb-2">Principal Consultant</p>
                  <p className="content-text">
                  Providing coaching and consulting services to graduate research students in the science, health,
                  business, and education fields. I work with masters, doctorate, and PhD students, at all phases
                  of research (proposal, research, write-up, defense, publication). Consulting services include
                  dissertation coaching, scientific review, statistics (methods, data, results), editorial review, graduate writing coach, defense preparation, and
                  publication.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Trident University International, 2010 to 2023</h3>
                  <p className="font-medium text-muted-foreground mb-2">Director of Doctoral Studies, College of Health and Human Services</p>
                  <p className="content-text">
                    Director for two doctoral programs (PhD in Health Sciences, and Doctorate in Health 
                    Administration). Developed and taught graduate courses including methods, program 
                    evaluation, research analysis, public health sciences, and epidemiology. Advised and mentored 
                    students developing dissertation research using quantitative methods. Dissertation Chair and 
                    Member for doctoral students conducting inferential research on a range of issues in the fields of 
                    human and environmental health. University member on the Institutional Review Board (IRB), and Doctoral Council.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Coastal Water Research Group, 2004 to present</h3>
                  <p className="font-medium text-muted-foreground mb-2">Founder and Director</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Gerontological Services, Inc., 1994 to 2015</h3>
                  <p className="font-medium text-muted-foreground mb-2">Research Analyst</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Dwight Law Group, 2002 to 2012</h3>
                  <p className="font-medium text-muted-foreground mb-2">Office Manager, Legal Assistant, Accountant</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Smithsonian Institution, Washington, D.C., 1991 to 1994</h3>
                  <p className="font-medium text-muted-foreground mb-2">Program Assistant (GS 11)</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Scripps Institution of Oceanography, 1988 to 1990</h3>
                  <p className="font-medium text-muted-foreground mb-2">Marine Microbiologist, Certified Research Diver</p>
                </div>
              </div>
            </div>

            <div className="page-section">
              <h2 className="section-title">Other Specifications</h2>
              <ul className="space-y-3">
                <li className="list-item content-text">Chair or Committee Member for 24 graduate students.</li>
                <li className="list-item content-text">Successfully coordinated several complex multidisciplinary scientific investigations.</li>
                <li className="list-item content-text">
                  Lead or co-author on sixteen research articles published in peer-reviewed scientific journals. 
                  Several media articles were generated about the research, and I was interviewed by NPR.
                </li>
                <li className="list-item content-text">Twenty presentations of research studies given at scientific conferences.</li>
                <li className="list-item content-text">Serving as a peer-reviewer for three scientific journals.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
