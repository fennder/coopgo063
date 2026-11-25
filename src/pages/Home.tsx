import React from 'react';
import { Hero } from '../components/Hero';
import { Passengers } from '../components/Passengers';
import { Drivers } from '../components/Drivers';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { News } from '../components/News';
import { AppDownload } from '../components/AppDownload';
import { CTA } from '../components/CTA';
import { Contact } from '../components/Contact';
import { Partners } from '../components/Partners';
import { SeoHead } from '../components/SeoHead';

export function Home() {
  return (
    <>
      <SeoHead
        title="Coop63 | Cooperativa de Transporte por Aplicativo no Tocantins"
        description="A Coop63 é a cooperativa oficial de transporte privado no Tocantins. Peça sua corrida em Palmas com segurança, conforto e preço justo pelo aplicativo."
        path="/"
        image="/og-image.jpg"
        type="website"
      />
      <Hero />
      <Passengers />
      <Drivers />
      <About />
      <Testimonials />
      <AppDownload />
      <News />
      <CTA />
      <Contact />
      <Partners />
    </>
  );
}
