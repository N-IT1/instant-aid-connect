import { Clock, Users, DollarSign, Globe } from "lucide-react";

const ImpactSection = () => {
  const impacts = [
    {
      icon: Clock,
      title: "Reduced Response Time",
      description: "Dramatically cut the time between emergency and first response.",
    },
    {
      icon: Users,
      title: "Community-Powered Response",
      description: "Empower local communities to be first responders in their neighborhoods.",
    },
    {
      icon: DollarSign,
      title: "Financial Inclusion",
      description: "Provide immediate financial support during emergencies to those who need it most.",
    },
    {
      icon: Globe,
      title: "Scalable Model",
      description: "A humanitarian tech model designed to scale globally across diverse regions.",
    },
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Every feature we build is designed to create measurable, life-saving impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {impacts.map((impact, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-secondary rounded-lg"
              >
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <impact.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{impact.title}</h3>
                  <p className="text-sm text-muted-foreground">{impact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;