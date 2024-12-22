'use client'

import { motion } from 'framer-motion'

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.15,
        ease: 'linear'
      }}
    >
      {children}
    </motion.div>
  )
}
