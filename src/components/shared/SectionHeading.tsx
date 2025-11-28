import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        'mb-12',
        centered && 'text-center',
        className
      )}
    >
      <h2 className={cn(
        'text-3xl md:text-4xl font-bold mb-4',
        light ? 'text-white' : 'text-foreground'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg max-w-2xl',
          centered && 'mx-auto',
          light ? 'text-white/80' : 'text-muted-foreground'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
