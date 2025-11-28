import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageBanner from '@/components/shared/PageBanner';
import SectionHeading from '@/components/shared/SectionHeading';

const packageCategories = [
  { id: 'weekend', label: 'Weekend Getaways', duration: '2-3 Days' },
  { id: 'short', label: 'Short Trips', duration: '4-5 Days' },
  { id: 'week', label: 'Week Long Tours', duration: '6-7 Days' },
  { id: 'extended', label: 'Extended Tours', duration: '8+ Days' },
];

const samplePackages = [
  {
    id: '1',
    name: 'Goa Beach Bliss',
    duration: '3N/4D',
    destinations: ['North Goa', 'South Goa', 'Dudhsagar Falls'],
    startingPrice: 8999,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    category: 'weekend',
  },
  {
    id: '2',
    name: 'Rajasthan Royal Tour',
    duration: '5N/6D',
    destinations: ['Jaipur', 'Jodhpur', 'Udaipur', 'Jaisalmer'],
    startingPrice: 15999,
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
    category: 'week',
  },
  {
    id: '3',
    name: 'Kerala Backwaters',
    duration: '4N/5D',
    destinations: ['Kochi', 'Munnar', 'Alleppey', 'Kovalam'],
    startingPrice: 12999,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    category: 'short',
  },
  {
    id: '4',
    name: 'Himachal Adventure',
    duration: '6N/7D',
    destinations: ['Shimla', 'Manali', 'Solang Valley', 'Rohtang'],
    startingPrice: 14999,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    category: 'week',
  },
  {
    id: '5',
    name: 'Coorg Coffee Trail',
    duration: '2N/3D',
    destinations: ['Abbey Falls', 'Raja Seat', 'Coffee Plantations'],
    startingPrice: 6999,
    image: 'https://images.unsplash.com/photo-1600100397608-e8a0e3e37c7c?w=800&q=80',
    category: 'weekend',
  },
  {
    id: '6',
    name: 'Complete South India',
    duration: '10N/11D',
    destinations: ['Chennai', 'Pondicherry', 'Madurai', 'Kanyakumari', 'Trivandrum'],
    startingPrice: 24999,
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    category: 'extended',
  },
];

function PackageCard({ pkg }: { pkg: typeof samplePackages[0] }) {
  return (
    <motion.div
      variants={staggerItem}
      className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          {pkg.duration}
        </Badge>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <MapPin className="h-4 w-4" />
          <span>{pkg.destinations.slice(0, 3).join(', ')}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-sm text-muted-foreground">Starting from</span>
            <p className="text-2xl font-bold text-primary">₹{pkg.startingPrice.toLocaleString()}</p>
            <span className="text-xs text-muted-foreground">per person</span>
          </div>
        </div>
        <Button asChild className="w-full">
          <Link to="/contact">
            Get Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

export default function TourPackagesPage() {
  return (
    <>
      <PageBanner
        title="Tour Packages"
        subtitle="All-Inclusive Holiday Packages for Every Budget"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Explore Our Packages"
            subtitle="Choose from our curated selection of tour packages"
          />

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-8 h-auto bg-transparent">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                All Packages
              </TabsTrigger>
              {packageCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {samplePackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </motion.div>
            </TabsContent>

            {packageCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {samplePackages
                    .filter((pkg) => pkg.category === cat.id)
                    .map((pkg) => (
                      <PackageCard key={pkg.id} pkg={pkg} />
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
}
