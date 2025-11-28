import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Bus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { mainNavigation } from '@/data/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-lg p-2">
              <Bus className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-bold text-2xl text-secondary">Tour<span className="text-primary">Buz</span></span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {mainNavigation.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          'bg-transparent hover:bg-muted',
                          isActive(item.href) && 'text-primary'
                        )}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-48 gap-1 p-2">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={child.href || '#'}
                                  className={cn(
                                    'block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                                    isActive(child.href) && 'bg-accent text-accent-foreground'
                                  )}
                                >
                                  <div className="text-sm font-medium">{child.label}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={item.href || '#'}
                      className={cn(
                        'group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-accent focus:text-accent-foreground focus:outline-none',
                        isActive(item.href) && 'text-primary'
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link to="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Mobile Logo */}
                <div className="flex items-center gap-2 mb-8">
                  <div className="bg-primary rounded-lg p-2">
                    <Bus className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-xl text-secondary">Tour<span className="text-primary">Buz</span></span>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {mainNavigation.map((item) => (
                      <li key={item.label}>
                        {item.children ? (
                          <MobileNavDropdown item={item} onClose={() => setIsOpen(false)} isActive={isActive} />
                        ) : (
                          <Link
                            to={item.href || '#'}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              'block py-3 px-4 rounded-md hover:bg-muted transition-colors',
                              isActive(item.href) && 'bg-muted text-primary font-medium'
                            )}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile CTA */}
                <div className="pt-4 border-t">
                  <Button asChild className="w-full">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Book Now</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MobileNavDropdown({
  item,
  onClose,
  isActive
}: {
  item: typeof mainNavigation[0];
  onClose: () => void;
  isActive: (href?: string) => boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          'flex items-center justify-between w-full py-3 px-4 rounded-md hover:bg-muted transition-colors',
          isActive(item.href) && 'text-primary'
        )}
      >
        <span>{item.label}</span>
        <ChevronDown className={cn('h-4 w-4 transition-transform', isExpanded && 'rotate-180')} />
      </button>
      {isExpanded && item.children && (
        <ul className="ml-4 mt-1 space-y-1">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link
                to={child.href || '#'}
                onClick={onClose}
                className={cn(
                  'block py-2 px-4 text-sm rounded-md hover:bg-muted transition-colors',
                  isActive(child.href) && 'bg-muted text-primary font-medium'
                )}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
