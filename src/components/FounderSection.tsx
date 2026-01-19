import { User, Lightbulb, Brain, Building, Wallet } from "lucide-react";

const FounderSection = () => {
  const expertise = [
    { icon: Lightbulb, label: "Social impact technology" },
    { icon: Brain, label: "AI for emergency systems" },
    { icon: Building, label: "NGO & public-sector partnerships" },
    { icon: Wallet, label: "Financial inclusion solutions" },
  ];

  return (
    <section id="founder" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Meet the Founder
          </h2>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Founder Image Placeholder */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-64 h-64 lg:w-full lg:h-80 bg-muted rounded-2xl flex items-center justify-center border-2 border-border">
                <div className="text-center">
                  <User className="h-20 w-20 text-muted-foreground mx-auto mb-2" />
                  <span className="text-sm text-muted-foreground">Founder Image</span>
                </div>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-foreground mb-4">Bright Aguele</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Bright Aguele is a Nigerian social entrepreneur, developer, and founder of Instant Help App, 
                a mobile platform designed to revolutionize emergency response and humanitarian aid. 
                Instant Help connects people in crisis with nearby helpers, enabling instant reporting of 
                emergencies, broadcasting alerts through social media, and providing rapid financial assistance 
                via mobile money, cryptocurrency, and bank transfers.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The platform leverages AI (Llama 4 and Pocket AI) for emergency verification, translation, 
                and resource matching, ensuring help reaches people quickly — even in areas with poor internet 
                connectivity. His mission is to save lives by reducing emergency response times, empowering 
                local communities, and building a sustainable, tech-driven model for humanitarian aid that 
                can scale globally.
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Areas of Expertise</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <item.icon className="h-4 w-4 text-accent" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;