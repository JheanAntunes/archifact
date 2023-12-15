import { poppins, roboto } from '@/components/assets/font/fontes'
import Footer from '@/components/layout/footer/Footer'
import RaizHeader from '@/components/layout/header/raiz-header'
import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Archifact/Architacts',
  description:
    'Archifact Architacts is a creative studio, where we specialize in architectural visualization. Architects Archifacts, a dynamic architectural firm driven by a team of 5 dedicated professionals with 8 years of remote collaboration experience.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`min-h-screen bg-zinc-950 font-sans antialiased ${poppins.variable}  ${roboto.variable}`}
      >
        <RaizHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
