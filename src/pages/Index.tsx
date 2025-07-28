import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import BooksSection from "@/components/BooksSection";
import Footer from "@/components/Footer";
import RestaurantServices from "@/components/RestaurantServices";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <RestaurantServices />
      <ProjectsSection />
      {/* <BooksSection /> */}
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
