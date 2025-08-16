import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const Journal = () => {
  const posts = [
    {
      slug: "how-nigerian-folding-fans-are-made",
      title: "How Nigerian Folding Fans Are Made",
      excerpt: "Leatherwork, stitching, and the snap-open circle.",
      date: "December 15, 2024",
      readTime: "5 min read"
    },
    {
      slug: "patterns-and-meanings",
      title: "Patterns & Meanings",
      excerpt: "Common West African motifs and color stories.",
      date: "December 10, 2024", 
      readTime: "7 min read"
    },
    {
      slug: "meet-the-makers",
      title: "Meet the Makers",
      excerpt: "Women entrepreneurs behind our small batches.",
      date: "December 5, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-kola mb-6">Journal</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stories of craft, culture, and the artisans who bring Nigerian folding fans to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {posts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-kola transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg mb-6">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="outline" className="group-hover:bg-kola group-hover:text-primary-foreground transition-colors">
                    <Link to={`/journal/${post.slug}`} className="flex items-center gap-2">
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Journal;