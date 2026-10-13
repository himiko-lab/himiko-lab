import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MorvynPage from './pages/MorvynPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import { useT } from './i18n';

const PAGE_COMPONENTS = {
  home: Home,
  morvyn: MorvynPage,
  about: AboutPage,
  notFound: NotFound,
};

export default function App() {
  const { page, t } = useT();
  const Page = PAGE_COMPONENTS[page] ?? NotFound;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <a href="#konten" className="skip-link">
        {t.common.skip}
      </a>

      <Navbar />

      <main id="konten" tabIndex={-1} className="outline-none">
        <Page />
      </main>

      <Footer />
    </div>
  );
}
