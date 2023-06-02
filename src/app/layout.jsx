import Navbar from '../components/NavBar'
import Player from '../components/Player'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'La Reina FM',
  description: 'Emisora La Reina Fm',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-darkblue-300 ${inter.className}`}>
        <Navbar/>
        {children}
        <Player/>
      </body>
    </html>
  )
}
