import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, CheckCircle, Users } from "lucide-react";

const Safety = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-navy">Safety & Trust</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Your safety is our top priority. Learn how Instant Aid Connect ensures a secure and trusted environment for everyone.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="bg-secondary/30 p-6 rounded-2xl">
                        <Shield className="w-10 h-10 text-accent mb-4" />
                        <h3 className="text-xl font-bold mb-2">Verified Responders</h3>
                        <p className="text-muted-foreground">
                            All volunteers and responders undergo a verification process to ensure legitimacy and trust.
                        </p>
                    </div>
                    <div className="bg-secondary/30 p-6 rounded-2xl">
                        <CheckCircle className="w-10 h-10 text-accent mb-4" />
                        <h3 className="text-xl font-bold mb-2">Real-time Monitoring</h3>
                        <p className="text-muted-foreground">
                            Our AI systems verify emergency alerts in real-time to prevent spam and misinformation.
                        </p>
                    </div>
                    <div className="bg-secondary/30 p-6 rounded-2xl">
                        <Users className="w-10 h-10 text-accent mb-4" />
                        <h3 className="text-xl font-bold mb-2">Community Guidelines</h3>
                        <p className="text-muted-foreground">
                            Strict community standards enforce respectful and helpful interactions on the platform.
                        </p>
                    </div>
                </div>

                <div className="prose prose-lg text-muted-foreground">
                    <h2>Reporting Issues</h2>
                    <p>
                        If you encounter any suspicious activity or safety concerns, please report them immediately
                        through our Help Center or contact our safety team directly.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Safety;
