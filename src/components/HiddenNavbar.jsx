"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./styles/styles.css";
import { ChevronDown, Facebook, Instagram, Linkedin, Mail, Phone, Search, Square, Twitter, X } from "lucide-react";
import {
  aboutLinks,
  serviceCategories,
  caseStudyLinks,
  productsLinks,
  resourcesLinks,
} from "@/data/navData";


const HiddenNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show navbar on scroll up, hide on scroll down
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const halfViewport = window.innerHeight / 2; // start showing only after user scrolls past 50% of viewport

      if (currentScrollY <= halfViewport) {
        // before 50% viewport, keep hidden
        setIsVisible(false);
      } else {
        // after 50% viewport: show on scroll up, hide on scroll down
        setIsVisible(currentScrollY < lastScrollY);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);
  const toggleMobile = () => setMobileOpen((s) => !s);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 nav-section transition-all duration-500 ${
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    }`}>
      {/* Bottom Section */}
      <section className="max-w-full">
        <div className="flex justify-between items-center body-padding py-2">
          {/* Logo */}
          <div className="py-2">
            <img
              src="/images/Speedlink-Hi-Tech-Solutions-Logo-223x93.webp"
              alt="Logo"
            />
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-2 nav-links-section">
            {/* mobile hamburger (small screens) */}
            <button
              className="md:hidden p-2 mr-2"
              onClick={toggleMobile}
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="#0a4da9"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* make this wrapper positioned so dropdowns can be centered relative to it */}
            <div className="relative bottom-section">
              <ul className="hidden md:flex">
                {/* Home */}
                <li className="nav-link-custom group self-center relative">
                  <Link
                    href="/"
                    className="transition-all duration-300 group-hover:text-red-600 px-3 py-2 rounded"
                  >
                    Home
                  </Link>
                </li>

                {/* ABOUT US DROPDOWN */}
                <li
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="flex items-center gap-1 nav-link-custom transition-all duration-300 group-hover:text-red-600 px-3 py-2 rounded"
                    href="/"
                  >
                    About Us
                    <ChevronDown />
                  </Link>
                  {activeMenu === "about" && (
                    <div className="absolute top-full left-1/2 -translate-x-[10%] w-[92vw] lg:w-140 max-w-[900px] bg-white py-8 px-10 rounded-md shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out animate-slideDown border-t-2 border-red-600 animate-slideUp" id="Slide-up">
                      {aboutLinks.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block px-4 py-2 transition-all duration-300 hover:text-red-600 rounded border-b-1 border-gray-200 mb-2 last:mb-0"
                        >
                          <div className="font-medium text-gray-800">{item.title}</div>
                          <div className="text-sm text-gray-500">{item.subtext}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>

                {/* SERVICES MEGA MENU */}
                <li
                  className="relative group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="flex items-center gap-1 nav-link-custom transition-all duration-300 group-hover:text-red-600 px-3 py-2 rounded"
                    href="/"
                  >
                    Services
                    <ChevronDown />
                  </Link>
                  {activeMenu === "services" && (
                    <div className="absolute top-full left-1/2 -translate-x-[40%] bg-white shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out rounded-md w-[95vw] max-w-[950px] py-8 px-6 border-t-2 border-[#0a2868] animate-slideDown">
                      <div className="grid grid-cols-3 gap-6">
                        {serviceCategories.map((category) => (
                          <div key={category.title} className="services-category">
                            <h3 className="font-semibold mb-2">{category.title}</h3>
                            <ul className="space-y-1">
                              {category.links.map((link) => (
                                <li key={link.text}>
                                  <Link
                                    href={link.href}
                                    className="flex items-center gap-1 transition-all duration-300 hover:bg-gray-100 hover:text-red-600 px-2 py-1 rounded"
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
                  )}
                </li>

                {/* Case Study dropdown */}
                <li
                  className="relative group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("case")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="flex items-center gap-1 nav-link-custom transition-all duration-300 group-hover:text-red-600  px-3 py-2 rounded"
                    href="/"
                  >
                    Case Study
                    <ChevronDown />
                  </Link>
                  {activeMenu === "case" && (
                    <div className="absolute top-full left-1/2 -translate-x-[22%] bg-white shadow-[0_8px_16px_rgba(0,0,0,0.08)] rounded-md w-64 py-3 border-t-2 border-red-600">
                      {caseStudyLinks.map((it) => (
                        <Link
                          key={it.title}
                          href={it.href}
                          className="block px-4 py-2 transition-all duration-300 hover:text-red-600 rounded"
                        >
                          {it.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>

                {/* Products dropdown */}
                <li
                  className="relative group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("products")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="flex items-center gap-1 nav-link-custom transition-all duration-300 group-hover:text-red-600  px-3 py-2 rounded"
                    href="/"
                  >
                    Products
                    <ChevronDown />
                  </Link>
                  {activeMenu === "products" && (
                    <div className="absolute top-full left-1/2 -translate-x-[22%] bg-white shadow-[0_8px_16px_rgba(0,0,0,0.08)] rounded-md w-64 py-3 border-t-2 border-red-600">
                      {productsLinks.map((it) => (
                        <Link
                          key={it.title}
                          href={it.href}
                          className="block px-4 py-2 transition-all duration-300 hover:text-red-600 rounded"
                        >
                          {it.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>

                {/* Resources dropdown */}
                <li
                  className="relative group cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("resources")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    className="flex items-center gap-1 nav-link-custom transition-all duration-300 group-hover:text-red-600 px-3 py-2 rounded"
                    href="/"
                  >
                    Resources
                    <ChevronDown />
                  </Link>
                  {activeMenu === "resources" && (
                    <div className="absolute top-full left-1/2 -translate-x-[22%] bg-white shadow-[0_8px_16px_rgba(0,0,0,0.08)] rounded-md w-64 py-3 border-t-2 border-red-600">
                      {resourcesLinks.map((it) => (
                        <Link
                          key={it.title}
                          href={it.href}
                          className="block px-4 py-2 transition-all duration-300 hover:text-red-600 rounded"
                        >
                          {it.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              </ul>
            </div>

            {/* Search + Button */}
            <div className="flex gap-2 items-center">
              <a
                aria-label="search"
                className="text-black p-2"
                onClick={() => setShowSearch(true)}
              >
                <Search className="text-black w-5 h-6 cursor-pointer" />
              </a>
              {showSearch && (
                <div id="searchOverlay">
                  <div className="search-box">
                    <input type="text" placeholder="Search ..." autoFocus />
                    <button
                      onClick={() => setShowSearch(false)}
                      className="close-btn"
                      aria-label="close search"
                    >
                      <X size="28" />
                    </button>
                  </div>
                </div>
              )}
              <a
                href="/contact"
                className="text-white bg-red-600 p-3 rounded-sm btn-red hover:bg-black transition-all duration-300"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

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
};

export default HiddenNavbar;
