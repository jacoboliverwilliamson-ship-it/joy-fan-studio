import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-kola mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating Nigerian craft, supporting women artisans, and bringing the beauty 
            of West African folding fans to the UK.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">
                Women-Made, Women-Supported
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Every fan in our collection is handcrafted by skilled women artisans in Nigeria, 
                  who have perfected the art of creating these beautiful folding fans through 
                  generations of tradition and innovation.
                </p>
                <p>
                  We believe in fair compensation and long-term partnerships. When you purchase 
                  an Ayo Fan, you're directly supporting women entrepreneurs and their communities 
                  across Nigeria.
                </p>
                <p>
                  Our fans combine traditional West African patterns with modern functionality, 
                  featuring rich Ankara fabrics and carefully selected motifs that tell stories 
                  of heritage, celebration, and craftsmanship.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-4 text-kola">
                  Ethical Sourcing
                </h3>
                <p className="text-muted-foreground mb-6">
                  We work directly with women-led workshops in Nigeria, ensuring fair wages 
                  and sustainable practices. No middlemen, no exploitation—just honest trade 
                  that empowers communities.
                </p>
                <Button variant="outline">
                  <Link to="/makers" className="flex items-center gap-2">
                    Meet Our Makers <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-4 text-palm">
                  Small-Batch Quality
                </h3>
                <p className="text-muted-foreground mb-6">
                  Each batch is made in small quantities, allowing our artisans to focus 
                  on quality over quantity. Slight variations in pattern and leather grain 
                  are not flaws—they're signatures of authentic handcraft.
                </p>
                <Button variant="outline">
                  <Link to="/shop" className="flex items-center gap-2">
                    Shop Collection <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Impact Statement */}
          <Card className="bg-indigo text-indigo-foreground">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 mx-auto mb-6 text-gold" />
              <h3 className="font-display text-2xl font-bold mb-4">Our Impact Promise</h3>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                We collaborate with women-led workshops in Nigeria and pay fairly for every batch. 
                Your purchase creates lasting change in artisan communities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;