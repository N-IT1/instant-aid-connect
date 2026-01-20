import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="container mx-auto px-4 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-navy">Privacy Policy</h1>
                <div className="prose prose-lg text-muted-foreground">
                    <p>Last updated: January 2026</p>
                    <p>
                        Instant Aid Connect ("we," "our," or "us") is committed to protecting your privacy.
                        This Privacy Policy explains how your personal information is collected, used, and disclosed by Instant Aid Connect.
                    </p>
                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us, such as when you create an account, request aid,
                        volunteer, or communicate with us. This may include your name, email address, phone number, and location data.
                    </p>
                    <h2>2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to operate, maintain, and improve our services, including
                        connecting those in need with helpers and coordinating emergency responses.
                    </p>
                    <h2>3. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data against
                        unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <h2>4. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at privacy@instantaid.org.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;
