import { Link } from 'react-router-dom';
import { Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tour } from '@/data/tours';

interface TourCardProps {
  tour: Tour;
}

const TourCard = ({ tour }: TourCardProps) => {
  const formatPrice = (price: number, currency: string) => {
    const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '₺';
    return `${symbol}${price}`;
  };
  
  return (
    <div className="travel-card group overflow-hidden">
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={tour.images[0]}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        <div className="image-overlay" />
        
        {/* Featured Badge */}
        {tour.featured && (
          <Badge className="absolute top-3 left-3 bg-travel-gold text-white border-0">
            <Star className="h-3 w-3 mr-1" />
            Featured
          </Badge>
        )}

        {/* Price */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="price-display text-lg">
            {formatPrice(tour.price, tour.currency)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location & Duration */}
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{tour.duration}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="card-title line-clamp-2 mb-3 group-hover:text-primary transition-colors">
          {tour.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {tour.shortDescription}
        </p>

        {/* Category */}
        <div className="mb-4">
          <Badge variant="secondary" className="text-xs">
            {tour.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </Badge>
        </div>

        {/* Action */}
        <Link to={`/tours/${tour.slug}`} className="block">
          <Button className="w-full bg-secondary hover:bg-secondary-hover text-secondary-foreground">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TourCard;