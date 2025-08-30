import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="bg-accent/10 rounded-2xl p-8 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
            <p className="text-primary-foreground/80 mb-6">
              Get the latest drops, exclusive offers, and style inspiration delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-background text-foreground border-0 focus-visible:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                KICKZ<span className="text-accent">HAVEN</span>
              </h2>
              <p className="text-primary-foreground/80 mb-4">
                Your destination for premium athletic footwear. Step into excellence with every pair.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">1-800-KICKZ-NOW</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">hello@kickzhaven.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">123 Sneaker Street, NYC</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              {["Men's Shoes", "Women's Shoes", "Kids' Shoes", "New Arrivals", "Sale", "Collections"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {["Size Guide", "Shipping & Returns", "Track Your Order", "Customer Service", "FAQ", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Press", "Sustainability", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" }
              ].map(({ icon: Icon, label }) => (
                <Button
                  key={label}
                  size="icon"
                  variant="ghost"
                  className="hover:bg-accent/20 hover:text-accent transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
            <p className="text-primary-foreground/60 text-sm">
              © 2024 KickzHaven. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;