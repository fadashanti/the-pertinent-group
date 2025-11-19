import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { IdeaPage } from './components/IdeaPage';
import { InsightsPage } from './components/InsightsPage';
import { ContactPage } from './components/ContactPage';
import { LeadMagnetPage } from './components/LeadMagnetPage';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-blanc-pur">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/idea" element={<IdeaPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/lead-magnet" element={<LeadMagnetPage />} />
          <Route path="*" element={<HomePage />} /> {/* Fallback for unknown routes */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
