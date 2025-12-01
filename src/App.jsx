import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Home from '@/pages/Home';
import About from '@/pages/About';
// Grants page replaced by ECO4
import ECO4 from '@/pages/ECO4';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import FAQs from '@/pages/FAQs';
// Old grant-specific pages removed
import EcoSpecialistScheme2024 from '@/pages/blog/EcoSpecialistScheme2024';
import HeatPumpInstallation2024 from '@/pages/blog/HeatPumpInstallation2024';
import SolarPanelGrants2024 from '@/pages/blog/SolarPanelGrants2024';
import InsulationGrants2024 from '@/pages/blog/InsulationGrants2024';
import GreenHomesGrant2024 from '@/pages/blog/GreenHomesGrant2024';
import EnergyEfficiency2024 from '@/pages/blog/EnergyEfficiency2024';
import WarmHomesDiscount2024 from '@/pages/blog/WarmHomesDiscount2024';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import CookiePolicy from '@/pages/CookiePolicy';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollToTopButton />
      <div className="min-h-screen flex flex-col items-center">
        <Helmet>
          <title>EcoSpecialist - Green Energy Grants & Solutions</title>
          <meta name="description" content="EcoSpecialist provides comprehensive green energy grants and eco-friendly solutions. Get expert advice on government grants for renewable energy systems." />
        </Helmet>
        <Header />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/eco4" element={<ECO4 />} />
            {/* Backwards compatibility: redirect /grants to /eco4 */}
            <Route path="/grants" element={<ECO4 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            {/* <Route path="/blog" element={<Blog />} /> */} {/* Archived */}
            {/* Removed old /grants/* routes */}
            <Route path="/blog/eco-specialist-scheme-2024" element={<EcoSpecialistScheme2024 />} />
            <Route path="/blog/heat-pump-installation-2024" element={<HeatPumpInstallation2024 />} />
            <Route path="/blog/solar-panel-grants-2024" element={<SolarPanelGrants2024 />} />
            <Route path="/blog/insulation-grants-2024" element={<InsulationGrants2024 />} />
            <Route path="/blog/green-homes-grant-2024" element={<GreenHomesGrant2024 />} />
            <Route path="/blog/energy-efficiency-2024" element={<EnergyEfficiency2024 />} />
            <Route path="/blog/warm-homes-discount-2024" element={<WarmHomesDiscount2024 />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;