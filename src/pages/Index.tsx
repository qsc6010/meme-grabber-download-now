import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MemeGenerator from "@/components/MemeGenerator";
import TokenShowcase from "@/components/TokenShowcase";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MemeGenerator />
      <TokenShowcase />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
