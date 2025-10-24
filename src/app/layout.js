// app/layout.js
import './globals.css'
import Navbar from '@/components/MainNavbar'
import SocialLinks from '@/components/SocialLinks'
import DropdownMenuDemo from '@/components/Navbar'
import Footer from '@/components/footer'
import HiddenNavbar from '@/components/HiddenNavbar'

export const metadata = {
  title: 'SpeedLink Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <DropdownMenuDemo /> */}
        
        <SocialLinks />
        <Navbar />
        <HiddenNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
