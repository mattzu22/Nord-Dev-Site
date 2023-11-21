import './globals.css'
import Head from './head'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap'
});
 
export default function RootLayout({children}: {
children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`${poppins.variable}`}>
      <Head />
      <body>{children}</body>
    </html>
  )
}
