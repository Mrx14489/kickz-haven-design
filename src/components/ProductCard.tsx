import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  isWishlisted?: boolean;
}

const ProductCard = ({ 
  image, 
  name, 
  price, 
  originalPrice, 
  category, 
  isWishlisted = false 
}: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-card">
      <CardContent className="p-4">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-lg bg-secondary/30 mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Wishlist Button */}
          <Button
            size="icon"
            variant="ghost"
            className={`absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-all duration-200 ${
              isWishlisted ? 'text-accent' : 'text-muted-foreground hover:text-accent'
            }`}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </Button>

          {/* Quick Add Button - Shows on Hover */}
          <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-medium shadow-accent">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>

          {/* Sale Badge */}
          {originalPrice && (
            <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded-full">
              SALE
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide">
            {category}
          </p>
          <h3 className="font-semibold text-card-foreground group-hover:text-accent transition-colors duration-200">
            {name}
          </h3>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-primary">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;