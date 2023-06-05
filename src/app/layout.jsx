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
        <Navbar />
        <main className='flex flex-col gap-10 container sm:mx-auto'>
          {children}
        </main>
        <footer className='text-white text-center m-24'>
          La Reina Fm
        </footer>
        <Player />
      </body>
    </html>
  )
}
