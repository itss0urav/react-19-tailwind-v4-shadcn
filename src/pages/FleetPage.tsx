import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import { vehicleTypes } from '@/data/vehicles';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const commonFeatures = [
  'GPS Tracking Enabled',
  'First Aid Kit',
  'Fire Extinguisher',
  'Valid Insurance',
  'Valid Fitness Certificate',
  'Clean & Sanitized',
  'Emergency Exit',
  'Mobile Charging Points',
];

export default function FleetPage() {
  return (
    <>
      <PageBanner
        title="Our Fleet"
        subtitle="Choose from Our Wide Range of Tourist Vehicles"
      />

      {/* Vehicle Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Vehicle Categories"
            subtitle="Find the perfect vehicle for your journey"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {vehicleTypes.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                variants={staggerItem}
                id={vehicle.id}
                className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground text-lg px-4 py-2">
                      From {vehicle.pricePerKm}/km
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-2">{vehicle.name}</h3>
                    <p className="text-primary font-medium mb-4">{vehicle.seatingCapacity}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Best For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.bestFor.map((item) => (
                          <Badge key={item} variant="secondary">{item}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {vehicle.features.map((feature) => (
                          <span key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      <strong>Luggage:</strong> {vehicle.luggage}
                    </p>

                    <Button asChild>
                      <Link to="/contact">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Common Features */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Standard Features Across All Vehicles"
            subtitle="Every vehicle in our fleet meets these essential standards"
          />

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {commonFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
