import { motion } from 'framer-motion';
import { Shield, IndianRupee, Bus, Users, Headphones, FileCheck, CreditCard, MapPin } from 'lucide-react';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';

const benefits = [
  { icon: Shield, title: 'Safety First', description: 'All vehicles GPS tracked, drivers background verified' },
  { icon: IndianRupee, title: 'Budget Friendly', description: 'Special discounts for educational institutions' },
  { icon: Bus, title: 'Large Fleet', description: 'Buses of all sizes to accommodate any group' },
  { icon: Users, title: 'Experienced Drivers', description: 'Trained for handling student groups' },
  { icon: Headphones, title: '24/7 Support', description: 'Dedicated support during the entire trip' },
  { icon: FileCheck, title: 'Permit Assistance', description: 'We handle all interstate permits' },
  { icon: CreditCard, title: 'Flexible Payments', description: 'Easy payment options for institutions' },
];

const destinations = [
  { name: 'Goa', type: 'Beach & Adventure' },
  { name: 'Manali', type: 'Mountains & Snow' },
  { name: 'Ooty', type: 'Hills & Nature' },
  { name: 'Pondicherry', type: 'Beach & Heritage' },
  { name: 'Rajasthan', type: 'Forts & Culture' },
  { name: 'Kerala', type: 'Backwaters & Nature' },
];

export default function CollegeToursPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <PageBanner
        title="College & Educational Tours"
        subtitle="Safe & Memorable Trips for Students"
      />

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Why Choose TourBuz for College Tours"
            subtitle="We understand the unique needs of educational institutions"
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
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Popular College Tour Destinations"
            subtitle="Most loved destinations for student trips"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {destinations.map((dest) => (
              <motion.div
                key={dest.name}
                variants={staggerItem}
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{dest.name}</h3>
                  <p className="text-sm text-muted-foreground">{dest.type}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              title="Get a Quote for Your Institution"
              subtitle="Fill the form and we'll get back to you within 24 hours"
            />

            <motion.form
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution Name</Label>
                  <Input id="institution" placeholder="Enter institution name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Person</Label>
                  <Input id="contact" placeholder="Your name" required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email ID</Label>
                  <Input id="email" type="email" placeholder="email@institution.edu" required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="students">Number of Students</Label>
                  <Input id="students" type="number" placeholder="e.g., 50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Preferred Destination</Label>
                  <Input id="destination" placeholder="e.g., Goa" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dates">Travel Dates</Label>
                <Input id="dates" placeholder="e.g., 15-20 December 2024" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Special Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="Any special requirements or preferences..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Enquiry
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
