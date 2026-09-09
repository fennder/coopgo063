import React from 'react';
import { Hero } from '../components/Hero';
import { Passengers } from '../components/Passengers';
import { Drivers } from '../components/Drivers';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { News } from '../components/News';
import { CTA } from '../components/CTA';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <Passengers />
      <Drivers />
      <About />
      <Testimonials />
      <News />
      <CTA />
      <Contact />
    </>
  );
}
