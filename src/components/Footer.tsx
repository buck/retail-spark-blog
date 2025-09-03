import { Zap, Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">PowerMarket Insights</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your go-to resource for marketing intelligence in the retail electricity industry. 
              Helping marketing professionals navigate the complexities of deregulated energy markets.
            </p>
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Customer Acquisition</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trust Building</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Market Strategy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Industry Reports</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Market Data</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Best Practices</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 PowerMarket Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;