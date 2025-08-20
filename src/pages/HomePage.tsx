import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Car, Ship, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroCarousel from '@/components/HeroCarousel';
import TourCard from '@/components/TourCard';
import { tours } from '@/data/tours';

const HomePage = () => {
  const navigate = useNavigate();
  const featuredTours = tours.filter(tour => tour.featured);

  const handleSearch = (destination: string, date: Date | undefined) => {
    const params = new URLSearchParams();
    if (destination) params.set('destination', destination);
    if (date) params.set('date', date.toISOString().split('T')[0]);
    
    navigate(`/tours?${params.toString()}`);
  };

  const services = [
    {
      icon: Plane,
      title: 'Tours',
      description: 'Discover Turkey\'s most spectacular destinations with our expertly guided tours.',
      link: '/tours'
    },
    {
      icon: Car,
      title: 'Transfer',
      description: 'Comfortable and reliable airport transfers and transportation services.',
      link: '/services#transfer'
    },
    {
      icon: Ship,
      title: 'Shore Excursions',
      description: 'Perfect excursions for cruise passengers visiting Turkish ports.',
      link: '/tours?category=shore-excursion'
    },
    {
      icon: Headphones,
      title: 'Balloons',
      description: 'Unforgettable hot air balloon rides over Cappadocia\'s fairy chimneys.',
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
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel onSearch={handleSearch} />

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
              return (
                <div
                  key={service.title}
                  className="travel-card text-center p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate(service.link)}
                  >
                    Learn More
                  </Button>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <div
                key={tour.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <TourCard tour={tour} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary-hover text-secondary-foreground"
              onClick={() => navigate('/tours')}
            >
              View All Tours
            </Button>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topDestinations.map((destination, index) => (
              <div
                key={destination.name}
                className="travel-card overflow-hidden group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(`/tours?destination=${destination.name}`)}
              >
                <div className="relative h-48">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
      </section>
    </div>
  );
};

export default HomePage;