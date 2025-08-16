import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, RotateCcw, Package, Clock } from "lucide-react";

const Shipping = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-kola mb-6">
            Shipping & Returns
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fast, reliable delivery across the UK with hassle-free returns.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-kola/10 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-kola" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">Shipping</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">UK Delivery</h3>
                    <p className="text-muted-foreground">
                      Free standard delivery (2-4 business days) on all orders.
                      Tracked and insured for your peace of mind.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">International</h3>
                    <p className="text-muted-foreground">
                      Coming soon! We're working on expanding our delivery options 
                      to bring Nigerian craft worldwide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-palm/10 flex items-center justify-center">
                    <RotateCcw className="h-6 w-6 text-palm" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">Returns</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">30-Day Returns</h3>
                    <p className="text-muted-foreground">
                      Not completely satisfied? Return your fan within 30 days 
                      for a full refund, no questions asked.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Condition</h3>
                    <p className="text-muted-foreground">
                      Items must be unused and in original condition. 
                      Handmade variations are not grounds for return.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                    <Package className="h-6 w-6 text-gold" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">Packaging</h2>
                </div>
                
                <p className="text-muted-foreground">
                  Your fan arrives in eco-friendly packaging that protects the delicate 
                  craftsmanship while minimizing environmental impact. Each package 
                  includes care instructions and the story of your fan's maker.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-indigo/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-indigo" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">Processing</h2>
                </div>
                
                <p className="text-muted-foreground">
                  Orders are processed within 1-2 business days. As each fan is 
                  handcrafted, occasional delays may occur during high demand periods. 
                  We'll always keep you updated on your order status.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-muted/50">
            <CardContent className="p-8 text-center">
              <h3 className="font-display text-2xl font-bold mb-4">Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <p className="text-sm text-muted-foreground">
                  Email us at: <span className="font-medium">hello@ayofans.co.uk</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Shipping;