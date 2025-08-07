import React from 'react';
import { Car, Calendar, Gauge, IndianRupee, MapPin, Fuel, Settings, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CarOverview = () => {
  const carDetails = {
    model: 'Maruti Suzuki Grand Vitara',
    variant: 'Hybrid Model',
    year: 2023,
    mileage: 12500,
    price: 950000,
    location: 'Delhi',
    fuelType: 'Petrol',
    transmission: 'CVT Automatic',
    rating: 4.8,
    reviews: 156,
    condition: 'Excellent',
    owners: 1
  };

  const specifications = [
    { label: 'Engine', value: '1.8L i-VTEC', icon: Settings },
    { label: 'Power', value: '141 HP', icon: Gauge },
    { label: 'Fuel Economy', value: '16.5 km/l', icon: Fuel },
    { label: 'Registration', value: 'MH-01-AB-1234', icon: Car },
  ];

  const features = [
    'Sunroof',
    'Leather Seats',
    'Touchscreen Infotainment',
    'Automatic Climate Control',
    'Reverse Camera',
    'Alloy Wheels'
  ];

  return (
    <div className="space-y-6">
      {/* Main Car Info Card */}
      <Card className="bg-gradient-card shadow-medium border-0">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                <Car className="h-6 w-6 text-primary" />
                {carDetails.model} {carDetails.variant}
              </CardTitle>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {carDetails.year}
                </span>
                <span className="flex items-center gap-1">
                  <Gauge className="h-4 w-4" />
                  {carDetails.mileage.toLocaleString()} km
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {carDetails.location}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary mb-1">
                ₹{carDetails.price.toLocaleString()}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-medium">{carDetails.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({carDetails.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Status Badges */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
              {carDetails.condition}
            </Badge>
            <Badge variant="secondary" className="bg-car-accent/10 text-car-accent border-car-accent/20">
              {carDetails.owners} Owner
            </Badge>
            <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">
              {carDetails.fuelType}
            </Badge>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {carDetails.transmission}
            </Badge>
          </div>

          {/* Key Specifications */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Settings className="h-4 w-4 text-primary" />
              Key Specifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specifications.map((spec, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <spec.icon className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">{spec.label}</div>
                    <div className="font-medium">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-3">Key Features</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-sm p-2 bg-muted rounded text-center"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-3 pt-4 border-t">
            <Button variant="car-primary" className="flex-1">
              <IndianRupee className="h-4 w-4 mr-2" />
              Schedule Test Drive
            </Button>
            <Button variant="car-accent" className="flex-1">
              Get Finance Options
            </Button>
            <Button variant="outline" className="flex-1">
              Share Car
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Price Breakdown Card */}
      <Card className="bg-gradient-card shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <IndianRupee className="h-5 w-5 text-primary" />
            Price Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Car Price</span>
              <span className="font-medium">₹{carDetails.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Registration Transfer</span>
              <span>₹15,000</span>
            </div>
            <div className="flex justify-between text-muted-foreground">
              <span>Insurance</span>
              <span>₹25,000</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-semibold text-lg">
              <span>Total On-Road Price</span>
              <span className="text-primary">₹{(carDetails.price + 40000).toLocaleString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarOverview;