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

export const smoothScrollToHash = () => {
  // Wait for the DOM to be ready
  setTimeout(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
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
