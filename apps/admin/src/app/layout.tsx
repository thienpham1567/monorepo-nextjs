import type { Metadata } from 'next'
import '@shared/styles/globals.css'

export const metadata: Metadata = {
  title: 'Client App',
  description: 'Client application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
