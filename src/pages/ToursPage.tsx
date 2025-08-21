import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import TourCard from '@/components/TourCard';
import { tours, destinations, tourCategories, Tour } from '@/data/tours';

const ToursPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredTours, setFilteredTours] = useState<Tour[]>(tours);
  const [filters, setFilters] = useState({
    destination: searchParams.get('destination') || '',
    category: searchParams.get('category') || '',
    priceRange: [0, 1000],
    sortBy: 'featured'
  });

  // Filter tours based on current filters
  useEffect(() => {
    let filtered = [...tours];

    // Filter by destination
    if (filters.destination) {
      filtered = filtered.filter(tour => 
        tour.location.toLowerCase().includes(filters.destination.toLowerCase())
      );
    }

    // Filter by category
    if (filters.category) {
      filtered = filtered.filter(tour => tour.category === filters.category);
    }

    // Filter by price range
    filtered = filtered.filter(tour => 
      tour.price >= filters.priceRange[0] && tour.price <= filters.priceRange[1]
    );

    // Sort tours
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'duration':
          return a.duration.localeCompare(b.duration);
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

    setFilteredTours(filtered);
  }, [filters]);

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.destination) params.set('destination', filters.destination);
    if (filters.category) params.set('category', filters.category);
    setSearchParams(params);
  }, [filters.destination, filters.category, setSearchParams]);

  const updateFilter = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      destination: '',
      category: '',
      priceRange: [0, 1000],
      sortBy: 'featured'
    });
  };

  const activeFilterCount = [
    filters.destination,
    filters.category,
    filters.priceRange[0] > 0 || filters.priceRange[1] < 1000
  ].filter(Boolean).length;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Destination Filter */}
      <div>
        <label className="text-sm font-medium mb-2 block">Destination</label>
        <Select value={filters.destination} onValueChange={(value) => updateFilter('destination', value)}>
          <SelectTrigger>
            <SelectValue placeholder="All destinations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All destinations</SelectItem>
            {destinations.map(destination => (
              <SelectItem key={destination} value={destination}>
                {destination}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Category Filter */}
      <div>
        <label className="text-sm font-medium mb-2 block">Tour Type</label>
        <Select value={filters.category} onValueChange={(value) => updateFilter('category', value)}>
          <SelectTrigger>
            <SelectValue placeholder="All tour types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All tour types</SelectItem>
            {tourCategories.map(category => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range Filter */}
      <div>
        <label className="text-sm font-medium mb-2 block">
          Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
        </label>
        <Slider
          value={filters.priceRange}
          onValueChange={(value) => updateFilter('priceRange', value)}
          max={1000}
          min={0}
          step={25}
          className="mt-2"
        />
      </div>

      {/* Clear Filters */}
      {activeFilterCount > 0 && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear Filters ({activeFilterCount})
        </Button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center mb-4">Discover Turkey Tours</h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            From ancient cities to natural wonders, explore Turkey's most spectacular destinations 
            with our expertly guided tours.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="travel-card p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </h3>
              <FilterContent />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filters & Sort */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                    {activeFilterCount > 0 && (
                      <Badge variant="secondary" className="ml-1">
                        {activeFilterCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filter Tours</SheetTitle>
                    <SheetDescription>
                      Narrow down your search to find the perfect tour.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Sort & Results Count */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="mb-4 sm:mb-0">
                <p className="text-muted-foreground">
                  Showing {filteredTours.length} of {tours.length} tours
                  {activeFilterCount > 0 && (
                    <span className="ml-2">
                      <Badge variant="outline">{activeFilterCount} filters applied</Badge>
                    </span>
                  )}
                </p>
              </div>
              
              <Select value={filters.sortBy} onValueChange={(value) => updateFilter('sortBy', value)}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tours Grid */}
            {filteredTours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTours.map((tour, index) => (
                  <div
                    key={tour.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <TourCard tour={tour} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Filter className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No tours found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or browse all tours.
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear All Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursPage;