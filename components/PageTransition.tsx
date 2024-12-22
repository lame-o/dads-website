'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const pageVariants = {
  initial: { 
    opacity: 0,
  },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
