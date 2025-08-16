import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

const JournalPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const posts: Record<string, any> = {
    "how-nigerian-folding-fans-are-made": {
      title: "How Nigerian Folding Fans Are Made",
      date: "December 15, 2024",
      content: `
        <p>The art of creating Nigerian folding fans is a delicate balance of traditional craftsmanship and functional design. Each fan begins with carefully selected materials that honor both heritage and quality.</p>
        
        <p>Our artisans start with premium Ankara fabrics, choosing patterns that tell stories of West African culture. The geometric designs aren't just beautiful—they're meaningful, representing concepts of unity, strength, and celebration that have been passed down through generations.</p>
        
        <p>The leather handle is perhaps the most crucial component. Made from genuine leather and hand-stitched with precision, it must be perfectly balanced to allow the fan to open with a satisfying snap and close with elegant control.</p>
        
        <p>The assembly process requires patience and skill. Each fabric panel is cut precisely and sewn to create the perfect circle when opened. The connection points between fabric and handle are reinforced multiple times to ensure durability while maintaining the fan's graceful movement.</p>
      `
    },
    "patterns-and-meanings": {
      title: "Patterns & Meanings",
      date: "December 10, 2024",
      content: `
        <p>Every pattern on our folding fans carries deep cultural significance rooted in West African traditions. These aren't simply decorative elements—they're visual languages that communicate values, stories, and aspirations.</p>
        
        <p>The geometric triangles often featured in our designs represent balance and harmony, while diamond patterns symbolize the precious nature of community bonds. The interlocking circles you'll see speak to the interconnectedness of all life.</p>
        
        <p>Colors, too, have meaning. The deep indigo blues represent wisdom and depth, gold signifies prosperity and divine blessing, while the rich greens connect us to the earth and growth. When these colors come together in traditional motifs, they create a visual celebration of Nigerian heritage.</p>
        
        <p>By choosing patterns that honor these traditions, our artisans ensure that each fan is not just a beautiful accessory, but a piece of cultural storytelling that you can carry with you.</p>
      `
    },
    "meet-the-makers": {
      title: "Meet the Makers",
      date: "December 5, 2024",
      content: `
        <p>Behind every Ayo Fan is a skilled artisan whose hands have perfected the craft through years of dedication. These women entrepreneurs are the heart of our operation, bringing not just technical skill but cultural authenticity to every piece they create.</p>
        
        <p>Adunni Okafor, our lead artisan in Lagos, began learning leatherwork from her grandmother at age 12. Today, she leads a workshop of eight women, each specializing in different aspects of fan creation. "Every fan has a personality," she says. "The leather tells me how it wants to be shaped."</p>
        
        <p>In Ibadan, Kemi Adebayo focuses on pattern design and fabric selection. Her eye for color and understanding of traditional motifs ensures that each fan honors Nigerian heritage while appealing to contemporary tastes. "I want people in London to feel the joy and pride of Nigerian craft," she explains.</p>
        
        <p>These partnerships are built on respect, fair compensation, and shared vision. When you purchase an Ayo Fan, you're directly supporting these women entrepreneurs and their communities.</p>
      `
    }
  };

  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <Button className="mt-4">
            <Link to="/journal">Back to Journal</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" className="mb-8">
            <Link to="/journal" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Journal
            </Link>
          </Button>

          <article>
            <header className="mb-8">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <h1 className="font-display text-4xl font-bold text-foreground">
                {post.title}
              </h1>
            </header>

            <Card>
              <CardContent className="p-8">
                <div 
                  className="prose prose-lg max-w-none text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </CardContent>
            </Card>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default JournalPost;