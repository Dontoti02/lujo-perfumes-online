import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Star, ShoppingBag } from "lucide-react";
import heroImage from "@/assets/hero-perfume.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-luxury opacity-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Nuevas Fragancias HND
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Aromas de
                </span>
                <br />
                <span className="text-foreground">Lujo</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Descubre nuestra exclusiva colección de perfumes HND para damas y caballeros. 
                Fragancias únicas que definen tu personalidad.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <Star className="w-5 h-5 text-primary fill-primary" />
                </div>
                <p className="text-sm text-muted-foreground">+1000 clientes satisfechos</p>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Fragancias disponibles</p>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">24h</p>
                <p className="text-sm text-muted-foreground">Envío rápido</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="luxury" className="group">
                <ShoppingBag className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Explorar Colección
              </Button>
              
              <Button size="lg" variant="elegant">
                Ver Ofertas Especiales
              </Button>
            </div>

            {/* Special offer banner */}
            <div className="bg-gradient-primary/10 border border-primary/20 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-primary">🎉 Oferta de Lanzamiento</p>
                  <p className="text-sm text-muted-foreground">20% de descuento en tu primera compra</p>
                </div>
                <Badge variant="default" className="animate-glow-pulse">
                  SAVE20
                </Badge>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Aromas de Lujo - Perfumes HND"
                className="w-full h-[600px] object-cover rounded-3xl shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
              
              {/* Floating elements */}
              <div className="absolute top-8 right-8 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant">
                <p className="text-sm font-medium">✨ Calidad Premium</p>
                <p className="text-xs text-muted-foreground">Productos HND Originales</p>
              </div>
              
              <div className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-elegant">
                <p className="text-sm font-medium">🚚 Envío Gratis</p>
                <p className="text-xs text-muted-foreground">En compras mayores a S/150</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;