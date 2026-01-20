import { ArrowLeft, CreditCard, Heart, Laptop, Share2, Activity, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const GetInvolved = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        reason: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `*Get Involved Application*\n\n` +
            `*Path:* ${selectedOption}\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Reason:* ${formData.reason || "N/A"}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/2348063511862?text=${encodedMessage}`, "_blank");
        setSelectedOption(null);
        setFormData({ name: "", email: "", phone: "", reason: "" });
    };

    const options = [
        {
            title: "Support Financially",
            description: "Your donation provides immediate relief supplies and technology to those in crisis.",
            icon: CreditCard,
            color: "bg-coral",
            delay: "0.1s"
        },
        {
            title: "Remote Volunteer",
            description: "Use your skills from home. Help coordinate logistics, verify reports, or provide emotional support.",
            icon: Laptop,
            color: "bg-accent",
            delay: "0.2s"
        },
        {
            title: "Support the Mission",
            description: "Spread the word. Share our campaigns and help us build a global network of helpers.",
            icon: Share2,
            color: "bg-blue-500",
            delay: "0.3s"
        },
        {
            title: "Train to Save Lives",
            description: "Get certified in emergency response. Be the first line of defense in your community.",
            icon: Activity,
            color: "bg-green-500",
            delay: "0.4s"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-navy relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-50/30" />
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-coral/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 py-8 relative z-10">
                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-navy transition-colors mb-8 group">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <div className="max-w-4xl mx-auto text-center mb-16">
                    <img src="/logo.jpg" alt="Instant Help Logo" className="w-16 h-16 rounded-xl object-cover shadow-lg mx-auto mb-6" />
                    <div className="inline-block px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 backdrop-blur-sm mb-6 animate-fade-in">
                        <span className="text-sm font-medium text-accent tracking-wider uppercase">Join the Movement</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-navy">
                        How would you like to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral to-accent">Get Involved?</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                        Every action counts. Choose a path that matches your passion and capability.
                        Together, we can make emergency response instant and effective.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedOption(option.title)}
                            className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-accent/20 hover:scale-[1.02] cursor-pointer animate-fade-in opacity-0 shadow-sm"
                            style={{ animationDelay: option.delay, animationFillMode: "forwards" }}
                        >
                            <div className={`w-14 h-14 rounded-xl ${option.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                                <option.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-navy group-hover:text-accent transition-colors">{option.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {option.description}
                            </p>
                            <div className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors">
                                Select this path <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                            </div>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
                    <p className="text-muted-foreground mb-4">Not sure where to start?</p>
                    <Button variant="outline" className="text-navy border-navy/20 hover:bg-navy/5">
                        Contact our Team
                    </Button>
                </div>
            </div>

            <Dialog open={!!selectedOption} onOpenChange={(open) => !open && setSelectedOption(null)}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Get Involved: {selectedOption}</DialogTitle>
                        <DialogDescription>
                            Please provide your details so we can connect you with the right team.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                required
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                type="tel"
                                required
                                placeholder="+1234567890"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="reason">Why do you want to join? (Optional)</Label>
                            <Textarea
                                id="reason"
                                placeholder="I want to help because..."
                                value={formData.reason}
                                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            />
                        </div>
                        <Button type="submit" className="bg-accent hover:bg-coral-hover text-white w-full mt-2">
                            Submit Application
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default GetInvolved;
