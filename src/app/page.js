// src/app/page.js

import Navbar from '../components/Navbar2';
import HeroSection from '../components/HeroSection';
// import About from '../components/about';
import Services from '../components/Services';
import Products from '@/components/Products';
import CaseStudies from '@/components/CaseStudies';
import ContactForm from '../components/ContactForm';
import Marquee from '@/components/marque';
import TechnologyStack from '@/components/TechnologyStack';
import Blog from '@/components/blog';

export default function Page() {
  const myImages = [
    '/images/primerose.png',
    '/images/redeemers.png',
    '/images/sph-logo.png',
    '/images/cgrp.png',
    '/images/cefor.png',
  ];

  return (
    <main>
      {/* <Navbar /> */}
      <HeroSection />
      <Services/>
      <Products />
      <CaseStudies />
      <Blog />  
      <section className="">
        <TechnologyStack />
      </section>
      {/* <ContactForm /> */}
    </main>
  );
}
