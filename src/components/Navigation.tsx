import { Search, ShoppingCart, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold tracking-tight">
              KICKZ<span className="text-accent">HAVEN</span>
            </h1>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#men" className="text-sm font-medium hover:text-accent transition-colors">
              Men
            </a>
            <a href="#women" className="text-sm font-medium hover:text-accent transition-colors">
              Women
            </a>
            <a href="#kids" className="text-sm font-medium hover:text-accent transition-colors">
              Kids
            </a>
            <a href="#collections" className="text-sm font-medium hover:text-accent transition-colors">
              Collections
            </a>
            <a href="#sale" className="text-sm font-medium hover:text-accent transition-colors">
              Sale
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex relative flex-1 max-w-md mx-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for shoes..."
              className="pl-10 bg-secondary/50 border-0 focus-visible:ring-1 focus-visible:ring-accent"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;