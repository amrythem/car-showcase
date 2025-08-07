import React, { useState } from 'react';
import { Calculator, Users, Clock, IndianRupee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PriceCalculator = () => {
  const [invites, setInvites] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculatePrice = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const basePrice = 100;
      const calculated = invites * duration * basePrice;
      setTotalPrice(calculated);
      setIsCalculating(false);
    }, 500);
  };

  const resetCalculator = () => {
    setInvites(0);
    setDuration(0);
    setTotalPrice(null);
  };

  return (
    <Card className="bg-gradient-card shadow-medium border-0">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-xl">
          <Calculator className="h-5 w-5 text-primary" />
          Event Price Calculator
        </CardTitle>
        <CardDescription>
          Calculate the total cost for your car showcase event
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="invites" className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Number of Invites
            </Label>
            <Input
              id="invites"
              type="number"
              min="0"
              value={invites || ''}
              onChange={(e) => setInvites(Number(e.target.value))}
              placeholder="Enter number of invites"
              className="text-center text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="duration" className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Duration (Hours)
            </Label>
            <Input
              id="duration"
              type="number"
              min="0"
              step="0.5"
              value={duration || ''}
              onChange={(e) => setDuration(Number(e.target.value))}
              placeholder="Enter event duration"
              className="text-center text-lg"
            />
          </div>
        </div>

        {/* Calculation Formula Display */}
        <div className="p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            <span className="font-semibold">Formula:</span> Invites × Duration × ₹100 per hour per invite
          </p>
          {invites > 0 && duration > 0 && (
            <p className="text-sm text-center mt-2">
              {invites} × {duration} × ₹100 = <span className="font-semibold">₹{invites * duration * 100}</span>
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            variant="car-primary"
            onClick={calculatePrice}
            disabled={invites <= 0 || duration <= 0 || isCalculating}
            className="flex-1"
          >
            {isCalculating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Calculating...
              </>
            ) : (
              <>
                <Calculator className="h-4 w-4 mr-2" />
                Calculate Price
              </>
            )}
          </Button>
            
          <Button
            variant="outline"
            onClick={resetCalculator}
          >
            Reset
          </Button>
        </div>

        {/* Result Display */}
        {totalPrice !== null && (
          <div className="bg-success/10 border border-success/20 rounded-lg p-6 text-center animate-scale-in">
            <div className="flex items-center justify-center gap-2 mb-2">
              <IndianRupee className="h-6 w-6 text-success" />
              <h3 className="text-lg font-semibold text-success">Total Price</h3>
            </div>
            <div className="text-3xl font-bold text-success">
              ₹{totalPrice.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              For {invites} invites over {duration} hours
            </p>
          </div>
        )}

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-lg font-semibold text-primary">₹100</div>
            <div className="text-xs text-muted-foreground">Per Hour Per Invite</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-primary">24/7</div>
            <div className="text-xs text-muted-foreground">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-primary">Premium</div>
            <div className="text-xs text-muted-foreground">Event Experience</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;