import { motion } from 'framer-motion';
import { TrendingUp, Megaphone, Smartphone, CreditCard, MapPin, BarChart, Headphones, FileCheck } from 'lucide-react';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';

const benefits = [
  { icon: TrendingUp, title: 'More Bookings', description: 'Access to thousands of customers' },
  { icon: Megaphone, title: 'Zero Marketing Cost', description: 'We bring customers to you' },
  { icon: Smartphone, title: 'Easy Management', description: 'Manage bookings through app' },
  { icon: CreditCard, title: 'Timely Payments', description: 'Guaranteed payment settlement' },
  { icon: MapPin, title: 'Fleet Tracking', description: 'Track all your vehicles in one place' },
  { icon: BarChart, title: 'Business Reports', description: 'Detailed analytics and reports' },
  { icon: Headphones, title: 'Support', description: 'Dedicated partner support team' },
];

const steps = [
  { number: 1, title: 'Fill Registration Form', description: 'Enter your basic details' },
  { number: 2, title: 'Submit Documents', description: 'Upload vehicle documents for verification' },
  { number: 3, title: 'Physical Verification', description: 'Our team verifies your vehicles' },
  { number: 4, title: 'Agreement Signing', description: 'Sign the partnership agreement' },
  { number: 5, title: 'Get App Access', description: 'Access to owner dashboard and app' },
  { number: 6, title: 'Start Earning', description: 'Start receiving bookings!' },
];

const documents = [
  'Vehicle Registration Certificate (RC)',
  'Vehicle Insurance',
  'Fitness Certificate',
  'Permit (Tourist/All India)',
  "Owner's ID Proof (Aadhaar/PAN)",
  'Bank Account Details',
  'Vehicle Photos (Exterior & Interior)',
];

export default function VehicleOwnersPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <PageBanner
        title="Partner With TourBuz"
        subtitle="Grow Your Tourist Vehicle Business With Us"
      />

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Benefits for Vehicle Owners"
            subtitle="Join our network and watch your business grow"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How to Join"
            subtitle="Simple steps to become a TourBuz partner"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="bg-card p-6 rounded-xl shadow-sm border border-border relative"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-2 mt-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Documents Required"
            subtitle="Keep these documents ready for verification"
          />

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {documents.map((doc) => (
              <div
                key={doc}
                className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border"
              >
                <FileCheck className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">{doc}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <SectionHeading
              title="Register Now"
              subtitle="Start your partnership journey with TourBuz"
              light
            />

            <motion.form
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Owner Name</Label>
                <Input id="name" placeholder="Your full name" required />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email ID</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Your city" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicles">Number of Vehicles</Label>
                  <Input id="vehicles" type="number" placeholder="e.g., 5" min="1" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Vehicle Types</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select primary vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tempo">Tempo Traveller</SelectItem>
                    <SelectItem value="minibus">Mini Bus</SelectItem>
                    <SelectItem value="bus">Bus</SelectItem>
                    <SelectItem value="luxury">Luxury Bus</SelectItem>
                    <SelectItem value="multiple">Multiple Types</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Register Now
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
