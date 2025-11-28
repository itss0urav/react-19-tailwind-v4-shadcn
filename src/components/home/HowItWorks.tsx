import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/shared/SectionHeading';
import StepCard from '@/components/shared/StepCard';
import { howItWorksSteps } from '@/data/features';

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Book Your Trip in 3 Easy Steps"
          subtitle="Simple, fast, and hassle-free booking process"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Connection Line (desktop only) */}
          <div className="hidden md:block absolute top-20 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-primary to-primary" style={{ width: '66%', left: '17%' }} />

          {howItWorksSteps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
