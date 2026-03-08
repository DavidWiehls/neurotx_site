import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LocaleHead } from './components/LocaleHead';
import PageSkeleton from './components/ui/PageSkeleton';
import { isLocale } from './i18n';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Product = lazy(() => import('./pages/Product'));
const Pricing = lazy(() => import('./pages/Pricing'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Market = lazy(() => import('./pages/Market'));
const Investors = lazy(() => import('./pages/Investors'));
const Partners = lazy(() => import('./pages/Partners'));
const Schools = lazy(() => import('./pages/Schools'));
const Contact = lazy(() => import('./pages/Contact'));
const DataEthics = lazy(() => import('./pages/DataEthics'));

function LocaleGuard({ children }: { children: React.ReactNode }) {
  const { locale } = useParams<{ locale: string }>();
  if (!locale || !isLocale(locale)) {
    return <Navigate to="/en" replace />;
  }
  return <>{children}</>;
}

export default function App() {
  return (
    <Router>
      <LocaleHead />
      <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30">
        <Navbar />
        <main>
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              <Route path="/" element={<Navigate to="/en" replace />} />
              <Route path="/:locale" element={<LocaleGuard><Outlet /></LocaleGuard>}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="case-studies" element={<CaseStudies />} />
                <Route path="market" element={<Market />} />
                <Route path="investors" element={<Investors />} />
                <Route path="partners" element={<Partners />} />
                <Route path="schools" element={<Schools />} />
                <Route path="contact" element={<Contact />} />
                <Route path="data-ethics" element={<DataEthics />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
