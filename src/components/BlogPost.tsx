import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  tags: string[];
  image?: string;
}

const BlogPost = ({ slug, title, excerpt, category, readTime, date, tags, image }: BlogPostProps) => {
  return (
    <Link to={`/article/${slug}`} className="block">
      <Card className="group hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/20 h-full">
      {image && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
        
        <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="text-sm text-foreground/80 mb-4 line-clamp-3">
          {excerpt}
        </CardDescription>
        
        <div className="flex items-center gap-2 flex-wrap">
          <Tag className="h-3 w-3 text-muted-foreground" />
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};

export default BlogPost;