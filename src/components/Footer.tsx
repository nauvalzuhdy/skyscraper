import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const navigationLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Tours', href: '/tours' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  const topDestinations = [
    { label: 'Cappadocia Tours', href: '/tours?destination=Cappadocia' },
    { label: 'Ephesus Tours', href: '/tours?destination=Ephesus' },
    { label: 'Istanbul Tours', href: '/tours?destination=Istanbul' },
    { label: 'Pamukkale Tours', href: '/tours?destination=Pamukkale' },
    { label: 'Shore Excursions', href: '/tours?category=shore-excursion' },
    { label: 'Private Tours', href: '/tours?category=private' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-primary dark:bg-gray-900 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">SKYSCRAPER</h3>
            <p className="text-primary-foreground/80 dark:text-primary-foreground">
              Your trusted partner for discovering Turkey's magnificent heritage and natural wonders. 
              Creating unforgettable travel experiences since 2020.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 dark:text-primary-foreground">Navigation</h4>
            <ul className="space-y-2 dark:text-primary-foreground">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Top Destinations</h4>
            <ul className="space-y-2">
              {topDestinations.map((destination) => (
                <li key={destination.label}>
                  <Link
                    to={destination.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {destination.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    Atatürk Mahallesi, Menderes Caddesi<br />
                    No: 15/A, Kuşadası<br />
                    Aydın, Turkey 09400
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <a
                  href="tel:+902566141234"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +90 (256) 614 12 34
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <a
                  href="mailto:info@skyscraper-travel.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@skyscraper-travel.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Skyscraper Travel. All rights reserved. | 
            <span className="ml-1">
              Licensed by Turkish Ministry of Tourism (License #12345)
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
