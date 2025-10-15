// components/Navbar.js
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow">
      <div>
        <Image src="/images/logo.webp" alt="Logo" width={120} height={40} />
      </div>
      <ul className="flex gap-6">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}
