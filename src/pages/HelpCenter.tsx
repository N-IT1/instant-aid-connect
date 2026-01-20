import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, HelpCircle, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HelpCenter = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="bg-navy py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-white mb-6">How can we help you?</h1>
                    <div className="max-w-2xl mx-auto relative">
                        <Input
                            placeholder="Search for answers..."
                            className="h-14 pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-full"
                        />
                        <Search className="absolute left-4 top-4 text-white/60 w-6 h-6" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                        <HelpCircle className="w-10 h-10 text-accent mb-4" />
                        <h3 className="text-2xl font-bold mb-4 text-navy">FAQs</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><a href="#" className="hover:text-accent">How do I request aid?</a></li>
                            <li><a href="#" className="hover:text-accent">How do I verify my account?</a></li>
                            <li><a href="#" className="hover:text-accent">Is the service free to use?</a></li>
                        </ul>
                    </div>
                    <div className="border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                        <MessageSquare className="w-10 h-10 text-accent mb-4" />
                        <h3 className="text-2xl font-bold mb-4 text-navy">Contact Support</h3>
                        <p className="text-muted-foreground mb-6">
                            Can't find what you're looking for? Our support team is here to help.
                        </p>
                        <Button className="bg-navy text-white hover:bg-navy/90">Contact Us</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HelpCenter;
