import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary-glow/30 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent/25 rounded-full blur-md animate-float" style={{animationDelay: '4s'}} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
            <Zap className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">The Ultimate Meme Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Create & Launch
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Meme Tokens
            </span>
            <br />
            In Seconds
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The most advanced meme creation and token launch platform. Create viral memes, 
            launch tokens, and build communities with zero coding required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              <Zap className="h-5 w-5 mr-2" />
              Start Creating
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-primary/30 hover:bg-primary/10">
              <TrendingUp className="h-5 w-5 mr-2" />
              Explore Trending
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Memes Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50M+</div>
              <div className="text-muted-foreground">Total Value Locked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Active Trading</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;