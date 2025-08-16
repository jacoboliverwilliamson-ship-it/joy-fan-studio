import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import indigoFan from "@/assets/indigo-sunburst-fan.jpg";
import goldFan from "@/assets/gold-kente-fan.jpg";

const Shop = () => {
  const products = [
    {
      id: "indigo-sunburst",
      name: "Indigo Sunburst Folding Fan",
      price: "£34",
      image: indigoFan,
      description: "Ankara indigo geometry, brown leather handle",
      badge: "Women-Made",
      colors: ["indigo", "brown"]
    },
    {
      id: "gold-kente-bloom",
      name: "Gold Kente Bloom Fan", 
      price: "£42",
      image: goldFan,
      description: "Gold/green motif, black leather handle",
      badge: "Small-Batch",
      colors: ["gold", "green", "black"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Shop All Fans</h1>
          <p className="text-lg text-muted-foreground">Hand-crafted Nigerian folding fans celebrating West African patterns and women artisans.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image}
                  alt={`${product.name} - ${product.description}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="secondary" className="bg-gold/10 text-gold border-gold/20">
                    {product.badge}
                  </Badge>
                  <span className="font-display text-xl font-bold text-kola">
                    {product.price}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <Button className="w-full bg-kola hover:bg-kola/90">
                  <Link to={`/product/${product.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Shop;