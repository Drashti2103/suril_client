import React from "react";

interface Project {
  title: string;
  logo: string;
  icon: string;
  hoverIcon: string;
  tagline?: string;
  category?: string;
}

const ProjectsSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "Patang",
      logo: "/images/projects/patang.jpg",
      icon: "/icons/projects/patang.png",
      hoverIcon: "/icons/projects/patang.png",
      category: "Rooftop Dining"
    },
    {
      title: "Pathikashram",
      logo: "/placeholder.svg",
      icon: "/icons/projects/pratikasrum.png",
      hoverIcon: "/icons/projects/pratikasrum.png",
      tagline: "पथिकाश्रम ∞"
    },
    {
      title: "Starz Club",
      logo: "/placeholder.svg",
      icon: "/icons/projects/starz club.png",
      hoverIcon: "/icons/projects/starz club.png"
    },
    {
      title: "Bizz",
      logo: "/placeholder.svg",
      icon: "/icons/projects/bizz.png",  
      hoverIcon: "/icons/projects/bizz.png"
    },
    {
      title: "Solace",
      logo: "/placeholder.svg",
      icon: "/icons/projects/solace.png",
      hoverIcon: "/icons/projects/solace.png",
      tagline: "find your own peace"
    },
    {
      title: "Eminence",
      logo: "/placeholder.svg",
      icon: "/icons/projects/eminence.png",
      hoverIcon: "/icons/projects/eminence.png",
      tagline: "BANQUET RESTAURANT CORPORATE"
    },
    {
      title: "Neem Bagan",
      logo: "/placeholder.svg",
      icon: "/icons/projects/neem bagan.png",
      hoverIcon: "/icons/projects/neem bagan.png"
    },
    {
      title: "Pihu Baag",
      logo: "/images/projects/pihubaug.jpg",
      icon: "/icons/projects/pihu baag.png",
      hoverIcon: "/icons/projects/pihu baag.png"
    },
    {
      title: "Mango",
      logo: "/placeholder.svg",
      icon: "/icons/projects/mango.png",
      hoverIcon: "/icons/projects/mango.png",
      tagline: "Contemporary Dining"
    },
    {
      title: "Under The Neem Tree",
      logo: "/placeholder.svg",
      icon: "/icons/projects/under the neem tree.png",
      hoverIcon: "/icons/projects/under the neem tree.png",
      tagline: "Nature's Embrace"
    },
    {
      title: "Kuhoo",
      logo: "/placeholder.svg",
      icon: "/icons/projects/kuhoo.png",
      hoverIcon: "/icons/projects/kuhoo.png"
    },
    {
      title: "Stratum",
      logo: "/placeholder.svg",
      icon: "/icons/projects/stratum.png",
      hoverIcon: "/icons/projects/stratum.png",
      tagline: "Premium Experience"
    }
  ];

  return (
    <>
      <style>
        {`
          .project-icon-grayscale {
            filter: grayscale(100%) brightness(0.8);
            transition: all 0.3s ease;
          }
          
          .project-icon-colored {
            filter: grayscale(0%) brightness(1);
            transition: all 0.3s ease;
          }
          
          /* Mobile: Default colored, Desktop: Default grayscale */
          .project-icon-grayscale {
            filter: grayscale(0%) brightness(1);
          }
          
          @media screen and (min-width: 768px) {
            .project-icon-grayscale {
              filter: grayscale(100%) brightness(0.8);
            }
          }
          
          @media screen and (max-width: 640px) {
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 0.5rem;
              justify-items: center;
            }
          }
          
          @media screen and (min-width: 641px) and (max-width: 768px) {
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 0.75rem;
              justify-items: center;
            }
          }
          
          @media screen and (min-width: 769px) and (max-width: 1024px) {
            .projects-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 1rem;
              justify-items: center;
            }
          }
          
          @media screen and (min-width: 1025px) and (max-width: 1280px) {
            .projects-grid {
              grid-template-columns: repeat(4, 1fr);
              gap: 1.5rem;
              justify-items: center;
            }
          }
          
          @media screen and (min-width: 1281px) {
            .projects-grid {
              grid-template-columns: repeat(6, 1fr);
              gap: 1.5rem;
              justify-items: center;
            }
          }
        `}
      </style>
      <div className="w-full min-h-screen bg-gradient-to-br from-[#f7f4f4] via-white to-[#f7f4f4]">
      {/* Header Section */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12 pt-12 pb-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#B7410E] mb-4" style={{ fontFamily: 'Gotham, sans-serif' }}>
            Projects
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
          <div className="projects-grid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-center">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className="flex flex-col items-center group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Icon Container */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 mb-3 sm:mb-4 group-hover:scale-105 transition-all duration-300">
                  <div className="w-full h-full rounded-lg border-2 border-gray-200 shadow-lg overflow-hidden bg-white hover:shadow-xl hover:border-[#B7410E] transition-all duration-300">
                    <img 
                      src={project.icon} 
                      alt={project.title}
                      className={`w-full h-full object-contain p-1 ${
                        hoveredProject === project.title ? 'project-icon-colored' : 'project-icon-grayscale'
                      } md:project-icon-grayscale md:hover:project-icon-colored`}
                      style={{
                        padding: 0,
                        margin: 0,
                        display: 'block',
                        transform: 'scale(1.50)', // Try scaling 1.25, adjust higher if needed!
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        justifySelf: 'center',
                        alignContent: 'center'
                      }}
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>
                
                {/* Project Title */}
                <h3 
                  className={`text-center text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 transition-colors duration-300 ${
                    hoveredProject === project.title ? 'text-[#B7410E]' : 'text-gray-800'
                  }`}
                  style={{ fontFamily: 'Gotham, sans-serif' }}
                >
                  {project.title}
                </h3>
                
                {/* Category */}
                {project.category && (
                  <p 
                    className="text-center text-xs sm:text-xs md:text-sm text-gray-500 leading-tight max-w-[100px] sm:max-w-[120px] md:max-w-[140px]"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {project.category}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-12">
            <a
              href="#"
              className="px-8 py-3 border-2 border-[#a4442e] text-[#a4442e] font-[Gotham,sans-serif] text-lg font-bold rounded-none transition-all duration-300 hover:bg-[#a4442e] hover:text-white shadow-md hover:shadow-lg"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProjectsSection;