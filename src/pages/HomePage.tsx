import HeroSection from '@/components/home/HeroSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import PopularDestinations from '@/components/home/PopularDestinations';
import FleetShowcase from '@/components/home/FleetShowcase';
import HowItWorks from '@/components/home/HowItWorks';
import Statistics from '@/components/home/Statistics';
import Testimonials from '@/components/home/Testimonials';
import DownloadApp from '@/components/home/DownloadApp';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <PopularDestinations />
      <FleetShowcase />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <DownloadApp />
    </>
  );
}
