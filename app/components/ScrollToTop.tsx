"use client"

import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "@radix-ui/react-icons"
import { AnimatePresence, motion } from "framer-motion"

export function ScrollToTop() {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true)
    if (show && window.scrollY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={scrollToTop}
          >
            <ArrowUpIcon className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
