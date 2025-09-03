import { Zap, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">PowerMarket Insights</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#articles" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Articles
          </a>
          <a href="#insights" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Market Insights
          </a>
          <a href="#resources" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Resources
          </a>
        </nav>
        
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;