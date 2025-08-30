import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import mensShoe from "@/assets/mens-sneaker.jpg";
import womensShoe from "@/assets/womens-sneaker.jpg";
import kidsShoe from "@/assets/kids-sneaker.jpg";

const CategorySection = () => {
  const categories = [
    {
      id: "men",
      title: "Men's Collection",
      description: "Powerful performance meets bold style",
      products: [
        {
          image: mensShoe,
          name: "Air Max Pro Elite",
          price: 179,
          originalPrice: 229,
          category: "Men's Basketball"
        },
        {
          image: mensShoe,
          name: "Urban Runner X1",
          price: 149,
          category: "Men's Running"
        },
        {
          image: mensShoe,
          name: "Street Legend",
          price: 199,
          category: "Men's Lifestyle"
        },
        {
          image: mensShoe,
          name: "Court Master Pro",
          price: 169,
          category: "Men's Tennis"
        }
      ]
    },
    {
      id: "women",
      title: "Women's Collection", 
      description: "Elegance and performance in perfect harmony",
      products: [
        {
          image: womensShoe,
          name: "Cloud Runner Elite",
          price: 159,
          category: "Women's Running"
        },
        {
          image: womensShoe,
          name: "Flex Training Pro",
          price: 139,
          originalPrice: 179,
          category: "Women's Training"
        },
        {
          image: womensShoe,
          name: "Style Fusion",
          price: 129,
          category: "Women's Lifestyle"
        },
        {
          image: womensShoe,
          name: "Swift Motion",
          price: 149,
          category: "Women's Running"
        }
      ]
    },
    {
      id: "kids",
      title: "Kids' Collection",
      description: "Adventure-ready shoes for young champions",
      products: [
        {
          image: kidsShoe,
          name: "Junior Sprint",
          price: 79,
          category: "Kids' Running"
        },
        {
          image: kidsShoe,
          name: "Playground Hero",
          price: 69,
          originalPrice: 89,
          category: "Kids' Casual"
        },
        {
          image: kidsShoe,
          name: "Future Star",
          price: 89,
          category: "Kids' Basketball"
        },
        {
          image: kidsShoe,
          name: "Adventure Walker",
          price: 59,
          category: "Kids' Outdoor"
        }
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {categories.map((category, index) => (
          <div key={category.id} className={`mb-20 ${index !== categories.length - 1 ? 'border-b border-border pb-20' : ''}`}>
            {/* Category Header */}
            <div className="text-center mb-12">
              <h2 className="text-title font-bold mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {category.products.map((product, productIndex) => (
                <div key={productIndex} className="animate-slide-up" style={{ animationDelay: `${productIndex * 100}ms` }}>
                  <ProductCard
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    category={product.category}
                    isWishlisted={productIndex === 1}
                  />
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8">
                View All {category.title.split("'")[0]} Shoes
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;