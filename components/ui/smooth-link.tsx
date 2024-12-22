'use client'

import NextLink from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { ComponentProps } from 'react'
import { smoothScrollToElement } from '@/lib/smoothScroll'

interface SmoothLinkProps extends Omit<ComponentProps<typeof NextLink>, 'href'> {
  href: string
}

export function SmoothLink({ href, children, ...props }: SmoothLinkProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Check if the href contains a hash
    const [targetPath, hash] = href.split('#')
    const normalizedTargetPath = targetPath || '/'
    const normalizedCurrentPath = pathname || '/'

    if (hash && normalizedTargetPath === normalizedCurrentPath) {
      // If we're on the same page, just smooth scroll
      smoothScrollToElement(hash)
    } else {
      // For cross-page navigation, let the transition happen first
      await router.push(targetPath || '/')
      
      // After a short delay to allow for page transition, scroll to the hash
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 300) // Match this with the page transition duration
      }
    }
  }

  return (
    <NextLink {...props} href={href} onClick={handleClick}>
      {children}
    </NextLink>
  )
}
