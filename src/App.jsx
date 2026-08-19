import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutPage from './pages/About/AboutPage.jsx';
import AuditPage from './pages/Audit/AuditPage.jsx';
import BecomeMemberPage from './pages/BecomeMember/BecomeMemberPage.jsx';
import CalendarPage from './pages/Calendar/CalendarPage.jsx';
import ContactPage from './pages/Contact/ContactPage.jsx';
import HomePage from './pages/Home/HomePage.jsx';
import MembersPage from './pages/Members/MembersPage.jsx';
import NewsDetailPage from './pages/News/NewsDetailPage.jsx';
import NewsPage from './pages/News/NewsPage.jsx';
import NotFoundPage from './pages/NotFound/NotFoundPage.jsx';
import LeaderPage from './pages/Structure/LeaderPage.jsx';
import StructurePage from './pages/Structure/StructurePage.jsx';
import { getLangFromPath } from './data/i18n.js';

function normalizePath(path) {
  return path.replace(/\.html$/, '').replace(/\/$/, '') || '/';
}

function renderRoute(path, go) {
  const lang = getLangFromPath(path);
  const route = path.replace(/^\/(az|en|ru)/, '') || '/main';

  if (path === '/' || route === '/main') return <HomePage lang={lang} onNavigate={go} />;
  if (route === '/about') return <AboutPage lang={lang} />;
  if (route === '/structure') return <StructurePage lang={lang} />;
  if (route.startsWith('/structure/')) return <LeaderPage lang={lang} slug={route.split('/').pop()} />;
  if (route === '/members' || route === '/uzvler') return <MembersPage lang={lang} />;
  if (route === '/become-member') return <BecomeMemberPage lang={lang} />;
  if (route === '/exhibitions-audit') return <AuditPage lang={lang} />;
  if (route === '/industry-news') return <NewsPage lang={lang} />;
  if (route.startsWith('/industry-news/')) return <NewsDetailPage lang={lang} slug={route.split('/').pop()} />;
  if (route === '/exhibition-calendar-in-Azerbaijan') return <CalendarPage lang={lang} />;
  if (route === '/contact') return <ContactPage lang={lang} />;
  return <NotFoundPage lang={lang} />;
}

export default function App() {
  const [path, setPath] = React.useState(normalizePath(window.location.pathname));
  const lang = getLangFromPath(path);

  React.useEffect(() => {
    const onPop = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const go = React.useCallback((href) => {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    window.history.pushState({}, '', href);
    setPath(normalizePath(href));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Header onNavigate={go} lang={lang} currentPath={path} />
      <main id="content">{renderRoute(path, go)}</main>
      <Footer lang={lang} />
    </>
  );
}
