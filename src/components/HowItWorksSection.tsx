import { Video, Radio, Users, Wallet } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Video,
      number: "01",
      title: "Report Emergency",
      description: "Capture video evidence and share your exact location with one tap.",
    },
    {
      icon: Radio,
      number: "02",
      title: "Broadcast Alert",
      description: "Instantly alert social networks and community groups in your area.",
    },
    {
      icon: Users,
      number: "03",
      title: "Connect Helpers",
      description: "Match with nearby volunteers, first responders, and medical personnel.",
    },
    {
      icon: Wallet,
      number: "04",
      title: "Instant Support",
      description: "Receive immediate financial aid via mobile money, crypto, or bank transfer.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How INSTANT HELP Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps from crisis to help. Our platform streamlines emergency response 
            to save precious time when it matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-secondary p-6 rounded-lg h-full">
                <div className="text-6xl font-bold text-accent/20 absolute top-4 right-4">
                  {step.number}
                </div>
                <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;