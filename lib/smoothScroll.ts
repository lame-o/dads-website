'use client'

export const smoothScrollToElement = (elementId: string) => {
  // Add a small delay to ensure the DOM is ready
  setTimeout(() => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, 100)
}

export const smoothScrollToHash = (hash: string) => {
  // Wait for the DOM to be ready
  setTimeout(() => {
    const element = document.getElementById(hash)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, 100)
}

// Helper function to scroll to a specific section after navigation
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
