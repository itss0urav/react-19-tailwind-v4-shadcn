import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';

const benefits = [
  'Verified Properties - All hotels personally verified',
  'Group Discounts - Special rates for group bookings',
  'Convenient Location - Hotels near tourist spots',
  'Easy Combo Booking - Book vehicle + hotel together',
  'Flexible Cancellation - Easy cancellation policies',
];

const hotelCategories = [
  {
    name: 'Budget Hotels',
    description: 'Clean & affordable stays',
    priceRange: '₹500 - ₹1,500/night',
    features: ['Clean rooms', 'Basic amenities', 'WiFi available'],
  },
  {
    name: 'Standard Hotels',
    description: 'Comfortable mid-range options',
    priceRange: '₹1,500 - ₹3,000/night',
    features: ['AC rooms', 'Restaurant', 'Room service'],
  },
  {
    name: 'Premium Hotels',
    description: 'Quality stays with great amenities',
    priceRange: '₹3,000 - ₹6,000/night',
    features: ['Premium amenities', 'Pool/Gym', 'Complimentary breakfast'],
  },
  {
    name: 'Luxury Hotels',
    description: 'Premium experience for special trips',
    priceRange: '₹6,000+/night',
    features: ['5-star amenities', 'Spa & wellness', 'Concierge service'],
  },
];

export default function HotelsPage() {
  return (
    <>
      <PageBanner
        title="Hotels & Accommodations"
        subtitle="Comfortable Stays for Your Journey"
      />

      {/* Why Book Hotels */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Book Hotels With TourBuz"
            subtitle="Get the best accommodation deals for your group travel"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                variants={staggerItem}
                className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border"
              >
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hotel Categories */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Hotel Categories"
            subtitle="Find the right stay for your budget"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {hotelCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={staggerItem}
                className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all h-full flex flex-col"
              >
                <Badge className="mb-4 w-fit">{category.priceRange}</Badge>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2 mt-auto">
                  {category.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Book Vehicle + Hotel Together
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get special combo discounts when you book both vehicle and hotel through TourBuz
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Get Combo Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
