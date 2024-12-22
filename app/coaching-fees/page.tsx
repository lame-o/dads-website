'use client'

import { PageWrapper } from '@/app/components/PageWrapper'
import { Button } from '@/components/ui/button'

export default function CoachingFees() {
  return (
    <PageWrapper>
      <div className="space-y-12 max-w-4xl mx-auto px-4 py-12">
        <h1 className="page-title">Coaching Fees</h1>

        <div className="page-section">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I am able to only accept a limited number of students to work with. My professional guidance and
              feedback is personalized, detailed and productive in moving a project forward. <span className="font-semibold">My coaching fee is
               $100/hour </span> for most services, billed at 15-minute increments.
            </p>

            <p className="text-lg leading-relaxed">
              You choose the Graduate Research Services you want to take advantage of, and <span className="font-semibold">we agree on time/coaching fees before starting. Coaching
              fees are paid before work is conducted.</span> If extra time is needed for a review, I'll ask your approval
              before proceeding, so no surprises.
            </p>

            <p className="text-lg leading-relaxed">
              I'm flexible to meet on your schedule, and my review turn-around times are fast and comprehensive (better than your committee I bet).
              Contact me if you want an experienced Graduate Research Coach, PhD advisor or any of the Graduate Research Services I can
              provide to help you get that degree in your hands.
            </p>

            <div className="bg-primary/20 p-6 rounded-lg mt-12">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Earn Extra Credit! 🎉</h2>
              <div className="space-y-3 text-lg">
                <p><span className="font-semibold">Refer a friend</span> = 1-hour free coaching ($100 value), and earn a Student of the Week smiley sticker 😺</p>
                <p><span className="font-semibold">10-hours of coaching</span> = the 11th hour is free (10% discount), and earn a Super Student Star 🌟</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <a href="mailto:ryanhdwight@yahoo.com">Free Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
