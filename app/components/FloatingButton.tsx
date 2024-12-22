'use client'

import { Button } from '@/components/ui/button'

export default function FloatingButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button variant="default" className="shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-white hover:bg-primary/90 hover:-translate-y-1">
        Schedule a Free 30-minute Consultation
      </Button>
    </div>
  )
}
