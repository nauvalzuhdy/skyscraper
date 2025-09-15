import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Car, Ship, Headphones, MapPin, Calendar, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import HeroCarousel from '@/components/HeroCarousel';
import TourCard from '@/components/TourCard';
import { tours, destinations } from '@/data/tours';

// Import service images
import serviceTours from '@/assets/service-tours.jpg';
import serviceTransfer from '@/assets/service-transfer.jpg';
import serviceShore from '@/assets/service-shore.jpg';
import serviceBalloons from '@/assets/service-balloons.jpg';

const HomePage = () => {
  const navigate = useNavigate();
  const featuredTours = tours.filter(tour => tour.featured);
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const toursScrollRef = useRef<HTMLDivElement>(null);
  const destinationsScrollRef = useRef<HTMLDivElement>(null);

  const handleSearch = (destination: string, date: Date | undefined) => {
    const params = new URLSearchParams();
    if (destination) params.set('destination', destination);
    if (date) params.set('date', date.toISOString().split('T')[0]);
    
    navigate(`/tours?${params.toString()}`);
  };

  const handleSearchSubmit = () => {
    handleSearch(selectedDestination, selectedDate);
  };

  const scrollTours = (direction: 'left' | 'right') => {
    if (toursScrollRef.current) {
      const scrollAmount = 320; // Width of one card plus gap
      const newScrollLeft = direction === 'left' 
        ? toursScrollRef.current.scrollLeft - scrollAmount
        : toursScrollRef.current.scrollLeft + scrollAmount;
      
      toursScrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const scrollDestinations = (direction: 'left' | 'right') => {
    if (destinationsScrollRef.current) {
      const scrollAmount = 280; // Width of one destination card plus gap
      const newScrollLeft = direction === 'left' 
        ? destinationsScrollRef.current.scrollLeft - scrollAmount
        : destinationsScrollRef.current.scrollLeft + scrollAmount;
      
      destinationsScrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      icon: Plane,
      title: 'Tours',
      description: 'Discover Turkey\'s most spectacular destinations with our expertly guided tours.',
      image: serviceTours,
      link: '/tours'
    },
    {
      icon: Car,
      title: 'Transfer',
      description: 'Comfortable and reliable airport transfers and transportation services.',
      image: serviceTransfer,
      link: '/services#transfer'
    },
    {
      icon: Ship,
      title: 'Shore Excursions',
      description: 'Perfect excursions for cruise passengers visiting Turkish ports.',
      image: serviceShore,
      link: '/tours?category=shore-excursion'
    },
    {
      icon: Headphones,
      title: 'Balloons',
      description: 'Unforgettable hot air balloon rides over Cappadocia\'s fairy chimneys.',
      image: serviceBalloons,
      link: '/services#balloons'
    }
  ];

  const topDestinations = [
    {
      name: 'Cappadocia',
      image: '/src/assets/cappadocia-hero.jpg',
      price: 'From $299',
      description: 'Magical balloon rides over fairy chimneys'
    },
    {
      name: 'Ephesus',
      image: '/src/assets/ephesus-hero.jpg',
      price: 'From $85',
      description: 'Ancient Roman city with stunning ruins'
    },
    {
      name: 'Istanbul',
      image: '/src/assets/istanbul-hero.jpg',
      price: 'From $450',
      description: 'Where Europe meets Asia in perfect harmony'
    },
      {
        name: 'Pamukkale',
        image: '/src/assets/pamukkale-hero.jpg',
        price: 'From $95',
        description: 'White travertine terraces and thermal pools'
      },
      {
        name: 'Antalya',
        image: '/src/assets/antalya-hero.jpg',
        price: 'From $180',
        description: 'Mediterranean paradise with ancient ruins'
      },
      {
        name: 'Bodrum',
        image: '/src/assets/bodrum-hero.jpg',
        price: 'From $110',
        description: 'Aegean jewel with pristine waters'
      }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel onSearch={handleSearch} />

      {/* Search Tours Section */}
      <section className="py-16 bg-background/95 backdrop-blur-sm relative z-10 -mt-20">
        <div className="container mx-auto px-4">
          <div className="search-panel max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Find Your Perfect Tour</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Destination Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Destination
                </label>
                <Select value={selectedDestination} onValueChange={setSelectedDestination}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Where to?" />
                  </SelectTrigger>
                  <SelectContent>
                    {destinations.map((destination) => (
                      <SelectItem key={destination} value={destination}>
                        {destination}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Picker */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Pick a Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Guests
                </label>
                <Select defaultValue="2">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="How many?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5+">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground opacity-0 hidden md:block">Search</label>
                <Button 
                  onClick={handleSearchSubmit}
                  className="w-full h-10 bg-secondary hover:bg-secondary-hover text-secondary-foreground"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search Tours
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience Turkey's wonders with our comprehensive travel services designed for every type of traveler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const backgroundColors = [
                'bg-gradient-to-br from-cyan-500 to-blue-600',
                'bg-gradient-to-br from-emerald-500 to-teal-600', 
                'bg-gradient-to-br from-violet-500 to-purple-600',
                'bg-gradient-to-br from-amber-500 to-orange-600'
              ];
              return (
                <div
                  key={service.title}
                  className="travel-card overflow-hidden group cursor-pointer animate-fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => navigate(service.link)}
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className={`absolute top-4 right-4 w-12 h-12 ${backgroundColors[index]} rounded-full flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6 text-center">
                    <h3 className="card-title mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Tours</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular tours, carefully selected to showcase the best of Turkey's heritage and natural beauty.
            </p>
          </div>

          {/* Horizontal Scrollable Tours with Navigation */}
          <div className="relative">
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 border-border hover:bg-accent"
              onClick={() => scrollTours('left')}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 border-border hover:bg-accent"
              onClick={() => scrollTours('right')}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Scrollable Content */}
            <div 
              ref={toursScrollRef}
              className="overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex space-x-6 pb-4 px-16">
                {tours.slice(0, 8).map((tour, index) => (
                  <div
                    key={tour.id}
                    className="flex-none w-80 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <TourCard tour={tour} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Top Destinations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore Turkey's most captivating destinations, each offering unique experiences and unforgettable memories.
            </p>
          </div>

          {/* Horizontal Scrollable Destinations with Navigation */}
          <div className="relative">
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 border-border hover:bg-accent"
              onClick={() => scrollDestinations('left')}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 border-border hover:bg-accent"
              onClick={() => scrollDestinations('right')}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Scrollable Content */}
            <div 
              ref={destinationsScrollRef}
              className="overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex space-x-6 pb-4 px-16">
                {topDestinations.slice(0, 8).map((destination, index) => (
                  <div
                    key={destination.name}
                    className="flex-none w-72 travel-card overflow-hidden group cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => navigate(`/tours?destination=${destination.name}`)}
                  >
                   <div className="relative h-48">
                    <img
                      src={destination.image.replace('/src/assets/', '/src/assets/')}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                    <div className="image-overlay" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                      <p className="text-sm text-white/90">{destination.description}</p>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                      <span className="text-sm font-semibold text-foreground">
                        {destination.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <Button variant="outline" className="w-full">
                      Explore Now
                    </Button>
                  </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;