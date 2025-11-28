import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users, Bus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function SearchBox() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '',
    vehicleType: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/fleet');
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
      <h2 className="text-2xl font-bold text-secondary mb-6">Find Your Perfect Ride</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* From & To */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="from" className="text-secondary">From Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="from"
                placeholder="Pickup City"
                className="pl-10"
                value={formData.from}
                onChange={(e) => setFormData({ ...formData, from: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="to" className="text-secondary">To Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="to"
                placeholder="Drop City"
                className="pl-10"
                value={formData.to}
                onChange={(e) => setFormData({ ...formData, to: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Date & Passengers */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date" className="text-secondary">Journey Date</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="date"
                type="date"
                className="pl-10"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="passengers" className="text-secondary">Passengers</Label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="passengers"
                type="number"
                placeholder="Number of passengers"
                className="pl-10"
                min="1"
                value={formData.passengers}
                onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Vehicle Type */}
        <div className="space-y-2">
          <Label className="text-secondary">Vehicle Type</Label>
          <div className="relative">
            <Bus className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
            <Select
              value={formData.vehicleType}
              onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}
            >
              <SelectTrigger className="pl-10">
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tempo">Tempo Traveller (12-17 Seater)</SelectItem>
                <SelectItem value="minibus">Mini Bus (20-25 Seater)</SelectItem>
                <SelectItem value="bus">Bus (35-45 Seater)</SelectItem>
                <SelectItem value="sleeper">Sleeper Bus</SelectItem>
                <SelectItem value="luxury">Luxury Bus</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full" size="lg">
          <Search className="mr-2 h-5 w-5" />
          Find Vehicles
        </Button>
      </form>
    </div>
  );
}
