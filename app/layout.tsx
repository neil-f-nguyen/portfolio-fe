import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tu Nguyen - Portfolio',
  description: 'Portfolio of a Frontend Developer with 3+ years experience in React, TypeScript and modern web technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-dark-900 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  )
} 