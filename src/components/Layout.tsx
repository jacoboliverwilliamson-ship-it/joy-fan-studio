import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Our Story", href: "/about" },
    { name: "Makers", href: "/makers" },
    { name: "Journal", href: "/journal" },
    { name: "FAQ", href: "/faq" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Promo Bar */}
      <div className="bg-kola text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        Women-Made • Small-Batch • Ships in 2–4 days (UK)
      </div>

      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="font-display text-2xl font-bold text-kola">
              Ayo Fans
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-kola ${
                    isActive(item.href) ? "text-kola" : "text-foreground/80"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <ShoppingBag className="h-4 w-4" />
                <Badge className="ml-1 bg-kola text-primary-foreground">0</Badge>
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden border-t border-border py-4">
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-medium transition-colors hover:text-kola ${
                      isActive(item.href) ? "text-kola" : "text-foreground/80"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-indigo text-indigo-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-display text-2xl font-bold mb-4">Ayo Fans</h3>
              <p className="text-indigo-foreground/80 mb-4 max-w-md">
                We collaborate with women-led workshops in Nigeria and pay fairly for every batch.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-indigo-foreground hover:text-gold">
                  Instagram
                </Button>
                <Button variant="ghost" size="sm" className="text-indigo-foreground hover:text-gold">
                  Twitter
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-indigo-foreground/80">
                <li><Link to="/shop" className="hover:text-gold transition-colors">All Fans</Link></li>
                <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
                <li><Link to="/makers" className="hover:text-gold transition-colors">Makers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-indigo-foreground/80">
                <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
                <li><Link to="/shipping" className="hover:text-gold transition-colors">Shipping & Returns</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-indigo-foreground/20 mt-12 pt-8 text-center text-sm text-indigo-foreground/60">
            © 2024 Ayo Fans. Made with love for Nigerian craft.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;