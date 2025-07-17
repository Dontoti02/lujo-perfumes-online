import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Crown, Sparkles } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Perfumes para Dama",
      description: "Fragancias femeninas elegantes y sofisticadas",
      icon: Heart,
      count: 35,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    {
      id: 2,
      name: "Perfumes para Caballero", 
      description: "Aromas masculinos únicos y distinguidos",
      icon: Crown,
      count: 28,
      color: "text-blue-500",
      bgColor: "bg-blue-50", 
      borderColor: "border-blue-200"
    },
    {
      id: 3,
      name: "Unisex",
      description: "Fragancias versátiles para todos",
      icon: Users,
      count: 12,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      id: 4,
      name: "Ediciones Limitadas",
      description: "Colecciones exclusivas y especiales",
      icon: Sparkles,
      count: 8,
      color: "text-primary",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            Categorías
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explora Nuestras{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Colecciones
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encuentra la fragancia perfecta según tu estilo y personalidad
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className={`group hover:shadow-luxury transition-all duration-300 cursor-pointer border-2 ${category.borderColor} hover:border-primary/50 bg-background`}
              >
                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>

                  {/* Category Name */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>

                  {/* Product Count */}
                  <Badge variant="outline" className="mb-4">
                    {category.count} productos
                  </Badge>

                  {/* CTA Button */}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Explorar
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Special Offers Section */}
        <div className="bg-gradient-luxury rounded-2xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¡Ofertas Especiales en Todas las Categorías!
            </h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Hasta 30% de descuento en productos seleccionados. Promoción válida por tiempo limitado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Ver Todas las Ofertas
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Suscribirse a Ofertas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;