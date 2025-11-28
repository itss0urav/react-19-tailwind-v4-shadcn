import { motion } from 'framer-motion';
import { MapPin, Shield, Phone, AlertTriangle, Clock, FileCheck } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';

const detailedSteps = [
  {
    number: 1,
    title: 'Search',
    description: 'Enter your pickup location, destination, and travel date. Select number of passengers and preferred vehicle type. Click "Find Vehicles" to see available options.',
  },
  {
    number: 2,
    title: 'Compare & Select',
    description: 'Browse through available vehicles with photos and details. Compare prices, features, and customer ratings. Check vehicle amenities like AC, TV, charging points. Select the vehicle that suits your needs.',
  },
  {
    number: 3,
    title: 'Enter Trip Details',
    description: 'Add all places you want to visit. Mention overnight halts if any. Specify pickup and drop points. Request interstate permit assistance if needed.',
  },
  {
    number: 4,
    title: 'Pay & Confirm',
    description: 'Review complete trip summary and pricing. Pay booking amount securely online (UPI, Card, Net Banking). Receive instant booking confirmation via SMS and Email. Get WhatsApp notification with booking details.',
  },
  {
    number: 5,
    title: 'Travel Day',
    description: 'Driver arrives at pickup location on time. Verify trip start with OTP. Track vehicle location in real-time on app. Share live location with family/friends.',
  },
  {
    number: 6,
    title: 'End Trip & Review',
    description: 'Verify trip end with OTP at destination. Pay remaining amount if any. Rate your experience and provide feedback. Receive trip summary and invoice.',
  },
];

const safetyFeatures = [
  { icon: MapPin, title: 'GPS Tracking', description: 'GPS tracking throughout the journey' },
  { icon: Shield, title: 'Live Location', description: 'Share live location with family' },
  { icon: FileCheck, title: 'Verified Drivers', description: 'Verified and background-checked drivers' },
  { icon: Phone, title: '24/7 Support', description: '24/7 emergency support' },
  { icon: AlertTriangle, title: 'SOS Button', description: 'SOS button in app for emergencies' },
  { icon: Clock, title: 'Fully Insured', description: 'All vehicles fully insured' },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageBanner
        title="How TourBuz Works"
        subtitle="Simple, Fast, and Reliable Booking Process"
      />

      {/* Detailed Steps */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Book Your Trip"
            subtitle="Follow these simple steps to book your perfect ride"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            {detailedSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                    {step.number}
                  </div>
                  {index < detailedSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Your Safety, Our Priority"
            subtitle="We take your safety seriously with these features"
            light
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {safetyFeatures.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
