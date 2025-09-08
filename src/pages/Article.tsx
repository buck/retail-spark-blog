import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, CalendarDays, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Article data - in a real app, this would come from a CMS or API
const articleData = {
  "building-trust-grid-reliability": {
    title: "Building Trust in the Age of Grid Reliability",
    category: "Trust & Reliability",
    readTime: "7 min read",
    date: "Dec 15, 2024",
    tags: ["Grid Reliability", "Trust Building", "Customer Relations"],
    image: "https://d3i6fh83elv35t.cloudfront.net/static/2017/08/RTX3DGQN-1024x683.jpg",
    filePath: "/articles/building-trust-grid-reliability.md"
  },
  "demystifying-deregulated-markets": {
    title: "Demystifying Deregulated Energy Markets for Consumers",
    category: "Market Education",
    readTime: "6 min read",
    date: "Dec 12, 2024",
    tags: ["Deregulation", "Consumer Education", "Market Complexity"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&auto=format",
    filePath: "/articles/demystifying-deregulated-markets.md"
  },
  "sustainability-storytelling": {
    title: "Storytelling Around Sustainability and Energy Transition",
    category: "Sustainability",
    readTime: "8 min read",
    date: "Dec 10, 2024",
    tags: ["Sustainability", "Energy Transition", "Storytelling"],
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop&auto=format",
    filePath: "/articles/sustainability-storytelling.md"
  },
  "customer-experience-differentiator": {
    title: "Customer Experience as a Marketing Differentiator",
    category: "Customer Experience",
    readTime: "7 min read",
    date: "Dec 8, 2024",
    tags: ["Customer Experience", "Digital Transformation", "Brand Differentiation"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format",
    filePath: "/articles/customer-experience-differentiator.md"
  },
  "communicating-rate-changes": {
    title: "Communicating Rate Changes with Empathy and Clarity",
    category: "Rate Communication",
    readTime: "6 min read",
    date: "Dec 5, 2024",
    tags: ["Rate Changes", "Transparent Communication", "Customer Empathy"],
    image: "https://specials-images.forbesimg.com/imageserve/594533873/960x0.jpg?fit=scale",
    filePath: "/articles/communicating-rate-changes.md"
  },
  "marketing-innovation-utilities": {
    title: "Marketing Innovation in a Traditionally Conservative Industry",
    category: "Innovation",
    readTime: "8 min read",
    date: "Dec 3, 2024",
    tags: ["Marketing Innovation", "Digital Strategy", "Industry Evolution"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&auto=format",
    filePath: "/articles/marketing-innovation-utilities.md"
  }
};

// Simple markdown to HTML converter for basic formatting
const parseMarkdown = (markdown: string): string => {
  return markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-foreground mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-foreground mt-10 mb-6">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-foreground mt-12 mb-8">$1</h1>')
    
    // Bold and Italic
    .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
    
    // Lists
    .replace(/^\- (.*$)/gim, '<li class="ml-4 mb-2">• $1</li>')
    .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4 mb-2">$1. $2</li>')
    
    // Paragraphs
    .replace(/^\*.*\*/gim, '<p class="text-sm text-muted-foreground italic mb-4">$&</p>')
    .replace(/^([^<\n].*)$/gim, '<p class="text-base text-muted-foreground mb-4 leading-relaxed">$1</p>')
    
    // Line breaks
    .replace(/\n\n/gim, '\n');
};

const Article = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  
  const article = slug ? articleData[slug as keyof typeof articleData] : null;

  useEffect(() => {
    if (!article) return;

    const fetchArticleContent = async () => {
      try {
        const response = await fetch(article.filePath);
        const text = await response.text();
        setContent(parseMarkdown(text));
      } catch (error) {
        console.error("Failed to load article:", error);
        setContent("<p class='text-destructive'>Failed to load article content.</p>");
      } finally {
        setLoading(false);
      }
    };

    fetchArticleContent();
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/2 mx-auto mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
              <div className="h-4 bg-muted rounded w-4/5"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 px-4 border-b">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
          
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              {article.category}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 flex-wrap mb-8">
              <Tag className="h-4 w-4 text-muted-foreground" />
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          {article.image && (
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </section>
      
      {/* Article Content */}
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <article 
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          
          <div className="mt-12 pt-8 border-t">
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Articles
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Article;