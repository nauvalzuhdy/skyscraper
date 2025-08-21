import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { 
      label: 'Tours', 
      href: '/tours',
      submenu: [
        { label: 'All Tours', href: '/tours' },
        { label: 'Cappadocia', href: '/tours?destination=Cappadocia' },
        { label: 'Ephesus', href: '/tours?destination=Ephesus' },
        { label: 'Istanbul', href: '/tours?destination=Istanbul' },
        { label: 'Pamukkale', href: '/tours?destination=Pamukkale' },
        { label: 'Antalya', href: '/tours?destination=Antalya' },
        { label: 'Bodrum', href: '/tours?destination=Bodrum' },
        { label: 'Bursa', href: '/tours?destination=Bursa' }
      ]
    },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-foreground dark:text-white">
            SKYSCRAPER
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <Link
                      to={item.href}
                      className={cn(
                        "text-foreground dark:text-white hover:text-primary transition-colors font-medium flex items-center gap-1",
                        isActivePath(item.href) && "text-primary"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "text-foreground dark:text-white hover:text-primary transition-colors font-medium",
                      isActivePath(item.href) && "text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={cn(
                      "block text-foreground dark:text-white hover:text-primary transition-colors font-medium py-2",
                      isActivePath(item.href) && "text-primary"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
