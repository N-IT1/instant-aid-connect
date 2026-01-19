import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background with premium gradient and subtle orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-background to-background -z-20" />
      
      {/* Decorative Orbs - utilizing the accent colors but very diffused */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10 animate-fade-in" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-navy/5 rounded-full blur-[100px] -z-10 animate-fade-in" style={{ animationDelay: "0.5s" }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 animate-fade-in">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Emergency Response Reimagined
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Instant Help When <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-accent">
              Every Second Matters.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A technology-driven emergency response platform connecting people in crisis 
            with nearby helpers, responders, and instant financial support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-coral-hover text-accent-foreground text-lg px-8 py-7 h-auto shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-7 h-auto border-2 border-input hover:bg-accent/5 hover:border-accent/40 w-full sm:w-auto transition-all duration-300"
            >
              <Handshake className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-border/50 grid grid-cols-3 gap-8 text-center animate-fade-in opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.6s' }}>
            <div>
              <p className="text-3xl font-bold text-navy">2min</p>
              <p className="text-sm text-muted-foreground">Avg. Response</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">10k+</p>
              <p className="text-sm text-muted-foreground">Volunteers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">24/7</p>
              <p className="text-sm text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;