import { Button } from "@/components/ui/button";
import heroSneaker from "@/assets/hero-sneaker.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                New Release
              </p>
              <h1 className="text-hero leading-none font-extrabold tracking-tight">
                Step Into
                <br />
                <span className="text-accent">Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
                Discover our premium collection of athletic footwear designed for champions. 
                Comfort meets performance in every step.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8 py-3 text-base shadow-accent transition-all duration-300 hover:shadow-hover">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-3 text-base transition-all duration-300">
                View Collection
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Shoe Models</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={heroSneaker}
                alt="Premium Athletic Sneaker"
                className="w-full h-auto max-w-2xl mx-auto drop-shadow-2xl"
              />
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-accent animate-bounce">
                -30% OFF
              </div>
              <div className="absolute bottom-8 left-8 bg-card border border-border p-4 rounded-lg shadow-card animate-pulse">
                <div className="text-sm text-muted-foreground">Starting from</div>
                <div className="text-2xl font-bold text-primary">$129</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;