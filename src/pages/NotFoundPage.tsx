import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, Phone } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 text-center"
      >
        {/* 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary/10 p-6 rounded-full">
              <Search className="h-16 w-16 text-primary" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you're looking for seems to have taken a wrong turn.
          Don't worry, let us help you find your way back.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Contact Support
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground mb-4">Or explore these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { title: 'Our Fleet', link: '/fleet' },
              { title: 'Tour Packages', link: '/tour-packages' },
              { title: 'How It Works', link: '/how-it-works' },
              { title: 'FAQs', link: '/faq' },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="text-primary hover:underline"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
