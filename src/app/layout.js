// app/layout.js
import './globals.css'
import Navbar from '@/components/Navbar2'
import DropdownMenuDemo from '@/components/Navbar'
import Footer from '@/components/footer'

export const metadata = {
  title: 'SpeedLink Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <DropdownMenuDemo /> */}
        
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
