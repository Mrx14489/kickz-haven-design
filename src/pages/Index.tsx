import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <CategorySection />
      </main>
      <Footer />
    </>
  );
};

export default Index;