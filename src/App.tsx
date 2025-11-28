import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/layout/ScrollToTop';
import PageLayout from '@/components/layout/PageLayout';

// Pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import FleetPage from '@/pages/FleetPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import TourPackagesPage from '@/pages/TourPackagesPage';
import CollegeToursPage from '@/pages/CollegeToursPage';
import HotelsPage from '@/pages/HotelsPage';
import VehicleOwnersPage from '@/pages/VehicleOwnersPage';
import DriversPage from '@/pages/DriversPage';
import ContactPage from '@/pages/ContactPage';
import FAQPage from '@/pages/FAQPage';
import NotFoundPage from '@/pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/fleet" element={<FleetPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/tour-packages" element={<TourPackagesPage />} />
          <Route path="/college-tours" element={<CollegeToursPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/vehicle-owners" element={<VehicleOwnersPage />} />
          <Route path="/drivers" element={<DriversPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageLayout>
      <Toaster position="top-right" />
    </BrowserRouter>
  );
}

export default App;
