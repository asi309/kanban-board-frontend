import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Kanban Board',
  description: 'Kanban board for project management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
