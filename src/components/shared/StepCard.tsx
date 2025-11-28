import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { staggerItem } from '@/lib/animations';
import { Step } from '@/types';

interface StepCardProps {
  step: Step;
}

export default function StepCard({ step }: StepCardProps) {
  const IconComponent = Icons[step.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      variants={staggerItem}
      className="relative text-center"
    >
      {/* Step Number */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center z-10">
        {step.number}
      </div>

      {/* Card */}
      <div className="bg-card rounded-xl p-6 pt-8 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-2 text-card-foreground">{step.title}</h3>
        <p className="text-muted-foreground">{step.description}</p>
      </div>
    </motion.div>
  );
}
