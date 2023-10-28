import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone',
  description: 'This is google clone project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Footer */}
        <Footer/>
      </body>
    </html>
  )
}
