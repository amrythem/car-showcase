import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { Button } from '@/components/ui/button';
import carMain from '@/assets/grandvitaramain.jpg';
import carInterior from '@/assets/grandvitarainterior.jpeg';
import carRear from '@/assets/grandvitararear.jpg';
import carFront from '@/assets/grandvitarasunroof.jpg';

const carImages = [
  { src: carMain, alt: 'Honda Civic - Side View' },
  { src: carFront, alt: 'Honda Civic - Front View' },
  { src: carInterior, alt: 'Honda Civic - Interior' },
  { src: carRear, alt: 'Honda Civic - Rear View' },
];

const CarCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <div className="relative bg-gradient-card rounded-xl p-6 shadow-medium">
        {/* Main Image */}
        <div className="relative mb-4 group">
          <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg bg-muted">
            <img
              src={carImages[currentImageIndex].src}
              alt={carImages[currentImageIndex].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-medium"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-medium"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Expand Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/80 hover:bg-white shadow-medium"
              onClick={openLightbox}
            >
              <Expand className="h-5 w-5" />
            </Button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {carImages.length}
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-3 justify-center overflow-x-auto pb-2">
          {carImages.map((image, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentImageIndex
                  ? 'border-primary shadow-medium scale-105'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl w-full">
            <img
              src={carImages[currentImageIndex].src}
              alt={carImages[currentImageIndex].alt}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white"
              onClick={closeLightbox}
            >
              ×
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CarCarousel;