import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#featured-campaigns", label: "Featured Campaigns" },
    { href: "#impact", label: "Our Impact" },
    { href: "#partners", label: "Partners" },
  ];

  const supportLinks = [
    { href: "#help-center", label: "Help Center" },
    { href: "#safety", label: "Safety & Trust" },
    { href: "#contact", label: "Contact Us" },
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
  ];

  return (
    <footer className="bg-navy text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-lg shadow-accent/20">
                <span className="text-accent-foreground font-bold text-lg">IH</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">INSTANT HELP</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Empowering communities with rapid, technology-driven emergency response.
              Bridging the gap between crisis and relief when it matters most.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Useful Links</h3>
            <ul className="space-y-4">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support & Legal</h3>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-colors"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Stay Updated</h3>
            <p className="text-primary-foreground/70 mb-6">
              Subscribe to get the latest news, updates and emergency alerts directly to your inbox.
            </p>
            <div className="space-y-4">
              <div className="flex gap-2 relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/5 border-primary-foreground/10 text-white placeholder:text-primary-foreground/40 h-12 pr-12 focus-visible:ring-accent focus-visible:border-accent"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1 h-10 w-10 bg-accent hover:bg-accent/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/40">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © {currentYear} INSTANT HELP. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;