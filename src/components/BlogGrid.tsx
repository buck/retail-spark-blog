import BlogPost from "./BlogPost";

const blogPosts = [
  {
    slug: "building-trust-grid-reliability",
    title: "Building Trust in the Age of Grid Reliability",
    excerpt: "In the utility sector, reliability isn't just a technical challenge-it's a brand challenge. Customers equate consistent service with trust, and outages can erode that trust faster than any marketing campaign can rebuild it.",
    category: "Trust & Reliability",
    readTime: "7 min read",
    date: "Dec 15, 2024",
    tags: ["Grid Reliability", "Trust Building", "Customer Relations"],
    image: "https://d3i6fh83elv35t.cloudfront.net/static/2017/08/RTX3DGQN-1024x683.jpg"
  },
  {
    slug: "demystifying-deregulated-markets",
    title: "Demystifying Deregulated Energy Markets for Consumers",
    excerpt: "Choice in energy supply is both a privilege and a puzzle. In deregulated markets, customers often don't understand who generates power, who sells it, and who delivers it.",
    category: "Market Education",
    readTime: "6 min read", 
    date: "Dec 12, 2024",
    tags: ["Deregulation", "Consumer Education", "Market Complexity"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&auto=format"
  },
  {
    slug: "sustainability-storytelling",
    title: "Storytelling Around Sustainability and Energy Transition",
    excerpt: "Utilities stand at the intersection of old infrastructure and new expectations. The challenge: tell a compelling story about reliability today while signaling commitment to a greener tomorrow.",
    category: "Sustainability",
    readTime: "8 min read",
    date: "Dec 10, 2024", 
    tags: ["Sustainability", "Energy Transition", "Storytelling"],
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&h=250&fit=crop&auto=format"
  },
  {
    slug: "customer-experience-differentiator",
    title: "Customer Experience as a Marketing Differentiator",
    excerpt: "In the utility industry, where product differentiation is minimal, customer experience becomes the brand. From billing portals to outage maps, every interaction is a marketing moment.",
    category: "Customer Experience",
    readTime: "7 min read",
    date: "Dec 8, 2024",
    tags: ["Customer Experience", "Digital Transformation", "Brand Differentiation"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format"
  },
  {
    slug: "communicating-rate-changes",
    title: "Communicating Rate Changes with Empathy and Clarity",
    excerpt: "Rate adjustments are inevitable, but customer frustration doesn't have to be. The key lies in transparent communication that frames costs as investments in reliability and resilience.",
    category: "Rate Communication",
    readTime: "6 min read", 
    date: "Dec 5, 2024",
    tags: ["Rate Changes", "Transparent Communication", "Customer Empathy"],
    image: "https://specials-images.forbesimg.com/imageserve/594533873/960x0.jpg?fit=scale"
  },
  {
    slug: "marketing-innovation-utilities",
    title: "Marketing Innovation in a Traditionally Conservative Industry",
    excerpt: "Energy utilities have historically lagged in adopting bold marketing tactics. But with customer expectations shaped by tech, retail, and media, the time is ripe for innovation.",
    category: "Innovation",
    readTime: "8 min read",
    date: "Dec 3, 2024", 
    tags: ["Marketing Innovation", "Digital Strategy", "Industry Evolution"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&auto=format"
  }
];

const BlogGrid = () => {
  return (
    <section className="py-16 px-4 bg-muted/30" id="articles">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Industry Insights & Analysis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the key challenges facing marketing professionals in the energy utility industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              readTime={post.readTime}
              date={post.date}
              tags={post.tags}
              image={post.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;