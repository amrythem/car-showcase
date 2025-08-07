import React, { useState, useEffect } from 'react';
import { RotateCw, X, MousePointer2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import carMainImage from '@/assets/grandvitaramain.jpg';
import carInteriorImage from '@/assets/grandvitarainterior.jpeg';
import carRearImage from '@/assets/grandvitararear.jpg';
import carFrontImage from '@/assets/grandvitarasunroof.jpg';


const View360Button = () => {
  const [is360ViewOpen, setIs360ViewOpen] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  // Car images for different angles
  const carImages = [
    { angle: 0, image: carMainImage, label: 'Front View' },
    { angle: 90, image: carFrontImage, label: 'Side View' },
    { angle: 180, image: carRearImage, label: 'Rear View' },
    { angle: 270, image: carInteriorImage, label: 'Interior View' }
  ];

  // Get current image based on rotation angle
  const getCurrentImage = () => {
    const normalizedAngle = ((rotationAngle % 360) + 360) % 360;
    const index = Math.round(normalizedAngle / 90) % 4;
    return carImages[index];
  };

  const open360View = () => {
    setIs360ViewOpen(true);
  };

  const close360View = () => {
    setIs360ViewOpen(false);
    setIsRotating(false);
    setRotationAngle(0);
    setIsDragging(false);
  };

  // Handle mouse/touch events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsRotating(false);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart;
    setRotationAngle(prev => prev + deltaX * 0.5);
    setDragStart(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsRotating(false);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragStart;
    setRotationAngle(prev => prev + deltaX * 0.5);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const startRotation = () => {
    setIsRotating(!isRotating);
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRotating) {
      interval = setInterval(() => {
        setRotationAngle(prev => (prev + 5) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRotating]);

  return (
    <>
      <Button
        variant="view-360"
        size="lg"
        onClick={open360View}
        className="w-full md:w-auto"
      >
        <RotateCw className="h-5 w-5 mr-2" />
        360° View
      </Button>

      {/* 360 View Modal */}
      {is360ViewOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-semibold">360° Interactive View</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={close360View}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

             {/* 360 View Content */}
             <div className="p-6">
               <div className="relative bg-gradient-to-br from-muted to-background rounded-lg overflow-hidden">
                 {/* Interactive Car Image */}
                 <div 
                   className="relative w-full h-96 cursor-grab select-none"
                   onMouseDown={handleMouseDown}
                   onMouseMove={handleMouseMove}
                   onMouseUp={handleMouseUp}
                   onMouseLeave={handleMouseUp}
                   onTouchStart={handleTouchStart}
                   onTouchMove={handleTouchMove}
                   onTouchEnd={handleTouchEnd}
                   style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                 >
                   <img 
                     src={getCurrentImage().image}
                     alt={getCurrentImage().label}
                     className="w-full h-full object-contain transition-opacity duration-200"
                     draggable={false}
                   />
                   
                   {/* Drag Indicator */}
                   <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                     <MousePointer2 className="h-4 w-4" />
                     {isDragging ? 'Dragging...' : 'Drag to rotate'}
                   </div>

                   {/* Current View Label */}
                   <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                     {getCurrentImage().label}
                   </div>

                   {/* Rotation Angle Indicator */}
                   <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                     {Math.round(((rotationAngle % 360) + 360) % 360)}°
                   </div>
                 </div>

                 {/* View Selector */}
                 <div className="p-6 border-t bg-background">
                   <div className="flex justify-center gap-2 mb-4">
                     {carImages.map((carImage, index) => (
                       <button
                         key={index}
                         onClick={() => setRotationAngle(carImage.angle)}
                         className={`px-3 py-1 rounded-full text-sm transition-colors ${
                           Math.round(((rotationAngle % 360) + 360) % 360 / 90) % 4 === index
                             ? 'bg-primary text-primary-foreground'
                             : 'bg-muted text-muted-foreground hover:bg-muted/80'
                         }`}
                       >
                         {carImage.label}
                       </button>
                     ))}
                   </div>

                   <div className="flex gap-4 justify-center">
                     <Button
                       variant="car-accent"
                       onClick={startRotation}
                       size="sm"
                     >
                       <RotateCw className="h-4 w-4 mr-2" />
                       {isRotating ? 'Stop Auto' : 'Auto Rotate'}
                     </Button>
                     
                     <Button
                       variant="outline"
                       onClick={() => setRotationAngle(0)}
                       size="sm"
                     >
                       Reset View
                     </Button>
                   </div>

                   <p className="text-center text-sm text-muted-foreground mt-4">
                     {isRotating ? 'Auto-rotating through all views...' : 'Drag the image or click view buttons to explore the car from all angles'}
                   </p>
                 </div>
               </div>

              {/* 360 View Info */}
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">360°</div>
                    <div className="text-sm text-muted-foreground">Full Rotation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">HD</div>
                    <div className="text-sm text-muted-foreground">High Quality</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">Interactive</div>
                    <div className="text-sm text-muted-foreground">Drag & Explore</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default View360Button;