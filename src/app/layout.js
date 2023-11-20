import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CARNEIRO MOREIRA Steven - Portefolio',
  description: 'CARNEIRO MOREIRA Steven, Développeur web Front-end passionné par la création de site et application web.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
