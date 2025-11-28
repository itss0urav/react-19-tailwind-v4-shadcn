import { motion } from 'framer-motion';
import { Shield, Wallet, Clock, Calendar, Headphones, Award } from 'lucide-react';
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
  { icon: Wallet, title: 'Better Earnings', description: 'Earn more with competitive rates and incentives' },
  { icon: Clock, title: 'Flexible Hours', description: 'Work on your own schedule' },
  { icon: Calendar, title: 'Regular Trips', description: 'Consistent booking opportunities' },
  { icon: Shield, title: 'Insurance Cover', description: 'Personal accident insurance provided' },
  { icon: Headphones, title: '24/7 Support', description: 'Dedicated driver support team' },
  { icon: Award, title: 'Training & Growth', description: 'Skill development programs' },
];

const requirements = [
  'Valid Commercial Driving License',
  'Minimum 3 years driving experience',
  'Clean driving record',
  'Knowledge of local routes',
  'Basic smartphone skills',
  'Good communication skills',
];

const steps = [
  { number: 1, title: 'Apply Online', description: 'Fill the registration form with your details' },
  { number: 2, title: 'Document Verification', description: 'Submit required documents for verification' },
  { number: 3, title: 'Background Check', description: 'Complete background verification process' },
  { number: 4, title: 'Training Session', description: 'Attend orientation and training' },
  { number: 5, title: 'Get App Access', description: 'Download app and start receiving trips' },
];

export default function DriversPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <PageBanner
        title="Drive With TourBuz"
        subtitle="Join Our Network of Professional Drivers"
      />

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Drive With TourBuz"
            subtitle="Benefits of joining our driver network"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
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

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Requirements"
                subtitle="What you need to join"
                centered={false}
              />
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="h-3 w-3 text-primary" />
                    </div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionHeading
                title="How to Join"
                subtitle="Simple steps to get started"
                centered={false}
              />
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.number} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <SectionHeading
              title="Apply Now"
              subtitle="Start your journey with TourBuz"
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
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your full name" required />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Your city" required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" type="number" placeholder="e.g., 5" min="3" required />
                </div>
                <div className="space-y-2">
                  <Label>License Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select license type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lcv">LCV (Light Commercial)</SelectItem>
                      <SelectItem value="hcv">HCV (Heavy Commercial)</SelectItem>
                      <SelectItem value="both">Both LCV & HCV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Vehicle Types You Can Drive</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tempo">Tempo Traveller</SelectItem>
                    <SelectItem value="minibus">Mini Bus</SelectItem>
                    <SelectItem value="bus">Bus</SelectItem>
                    <SelectItem value="all">All Types</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Application
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
