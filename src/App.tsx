/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home';
import { PassengersPage } from './pages/PassengersPage';
import { DriversPage } from './pages/DriversPage';
import { AboutPage } from './pages/AboutPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="passageiros" element={<PassengersPage />} />
          <Route path="motoristas" element={<DriversPage />} />
          <Route path="sobre" element={<AboutPage />} />
          <Route path="noticias" element={<NewsPage />} />
          <Route path="contato" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
