export interface Tour {
  id: string;
  slug: string;
  title: string;
  location: string;
  images: string[];
  duration: string;
  price: number;
  currency: 'USD' | 'EUR' | 'TRY';
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  availabilityDates: string[];
  createdAt: string;
  category: 'daily-tour' | 'multi-day' | 'shore-excursion' | 'private';
  featured?: boolean;
}

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'Cultural Tour of Turkey',
    title: 'Cultural Tour of Turkey',
    location: 'Cappadocia',
    images: ['/src/assets/cappadocia.jpg'],
    duration: '19 Days / 18 Night',
    price: 299,
    currency: 'USD',
    shortDescription: 'Experience the magical sunrise over Cappadocia with an unforgettable hot air balloon ride and explore the underground cities.',
    longDescription: 'Discover the otherworldly landscape of Cappadocia on this 2-day adventure that combines the thrill of hot air ballooning with the mystery of ancient underground cities. Watch the sunrise from hundreds of feet above the fairy chimneys, explore cave churches with Byzantine frescoes, and walk through the fascinating underground cities that once sheltered early Christians.',
    highlights: [
      'Hot air balloon ride at sunrise',
      'Underground city exploration',
      'Göreme Open Air Museum',
      'Traditional pottery workshop',
      'Cave hotel accommodation'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Underground Cities',
        description: 'Arrive in Cappadocia and explore the incredible Derinkuyu Underground City. Evening at leisure in your cave hotel.'
      },
      {
        day: 2,
        title: 'Balloon Ride & Open Air Museum',
        description: 'Early morning hot air balloon ride followed by visit to Göreme Open Air Museum and pottery workshop.'
      }
    ],
    availabilityDates: ['2024-03-15', '2024-03-22', '2024-04-05', '2024-04-12'],
    createdAt: '2024-01-15',
    category: 'multi-day',
    featured: true
  },
  {
    id: '2',
    slug: 'ephesus-ancient-city-tour',
    title: 'Treasures of Turkey Tour',
    location: 'Ephesus',
    images: ['/src/assets/ephesus-hero.jpg'],
    duration: '15 Days / 14 Nights',
    price: 85,
    currency: 'USD',
    shortDescription: 'Walk through the ancient streets of Ephesus and witness the magnificent Library of Celsus and Grand Theater.',
    longDescription: 'Step back in time as you explore one of the best-preserved ancient cities in the world. Ephesus was once the second-largest city in the Roman Empire, and today its ruins tell the story of early Christianity and ancient Roman civilization. Walk on marble streets where St. Paul once preached and admire the stunning architecture of the Library of Celsus.',
    highlights: [
      'Library of Celsus',
      'Grand Theater (25,000 capacity)',
      'Temple of Hadrian',
      'Terrace Houses of the wealthy',
      'House of Virgin Mary'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ephesus Ancient City',
        description: 'Full day exploration of Ephesus ruins including the Library of Celsus, Grand Theater, and optional visit to House of Virgin Mary.'
      }
    ],
    availabilityDates: ['2024-03-10', '2024-03-17', '2024-03-24', '2024-04-07'],
    createdAt: '2024-01-10',
    category: 'multi-day',
    featured: true
  },
  {
    id: '3',
    slug: 'istanbul-highlights-tour',
    title: 'Magical Turkey Tour',
    location: 'Istanbul',
    images: ['/src/assets/istanbul-hero.jpg'],
    duration: '11 Days / 10 Nights',
    price: 450,
    currency: 'USD',
    shortDescription: 'Explore the magical city where Europe meets Asia, visiting iconic landmarks and experiencing rich Ottoman culture.',
    longDescription: 'Immerse yourself in the rich history and vibrant culture of Istanbul, the only city that spans two continents. From the magnificent Hagia Sophia to the colorful Grand Bazaar, experience the perfect blend of Byzantine and Ottoman heritage. Cruise the Bosphorus strait and discover hidden gems in this eternal city.',
    highlights: [
      'Hagia Sophia & Blue Mosque',
      'Topkapi Palace Museum',
      'Grand Bazaar shopping',
      'Bosphorus Cruise',
      'Basilica Cistern'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Sultanahmet District',
        description: 'Visit Hagia Sophia, Blue Mosque, and Topkapi Palace. Evening stroll in Sultanahmet square.'
      },
      {
        day: 2,
        title: 'Bosphorus & Beyoglu',
        description: 'Morning Bosphorus cruise, afternoon exploring Galata Tower and Taksim area.'
      },
      {
        day: 3,
        title: 'Grand Bazaar & Spice Market',
        description: 'Shopping at Grand Bazaar, visit Basilica Cistern and Spice Market.'
      }
    ],
    availabilityDates: ['2024-03-20', '2024-04-03', '2024-04-17', '2024-05-01'],
    createdAt: '2024-01-20',
    category: 'multi-day',
    featured: true
  },
  {
    id: '4',
    slug: 'pamukkale-cotton-castle',
    title: 'Highlights of Turkey Tour',
    location: 'Pamukkale',
    images: ['/src/assets/pamukkale-hero.jpg'],
    duration: '10 Day / 9 Night',
    price: 95,
    currency: 'USD',
    shortDescription: 'Marvel at the stunning white travertine terraces and thermal pools of Pamukkale, a UNESCO World Heritage site.',
    longDescription: 'Visit the incredible "Cotton Castle" of Pamukkale, where white travertine terraces formed by mineral-rich hot springs create a surreal landscape. Walk barefoot on the warm, calcified pools and explore the ancient city of Hierapolis with its well-preserved theater and necropolis.',
    highlights: [
      'Travertine terraces & thermal pools',
      'Hierapolis Ancient City',
      'Cleopatra Pool (optional)',
      'Ancient Theater',
      'Museum of Hierapolis'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Pamukkale & Hierapolis',
        description: 'Full day tour of Pamukkale travertine terraces and ancient Hierapolis ruins with optional Cleopatra Pool experience.'
      }
    ],
    availabilityDates: ['2024-03-12', '2024-03-19', '2024-04-02', '2024-04-16'],
    createdAt: '2024-01-12',
    category: 'multi-day',
    featured: false
  },
  {
    id: '5',
    slug: 'Best of Turkey Tour',
    title: 'Best of Turkey Tour',
    location: 'Kusadasi',
    images: ['/src/assets/shore-excursions-hero.jpg'],
    duration: '7 Days / 6 Night',
    price: 75,
    currency: 'USD',
    shortDescription: 'Perfect shore excursion for cruise passengers visiting Ephesus and local attractions.',
    longDescription: 'Designed specifically for cruise ship passengers docking at Kusadasi port. This carefully timed excursion ensures you visit the highlights of Ephesus and return to your ship with time to spare. Includes transportation, guide, and entrance fees.',
    highlights: [
      'Ephesus Ancient City',
      'House of Virgin Mary',
      'Leather factory visit',
      'Turkish carpet demonstration',
      'Guaranteed ship return'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Shore Excursion',
        description: 'Port pickup, Ephesus tour, House of Virgin Mary, shopping stops, and return to ship.'
      }
    ],
    availabilityDates: ['2024-03-14', '2024-03-21', '2024-04-04', '2024-04-18'],
    createdAt: '2024-01-14',
    category: 'shore-excursion',
    featured: false
  },
  {
    id: '6',
    slug: 'bursa-ottoman-capital',
    title: 'Turkey Taster Tour',
    location: 'Bursa',
    images: ['/src/assets/transfer-service-hero.jpg'],
    duration: '1 Day',
    price: 120,
    currency: 'USD',
    shortDescription: 'Discover the first capital of the Ottoman Empire with its historic mosques, markets, and traditional Turkish culture.',
    longDescription: 'Journey to Bursa, the first capital of the Ottoman Empire and birthplace of many Ottoman traditions. Visit the Grand Mosque, explore the historic silk market, and experience authentic Turkish culture in this charming city known for its thermal baths and traditional crafts.',
    highlights: [
      'Grand Mosque (Ulu Cami)',
      'Green Mosque & Mausoleum',
      'Historic Silk Market',
      'Traditional Turkish bath',
      'Ottoman village visit'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Bursa City Tour',
        description: 'Full day tour of Bursa including Grand Mosque, Green Mosque, Silk Market, and traditional Turkish bath experience.'
      }
    ],
    availabilityDates: ['2024-03-16', '2024-03-30', '2024-04-13', '2024-04-27'],
    createdAt: '2024-01-16',
    category: 'daily-tour',
    featured: false
  },
  {
    id: '7',
    slug: 'antalya-mediterranean-paradise',
    title: 'Istanbul & Cappadocia Tour',
    location: 'Antalya',
    images: ['/src/assets/antalya-hero.jpg'],
    duration: '2 Days / 1 Night',
    price: 180,
    currency: 'USD',
    shortDescription: 'Discover the pearl of the Mediterranean with ancient ruins, pristine beaches, and stunning waterfalls.',
    longDescription: 'Experience the perfect blend of history and natural beauty in Antalya. From the ancient Roman harbor to the spectacular Düden Waterfalls, enjoy pristine Mediterranean beaches and explore the charming old town of Kaleiçi.',
    highlights: [
      'Kaleiçi Old Town exploration',
      'Düden Waterfalls visit',
      'Ancient Aspendos Theater',
      'Mediterranean beach time',
      'Traditional Turkish cuisine'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Antalya City & Waterfalls',
        description: 'Explore Kaleiçi old town, visit Düden Waterfalls, and enjoy Mediterranean coastline.'
      },
      {
        day: 2,
        title: 'Aspendos & Beach',
        description: 'Visit ancient Aspendos Theater and relax at pristine Mediterranean beaches.'
      }
    ],
    availabilityDates: ['2024-03-25', '2024-04-08', '2024-04-22', '2024-05-06'],
    createdAt: '2024-01-25',
    category: 'multi-day',
    featured: false
  },
  {
    id: '8',
    slug: 'bodrum-aegean-jewel',
    title: 'Bodrum Aegean Jewel',
    location: 'Bodrum',
    images: ['/src/assets/bodrum-hero.jpg'],
    duration: '1 Day',
    price: 110,
    currency: 'USD',
    shortDescription: 'Explore the white-washed beauty of Bodrum with its ancient castle, vibrant marina, and crystal-clear waters.',
    longDescription: 'Discover Bodrum, the jewel of the Aegean coast, where ancient history meets modern luxury. Visit the impressive Bodrum Castle, stroll through charming streets, and enjoy the sophisticated marina atmosphere.',
    highlights: [
      'Bodrum Castle & Museum',
      'Ancient Mausoleum of Halicarnassus',
      'Marina and harbor walk',
      'Traditional Aegean architecture',
      'Local market experience'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Bodrum Discovery',
        description: 'Full day exploring Bodrum Castle, ancient mausoleum, marina area, and local markets.'
      }
    ],
    availabilityDates: ['2024-03-28', '2024-04-11', '2024-04-25', '2024-05-09'],
    createdAt: '2024-01-28',
    category: 'daily-tour',
    featured: false
  }
];

export const destinations = [
  'Cappadocia',
  'Ephesus', 
  'Istanbul',
  'Pamukkale',
  'Kusadasi',
  'Bursa',
  'Antalya',
  'Bodrum'
];

export const tourCategories = [
  { value: 'daily-tour', label: 'Daily Tours' },
  { value: 'multi-day', label: 'Multi-Day Tours' },
  { value: 'shore-excursion', label: 'Shore Excursions' },
  { value: 'private', label: 'Private Tours' }
];