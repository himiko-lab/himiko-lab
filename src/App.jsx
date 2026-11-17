import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MorvynPage from './pages/MorvynPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import NewsPost from './pages/NewsPost';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import { PAGES } from './routes';
import { useT } from './i18n';

const PAGE_COMPONENTS = {
  home: Home,
  morvyn: MorvynPage,
  about: AboutPage,
  news: NewsPage,
  contact: ContactPage,
  notFound: NotFound,
};

export default function App() {
  const { page, t } = useT();
  // Semua tulisan Kabar memakai satu komponen, isinya ikut dari kamus.
  const Page = PAGES[page]?.post ? NewsPost : (PAGE_COMPONENTS[page] ?? NotFound);

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
