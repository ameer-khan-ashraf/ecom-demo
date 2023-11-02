import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/app/_components/Nav'
import Footer from './_components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shop Demo',
  description: 'Created by Ameer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={inter.className + ' min-h-full grid grid-rows-1'}>
        <div>
          <Nav/>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
