import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  Download, 
  Smartphone, 
  Users, 
  TrendingUp,
  Palette,
  Coins,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Create and download memes in seconds. No waiting, no processing delays.",
    color: "text-yellow-500"
  },
  {
    icon: Download,
    title: "Direct Download",
    description: "Download your memes directly to your computer with one click. No registration required.",
    color: "text-green-500"
  },
  {
    icon: Palette,
    title: "Advanced Editor",
    description: "Customize fonts, colors, sizes, and effects with our intuitive meme editor.",
    color: "text-purple-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Create memes on any device. Fully responsive design for desktop and mobile.",
    color: "text-blue-500"
  },
  {
    icon: Coins,
    title: "Token Creation",
    description: "Launch your own meme token with just a few clicks. No coding knowledge required.",
    color: "text-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Market Analytics",
    description: "Track token performance, holder count, and market trends in real-time.",
    color: "text-red-500"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a vibrant community of meme creators and token enthusiasts.",
    color: "text-indigo-500"
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Built on proven blockchain technology with security as our top priority.",
    color: "text-emerald-500"
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "No account required. Your memes and data stay private and secure.",
    color: "text-pink-500"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">MemeForge</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create, share, and monetize your memes in one powerful platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-card shadow-card hover:shadow-glow transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-primary/10 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Memes Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Tokens Launched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50M+</div>
            <div className="text-muted-foreground">Total Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;