import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { destinations } from '@/data/tours';

// Import hero images
import cappadociaHero from '@/assets/cappadocia-hero.jpg';
import transferHero from '@/assets/transfer-service-hero.jpg';
import istanbulHero from '@/assets/istanbul-hero.jpg';
import shoreExcursionsHero from '@/assets/shore-excursions-hero.jpg';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  destination: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: cappadociaHero,
    title: 'Magical Cappadocia',
    subtitle: 'Float above fairy chimneys in hot air balloons',
    destination: 'Cappadocia'
  },
  {
    id: 2,
    image: transferHero,
    title: 'Premium Transfer Service',
    subtitle: 'Comfortable and reliable transportation across Turkey',
    destination: 'Transfer'
  },
  {
    id: 3,
    image: istanbulHero,
    title: 'Imperial Istanbul',
    subtitle: 'Where Europe meets Asia in perfect harmony',
    destination: 'Istanbul'
  },
  {
    id: 4,
    image: shoreExcursionsHero,
    title: 'Shore Excursions',
    subtitle: 'Perfect day trips for cruise passengers',
    destination: 'Shore Excursions'
  }
];

interface HeroCarouselProps {
  onSearch?: (destination: string, date: Date | undefined) => void;
}

const HeroCarousel = ({ onSearch }: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  //   setIsAutoPlaying(false);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  //   setIsAutoPlaying(false);
  // };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleSearch = () => {
    onSearch?.(selectedDestination, selectedDate);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Hero Images */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10 max-w-4xl mx-auto px-4">
          <h1 className="hero-title mb-4 animate-fade-in">
            {heroSlides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            {heroSlides[currentSlide].subtitle}
          </p>

        </div>
      </div>

      {/* Navigation Arrows */}
      {/* <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/75"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;