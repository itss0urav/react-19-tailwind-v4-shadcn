import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/shared/SectionHeading';
import DestinationCard from '@/components/shared/DestinationCard';
import { popularDestinations } from '@/data/destinations';

export default function PopularDestinations() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Popular Tour Destinations"
          subtitle="Explore the most loved destinations across India with TourBuz"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {popularDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
