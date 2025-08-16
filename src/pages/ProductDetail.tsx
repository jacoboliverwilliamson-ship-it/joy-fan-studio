import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { Heart, ShoppingBag, Truck, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import indigoFan from "@/assets/indigo-sunburst-fan.jpg";
import goldFan from "@/assets/gold-kente-fan.jpg";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();

  const products = {
    "indigo-sunburst": {
      name: "Indigo Sunburst Folding Fan",
      price: "£34",
      image: indigoFan,
      description: "Ankara indigo geometry, brown leather handle",
      materials: "Ankara cotton fabric, genuine leather handle",
      dimensionsClosed: "23 cm",
      dimensionsOpen: "Ø 38 cm",
      weight: "85g",
      care: "Spot clean fabric with a damp cloth. Condition leather handle sparingly. Keep dry.",
      maker: "Adunni Workshop, Lagos"
    },
    "gold-kente-bloom": {
      name: "Gold Kente Bloom Fan", 
      price: "£42",
      image: goldFan,
      description: "Gold/green motif, black leather handle",
      materials: "Kente-inspired cotton fabric, genuine leather handle",
      dimensionsClosed: "24 cm", 
      dimensionsOpen: "Ø 40 cm",
      weight: "92g",
      care: "Spot clean fabric with a damp cloth. Condition leather handle sparingly. Keep dry.",
      maker: "Adunni Workshop, Lagos"
    }
  };

  const product = id ? products[id as keyof typeof products] : null;

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img 
                src={product.image}
                alt={`${product.name} - ${product.description}`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Each fan is unique. Pattern alignment and leather grain vary slightly.
            </p>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-gold/10 text-gold border-gold/20">Women-Made</Badge>
                <Badge className="bg-palm/10 text-palm border-palm/20">Small-Batch</Badge>
              </div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">{product.description}</p>
              <div className="text-3xl font-display font-bold text-kola">
                {product.price}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full bg-kola hover:bg-kola/90"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                <Heart className="h-5 w-5 mr-2" />
                Add to Wishlist
              </Button>
            </div>

            {/* Product Details */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Product Details</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Materials:</span>
                    <p className="text-muted-foreground">{product.materials}</p>
                  </div>
                  <div>
                    <span className="font-medium">Weight:</span>
                    <p className="text-muted-foreground">{product.weight}</p>
                  </div>
                  <div>
                    <span className="font-medium">Closed:</span>
                    <p className="text-muted-foreground">{product.dimensionsClosed}</p>
                  </div>
                  <div>
                    <span className="font-medium">Open:</span>
                    <p className="text-muted-foreground">{product.dimensionsOpen}</p>
                  </div>
                </div>
                <div>
                  <span className="font-medium">Maker:</span>
                  <p className="text-muted-foreground">{product.maker}</p>
                </div>
                <div>
                  <span className="font-medium">Care:</span>
                  <p className="text-muted-foreground">{product.care}</p>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span>2-4 days UK shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="h-4 w-4" />
                <span>30-day returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;