import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, MapPin, Users, Star, Calendar, Share2, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { tours } from '@/data/tours';
import { toast } from '@/hooks/use-toast';

const TourDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const tour = tours.find(t => t.slug === slug);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground mb-4">The tour you're looking for doesn't exist.</p>
          <Link to="/tours">
            <Button>View All Tours</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number, currency: string) => {
    const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '₺';
    return `${symbol}${price}`;
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: tour.title,
        text: tour.shortDescription,
        url: window.location.href,
      });
    } catch (err) {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Tour link copied to clipboard",
      });
    }
  };

  const handleBooking = () => {
    toast({
      title: "Booking Request",
      description: "Redirecting to booking form...",
    });
    // In a real app, this would redirect to a booking system
  };

  const availableDates = tour.availabilityDates.map(date => new Date(date));

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={tour.images[0]}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Back Button */}
        <Link to="/tours" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tours
          </Button>
        </Link>

        {/* Share Button */}
        <Button
          variant="outline"
          className="absolute top-6 right-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>

        {/* Hero Content */}
        <div className="absolute bottom-8 left-6 right-6 text-white">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-travel-gold text-white border-0">
                <Star className="h-3 w-3 mr-1" />
                Featured
              </Badge>
              <Badge variant="secondary">
                {tour.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Small Group</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="included">What's Included</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About This Tour</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {tour.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Tour Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="itinerary" className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day, index) => (
                    <div key={index} className="travel-card p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-2">{day.title}</h3>
                          <p className="text-muted-foreground">{day.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="included" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-green-700">What's Included</h3>
                    <div className="space-y-3">
                      {[
                        'Professional English-speaking guide',
                        'All entrance fees and tickets',
                        'Transportation in air-conditioned vehicle',
                        'Hotel pickup and drop-off',
                        'Small group experience (max 15 people)'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-red-700">What's Not Included</h3>
                    <div className="space-y-3">
                      {[
                        'Personal expenses and souvenirs',
                        'Meals and drinks (unless specified)',
                        'Travel insurance',
                        'Tips for guide and driver',
                        'Optional activities'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <XCircle className="h-5 w-5 text-red-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="travel-card p-6 sticky top-24">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-secondary mb-2">
                  {formatPrice(tour.price, tour.currency)}
                </div>
                <p className="text-sm text-muted-foreground">per person</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Select Date
                  </label>
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      if (date < today) return true;
                      
                      return !availableDates.some(availableDate => 
                        availableDate.toDateString() === date.toDateString()
                      );
                    }}
                    className="w-full pointer-events-auto"
                  />
                </div>

                {availableDates.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Available Dates:</h4>
                    <div className="text-xs text-muted-foreground space-y-1">
                      {availableDates.slice(0, 4).map((date, index) => (
                        <div key={index}>
                          {date.toLocaleDateString('en-US', { 
                            weekday: 'short', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                      ))}
                      {availableDates.length > 4 && (
                        <div className="text-muted-foreground">
                          +{availableDates.length - 4} more dates
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Button 
                className="w-full bg-secondary hover:bg-secondary-hover text-secondary-foreground mb-4"
                onClick={handleBooking}
                disabled={!selectedDate}
              >
                Book Now
              </Button>

              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-2">
                  Free cancellation up to 24 hours before the tour
                </p>
                <p className="text-xs text-muted-foreground">
                  Instant confirmation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;