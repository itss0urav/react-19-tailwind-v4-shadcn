import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Check } from 'lucide-react';
import { staggerItem } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { VehicleType } from '@/types';

interface VehicleCardProps {
  vehicle: VehicleType;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          From {vehicle.pricePerKm}/km
        </Badge>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-card-foreground">{vehicle.name}</h3>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span className="text-sm">{vehicle.seatingCapacity}</span>
          </div>
        </div>

        {/* Best For */}
        <p className="text-sm text-muted-foreground mb-3">
          Perfect for: {vehicle.bestFor.slice(0, 2).join(', ')}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {vehicle.features.slice(0, 4).map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full"
            >
              <Check className="h-3 w-3 text-primary" />
              {feature}
            </span>
          ))}
        </div>

        <Button asChild className="w-full">
          <Link to={`/fleet#${vehicle.id}`}>View Details</Link>
        </Button>
      </div>
    </motion.div>
  );
}
