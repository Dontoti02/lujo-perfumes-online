import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";

const FeaturedProducts = () => {
  // Sample products - In real app, this would come from your database
  const products = [
    {
      id: 1,
      name: "HND Elegance Pour Femme",
      price: 89.99,
      originalPrice: 109.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 124,
      category: "Dama",
      isNew: true,
      discount: 18
    },
    {
      id: 2,
      name: "HND Royal Gentleman",
      price: 95.99,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 89,
      category: "Caballero",
      isNew: false,
      discount: 0
    },
    {
      id: 3,
      name: "HND Mystic Rose",
      price: 79.99,
      originalPrice: 99.99,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 156,
      category: "Dama",
      isNew: true,
      discount: 20
    },
    {
      id: 4,
      name: "HND Ocean Breeze",
      price: 85.99,
      originalPrice: null,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 78,
      category: "Caballero",
      isNew: false,
      discount: 0
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 mb-4">
            Productos Destacados
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Fragancias
            </span>{" "}
            Más Vendidas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra selección exclusiva de perfumes HND más populares entre nuestros clientes
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-luxury transition-all duration-300 overflow-hidden border-primary/10 hover:border-primary/30">
              <div className="relative overflow-hidden">
                {/* Product Image */}
                <div className="aspect-square bg-gradient-subtle p-8 flex items-center justify-center">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 space-y-2">
                  {product.isNew && (
                    <Badge variant="default" className="bg-success text-white">
                      Nuevo
                    </Badge>
                  )}
                  {product.discount > 0 && (
                    <Badge variant="destructive">
                      -{product.discount}%
                    </Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="w-8 h-8 bg-background/90 backdrop-blur-sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="w-8 h-8 bg-background/90 backdrop-blur-sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>

                {/* Add to Cart Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" className="w-full" variant="luxury">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Agregar al Carrito
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                {/* Category */}
                <Badge variant="outline" className="mb-2 text-xs border-primary/30 text-primary">
                  {product.category}
                </Badge>

                {/* Product Name */}
                <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-primary fill-primary' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-primary">
                    S/{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      S/{product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="elegant">
            Ver Todos los Productos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;