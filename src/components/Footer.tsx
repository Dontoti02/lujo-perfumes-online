import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  CreditCard,
  Shield,
  Truck
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Aromas de Lujo
              </h3>
              <p className="text-sm text-muted">Perfumes HND Premium</p>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Tu destino para las mejores fragancias HND en Perú. Ofrecemos perfumes auténticos 
              con la garantía de calidad que mereces.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="border-muted text-muted hover:bg-primary hover:border-primary hover:text-primary-foreground">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-muted text-muted hover:bg-primary hover:border-primary hover:text-primary-foreground">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-muted text-muted hover:bg-primary hover:border-primary hover:text-primary-foreground">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-muted text-muted hover:bg-primary hover:border-primary hover:text-primary-foreground">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                "Perfumes Dama",
                "Perfumes Caballero", 
                "Ofertas Especiales",
                "Nuevos Lanzamientos",
                "Marcas",
                "Guía de Tallas"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Atención al Cliente</h4>
            <ul className="space-y-2">
              {[
                "Contacto",
                "Preguntas Frecuentes",
                "Política de Devoluciones", 
                "Términos y Condiciones",
                "Política de Privacidad",
                "Seguimiento de Pedido"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Contacto</h4>
            
            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted">
                  Av. Javier Prado Este 123, Lima, Perú
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted">+51 999 888 777</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-sm text-muted">info@aromasdelujo.pe</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted">
                  <p>Lun - Sáb: 9:00 - 21:00</p>
                  <p>Dom: 10:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h5 className="font-semibold text-background">Newsletter</h5>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Tu email..."
                  className="bg-muted/20 border-muted text-background placeholder:text-muted/70"
                />
                <Button variant="default" size="sm">
                  Suscribir
                </Button>
              </div>
              <p className="text-xs text-muted">
                Recibe ofertas exclusivas y novedades
              </p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-muted/20" />

      {/* Trust Badges */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <Truck className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="font-medium text-background text-sm">Envío Gratis</p>
              <p className="text-xs text-muted">En compras mayores a S/150</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <Shield className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="font-medium text-background text-sm">Compra Segura</p>
              <p className="text-xs text-muted">Protección garantizada</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <CreditCard className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="font-medium text-background text-sm">Pagos Seguros</p>
              <p className="text-xs text-muted">Múltiples métodos de pago</p>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-muted/20" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted text-center md:text-left">
            © 2024 Aromas de Lujo. Todos los derechos reservados. | Productos HND Oficiales
          </p>
          
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted">Métodos de pago:</p>
            <div className="flex gap-2">
              {["Visa", "MasterCard", "AMEX", "PayPal", "Yape", "Plin"].map((method) => (
                <div key={method} className="bg-muted/20 px-2 py-1 rounded text-xs text-muted">
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;