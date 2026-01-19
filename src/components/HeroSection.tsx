import { Button } from "@/components/ui/button";
import { ArrowRight, Handshake } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-20">
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero-bg-mobile.jpg" />
          <img
            src="/hero-bg-desktop.png"
            alt="Community helping each other"
            className="w-full h-full object-cover object-top"
          />
        </picture>
        <div className="absolute inset-0 bg-navy/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative Orbs - kept subtle for depth */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10 animate-fade-in" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-navy/5 rounded-full blur-[100px] -z-10 animate-fade-in" style={{ animationDelay: "0.5s" }} />

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 md:mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm animate-fade-in">
            <span className="text-xs md:text-sm font-medium text-white uppercase tracking-wider">
              Emergency Response Reimagined
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Instant Help When <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-accent">
              Every Second Matters.
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A technology-driven emergency response platform connecting people in crisis
            with nearby helpers, responders, and instant financial support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-accent hover:bg-coral-hover text-white text-base md:text-lg px-6 py-4 md:px-8 md:py-7 h-auto shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-6 py-4 md:px-8 md:py-7 h-auto border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40 w-full sm:w-auto transition-all duration-300"
            >
              <Handshake className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
          </div>

          <div className="mt-10 md:mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 md:gap-8 text-center animate-fade-in opacity-0" style={{ animationFillMode: 'forwards', animationDelay: '0.6s' }}>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">2min</p>
              <p className="text-xs md:text-sm text-white/70">Avg. Response</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">10k+</p>
              <p className="text-xs md:text-sm text-white/70">Volunteers</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">24/7</p>
              <p className="text-xs md:text-sm text-white/70">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;