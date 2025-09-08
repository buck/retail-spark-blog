import { TrendingUp, Users, Lightbulb } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img 
          src="/images/hero-bg.svg" 
          alt="Utility industry marketing background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Marketing Excellence in the
          <span className="block text-primary">Energy Utility Industry</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Navigating the evolving landscape of utility marketing, from grid reliability and customer trust 
          to sustainability storytelling and digital transformation.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
          <div className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm">
            <TrendingUp className="h-8 w-8 text-primary" />
            <div className="text-left">
              <div className="font-semibold text-foreground">Grid Reliability</div>
              <div className="text-sm text-muted-foreground">Building trust through consistent service</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm">
            <Users className="h-8 w-8 text-secondary" />
            <div className="text-left">
              <div className="font-semibold text-foreground">Customer Experience</div>
              <div className="text-sm text-muted-foreground">Every touchpoint is a brand moment</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm">
            <Lightbulb className="h-8 w-8 text-accent" />
            <div className="text-left">
              <div className="font-semibold text-foreground">Innovation</div>
              <div className="text-sm text-muted-foreground">Modernizing a traditional industry</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;