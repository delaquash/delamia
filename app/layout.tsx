import Navbar from '@/component/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/component/Footer/Footer'

export const metadata = {
  title: 'delamia',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
       <div className="container">
       <Navbar />
          {children}
        <Footer/>
       </div>
      </body>
    </html>
  )
}
