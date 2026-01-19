import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Instant Help When Every Second Matters.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A technology-driven emergency response platform connecting people in crisis 
            with nearby helpers, responders, and instant financial support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-coral-hover text-accent-foreground text-lg px-8 py-6"
            >
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2"
            >
              <Handshake className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;