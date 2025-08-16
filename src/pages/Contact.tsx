import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-kola mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our fans, makers, or want to learn more about our mission? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="h-6 w-6 text-kola" />
                  <h2 className="font-display text-2xl font-bold">Send us a message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-kola hover:bg-kola/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="h-6 w-6 text-palm" />
                    <h3 className="font-display text-xl font-bold">Email Us</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    For general inquiries, wholesale opportunities, or press requests.
                  </p>
                  <p className="font-medium">hello@ayofans.co.uk</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="h-6 w-6 text-gold" />
                    <h3 className="font-display text-xl font-bold">Wholesale</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Interested in stocking our fans? We'd love to partner with 
                    retailers who share our values.
                  </p>
                  <p className="font-medium">wholesale@ayofans.co.uk</p>
                </CardContent>
              </Card>

              <Card className="bg-indigo text-indigo-foreground">
                <CardContent className="p-8">
                  <h3 className="font-display text-xl font-bold mb-4">Our Mission</h3>
                  <p className="opacity-90">
                    Every message helps us understand how to better serve our 
                    community while supporting Nigerian artisans. Thank you for 
                    being part of our journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;