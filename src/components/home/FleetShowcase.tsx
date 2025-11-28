import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { staggerContainer } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';
import VehicleCard from '@/components/shared/VehicleCard';
import { fleetShowcase } from '@/data/vehicles';

export default function FleetShowcase() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Choose Your Perfect Ride"
          subtitle="From tempo travellers to luxury buses, find the right vehicle for your journey"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {fleetShowcase.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </motion.div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/fleet">
              View All Vehicles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
