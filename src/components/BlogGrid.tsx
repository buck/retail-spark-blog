import BlogPost from "./BlogPost";

const blogPosts = [
  {
    title: "The Challenge of Customer Acquisition in Deregulated Markets",
    excerpt: "Marketing specialists face unique hurdles when trying to acquire customers in deregulated electricity markets. From complex pricing structures to consumer skepticism, understanding these challenges is crucial for developing effective acquisition strategies that build trust and drive conversions.",
    category: "Customer Acquisition",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    tags: ["Deregulation", "Customer Acquisition", "Market Strategy"]
  },
  {
    title: "Building Trust in an Industry Plagued by Switching Confusion",
    excerpt: "Consumer trust remains one of the biggest challenges in retail electricity marketing. With widespread confusion about switching providers and concerns about hidden fees, marketing teams must develop transparent communication strategies that educate and reassure potential customers.",
    category: "Trust Building",
    readTime: "6 min read", 
    date: "Dec 12, 2024",
    tags: ["Trust", "Communication", "Consumer Education"]
  },
  {
    title: "Beyond Price Competition: Differentiating in a Commoditized Market",
    excerpt: "When electricity is viewed as a commodity, price becomes the primary differentiator. Marketing specialists must find creative ways to highlight value propositions beyond rate comparisons, including customer service excellence, green energy options, and innovative billing solutions.",
    category: "Differentiation",
    readTime: "7 min read",
    date: "Dec 10, 2024", 
    tags: ["Differentiation", "Value Proposition", "Competitive Strategy"]
  },
  {
    title: "Seasonal Demand Patterns and Marketing Campaign Timing",
    excerpt: "Electricity usage patterns create unique marketing challenges throughout the year. Understanding peak demand seasons, weather-related consumption changes, and seasonal customer behavior is essential for timing campaigns effectively and managing customer expectations about billing fluctuations.",
    category: "Seasonal Marketing",
    readTime: "5 min read",
    date: "Dec 8, 2024",
    tags: ["Seasonal Trends", "Campaign Timing", "Demand Patterns"]
  },
  {
    title: "Regulatory Compliance: Navigating Marketing Rules in Energy",
    excerpt: "The retail electricity industry operates under strict regulatory frameworks that impact every aspect of marketing communications. From disclosure requirements to advertising restrictions, marketing teams must balance creativity with compliance while ensuring all materials meet state and federal guidelines.",
    category: "Compliance",
    readTime: "9 min read", 
    date: "Dec 5, 2024",
    tags: ["Regulation", "Compliance", "Legal Requirements"]
  },
  {
    title: "Green Energy Marketing: Authenticity vs. Greenwashing Concerns",
    excerpt: "As consumer interest in renewable energy grows, marketing sustainable electricity options presents both opportunities and risks. Marketing specialists must navigate authenticity concerns, avoid greenwashing accusations, and clearly communicate the environmental impact of their energy products.",
    category: "Sustainability",
    readTime: "6 min read",
    date: "Dec 3, 2024", 
    tags: ["Green Energy", "Sustainability", "Authentic Marketing"]
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
            Explore the key challenges facing marketing professionals in the retail electricity sector
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              readTime={post.readTime}
              date={post.date}
              tags={post.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;