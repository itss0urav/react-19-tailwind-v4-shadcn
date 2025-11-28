import { FAQItem } from '@/types';

export const faqCategories = [
  { id: 'booking', label: 'Booking' },
  { id: 'trip', label: 'Trip' },
  { id: 'vehicle', label: 'Vehicle' },
  { id: 'payment', label: 'Payment' },
];

export const faqData: FAQItem[] = [
  // Booking FAQs
  {
    id: '1',
    question: 'How do I book a vehicle on TourBuz?',
    answer: "Simply enter your travel details, browse available vehicles, select one, and pay the booking amount. You'll receive instant confirmation.",
    category: 'booking',
  },
  {
    id: '2',
    question: 'What payment methods are accepted?',
    answer: 'We accept UPI, Credit/Debit Cards, Net Banking, and Wallets. For corporate bookings, we also accept bank transfers.',
    category: 'booking',
  },
  {
    id: '3',
    question: 'How much booking amount do I need to pay?',
    answer: 'You need to pay 20% of the total amount as booking. The remaining amount is paid to the driver before the trip starts.',
    category: 'booking',
  },
  {
    id: '4',
    question: 'Can I cancel my booking?',
    answer: 'Yes, you can cancel your booking. Cancellation charges apply based on how close to the travel date you cancel. Check our cancellation policy for details.',
    category: 'booking',
  },
  {
    id: '5',
    question: 'How do I modify my booking?',
    answer: 'Contact our support team via app, WhatsApp, or phone to modify your booking. Modifications are subject to vehicle availability.',
    category: 'booking',
  },
  // Trip FAQs
  {
    id: '6',
    question: 'How do I start my trip?',
    answer: "When the driver arrives, you'll receive an OTP. Verify the OTP in the app to start your trip.",
    category: 'trip',
  },
  {
    id: '7',
    question: 'Can I track my vehicle during the trip?',
    answer: 'Yes, you can track your vehicle in real-time on the TourBuz app throughout your journey.',
    category: 'trip',
  },
  {
    id: '8',
    question: "What if the driver doesn't show up?",
    answer: "Contact our 24/7 support immediately. We'll either arrange an alternate vehicle or provide a full refund.",
    category: 'trip',
  },
  {
    id: '9',
    question: 'Are the drivers verified?',
    answer: 'Yes, all drivers are background verified. Their documents, experience, and driving history are thoroughly checked.',
    category: 'trip',
  },
  // Vehicle FAQs
  {
    id: '10',
    question: 'Are all vehicles air-conditioned?',
    answer: 'We have both AC and Non-AC vehicles. You can filter and choose based on your preference.',
    category: 'vehicle',
  },
  {
    id: '11',
    question: 'Are the vehicles insured?',
    answer: 'Yes, all vehicles on our platform have valid insurance coverage.',
    category: 'vehicle',
  },
  {
    id: '12',
    question: 'Can I request a specific vehicle?',
    answer: 'You can choose from available vehicles based on photos, features, and reviews. Contact support for specific requests.',
    category: 'vehicle',
  },
  // Payment FAQs
  {
    id: '13',
    question: 'Is my payment secure?',
    answer: 'Yes, all payments are processed through secure payment gateways with encryption.',
    category: 'payment',
  },
  {
    id: '14',
    question: 'When will I get my refund?',
    answer: 'Refunds are processed within 5-7 business days to your original payment method.',
    category: 'payment',
  },
  {
    id: '15',
    question: 'Do you provide invoices?',
    answer: 'Yes, GST invoices are automatically generated and sent to your email after each trip.',
    category: 'payment',
  },
];
