import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Heart, Search, ShoppingCart, User, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-md bg-background/90">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border/50">
          <span>Envío gratis en pedidos mayores a S/150</span>
          <div className="flex items-center gap-4">
            <span>Contacto: +51 999 888 777</span>
            <span>|</span>
            <span>Horario: Lun-Sab 9:00-21:00</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Aromas de Lujo
            </h1>
            <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
              HND
            </span>
          </div>

          {/* Search bar - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Buscar perfumes, marcas..."
                className="pl-10 pr-4 bg-muted/50 border-primary/20 focus:border-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search icon for mobile */}
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="w-5 h-5" />
            </Button>

            {/* User account */}
            <Button variant="ghost" size="icon" className="relative">
              <User className="w-5 h-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="w-5 h-5" />
              <Badge variant="destructive" className="absolute -top-2 -right-2 w-5 h-5 p-0 text-xs">
                2
              </Badge>
            </Button>

            {/* Shopping cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge variant="default" className="absolute -top-2 -right-2 w-5 h-5 p-0 text-xs bg-primary">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block pb-4 md:pb-0`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm font-medium">
            <li>
              <a href="#" className="text-primary hover:text-primary-dark transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Perfumes Dama
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Perfumes Caballero
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Ofertas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Marcas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Nuevos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;