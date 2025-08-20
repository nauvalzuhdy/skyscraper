import { Plane, Car, Ship, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const services = [
    {
      id: 'tours',
      icon: Plane,
      title: 'Tours',
      description: 'Discover Turkey\'s most spectacular destinations with our expertly guided tours.',
      features: ['Professional guides', 'Small groups', 'All entrance fees included', 'Hotel pickup'],
      image: '/src/assets/cappadocia-hero.jpg'
    },
    {
      id: 'transfer',
      icon: Car,
      title: 'Transfer Services',
      description: 'Comfortable and reliable airport transfers and transportation services.',
      features: ['Airport transfers', 'City to city transport', 'VIP vehicles', '24/7 availability'],
      image: '/src/assets/istanbul-hero.jpg'
    },
    {
      id: 'shore-excursions',
      icon: Ship,
      title: 'Shore Excursions',
      description: 'Perfect excursions for cruise passengers visiting Turkish ports.',
      features: ['Guaranteed return to ship', 'Port pickup', 'Flexible timing', 'Group discounts'],
      image: '/src/assets/ephesus-hero.jpg'
    },
    {
      id: 'balloons',
      icon: Headphones,
      title: 'Hot Air Balloons',
      description: 'Unforgettable hot air balloon rides over Cappadocia\'s fairy chimneys.',
      features: ['Sunrise flights', 'Certified pilots', 'Safety equipment', 'Celebration certificate'],
      image: '/src/assets/cappadocia-hero.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive travel services designed to make your Turkish adventure unforgettable
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <section
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="bg-secondary hover:bg-secondary-hover text-secondary-foreground">
                    Learn More
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="travel-card overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;