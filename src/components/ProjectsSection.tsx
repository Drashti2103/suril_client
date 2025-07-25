import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProjectsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const projects: Project[] = [
    {
      title: "Mango",
      description: "Exquisite fine dining experience with contemporary vegetarian cuisine that celebrates seasonal ingredients and innovative presentation techniques.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Fine Dining"
    },
    {
      title: "Kuhoo", 
      description: "Modern Indian cuisine crafted with traditional techniques, bringing authentic flavors to contemporary dining experiences.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Indian Cuisine"
    },
    {
      title: "Under The Neem Tree",
      description: "Authentic heritage dining in a serene natural setting, where traditional recipes meet modern hospitality standards.",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Heritage Dining"
    },
    {
      title: "Patang",
      description: "Innovative culinary concepts with stunning rooftop ambiance, offering panoramic views and creative gastronomy.",
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      category: "Rooftop Dining"
    },
    {
      title: "Pihu Baug", 
      description: "Elegant dining destination with curated vegetarian specialties, focusing on farm-to-table freshness and artisanal preparation.",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      category: "Vegetarian"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10s
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#f7f4f4] via-white to-[#f7f4f4]">
      {/* Header Section */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12 pt-12 pb-8">
        <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#B7410E] mb-4" style={{ fontFamily: 'Gotham, sans-serif' }}>
              Featured Projects
            </h2>
          {/* <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#a4442e] to-transparent mx-auto mb-6"></div> */}
          <p 
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Discover some of our finest restaurant transformations and culinary masterpieces
          </p>
        </div>
      </div>

      {/* Main Slider Container */}
      <div className="relative px-4 md:px-8 lg:px-12 pb-16">
        <div className="relative w-full mx-auto max-w-7xl">
          {/* Main Image Container */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-white" style={{ height: '75vh' }}>
            {/* Images */}
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < currentIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="max-w-4xl">
                    <div className="inline-block px-3 py-1 bg-[#a4442e]/90 text-white text-sm font-medium rounded-full mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {project.category}
                    </div>
                    <h3 
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide"
                      style={{ fontFamily: 'Gotham, sans-serif' }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      {project.description}
                    </p>
                    <div className="w-20 h-1 bg-[#a4442e] mt-6 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white/90 hover:bg-[#a4442e] border-2 border-white/30 hover:border-[#a4442e] rounded-full flex items-center justify-center text-[#a4442e] hover:text-white transition-all duration-300 group backdrop-blur-sm shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-white/90 hover:bg-[#a4442e] border-2 border-white/30 hover:border-[#a4442e] rounded-full flex items-center justify-center text-[#a4442e] hover:text-white transition-all duration-300 group backdrop-blur-sm shadow-lg"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
            </button>
            {/* Dot Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#a4442e] scale-125 shadow-lg' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
              <div 
                className="h-full bg-[#a4442e] transition-all duration-300 rounded-r-full"
                style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
              />
            </div>
          </div>
          {/* Thumbnail Strip */}
          <div className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-4 pt-8">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-[#a4442e] shadow-lg scale-105' 
                    : 'ring-2 ring-gray-200 hover:ring-gray-300 opacity-70 hover:opacity-90'
                }`}
                style={{ width: '120px', height: '80px' }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-1 left-1 right-1">
                  <p className="text-white text-xs font-medium truncate" style={{ fontFamily: 'Gotham, sans-serif' }}>
                    {project.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
          {/* View All Button */}
          <div className="flex justify-center mt-8">
            <a
              href="#"
              className="px-8 py-3 border-2 border-[#a4442e] text-[#a4442e] font-[Gotham,sans-serif] text-lg font-bold rounded-full transition-all duration-300 hover:bg-[#a4442e] hover:text-white shadow-md"
            >
              View All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSlider;