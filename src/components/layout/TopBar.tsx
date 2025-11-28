import { Phone, Mail, Facebook, Instagram, Twitter, Youtube, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TopBar() {
  return (
    <div className="bg-secondary text-secondary-foreground py-2 hidden md:block">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Contact Info */}
        <div className="flex items-center gap-6 text-sm">
          <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span>+91 12345 67890</span>
          </a>
          <a href="mailto:info@tourbuz.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
            <span>info@tourbuz.com</span>
          </a>
        </div>

        {/* Social & Actions */}
        <div className="flex items-center gap-4">
          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
          </div>

          <div className="h-4 w-px bg-secondary-foreground/30" />

          {/* Download App */}
          <Button variant="ghost" size="sm" className="text-secondary-foreground hover:text-primary hover:bg-secondary-foreground/10 h-7 text-xs">
            <Download className="h-3 w-3 mr-1" />
            Download App
          </Button>

          {/* Login/Sign Up */}
          <Button variant="outline" size="sm" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-primary h-7 text-xs">
            Login / Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
