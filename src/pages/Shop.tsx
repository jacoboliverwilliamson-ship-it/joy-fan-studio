import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Filter, Grid, List, CreditCard, Heart, ShoppingBag } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@supabase/supabase-js";
import { useCart } from "@/contexts/CartContext";
import indigoFan from "@/assets/indigo-sunburst-fan.jpg";
import goldFan from "@/assets/gold-kente-fan.jpg";
import coralFan from "@/assets/coral-turquoise-fan.jpg";
import emeraldFan from "@/assets/emerald-geometric-fan.jpg";
import burgundyFan from "@/assets/burgundy-motif-fan.jpg";
import sunsetFan from "@/assets/sunset-navy-fan.jpg";
import purpleFan from "@/assets/purple-silver-fan.jpg";
import sageFan from "@/assets/sage-minimalist-fan.jpg";
import electricFan from "@/assets/electric-eco-fan.jpg";
import roseFan from "@/assets/rose-charcoal-fan.jpg";

const Shop = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [processingPayments, setProcessingPayments] = useState<Set<string>>(new Set());
  const { toast } = useToast();
  const { addItem } = useCart();

  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL!,
    import.meta.env.VITE_SUPABASE_ANON_KEY!
  );

  const products = [
    {
      id: "indigo-sunburst",
      name: "Indigo Sunburst",
      price: 34,
      image: indigoFan,
      description: "Geometric ankara patterns with brown leather",
      badge: "Classic",
      colors: ["indigo", "brown"],
      category: "traditional"
    },
    {
      id: "gold-kente-bloom",
      name: "Gold Kente Bloom", 
      price: 42,
      image: goldFan,
      description: "Luxe gold motifs with black leather handle",
      badge: "Limited",
      colors: ["gold", "green", "black"],
      category: "traditional"
    },
    {
      id: "coral-turquoise-wave",
      name: "Coral Turquoise Wave",
      price: 38,
      image: coralFan,
      description: "Coastal vibes with natural wood handle",
      badge: "New",
      colors: ["coral", "turquoise", "natural"],
      category: "contemporary"
    },
    {
      id: "emerald-geometric",
      name: "Emerald Geometric",
      price: 45,
      image: emeraldFan,
      description: "Modern lines with bamboo handle",
      badge: "Eco",
      colors: ["emerald", "gold", "black"],
      category: "contemporary"
    },
    {
      id: "burgundy-heritage",
      name: "Burgundy Heritage",
      price: 48,
      image: burgundyFan,
      description: "Traditional motifs with walnut handle",
      badge: "Premium",
      colors: ["burgundy", "cream", "walnut"],
      category: "luxury"
    },
    {
      id: "sunset-navy-bloom",
      name: "Sunset Navy Bloom",
      price: 36,
      image: sunsetFan,
      description: "Artistic patterns with brass accents",
      badge: "Artist",
      colors: ["orange", "navy", "brass"],
      category: "artistic"
    },
    {
      id: "purple-silver-luxe",
      name: "Purple Silver Luxe",
      price: 52,
      image: purpleFan,
      description: "Metallic threads with ebony handle",
      badge: "Luxury",
      colors: ["purple", "silver", "ebony"],
      category: "luxury"
    },
    {
      id: "sage-minimalist",
      name: "Sage Minimalist",
      price: 40,
      image: sageFan,
      description: "Clean lines with oak handle",
      badge: "Nordic",
      colors: ["sage", "white", "oak"],
      category: "contemporary"
    },
    {
      id: "electric-eco-burst",
      name: "Electric Eco Burst",
      price: 35,
      image: electricFan,
      description: "Bold colors with recycled handle",
      badge: "Eco+",
      colors: ["blue", "yellow", "recycled"],
      category: "eco"
    },
    {
      id: "rose-charcoal-modern",
      name: "Rose Charcoal Modern",
      price: 44,
      image: roseFan,
      description: "Abstract design with titanium handle",
      badge: "Future",
      colors: ["rose", "charcoal", "titanium"],
      category: "contemporary"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Fans', count: products.length },
    { id: 'traditional', name: 'Traditional', count: products.filter(p => p.category === 'traditional').length },
    { id: 'contemporary', name: 'Contemporary', count: products.filter(p => p.category === 'contemporary').length },
    { id: 'luxury', name: 'Luxury', count: products.filter(p => p.category === 'luxury').length },
    { id: 'eco', name: 'Eco', count: products.filter(p => p.category === 'eco').length },
  ];

  const filteredProducts = selectedFilter === 'all' 
    ? products 
    : products.filter(p => p.category === selectedFilter);

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-display text-6xl font-bold bg-gradient-to-r from-kola via-gold to-palm bg-clip-text text-transparent mb-6">
            Curated Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ten unique fans, each telling its own story through color, pattern, and craft.
          </p>
        </div>

        {/* Filters & View Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-kola text-white shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-kola/10 hover:text-kola'
                }`}
              >
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">View:</span>
            <div className="flex rounded-lg bg-muted p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-background shadow-sm' : 'hover:bg-background/50'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors ${
                  viewMode === 'list' ? 'bg-background shadow-sm' : 'hover:bg-background/50'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" 
          : "space-y-6"
        }>
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                viewMode === 'list' ? 'flex max-w-none' : ''
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'} overflow-hidden`}>
                <img 
                  src={product.image}
                  alt={`${product.name} - ${product.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <CardContent className={`${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''} p-6`}>
                <div className="flex justify-between items-start mb-3">
                  <Badge 
                    variant="secondary" 
                    className="bg-gradient-to-r from-kola/10 to-gold/10 text-kola border-kola/20 hover:from-kola/20 hover:to-gold/20 transition-colors"
                  >
                    {product.badge}
                  </Badge>
                  <span className="font-display text-xl font-bold text-kola">
                    £{product.price}
                  </span>
                </div>
                
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-kola transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                      style={{
                        backgroundColor: color === 'natural' ? '#D4A574' :
                                       color === 'walnut' ? '#5D4E37' :
                                       color === 'brass' ? '#B5A642' :
                                       color === 'ebony' ? '#1C1C1C' :
                                       color === 'oak' ? '#C8A882' :
                                       color === 'recycled' ? '#4A5D23' :
                                       color === 'titanium' ? '#878681' :
                                       color
                      }}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button 
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <Link to={`/product/${product.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Filter className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="font-display text-xl font-semibold mb-2">No fans found</h3>
            <p className="text-muted-foreground">Try adjusting your filters to see more options.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Shop;