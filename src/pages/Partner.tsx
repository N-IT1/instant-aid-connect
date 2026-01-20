import { useState } from "react";
import { ArrowLeft, Building2, Stethoscope, Briefcase, Laptop2, Users2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Partner = () => {
    const [step, setStep] = useState<1 | 2>(1);
    const [partnerType, setPartnerType] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        orgName: "",
        contactPerson: "",
        email: "",
        supportType: "",
    });

    const partnerTypes = [
        {
            id: "ngo",
            title: "NGO / Non-profit",
            icon: Building2,
            color: "bg-orange-100 text-orange-600",
            description: "Collaborate on relief efforts and community outreach."
        },
        {
            id: "medical",
            title: "Hospital / Medical",
            icon: Stethoscope,
            color: "bg-blue-100 text-blue-600",
            description: "Provide emergency medical care and health resources."
        },
        {
            id: "corporate",
            title: "Corporate / Sponsor",
            icon: Briefcase,
            color: "bg-purple-100 text-purple-600",
            description: "Fund initiatives and provide CSR support."
        },
        {
            id: "tech",
            title: "Tech / Platform",
            icon: Laptop2,
            color: "bg-cyan-100 text-cyan-600",
            description: "Integrate APIs or provide technical infrastructure."
        },
        {
            id: "gov",
            title: "Gov / Community",
            icon: Users2,
            color: "bg-green-100 text-green-600",
            description: "Coordinate official response and local mobilization."
        }
    ];

    const handleTypeSelect = (type: string) => {
        setPartnerType(type);
        setStep(2);
        window.scrollTo(0, 0);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `*New Partnership Inquiry*\n\n` +
            `*Type:* ${partnerTypes.find(t => t.id === partnerType)?.title}\n` +
            `*Organization:* ${formData.orgName}\n` +
            `*Contact:* ${formData.contactPerson}\n` +
            `*Email:* ${formData.email}\n` +
            `*Support:* ${formData.supportType || "Not specified"}`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/2348063511862?text=${encodedMessage}`, "_blank");
    };

    return (
        <div className="min-h-screen bg-white text-navy">
            <div className="container mx-auto px-4 py-8">
                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-navy transition-colors mb-8 group">
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <img src="/logo.jpg" alt="Instant Help Logo" className="w-16 h-16 rounded-xl object-cover shadow-lg mx-auto mb-6" />
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-navy">
                            Partner With Us
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Join our network of organizations transforming emergency response.
                        </p>
                    </div>

                    {step === 1 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {partnerTypes.map((type) => (
                                <div
                                    key={type.id}
                                    onClick={() => handleTypeSelect(type.id)}
                                    className="group p-6 rounded-2xl border border-gray-100 hover:border-accent/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white"
                                >
                                    <div className={`w-12 h-12 rounded-xl ${type.color} flex items-center justify-center mb-4`}>
                                        <type.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-navy">{type.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{type.description}</p>
                                    <div className="flex items-center text-sm font-medium text-accent">
                                        Select <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl border border-gray-100 shadow-lg animate-fade-in">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold">Partner Details</h2>
                                <button
                                    onClick={() => setStep(1)}
                                    className="text-sm text-muted-foreground hover:text-navy hover:underline"
                                >
                                    Change Type
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="orgName">Organization Name</Label>
                                    <Input
                                        id="orgName"
                                        required
                                        placeholder="e.g. Acme Foundation"
                                        value={formData.orgName}
                                        onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="contact">Contact Person</Label>
                                    <Input
                                        id="contact"
                                        required
                                        placeholder="Full Name"
                                        value={formData.contactPerson}
                                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        placeholder="name@company.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="support">How would you like to support? (Optional)</Label>
                                    <Textarea
                                        id="support"
                                        placeholder="Resources, funding, volunteers, tech..."
                                        value={formData.supportType}
                                        onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
                                    />
                                </div>

                                <Button type="submit" className="w-full bg-accent hover:bg-coral-hover text-white h-12 text-lg">
                                    Disconnect & Connect
                                </Button>
                                <p className="text-xs text-center text-muted-foreground mt-4">
                                    We'll review your application and reach out within 48 hours.
                                </p>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Partner;
