import React from "react";
import { Send, ArrowRight, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  hoverIcon: string;
  description: string;
}

const Services = () => {
  const [hoveredService, setHoveredService] = React.useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    window.location.href = `/services/${serviceId}`;
  };

  const services: ServiceItem[] = [
    {
      id: "menu-planning",
      name: "Menu Planning",
      icon: "/icons/services/menu-planning-01.png",
      hoverIcon: "/icons/services/menu-planning-02.png",
      description: "Strategic menu development and cost optimization. Creating balanced, profitable menus that delight customers."
    },
    {
      id: "kitchen-planning", 
      name: "Kitchen Planning",
      icon: "/icons/services/kitchen-planning-01.png",
      hoverIcon: "/icons/services/kitchen-planning-02.png",
      description: "Efficient kitchen layout and workflow design. Optimizing space utilization for maximum productivity and safety."
    },
    {
      id: "boh-planning",
      name: "BOH Planning", 
      icon: "/icons/services/BOH-planning-01.png",
      hoverIcon: "/icons/services/boh-planning-02.png",
      description: "Back of house operations optimization. Streamlining processes for smooth service delivery and cost control."
    },
    {
      id: "prelaunch-preview",
      name: "Prelaunch Preview",
      icon: "/icons/services/pre-launch-preview-01.png",
      hoverIcon: "/icons/services/pre-launch-02.png",
      description: "Comprehensive prelaunch testing and refinement. Ensuring everything is perfect before the grand opening."
    },
    {
      id: "post-launch-supervision",
      name: "Post-Launch Supervision",
      icon: "/icons/services/launch-supervison.png",
      hoverIcon: "/icons/services/launch-supervision-02.png",
      description: "Ongoing support and performance monitoring. Continuous improvement for sustained success and growth."
    },
    {
      id: "launch-process",
      name: "Launch Process",
      icon: "/icons/services/launch-process-01.png",
      hoverIcon: "/icons/services/launch-process-02.png",
      description: "Seamless restaurant opening coordination. Managing every detail for a successful and memorable launch."
    },
    {
      id: "food-trials", 
      name: "Food Trials",
      icon: "/icons/services/food-trails-01.png",
      hoverIcon: "/icons/services/food-trails-02.png",
      description: "Recipe development and taste testing. Perfecting flavors and presentation to create signature dishes."
    },
    {
      id: "food-styling",
      name: "Food Styling & Presentation", 
      icon: "/icons/services/food-presentation-01.png",
      hoverIcon: "/icons/services/food-presentaion-02.png",
      description: "Visual appeal and plating excellence. Making every dish Instagram-worthy and memorable for guests."
    },
    {
      id: "retainership",
      name: "Retainership",
      icon: "/icons/services/retainership-01.png",
      hoverIcon: "/icons/services/retainership-2.png",
      description: "Long-term partnership and advisory services. Ongoing consultation for continuous improvement and success."
    },
    {
      id: "hiring-training",
      name: "Hiring & Training",
      icon: "/icons/services/hiring-and-traning-01.png",
      hoverIcon: "/icons/services/hiring-training-02.png",
      description: "Staff recruitment and skill development. Building exceptional teams that deliver outstanding service."
    }
  ];

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }
          
          .services-page {
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
          
          .services-section {
            padding: 6rem 1rem;
            background: #ffffff;
            position: relative;
          }
          
          .services-container {
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
          
          .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
            padding: 0 1rem;
          }
          
          .service-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 2.5rem 2rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid #f3f4f6;
            position: relative;
            overflow: hidden;
            text-align: center;
          }
          
          .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #B7410E, #d97706);
            transform: scaleX(0);
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            border-color: #B7410E;
          }
          
          .service-card:hover::before {
            transform: scaleX(1);
          }
          
          .icon-wrapper {
            background: #B7410E;
            width: 4rem;
            height: 4rem;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem auto;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
          }
          
          .icon-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #ffffff;
            opacity: 0;
            transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .icon-wrapper img {
            width: 2rem;
            height: 2rem;
            object-fit: contain;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            z-index: 2;
          }
          
          .service-card:hover .icon-wrapper {
            transform: scale(1.1) rotate(5deg);
          }
          
          .service-card:hover .icon-wrapper::before {
            opacity: 1;
          }
          
          .service-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 1rem;
            font-family: 'Gotham', sans-serif;
            transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .service-card:hover .service-title {
            color: #B7410E;
          }
          
          .service-description {
            color: #6b7280;
            font-size: 0.95rem;
            line-height: 1.6;
            font-family: 'Lato', sans-serif;
            transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .service-card:hover .service-description {
            color: #374151;
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
          
          .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .cta-button:hover {
            background: #B7410E;
            color: #ffffff;
            transform: translateY(-2px);
          }
          
          .cta-button:hover::before {
            left: 100%;
          }
          
          .cta-button .send-icon {
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .cta-button:hover .send-icon {
            transform: translateX(4px);
          }
          
          @media screen and (min-width: 768px) {
            .services-grid {
              grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
              gap: 2.5rem;
            }
            
            .service-card {
              padding: 3rem 2.5rem;
            }
          }
          
          @media screen and (min-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            }
          }
          
          /* Touch device optimizations */
          @media (hover: none) and (pointer: coarse) {
            .service-card:hover {
              transform: none;
            }
            
            .service-card:active {
              transform: translateY(-4px);
            }
          }
        `}
      </style>
      
      <div className="services-page">
        <Header />
        
        {/* Hero Section */}
        <section className="hero-section">
          <div className="max-w-6xl mx-auto hero-content">
            <h1 className="hero-title">
              Our Services
            </h1>
            <p className="hero-subtitle">
              Comprehensive restaurant solutions from concept to success. We provide end-to-end culinary consulting that transforms your vision into exceptional dining experiences.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="services-section">
          <div className="services-container">
            <div className="section-header">
              <h2 className="section-title">What We Offer</h2>
              <p className="section-subtitle">
                From initial concept to ongoing success, our comprehensive services cover every aspect of restaurant development and management.
              </p>
            </div>
            
            <div className="services-grid">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="service-card"
                  onClick={() => handleServiceClick(service.id)}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="icon-wrapper">
                    <img 
                      src={hoveredService === service.id ? service.hoverIcon : service.icon} 
                      alt={service.name} 
                    />
                  </div>
                  <h3 className="service-title">{service.name}</h3>
                  <p className="service-description">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Transform Your Culinary Vision?
            </h2>
            <p className="cta-description">
              Let's discuss how we can elevate your restaurant and create memorable dining experiences that drive success.
            </p>
            <button className="cta-button">
              <Send className="send-icon" size={20} />
              GET IN TOUCH
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;