'use client';

import Link from 'next/link';
import { Heart, Home, Image as ImageIcon, MessageSquare, Sparkles, UserCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/gallery', label: 'Gallery', icon: ImageIcon },
  { href: '/wishes', label: 'Wishes', icon: MessageSquare },
  { href: '/story-generator', label: 'Story AI', icon: Sparkles },
  { href: '/about', label: 'About Anshika', icon: UserCircle },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-xl font-serif font-semibold text-primary hover:text-primary/80 transition-colors">
          <Heart className="w-7 h-7 text-pink-500" />
          Anshika's Gallery
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <Button key={item.href} variant={pathname === item.href ? 'secondary' : 'ghost'} asChild>
              <Link href={item.href} className="flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Button 
                    key={item.href} 
                    variant={pathname === item.href ? 'secondary' : 'ghost'} 
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="justify-start text-lg py-3"
                  >
                    <Link href={item.href} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
