import { 
  AlertCircle, 
  Brain, 
  MapPin, 
  Share2, 
  CreditCard, 
  Wifi 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: AlertCircle,
      title: "Real-time Emergency Reporting",
      description: "Report emergencies instantly with video, photos, and precise GPS location data.",
    },
    {
      icon: Brain,
      title: "AI-Powered Verification",
      description: "Llama 4 and Pocket AI verify emergencies, translate languages, and prioritize responses.",
    },
    {
      icon: MapPin,
      title: "Location-Based Matching",
      description: "Automatically connect with the nearest available responders and volunteers.",
    },
    {
      icon: Share2,
      title: "Social Media Broadcasting",
      description: "Amplify alerts through social networks to reach more potential helpers.",
    },
    {
      icon: CreditCard,
      title: "Instant Financial Aid",
      description: "Send donations instantly via mobile money, cryptocurrency, or bank transfer.",
    },
    {
      icon: Wifi,
      title: "Low-Connectivity Mode",
      description: "Works reliably even in areas with poor internet connectivity.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge technology to ensure help reaches those who need it, 
            when they need it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;