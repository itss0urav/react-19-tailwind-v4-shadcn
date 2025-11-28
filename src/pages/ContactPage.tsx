import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Headphones } from 'lucide-react';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+91 1800-XXX-XXXX (Toll Free)', '+91 98XXX XXXXX'],
    action: 'tel:+911800XXXXXXX',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['support@tourbuz.com', 'bookings@tourbuz.com'],
    action: 'mailto:support@tourbuz.com',
  },
  {
    icon: MapPin,
    title: 'Head Office',
    details: ['123 Business Hub, MG Road', 'Bangalore, Karnataka 560001'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['24/7 Booking Support', 'Office: Mon-Sat, 9AM-7PM'],
  },
];

const quickContacts = [
  { icon: MessageSquare, title: 'WhatsApp', subtitle: 'Quick queries', action: 'https://wa.me/919XXXXXXXXX' },
  { icon: Headphones, title: 'Live Chat', subtitle: 'Instant support', action: '#' },
];

const inquiryTypes = [
  'General Inquiry',
  'Booking Related',
  'Corporate Partnership',
  'Vehicle Owner Partnership',
  'Driver Registration',
  'Feedback/Complaint',
  'Media/PR',
];

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="We're Here to Help You"
      />

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Get In Touch"
            subtitle="Multiple ways to reach us"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={staggerItem}
                className="bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Contact Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {quickContacts.map((contact) => (
              <a
                key={contact.title}
                href={contact.action}
                className="flex items-center gap-3 bg-primary/10 hover:bg-primary/20 px-6 py-3 rounded-full transition-colors"
              >
                <contact.icon className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-semibold text-sm">{contact.title}</p>
                  <p className="text-xs text-muted-foreground">{contact.subtitle}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              title="Send Us a Message"
              subtitle="Fill out the form and we'll get back to you within 24 hours"
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
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email ID</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label>Inquiry Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief subject of your inquiry" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Please describe your inquiry in detail..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Visit Our Office"
            subtitle="Find us on the map"
          />

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border border-border shadow-sm"
          >
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Map integration coming soon</p>
                <p className="text-sm text-muted-foreground mt-2">
                  123 Business Hub, MG Road, Bangalore
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
