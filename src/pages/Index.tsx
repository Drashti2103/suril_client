import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import BooksSection from "@/components/BooksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import RecognitionGrid from "@/components/RecognitionGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <BooksSection />
      <TestimonialsSection />
      <RecognitionGrid />
      <Footer />
    </div>
  );
};

export default Index;
