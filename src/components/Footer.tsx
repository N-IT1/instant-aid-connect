const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#partner", label: "Partner" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">IH</span>
              </div>
              <span className="font-bold text-xl">INSTANT HELP</span>
            </div>

            {/* Links */}
            <nav className="flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-primary-foreground/70 text-center md:text-left">
                Saving lives through technology, community, and instant response.
              </p>
              <p className="text-sm text-primary-foreground/70">
                © {currentYear} INSTANT HELP. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;