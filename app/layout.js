import './globals.css'


export const metadata = {
  title: 'CARNEIRO MOREIRA Steven - Développeur Front-End',
  description: 'Explorez mes projets et découvrez mon expertise en développement front-end. Créativité, innovation et passion pour créer des expériences utilisateur exceptionnelles.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
