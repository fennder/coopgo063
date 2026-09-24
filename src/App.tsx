/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home';
import { PassengersPage } from './pages/PassengersPage';
import { DriversPage } from './pages/DriversPage';
import { AboutPage } from './pages/AboutPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "passageiros", element: <PassengersPage /> },
      { path: "motoristas", element: <DriversPage /> },
      { path: "sobre", element: <AboutPage /> },
      { path: "noticias", element: <NewsPage /> },
      { path: "noticias/:id", element: <NewsDetailPage /> },
      { path: "contato", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
