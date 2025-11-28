import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/shared/SectionHeading';
import FeatureCard from '@/components/shared/FeatureCard';
import { whyChooseUsFeatures } from '@/data/features';

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Travel With TourBuz?"
          subtitle="We're committed to making your group travel experience safe, comfortable, and memorable."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyChooseUsFeatures.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
