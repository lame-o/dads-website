"use client"

import Link from "next/link"
import { smoothScrollToHash } from "@/lib/smoothScroll"

interface SmoothLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export default function SmoothLink({ href, children, ...props }: SmoothLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const hash = href.split("#")[1]
    if (hash) {
      smoothScrollToHash(hash)
    }
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
