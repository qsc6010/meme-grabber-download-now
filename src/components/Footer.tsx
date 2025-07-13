import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Github, 
  Twitter, 
  MessageCircle, 
  Send,
  Mail,
  Heart,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card/30 border-t border-border/40">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                MemeForge
              </span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              The ultimate platform for creating viral memes and launching successful meme tokens.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Send className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#create" className="hover:text-primary transition-colors">Meme Generator</a></li>
              <li><a href="#explore" className="hover:text-primary transition-colors">Token Explorer</a></li>
              <li><a href="#trending" className="hover:text-primary transition-colors">Trending Memes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Analytics</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest updates on new features and trending tokens.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-background/50"
              />
              <Button variant="hero" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>© 2024 MemeForge. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for the meme community</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={scrollToTop}
              className="hover:text-primary"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;