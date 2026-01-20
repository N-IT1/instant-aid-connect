import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-navy">Terms of Service</h1>
                <div className="prose prose-lg text-muted-foreground">
                    <p>Last updated: January 2026</p>
                    <p>
                        Please read these Terms of Service ("Terms") carefully before using the Instant Aid Connect platform.
                    </p>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part
                        of the terms, then you may not access the service.
                    </p>
                    <h2>2. Use of Service</h2>
                    <p>
                        Our platform is designed for emergency response and humanitarian aid coordination. misuse of the platform
                        for fraudulent, illegal, or harmful activities is strictly prohibited.
                    </p>
                    <h2>3. User Responsibilities</h2>
                    <p>
                        You are responsible for safeguarding the password that you use to access the service and for any activities
                        or actions under your password.
                    </p>
                    <h2>4. Termination</h2>
                    <p>
                        We may terminate or suspend access to our service immediately, without prior notice or liability, for any
                        reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Terms;
