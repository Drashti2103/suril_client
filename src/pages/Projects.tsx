import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  title: string;
  logo: string;
  icon: string;
  hoverIcon: string;
  tagline?: string;
  category?: string;
  location?: string;
  description?: string;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = React.useState<string | null>(null);

  const currentProjects: Project[] = [
    {
      title: "Under the Neem Tree",
      logo: "/images/projects/undertheneemtree.jpg",
      icon: "/icons/projects/under the neem tree.png",
      hoverIcon: "/icons/projects/under the neem tree.png",
      category: "Fine Dining",
      location: "Ahmedabad",
      description: "A contemporary interpretation of traditional Gujarati cuisine in an elegant setting."
    },
    {
      title: "Patang",
      logo: "/images/projects/patang.jpg",
      icon: "/icons/projects/patang.png",
      hoverIcon: "/icons/projects/patang.png",
      category: "Rooftop Dining",
      location: "Mumbai",
      description: "Transforming beloved street food into refined culinary experiences."
    },
    {
      title: "Rungg",
      logo: "/placeholder.svg",
      icon: "/icons/projects/rungg.png",
      hoverIcon: "/icons/projects/rungg.png",
      category: "Restaurant Consulting",
      location: "Delhi",
      description: "Complete menu overhaul and kitchen optimization for authentic regional cuisine."
    },
    {
      title: "Pihu Baag",
      logo: "/images/projects/pihubaug.jpg",
      icon: "/icons/projects/pihu baag.png",
      hoverIcon: "/icons/projects/pihu baag.png",
      category: "Concept Development",
      location: "Pune",
      description: "Farm-to-table concept celebrating organic vegetarian ingredients."
    },
    {
      title: "Mango",
      logo: "/placeholder.svg",
      icon: "/icons/projects/mango.png",
      hoverIcon: "/icons/projects/mango.png",
      category: "Menu Engineering",
      location: "Goa",
      description: "Innovative tropical vegetarian menu with coastal influences."
    },
    {
      title: "Neem Bagan",
      logo: "/placeholder.svg",
      icon: "/icons/projects/neem bagan.png",
      hoverIcon: "/icons/projects/neem bagan.png",
      category: "Cultural Consulting",
      location: "Kolkata",
      description: "Authentic Bengali vegetarian cuisine with contemporary presentation."
    }
  ];

  const upcomingProjects: Project[] = [
    {
      title: "Kuhoo",
      logo: "/placeholder.svg",
      icon: "/icons/projects/kuhoo.png",
      hoverIcon: "/icons/projects/kuhoo.png",
      category: "Restaurant Design",
      location: "Mumbai",
      description: "Modern vegetarian dining with innovative culinary concepts."
    },
    {
      title: "Stratum",
      logo: "/placeholder.svg",
      icon: "/icons/projects/stratum.png",
      hoverIcon: "/icons/projects/stratum.png",
      category: "Premium Experience",
      location: "Delhi",
      description: "Luxury dining experience with sophisticated vegetarian cuisine."
    },
    {
      title: "Eminence",
      logo: "/placeholder.svg",
      icon: "/icons/projects/eminence.png",
      hoverIcon: "/icons/projects/eminence.png",
      category: "Fine Dining",
      location: "Bangalore",
      description: "Elevated vegetarian dining with international influences."
    }
  ];

  const pastProjects: Project[] = [
    {
      title: "Bizz",
      logo: "/placeholder.svg",
      icon: "/icons/projects/bizz.png",
      hoverIcon: "/icons/projects/bizz.png",
      category: "Quick Service",
      location: "Chennai",
      description: "Fast-casual vegetarian concept with modern efficiency."
    },
    {
      title: "Solace",
      logo: "/placeholder.svg",
      icon: "/icons/projects/solace.png",
      hoverIcon: "/icons/projects/solace.png",
      category: "Wellness Dining",
      location: "Hyderabad",
      description: "Health-focused vegetarian restaurant with organic ingredients."
    },
    {
      title: "Starz Club",
      logo: "/placeholder.svg",
      icon: "/icons/projects/starz club.png",
      hoverIcon: "/icons/projects/starz club.png",
      category: "Entertainment Dining",
      location: "Pune",
      description: "Dining and entertainment venue with vegetarian cuisine."
    }
  ];

  const ProjectGrid = ({ projects, title, subtitle }: { projects: Project[], title: string, subtitle: string }) => (
    <section className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        
        {/* Grid Container */}
        <div className="projects-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="flex flex-col items-center justify-center group cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Icon Container */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48 mb-3 sm:mb-4 group-hover:scale-105 transition-all duration-300">
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
                      transform: 'scale(1.50)',
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
      </div>
    </section>
  );

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }
          
          .projects-page {
            min-height: 100vh;
            background: #fafafa;
          }
          
          .hero-section {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 25%, #f1f3f4 50%, #f8f9fa 75%, #ffffff 100%);
            padding: 8rem 1.5rem 6rem 1.5rem;
            text-align: center;
            position: relative;
            overflow: hidden;
            border-bottom: 1px solid #e5e7eb;
          }
          
          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 25% 25%, rgba(183, 65, 14, 0.03) 0%, transparent 40%),
              radial-gradient(circle at 75% 75%, rgba(183, 65, 14, 0.04) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(183, 65, 14, 0.02) 0%, transparent 60%);
            z-index: 1;
          }
          
          .hero-section::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(183, 65, 14, 0.1), transparent);
            z-index: 2;
          }
          
          .hero-content {
            position: relative;
            z-index: 2;
          }
          
          .hero-title {
            font-size: clamp(2rem, 6vw, 3.5rem);
            font-weight: 600;
            color: #B7410E;
            margin-bottom: 1.5rem;
            font-family: 'Gotham', sans-serif;
            letter-spacing: -0.02em;
            line-height: 1.2;
            position: relative;
          }
          
          .hero-title::after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 4rem;
            height: 3px;
            background: linear-gradient(90deg, #B7410E, #d97706);
            border-radius: 2px;
          }
          
          .hero-subtitle {
            font-size: clamp(1.1rem, 3vw, 1.4rem);
            color: #6b7280;
            max-width: 42rem;
            margin: 0 auto;
            line-height: 1.7;
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            margin-top: 2rem;
          }
          
          .projects-section {
            padding: 6rem 1rem;
            background: #ffffff;
            position: relative;
          }
          
          .projects-section:nth-child(even) {
            background: #f8f9fa;
          }
          
          .projects-container {
            max-width: 1400px;
            margin: 0 auto;
          }
          
          .section-header {
            text-align: center;
            margin-bottom: 4rem;
          }
          
          .section-title {
            font-size: clamp(2rem, 5vw, 3rem);
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 1rem;
            font-family: 'Gotham', sans-serif;
            letter-spacing: -0.01em;
          }
          
          .section-subtitle {
            font-size: 1.125rem;
            color: #6b7280;
            max-width: 36rem;
            margin: 0 auto;
            line-height: 1.6;
            font-family: 'Lato', sans-serif;
          }
          
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
              gap: 1rem;
              justify-items: center;
            }
          }
          
          @media screen and (min-width: 641px) and (max-width: 768px) {
            .projects-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 1.5rem;
              justify-items: center;
            }
          }
          
          @media screen and (min-width: 769px) and (max-width: 1024px) {
            .projects-grid {
              grid-template-columns: repeat(4, 1fr);
              gap: 2rem;
              justify-items: center;
            }
          }
          
          @media screen and (min-width: 1025px) and (max-width: 1280px) {
            .projects-grid {
              grid-template-columns: repeat(5, 1fr);
              gap: 2.5rem;
              justify-items: center;
            }
          }
          
          @media screen and (min-width: 1281px) and (max-width: 1535px) {
            .projects-grid {
              grid-template-columns: repeat(6, 1fr);
              gap: 2.5rem;
              justify-items: center;
            }
          }
          
          @media screen and (min-width: 1536px) {
            .projects-grid {
              grid-template-columns: repeat(6, 1fr);
              gap: 2.5rem;
              justify-items: center;
            }
          }
          
          .cta-section {
            background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 25%, #f1f3f4 50%, #f8f9fa 75%, #ffffff 100%);
            padding: 6rem 1.5rem;
            text-align: center;
            position: relative;
            overflow: hidden;
            border-top: 1px solid #e5e7eb;
          }
          
          .cta-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 25% 25%, rgba(183, 65, 14, 0.03) 0%, transparent 40%),
              radial-gradient(circle at 75% 75%, rgba(183, 65, 14, 0.04) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(183, 65, 14, 0.02) 0%, transparent 60%);
            z-index: 1;
          }
          
          .cta-content {
            position: relative;
            z-index: 2;
            max-width: 48rem;
            margin: 0 auto;
          }
          
          .cta-title {
            font-size: clamp(1.8rem, 4vw, 2.8rem);
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 1.5rem;
            font-family: 'Gotham', sans-serif;
            letter-spacing: -0.01em;
            line-height: 1.3;
          }
          
          .cta-description {
            color: #6b7280;
            font-size: 1.25rem;
            margin-bottom: 3rem;
            line-height: 1.6;
            font-family: 'Lato', sans-serif;
            font-weight: 400;
          }
          
          .cta-button {
            background: transparent;
            color: #B7410E;
            border: 2px solid #B7410E;
            padding: 1rem 2.5rem;
            font-family: 'Gotham', sans-serif;
            font-weight: 600;
            font-size: 1rem;
            letter-spacing: 0.05em;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            border-radius: 0;
            position: relative;
            overflow: hidden;
          }
          
          .cta-button:hover {
            background: #B7410E;
            color: #ffffff;
            transform: translateY(-2px);
          }
        `}
      </style>
      
      <div className="projects-page">
        <Header />
        
        {/* Hero Section */}
        <section className="hero-section">
          <div className="max-w-6xl mx-auto hero-content">
            <h1 className="hero-title">
              Our Projects
            </h1>
            <p className="hero-subtitle">
              Discover some of our finest restaurant transformations and culinary masterpieces that showcase our expertise in creating exceptional dining experiences.
            </p>
          </div>
        </section>

        {/* Current Projects */}
        <ProjectGrid 
          projects={currentProjects}
          title="Current Projects"
          subtitle="Ongoing collaborations that are setting new standards in vegetarian dining excellence."
        />

        {/* Upcoming Projects */}
        <ProjectGrid 
          projects={upcomingProjects}
          title="Upcoming Projects"
          subtitle="Exciting new ventures and innovative concepts that are in development."
        />

        {/* Past Projects */}
        <ProjectGrid 
          projects={pastProjects}
          title="Past Projects"
          subtitle="Successful collaborations that have left lasting impressions in the culinary world."
        />

        {/* Contact CTA */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Start Your Project?
            </h2>
            <p className="cta-description">
              Let's discuss how we can transform your culinary vision into an exceptional dining experience that stands out.
            </p>
            <button className="cta-button">
              GET IN TOUCH
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Projects;