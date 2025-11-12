import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}
