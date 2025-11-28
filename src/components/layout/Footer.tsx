import { Link } from 'react-router-dom';
import { Bus, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { footerLinks } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1 - About */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-lg p-2">
                <Bus className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-2xl">Tour<span className="text-primary">Buz</span></span>
            </Link>
            <p className="text-secondary-foreground/80 mb-6 max-w-sm">
              India's trusted tourist vehicle booking platform. Book buses, tempo travellers, and more for your group travel needs.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - For Partners */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For Partners</h3>
            <ul className="space-y-3">
              {footerLinks.forPartners.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-lg mb-4 mt-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+911234567890" className="flex items-start gap-3 text-secondary-foreground/80 hover:text-primary transition-colors">
                  <Phone className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>+91 12345 67890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@tourbuz.com" className="flex items-start gap-3 text-secondary-foreground/80 hover:text-primary transition-colors">
                  <Mail className="h-5 w-5 mt-0.5 shrink-0" />
                  <span>info@tourbuz.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/80">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span>123 Business Park, Bangalore, Karnataka, India - 560001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} TourBuz. All Rights Reserved.
            </p>
            {/* App Store Badges */}
            <div className="flex items-center gap-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
