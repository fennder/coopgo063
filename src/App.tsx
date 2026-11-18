/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home';

const PassengersPage = lazy(() => import('./pages/PassengersPage').then((m) => ({ default: m.PassengersPage })));
const DriversPage = lazy(() => import('./pages/DriversPage').then((m) => ({ default: m.DriversPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const NewsPage = lazy(() => import('./pages/NewsPage').then((m) => ({ default: m.NewsPage })));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage').then((m) => ({ default: m.NewsDetailPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="w-10 h-10 border-4 border-brand-green/30 border-t-brand-green rounded-full animate-spin" aria-label="Carregando conteúdo" />
    </div>
  );
}

const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<RouteFallback />}>{element}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "passageiros", element: withSuspense(<PassengersPage />) },
      { path: "motoristas", element: withSuspense(<DriversPage />) },
      { path: "sobre", element: withSuspense(<AboutPage />) },
      { path: "noticias", element: withSuspense(<NewsPage />) },
      { path: "noticias/:id", element: withSuspense(<NewsDetailPage />) },
      { path: "contato", element: withSuspense(<ContactPage />) },
      { path: "termos", element: withSuspense(<TermsPage />) },
      { path: "privacidade", element: withSuspense(<PrivacyPage />) },
      { path: "*", element: withSuspense(<NotFoundPage />) },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
