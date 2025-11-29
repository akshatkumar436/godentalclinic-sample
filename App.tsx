
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import TeamMemberDetail from './pages/TeamMemberDetail';
import ServiceDetail from './pages/ServiceDetail';
import Insurance from './pages/Insurance';
import MonthlyOffers from './pages/MonthlyOffers';
import { useEffect } from 'react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/monthly-offers" element={<MonthlyOffers />} />
          <Route path="/team/:id" element={<TeamMemberDetail />} />
          {/* Generic Service Detail Route */}
          <Route path="/service/:id" element={<ServiceDetail />} />
          {/* Specific Nested Route for Orthodontic Treatments */}
          <Route path="/services/orthodontic-treatment/:id" element={<ServiceDetail />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;