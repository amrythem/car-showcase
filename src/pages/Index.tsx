import React from 'react';
import { Heart, Share2, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CarCarousel from '@/components/CarCarousel';
import View360Button from '@/components/View360Button';
import PriceCalculator from '@/components/PriceCalculator';
import CarOverview from '@/components/CarOverview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-soft sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CarShowcase
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Cars</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Finance</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Sell</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Support</a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </Button>
              <Button variant="car-primary" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Car Images and 360 View */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-fade-in">
              <CarCarousel />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <View360Button />
              <Button variant="outline" className="flex-1 sm:flex-none">
                <Heart className="h-4 w-4 mr-2" />
                Save Car
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Price Calculator Section */}
            <div className="animate-scale-in">
              <PriceCalculator />
            </div>
          </div>

          {/* Right Column - Car Overview */}
          <div className="lg:col-span-1 animate-slide-up">
            <CarOverview />
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          <div className="text-center p-6 bg-gradient-card rounded-xl shadow-soft">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Expert Support</h3>
            <p className="text-sm text-muted-foreground">
              Get personalized assistance from our car experts throughout your buying journey.
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-card rounded-xl shadow-soft">
            <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="h-6 w-6 text-success" />
            </div>
            <h3 className="font-semibold mb-2">Quality Assured</h3>
            <p className="text-sm text-muted-foreground">
              Every car undergoes a comprehensive 200-point quality check before listing.
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-card rounded-xl shadow-soft">
            <div className="w-12 h-12 bg-car-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="h-6 w-6 text-car-accent" />
            </div>
            <h3 className="font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-sm text-muted-foreground">
              No hidden costs or surprises. What you see is what you pay, with complete transparency.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              CarShowcase
            </h2>
            <p className="text-muted-foreground mb-6">
              Your trusted partner in finding the perfect car
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm">Privacy Policy</Button>
              <Button variant="outline" size="sm">Terms of Service</Button>
              <Button variant="outline" size="sm">Contact Us</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
