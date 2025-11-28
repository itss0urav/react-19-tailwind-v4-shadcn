export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  image: string;
  href: string;
}

export interface VehicleType {
  id: string;
  name: string;
  seatingCapacity: string;
  bestFor: string[];
  features: string[];
  luggage: string;
  pricePerKm: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  bestFor: string[];
  icon: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'booking' | 'trip' | 'vehicle' | 'payment';
}

export interface Statistic {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface Step {
  id: string;
  number: number;
  icon: string;
  title: string;
  description: string;
}
