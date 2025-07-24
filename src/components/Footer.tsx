import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Recognition", href: "/recognition" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <footer className="bg-ivory border-t border-stone">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand & Philosophy */}
          <div className="lg:col-span-1">
            <h3 className="gotham-heading text-2xl font-semibold text-rust mb-4">
              Suril Udeshi
            </h3>
            <p className="serif-heading italic text-lg text-muted-foreground mb-6 leading-relaxed">
              Slow living. High taste. Timeless expertise.
            </p>
            <p className="text-charcoal leading-relaxed">
              India's foremost vegetarian culinary expert, dedicated to elevating plant-based cuisine through traditional wisdom and modern innovation.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <h4 className="gotham-heading font-semibold text-soft-black mb-6">
              Explore
            </h4>
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-rust transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter & CTA */}
          <div className="lg:col-span-1">
            <h4 className="gotham-heading font-semibold text-soft-black mb-6">
              Stay Connected
            </h4>
            <p className="text-muted-foreground mb-6">
              Subscribe to receive culinary insights and updates from Suril's kitchen.
            </p>
            
            <div className="space-y-4">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-r-none border-stone focus:border-rust"
                />
                <Button
                  className="bg-rust hover:bg-rust-dark text-white rounded-l-none px-6"
                >
                  Subscribe
                </Button>
              </div>
              
              <Button
                variant="outline"
                className="w-full border-rust text-rust hover:bg-rust hover:text-white font-gotham"
              >
                Apply for Job
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Bar */}
      <div className="border-t border-stone py-8">
        <div className="max-w-7xl mx-auto px-8">
          <h5 className="gotham-heading font-medium text-center text-muted-foreground mb-6">
            @suril_udeshi
          </h5>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-stone rounded opacity-60 hover:opacity-100 transition-opacity editorial-hover"
              >
                <div className="w-full h-full bg-gradient-to-br from-cream to-stone rounded flex items-center justify-center text-muted-foreground">
                  📸
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-stone py-6">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Suril Udeshi. All rights reserved. Crafted with passion for vegetarian culinary excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;