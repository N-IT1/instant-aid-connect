import { Button } from "@/components/ui/button";
import { Building, Heart, Cloud, Wallet, Users } from "lucide-react";
import { Link } from "react-router-dom";

const PartnerSection = () => {
  const partnerTypes = [
    { icon: Heart, label: "NGO Collaboration" },
    { icon: Building, label: "Government & Health Institutions" },
    { icon: Cloud, label: "Tech & Cloud Providers" },
    { icon: Wallet, label: "Financial Platforms" },
    { icon: Users, label: "Volunteer Networks" },
  ];

  return (
    <section id="partner" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Partner With INSTANT HELP
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us in building a world where emergency response is instant, inclusive,
              and community-driven. Together, we can save more lives.
            </p>
          </div>

          <div className="bg-secondary p-8 rounded-lg mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {partnerTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <type.icon className="h-5 w-5 text-accent" />
                  <span className="text-foreground font-medium">{type.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link to="/partner">
              <Button
                size="lg"
                className="bg-accent hover:bg-coral-hover text-accent-foreground text-lg px-8"
              >
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;