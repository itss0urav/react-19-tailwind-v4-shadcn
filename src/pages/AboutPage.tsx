import { motion } from 'framer-motion';
import { Target, Eye, Shield, Heart, Lightbulb, CheckCircle } from 'lucide-react';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import Statistics from '@/components/home/Statistics';

const storyPoints = [
  'TourBuz was founded with a simple mission - to make group travel easy, safe, and affordable for everyone in India.',
  'We noticed that booking tourist vehicles was a hassle - unreliable operators, hidden charges, and no transparency.',
  'We set out to change this by creating a technology-driven platform that connects travelers with verified vehicle owners.',
  'Today, TourBuz is trusted by thousands of customers for their group travel needs.',
  'From college trips to corporate events, family pilgrimages to destination weddings - we\'ve got India moving.',
];

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Your safety is non-negotiable. Every vehicle and driver is thoroughly verified.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'No hidden charges, no surprises. What you see is what you pay.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Every decision we make starts with "How does this help our customer?"',
  },
  {
    icon: CheckCircle,
    title: 'Reliability',
    description: 'We keep our promises. Your vehicle will be there when you need it.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly improve our technology to serve you better.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About TourBuz"
        subtitle="Transforming Group Travel in India"
      />

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                {storyPoints.map((point, index) => (
                  <motion.p
                    key={index}
                    variants={staggerItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-muted-foreground"
                  >
                    {point}
                  </motion.p>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80"
                alt="TourBuz Journey"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">5+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide safe, reliable, and affordable tourist vehicle booking services across India through technology and trust.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become India's most trusted and largest tourist vehicle booking platform, making group travel hassle-free for every Indian.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <Statistics />
    </>
  );
}
