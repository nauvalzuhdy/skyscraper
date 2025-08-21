import { Award, Users, MapPin, Heart } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'Happy Travelers', value: '50,000+' },
    { icon: MapPin, label: 'Destinations', value: '25+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Heart, label: 'Customer Rating', value: '4.9/5' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Skyscraper Travel</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Providing exceptional travel experiences in Turkey with professional service and experienced guides
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="section-title text-center mb-8">About Our Journey</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Skyscraper Travel is a professional travel service provider specializing in 
                  Turkish tourism. We have served thousands of tourists from Indonesia and around the world 
                  to explore the stunning beauty and rich history of Turkey.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 15 years of experience in the tourism industry, we understand 
                  the needs and expectations of Indonesian travelers. Our experienced and officially licensed 
                  team is ready to provide the best service to ensure your journey is memorable.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  From historical tours in Istanbul to hot air balloon adventures in Cappadocia, 
                  we offer specially designed tour packages to provide authentic 
                  and unforgettable experiences in this country that bridges two continents.
                </p>
              </div>
              
              <div className="travel-card p-8 text-center bg-muted/30">
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground italic">
                  "To become a cultural bridge between Indonesia and Turkey through memorable travel 
                  experiences and excellent service."
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="travel-card p-8 mb-12 bg-primary text-primary-foreground">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Premium Service</h3>
                <p className="text-primary-foreground/90">
                  Providing high-quality tourism services with international standards, 
                  supported by a professional and experienced team.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Authentic Experience</h3>
                <p className="text-primary-foreground/90">
                  Delivering authentic and immersive travel experiences, introducing 
                  Turkey's rich culture, history, and natural beauty.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Safety & Comfort</h3>
                <p className="text-primary-foreground/90">
                  Ensuring the safety and comfort of every traveler with strict security 
                  systems and quality accommodations.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Competitive Pricing</h3>
                <p className="text-primary-foreground/90">
                  Offering competitively priced tour packages without compromising 
                  service quality and travel experience.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center travel-card p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-4">
                    <Icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Why Choose Us */}
          <div className="text-center">
            <h2 className="section-title mb-8">Why Choose Skyscraper Travel?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-travel-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Officially Licensed</h3>
                <p className="text-muted-foreground text-sm">
                  Officially licensed by the Turkish Ministry of Tourism and registered with 
                  the Indonesian Travel Agent Association (ASITA).
                </p>
              </div>

              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-travel-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Experienced Team</h3>
                <p className="text-muted-foreground text-sm">
                  Supported by experienced local tour guides who speak Indonesian 
                  for your communication comfort.
                </p>
              </div>

              <div className="travel-card p-6 text-center">
                <div className="w-16 h-16 bg-travel-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Satisfaction Guaranteed</h3>
                <p className="text-muted-foreground text-sm">
                  Full commitment to customer satisfaction with 24/7 service and 
                  guaranteed best quality on every journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;