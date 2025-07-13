import { Button } from "@/components/ui/button";
import { Search, Wallet, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">M</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            MemeForge
          </span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#create" className="text-foreground hover:text-primary transition-colors">
            Create
          </a>
          <a href="#explore" className="text-foreground hover:text-primary transition-colors">
            Explore
          </a>
          <a href="#trending" className="text-foreground hover:text-primary transition-colors">
            Trending
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="hero" className="hidden sm:flex">
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <a href="#create" className="block py-2 text-foreground hover:text-primary transition-colors">
              Create
            </a>
            <a href="#explore" className="block py-2 text-foreground hover:text-primary transition-colors">
              Explore
            </a>
            <a href="#trending" className="block py-2 text-foreground hover:text-primary transition-colors">
              Trending
            </a>
            <a href="#about" className="block py-2 text-foreground hover:text-primary transition-colors">
              About
            </a>
            <div className="pt-2 space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="hero" className="w-full">
                <Wallet className="h-4 w-4 mr-2" />
                Connect Wallet
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;