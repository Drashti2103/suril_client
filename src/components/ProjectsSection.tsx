import React from "react";

interface Project {
  title: string;
  logo: string;
  tagline?: string;
  category?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Patang",
      logo: "/images/projects/patang.jpg",
      category: "Rooftop Dining"
    },
    {
      title: "Pathikashram",
      logo: "/placeholder.svg",
      tagline: "पथिकाश्रम ∞"
    },
    {
      title: "Starz Club",
      logo: "/placeholder.svg"
    },
    {
      title: "Bizz",
      logo: "/placeholder.svg"
    },
    {
      title: "Solace",
      logo: "/placeholder.svg",
      tagline: "find your own peace"
    },
    {
      title: "Eminence",
      logo: "/placeholder.svg",
      tagline: "BANQUET RESTAURANT CORPORATE"
    },
    {
      title: "Neem Bagan",
      logo: "/placeholder.svg"
    },
    {
      title: "Pihu Baag",
      logo: "/images/projects/pihubaug.jpg"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#f7f4f4] via-white to-[#f7f4f4]">
      {/* Header Section */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12 pt-12 pb-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#B7410E] mb-4" style={{ fontFamily: 'Gotham, sans-serif' }}>
            Featured Projects
          </h2>
          <p 
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Discover some of our finest restaurant transformations and culinary masterpieces
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative px-4 md:px-8 lg:px-12 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Grid Container */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <div key={project.title} className="flex flex-col items-center group">
                {/* Circular Logo Container */}
                <div className="relative w-32 h-32 md:w-36 md:h-36 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full border-2 border-white shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={project.logo} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>
                
                {/* Project Title */}
                <h3 
                  className="text-center text-base md:text-lg font-bold text-gray-800 mb-1"
                  style={{ fontFamily: 'Gotham, sans-serif' }}
                >
                  {project.title}
                </h3>
                
                {/* Tagline/Category */}
                {project.tagline && (
                  <p 
                    className="text-center text-xs md:text-sm text-gray-600 leading-tight"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {project.tagline}
                  </p>
                )}
                {project.category && (
                  <p 
                    className="text-center text-xs md:text-sm text-gray-500 leading-tight"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {project.category}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Restaurant Guru Badge */}
          <div className="flex justify-center mt-16">
            <div className="relative bg-red-600 text-white rounded-full px-8 py-6 shadow-xl border-4 border-white">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">⭐</div>
                <div className="text-center">
                  <div className="font-bold text-xl" style={{ fontFamily: 'Gotham, sans-serif' }}>
                    Restaurant Guru 2024 RECOMMENDED
                  </div>
                  <div className="text-sm opacity-90 mt-1" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Suril Udeshi Restaurant Consultants
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <a
              href="#"
              className="px-8 py-3 border-2 border-[#a4442e] text-[#a4442e] font-[Gotham,sans-serif] text-lg font-bold rounded-full transition-all duration-300 hover:bg-[#a4442e] hover:text-white shadow-md hover:shadow-lg"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;