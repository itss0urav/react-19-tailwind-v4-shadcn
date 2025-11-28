import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HelpCircle, MessageSquare, Phone, ArrowRight } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';
import { faqData, faqCategories } from '@/data/faq';

export default function FAQPage() {
  return (
    <>
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Find Answers to Common Queries"
      />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How Can We Help?"
            subtitle="Browse through our frequently asked questions"
          />

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Tabs defaultValue={faqCategories[0].id} className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 mb-8 h-auto bg-transparent">
                {faqCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {faqCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Accordion type="single" collapsible className="w-full">
                    {faqData
                      .filter((faq) => faq.category === category.id)
                      .map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                            <div className="flex items-start gap-3">
                              <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>{faq.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pl-8">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              Can't find the answer you're looking for? Our support team is here to help you 24/7.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+911800XXXXXXX">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Helpful Resources"
            subtitle="Explore more about our services"
            light
          />

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {[
              { title: 'How It Works', link: '/how-it-works' },
              { title: 'Our Fleet', link: '/fleet' },
              { title: 'Tour Packages', link: '/tour-packages' },
              { title: 'Partner With Us', link: '/vehicle-owners' },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-colors flex items-center justify-between group"
              >
                <span className="text-white font-medium">{item.title}</span>
                <ArrowRight className="h-5 w-5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
