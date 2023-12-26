import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const fontstyle = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FAQ Accordion',
  description: 'This Next app is a solution for the frontendmentor challenge - https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz/hub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontstyle.className}>{children}</body>
    </html>
  )
}
