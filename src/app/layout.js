import './globals.css'


export const metadata = {
  title: 'CARNEIRO MOREIRA Steven - Portefolio',
  description: 'CARNEIRO MOREIRA Steven, Développeur web Front-end passionné par la création de site et application web.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
