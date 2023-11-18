import './globals.css'
import Head from './head'

export default function RootLayout({children}: {
children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head />
      <body>{children}</body>
    </html>
  )
}
