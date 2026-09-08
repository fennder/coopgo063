/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Passengers } from './components/Passengers';
import { Drivers } from './components/Drivers';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { News } from './components/News';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 scroll-smooth">
      <Header />
      
      <main>
        <Hero />
        <Passengers />
        <Drivers />
        <About />
        <Testimonials />
        <News />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
