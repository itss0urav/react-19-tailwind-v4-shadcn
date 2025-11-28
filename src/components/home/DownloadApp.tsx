import { motion } from 'framer-motion';
import { Smartphone, MapPin, CreditCard, MessageCircle, Gift } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

const appFeatures = [
  { icon: Smartphone, text: 'Easy booking in just 3 taps' },
  { icon: MapPin, text: 'Real-time vehicle tracking' },
  { icon: CreditCard, text: 'Secure online payments' },
  { icon: MessageCircle, text: '24/7 chat support' },
  { icon: Gift, text: 'Exclusive app-only offers' },
];

export default function DownloadApp() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download the TourBuz App
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Book on the go, track in real-time
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {appFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <span>{feature.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* App Store Badges */}
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:opacity-90 transition-opacity">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-14"
                />
              </a>
              <a href="#" className="hover:opacity-90 transition-opacity">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-14"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 h-[500px] bg-secondary rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* App Screenshot Placeholder */}
                  <div className="w-full h-full bg-gradient-to-b from-primary/10 to-primary/5 flex flex-col items-center justify-center p-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4">
                      <Smartphone className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-secondary font-bold text-lg">TourBuz</p>
                    <p className="text-muted-foreground text-sm text-center mt-2">
                      Your journey starts here
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
