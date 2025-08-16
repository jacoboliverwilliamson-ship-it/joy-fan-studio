import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Star } from "lucide-react";
import heroImage from "@/assets/hero-fan-open.jpg";
import indigoFan from "@/assets/indigo-sunburst-fan.jpg";
import goldFan from "@/assets/gold-kente-fan.jpg";

const Home = () => {
  const featuredProducts = [
    {
      id: "indigo-sunburst",
      name: "Indigo Sunburst Folding Fan",
      price: "£34",
      image: indigoFan,
      description: "Ankara indigo geometry, brown leather handle",
      dimensions: "Folded: 23 cm • Open: Ø 38 cm",
      badge: "Women-Made"
    },
    {
      id: "gold-kente-bloom",
      name: "Gold Kente Bloom Fan", 
      price: "£42",
      image: goldFan,
      description: "Gold/green motif, black leather handle",
      dimensions: "Folded: 24 cm • Open: Ø 40 cm",
      badge: "Small-Batch"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background to-muted overflow-hidden">
        <div className="absolute inset-0 pattern-subtle opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="font-display text-5xl lg:text-6xl font-bold text-kola mb-6">
                Color, Craft, and a Cool Breeze.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Hand-made Nigerian folding fans. Women-made. Small-batch. Ships from the UK.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-kola hover:bg-kola/90 text-primary-foreground">
                  <Link to="/shop" className="flex items-center gap-2">
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link to="/about" className="flex items-center gap-2">
                    Our Story <Heart className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src="/lovable-uploads/800a663e-2ebc-4a66-8ca3-53d52dd3ad47.png" 
                alt="Three stylish young women holding vibrant folding fans at golden hour, showcasing diverse community and friendship"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* USP Strip */}
      <section className="py-8 bg-palm text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-gold" />
              <span className="font-medium">Women-Made</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-gold" />
              <span className="font-medium">Small-Batch</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-gold" />
              <span className="font-medium">Ships in 2–4 days (UK)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Featured Fans
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each fan is unique. Pattern alignment and leather grain vary slightly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50">
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
                    <span className="font-display text-2xl font-bold text-kola">
                      {product.price}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-2">{product.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">{product.dimensions}</p>
                  <Button className="w-full bg-kola hover:bg-kola/90">
                    <Link to={`/product/${product.id}`}>
                      View Details
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Link to="/shop" className="flex items-center gap-2">
                View All Fans <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-indigo text-indigo-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Supporting Women Artisans</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We collaborate with women-led workshops in Nigeria and pay fairly for every batch.
            Your purchase directly supports skilled artisans and their communities.
          </p>
          <Button variant="outline" size="lg" className="border-indigo-foreground text-indigo-foreground hover:bg-indigo-foreground hover:text-indigo">
            <Link to="/makers" className="flex items-center gap-2">
              Meet Our Makers <Heart className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;