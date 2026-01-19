import { AlertTriangle, Clock, MapPin, Smartphone } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Delayed Response",
      description: "Emergency services often take too long to reach remote areas.",
    },
    {
      icon: MapPin,
      title: "Lack of Access",
      description: "Limited transport, medical facilities, and immediate funds.",
    },
    {
      icon: AlertTriangle,
      title: "Under-resourced Systems",
      description: "Traditional emergency systems are slow and overwhelmed.",
    },
  ];

  return (
    <section id="problem" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Emergency Gap
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Millions face delayed emergency response, especially in remote and underserved areas. 
              The gap between crisis and help costs lives every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border border-border text-center"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <problem.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Smartphone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">The Solution: Smartphones + Community + AI</h3>
                <p className="text-muted-foreground">
                  By leveraging smartphone technology, community networks, and AI-powered systems, 
                  we can create a faster, more efficient emergency response that works even in low-connectivity 
                  environments. This is the future of humanitarian aid—instant, local, and technology-driven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;