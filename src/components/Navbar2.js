"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./styles/styles.css";
import { Facebook, Instagram, Linkedin, Mail, Phone, Search, Twitter } from "lucide-react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);
  const toggleMobile = () => setMobileOpen((s) => !s);
  return (
    <nav className="bg-white shadow-md relative z-50">
      {/* Top Bar */}
      <section className="nav-header py-[1vh]">
        <div className="flex justify-between py-3 body-padding">
          {/* Social Links */}
          <div className="flex nav-social-links">
            <ul className="flex items-center space-x-4 text-sm px-6">
              <li className="hover:cursor-pointer nav-social border">
                <Facebook className="nav-icons left-icons" />
              </li>
              <li className="hover:cursor-pointer nav-social border">
                <Twitter className="nav-icons left-icons"/>
              </li>
              <li className="hover:cursor-pointer nav-social border">
                <Linkedin className="nav-icons left-icons"/>
              </li>
              <li className="hover:cursor-pointer nav-social border">
                <Instagram className="nav-icons left-icons"/>
              </li>
            </ul>
          </div>
          {/* Right Side */}
          <div className="flex gap-2 social-right text-[12px]">
            <a className="btn-navlink flex items-center gap-2 bg-[#1f44b4] text-white rounded-sm" href="tel:+2349167716220">
              <Phone className="nav-icons" />
              <span>tel:+2349167716220</span>
            </a>
            <a className="btn-navlink flex items-center gap-2 bg-[#1f44b4] text-white rounded-sm" href="mailto:info@speedlinkng.com">
              <Mail className="nav-icons" />
              <span>info@speedlinkng.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Right Side */}
      <div className="max-w-full flex justify-between items-center text-[#0a4da9] body-padding">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-600">
          <Image src="/images/Speedlink-Hi-Tech-Solutions-Logo-223x93.webp" height={300} width={250} alt="Logo"/>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-2">
          {/* mobile hamburger (small screens) */}
          <button className="md:hidden p-2 mr-2" onClick={toggleMobile} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18" stroke="#0a4da9" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>

          {/* make this wrapper positioned so dropdowns can be centered relative to it */}
          <div className="relative">
            <ul className="hidden md:flex space-x-3 ">
              <li className="hover:cursor-pointer nav-link-custom ">
                <Link href="/">Home</Link>
              </li>
              {/* ABOUT US DROPDOWN */}
              <li className="cursor-pointer relative nav-link-custom" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
                <button className="hover:text-red-500 flex items-center nav-link-custom gap-1">
                  About Us
                  <span>▼</span>
                </button>
                {activeMenu === "about" && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 shadow-lg rounded-md w-72 py-4 transition-all duration-300 ease-out bg-white opacity-100 translate-y-2 animate-slideDown
                    "
                  >
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        <div className="font-medium text-gray-800">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.subtext}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              {/* SERVICES MEGA MENU */}
              <li className="nav-link-custom" onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}>
                <button className="hover:text-red-500 nav-link-custom flex items-center gap-1">
                  Services
                  <span>▼</span>
                </button>
                {activeMenu === "services" && (
                  <>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-md w-[92vw] max-w-[1100px] py-6 px-6">
                      <div className="grid grid-cols-3 gap-6">
                        {serviceCategories.map((category) => (
                          <div key={category.title}>
                            <h3 className="font-semibold text-gray-800 mb-2">
                              {category.title}
                            </h3>
                            <ul className="space-y-1">
                              {category.links.map((link) => (
                                <li key={link.text}>
                                  <Link
                                    href={link.href}
                                    className="text-sm text-gray-600 hover:text-red-500"
                                  >
                                    {link.text}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </li>
              {/* Case Study dropdown */}
              <li className="cursor-pointer relative nav-link-custom" onMouseEnter={() => handleMouseEnter('case')} onMouseLeave={handleMouseLeave}>
                <button className="hover:text-red-500 flex items-center gap-1">Case Study <span>▼</span></button>
                {activeMenu === 'case' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 shadow-lg rounded-md w-64 py-3 bg-white">
                    {caseStudyLinks.map((it) => (
                      <Link key={it.title} href={it.href} className="block px-4 py-2 hover:bg-gray-100">{it.title}</Link>
                    ))}
                  </div>
                )}
              </li>
              {/* Products dropdown */}
              <li className="cursor-pointer relative nav-link-custom" onMouseEnter={() => handleMouseEnter('products')} onMouseLeave={handleMouseLeave}>
                <button className="hover:text-red-500 flex items-center gap-1">Products <span>▼</span></button>
                {activeMenu === 'products' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 shadow-lg rounded-md w-64 py-3 bg-white">
                    {productsLinks.map((it) => (
                      <Link key={it.title} href={it.href} className="block px-4 py-2 hover:bg-gray-100">{it.title}</Link>
                    ))}
                  </div>
                )}
              </li>
              {/* Resources dropdown */}
              <li className="cursor-pointer relative nav-link-custom" onMouseEnter={() => handleMouseEnter('resources')} onMouseLeave={handleMouseLeave}>
                <button className="hover:text-red-500 flex items-center gap-1">Resources <span>▼</span></button>
                {activeMenu === 'resources' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 shadow-lg rounded-md w-64 py-3 bg-white">
                    {resourcesLinks.map((it) => (
                      <Link key={it.title} href={it.href} className="block px-4 py-2 hover:bg-gray-100">{it.title}</Link>
                    ))}
                  </div>
                )}
              </li>         
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <button aria-label="search" className="text-black p-2"><Search className="text-black"/></button>
            <Link href="/contact" className='text-white hover:bg-black hover:cursor-pointer bg-red-600 p-3 rounded-sm btn-red'>
              Get in touch
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile stacked menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li><Link href="/">Home</Link></li>
            <li>
              <details>
                <summary>About Us</summary>
                <ul className="pl-4 mt-2 space-y-1">
                  {aboutLinks.map(i => <li key={i.title}><Link href={i.href}>{i.title}</Link></li>)}
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Services</summary>
                <div className="grid grid-cols-1 gap-4 mt-2">
                  {serviceCategories.map(cat => (
                    <div key={cat.title}>
                      <div className="font-semibold">{cat.title}</div>
                      <ul className="pl-3 mt-1 space-y-1">{cat.links.map(l => <li key={l.text}><Link href={l.href}>{l.text}</Link></li>)}</ul>
                    </div>
                  ))}
                </div>
              </details>
            </li>
            <li>
              <details>
                <summary>Case Study</summary>
                <ul className="pl-4 mt-2 space-y-1">{caseStudyLinks.map(i=> <li key={i.title}><Link href={i.href}>{i.title}</Link></li>)}</ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Products</summary>
                <ul className="pl-4 mt-2 space-y-1">{productsLinks.map(i=> <li key={i.title}><Link href={i.href}>{i.title}</Link></li>)}</ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Resources</summary>
                <ul className="pl-4 mt-2 space-y-1">{resourcesLinks.map(i=> <li key={i.title}><Link href={i.href}>{i.title}</Link></li>)}</ul>
              </details>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
const aboutLinks = [
  {
    title: "Who we are",
    subtext: "Our history, mission, vision and values",
    href: "#",
  },
  {
    title: "What we do",
    subtext: "Learn more about the wide range of IT services we offer",
    href: "#",
  },
  {
    title: "Why Speedlink",
    subtext: "We provide ICT solutions that make your business stand out",
    href: "#",
  },
  {
    title: "Meet our Team",
    subtext: "Meet our hardworking team members",
    href: "#",
  },
  {
    title: "Our partners & top clients",
    subtext: "View our partner companies and top clients",
    href: "#",
  },
];


const serviceCategories = [
  {
    title: "IT Services",
    links: [
      { text: "Software Application Development", href: "#" },
      { text: "Web Design/Development", href: "#" },
      { text: "Software Installations", href: "#" },
    ],
  },
  {
    title: "Networking Services",
    links: [
      { text: "Fiber-to-the-home", href: "#" },
      { text: "Routing and Switching", href: "#" },
      { text: "Voice Over IP (VOIP)", href: "#" },
      { text: "Internet Service Provider - ISP", href: "#" },
    ],
  },
  {
    title: "Technical Security",
    links: [
      { text: "Video Surveillance (CCTV)", href: "#" },
      { text: "Intrusion Prevention Systems", href: "#" },
      { text: "Fire detection & extinguisher systems", href: "#" },
      { text: "Alarm zs", href: "#" },
    ],
  },
  {
    title: "Cloud Services",
    links: [
      { text: "Storage infrastructure", href: "#" },
      { text: "Cloud hosting", href: "#" },
      { text: "Cloud based ERP/CRM", href: "#" },
    ],
  },
  {
    title: "Digital Marketing",
    links: [
      { text: "Social Media Marketing", href: "#" },
      { text: "Digital Advertising", href: "#" },
      { text: "Media Planning and Buying", href: "#" },
      { text: "Search Engine Optimization", href: "#" },
    ],
  },
  {
    title: "Certified Training",
    links: [
      { text: "Mikrotik Certification", href: "#" },
      { text: "CCTV Installation", href: "#" },
      { text: "Web app development", href: "#" },
      { text: "Web design and Devopment", href: "#" },
    ],
  }
];

const caseStudyLinks = [
  { title: 'Integration of Secured and Reliable Examination Platform.', href: '#' },
  { title: 'Hybrid Learning Management', href: '#' }
];

const productsLinks = [
  { title: 'Digi School', href: '#' },
  { title: 'Speedducation', href: '#' },
  { title: 'Speed ERP', href: '#' },
  { title: 'SpeedAdmit', href: '#' },
];

const resourcesLinks = [
  { title: 'Blog', href: '#' },
  { title: 'Tech News', href: '#' },
  { title: 'Gallery', href: '#' },
  { title: 'Download Brochure', href: '#' },
];