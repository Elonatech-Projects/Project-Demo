// src/app/page.js

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
// import About from '../components/about';
// import Services from '../components/services';
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
      <Navbar />
      <HeroSection />
      <Blog />  
      <section className="">
        <TechnologyStack />
      </section>
      <section className="">
        <Marquee images={myImages} durationSeconds={10} height={90} />
      </section>
      {/* <ContactForm /> */}
    </main>
  );
}
