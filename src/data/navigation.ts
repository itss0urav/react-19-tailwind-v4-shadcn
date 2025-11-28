import { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Fleet', href: '/fleet' },
  {
    label: 'Tour Packages',
    href: '/tour-packages',
    children: [
      { label: 'College Tours', href: '/college-tours' },
      { label: 'Family Tours', href: '/tour-packages?type=family' },
      { label: 'Corporate Tours', href: '/tour-packages?type=corporate' },
    ],
  },
  { label: 'Hotels & Stays', href: '/hotels' },
  {
    label: 'Partner With Us',
    children: [
      { label: 'For Vehicle Owners', href: '/partner/vehicle-owners' },
      { label: 'For Drivers', href: '/partner/drivers' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

export const footerLinks = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Fleet', href: '/fleet' },
    { label: 'Tour Packages', href: '/tour-packages' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/faq' },
  ],
  forPartners: [
    { label: 'Register Vehicle', href: '/partner/vehicle-owners' },
    { label: 'Driver Registration', href: '/partner/drivers' },
    { label: 'Hotel Partners', href: '/hotels' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Refund Policy', href: '/refund' },
    { label: 'Cancellation Policy', href: '/cancellation' },
  ],
};
