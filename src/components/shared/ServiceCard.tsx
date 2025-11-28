import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { staggerItem } from '@/lib/animations';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

  return (
    <motion.div
      variants={staggerItem}
      className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300 group h-full flex flex-col"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
        {IconComponent && (
          <IconComponent className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
        )}
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold mb-2 text-card-foreground">{service.title}</h3>
      <p className="text-muted-foreground mb-4 flex-1">{service.description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-4">
        {service.features.slice(0, 3).map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Link */}
      <Link
        to={service.href}
        className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all"
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
