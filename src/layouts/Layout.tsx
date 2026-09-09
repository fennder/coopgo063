import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <Header />
      <main className="flex-grow pt-[72px] lg:pt-[88px]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
