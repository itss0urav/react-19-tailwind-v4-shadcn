import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { fadeInUp, fadeInRight } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import SearchBox from './SearchBox';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-secondary/95 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-transparent" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
                India's Trusted Travel Partner
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Book Tourist Vehicles{' '}
              <span className="text-primary">Instantly</span> Across India
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-lg"
            >
              Buses, Tempo Travellers, Mini Buses - All at your fingertips. Safe, reliable, and affordable group travel solutions.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base border-white/30 text-white hover:bg-white/10"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch How It Works
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="flex items-center gap-8 mt-10 pt-10 border-t border-white/10"
            >
              <div>
                <p className="text-3xl font-bold text-white">10,000+</p>
                <p className="text-white/60 text-sm">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-white/60 text-sm">Verified Vehicles</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-white/60 text-sm">Cities Covered</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Search Box */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <SearchBox />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
