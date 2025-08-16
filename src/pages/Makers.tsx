import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Heart } from "lucide-react";
import makerAdunni from "@/assets/maker-adunni.jpg";
import makerKemi from "@/assets/maker-kemi.jpg";

const Makers = () => {
  const makers = [
    {
      name: "Adunni Okafor",
      location: "Lagos, Nigeria",
      craft: "Folding Fan Specialist",
      bio: "With over 15 years of experience, Adunni leads a workshop of 8 women artisans. She specializes in traditional leather working and has perfected the art of creating perfectly balanced folding fans.",
      image: makerAdunni,
      region: "Southwest Nigeria"
    },
    {
      name: "Kemi Adebayo", 
      location: "Ibadan, Nigeria",
      craft: "Pattern Designer",
      bio: "Kemi creates custom Ankara patterns that honor traditional motifs while bringing contemporary flair. Her designs tell stories of Nigerian heritage and celebration.",
      image: makerKemi,
      region: "Southwest Nigeria"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-kola mb-6">Meet Our Makers</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The skilled women artisans behind every beautiful fan. Their craft, 
            stories, and communities are at the heart of everything we do.
          </p>
        </div>

        {/* Impact Statement */}
        <Card className="bg-palm text-secondary-foreground mb-16">
          <CardContent className="p-8 text-center">
            <Heart className="h-12 w-12 mx-auto mb-6 text-gold" />
            <h2 className="font-display text-2xl font-bold mb-4">Supporting Women Entrepreneurs</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              We collaborate with women-led workshops in Nigeria and pay fairly for every batch. 
              Each purchase creates sustainable income and supports entire communities.
            </p>
          </CardContent>
        </Card>

        {/* Makers Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {makers.map((maker, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={maker.image}
                  alt={`${maker.name}, ${maker.craft} from ${maker.location}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="mb-4">
                  <Badge className="bg-gold/10 text-gold border-gold/20 mb-3">
                    {maker.craft}
                  </Badge>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {maker.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{maker.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {maker.bio}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <span className="text-sm font-medium text-kola">Region: {maker.region}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How We Work Section */}
        <div className="mt-20">
          <h2 className="font-display text-3xl font-bold text-center mb-12 text-foreground">
            How We Partner
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-kola/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-kola font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold mb-3">Direct Partnership</h3>
                <p className="text-sm text-muted-foreground">
                  We work directly with women-led workshops, building long-term relationships based on trust and respect.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-palm/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-palm font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold mb-3">Fair Compensation</h3>
                <p className="text-sm text-muted-foreground">
                  Every artisan receives fair wages that reflect the skill and time invested in each handcrafted piece.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold mb-3">Community Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Your purchases support not just individual makers, but entire communities through sustainable income.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Makers;