import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, ExternalLink, Star, Users, DollarSign } from "lucide-react";

interface Token {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: string;
  change24h: number;
  marketCap: string;
  holders: number;
  description: string;
  isNew?: boolean;
  isTrending?: boolean;
}

const mockTokens: Token[] = [
  {
    id: "1",
    name: "Doge Classic",
    symbol: "DOGEC",
    image: "🐕",
    price: "$0.00123",
    change24h: 45.67,
    marketCap: "$1.2M",
    holders: 1234,
    description: "The original meme coin is back with a vengeance",
    isNew: true,
    isTrending: true
  },
  {
    id: "2",
    name: "Pepe Gold",
    symbol: "PEPEG",
    image: "🐸",
    price: "$0.00089",
    change24h: -12.34,
    marketCap: "$890K",
    holders: 892,
    description: "Golden Pepe bringing prosperity to all holders"
  },
  {
    id: "3",
    name: "Moon Cat",
    symbol: "MCAT",
    image: "🐱",
    price: "$0.00456",
    change24h: 78.91,
    marketCap: "$2.1M",
    holders: 2156,
    description: "Feline friends going to the moon together",
    isTrending: true
  },
  {
    id: "4",
    name: "Rocket Shiba",
    symbol: "RSHIB",
    image: "🚀",
    price: "$0.00234",
    change24h: 23.45,
    marketCap: "$1.5M",
    holders: 1567,
    description: "Shiba Inu with rocket fuel for maximum gains"
  },
  {
    id: "5",
    name: "Diamond Hands",
    symbol: "DMND",
    image: "💎",
    price: "$0.00678",
    change24h: -5.67,
    marketCap: "$3.2M",
    holders: 3245,
    description: "For those with true diamond hands"
  },
  {
    id: "6",
    name: "Ape Together",
    symbol: "APET",
    image: "🦍",
    price: "$0.00345",
    change24h: 34.56,
    marketCap: "$1.8M",
    holders: 1876,
    description: "Apes stronger together in the meme economy"
  }
];

const TokenShowcase = () => {
  const [filter, setFilter] = useState<"all" | "trending" | "new">("all");

  const filteredTokens = mockTokens.filter(token => {
    if (filter === "trending") return token.isTrending;
    if (filter === "new") return token.isNew;
    return true;
  });

  return (
    <section id="explore" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Explore <span className="text-primary">Trending Tokens</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the hottest meme tokens in the market. Real-time data and community-driven projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-card rounded-lg p-1 shadow-card">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              onClick={() => setFilter("all")}
              className="rounded-md"
            >
              All Tokens
            </Button>
            <Button
              variant={filter === "trending" ? "default" : "ghost"}
              onClick={() => setFilter("trending")}
              className="rounded-md"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Trending
            </Button>
            <Button
              variant={filter === "new" ? "default" : "ghost"}
              onClick={() => setFilter("new")}
              className="rounded-md"
            >
              <Star className="h-4 w-4 mr-2" />
              New
            </Button>
          </div>
        </div>

        {/* Token Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredTokens.map((token) => (
            <Card key={token.id} className="gradient-card shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{token.image}</div>
                    <div>
                      <CardTitle className="text-lg">{token.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{token.symbol}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    {token.isNew && (
                      <Badge variant="secondary" className="text-xs">
                        NEW
                      </Badge>
                    )}
                    {token.isTrending && (
                      <Badge className="text-xs bg-primary/10 text-primary border-primary/20">
                        TRENDING
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {token.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Price</p>
                    <p className="font-semibold">{token.price}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">24h Change</p>
                    <div className={`flex items-center font-semibold ${
                      token.change24h >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {token.change24h >= 0 ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      {Math.abs(token.change24h).toFixed(2)}%
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Market Cap</p>
                    <p className="font-semibold">{token.marketCap}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Holders</p>
                    <div className="flex items-center font-semibold">
                      <Users className="h-3 w-3 mr-1" />
                      {token.holders.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <DollarSign className="h-4 w-4 mr-1" />
                    Buy
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Tokens
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TokenShowcase;