import React from "react";

interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  hoverIcon: string;
  description: string;
}

const RestaurantServices: React.FC = () => {
  const [hoveredService, setHoveredService] = React.useState<string | null>(null);

  const handleServiceClick = (serviceId: string) => {
    // Navigate to service detail page
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
          
          .services-section {
            padding: 2rem 1rem;
            background: white;
          }
          
          .services-container {
            max-width: 1400px;
            margin: 0 auto;
          }
          
          .services-header {
            text-align: center;
            margin-bottom: 3rem;
          }
          
          .services-title {
            font-size: 2rem;
            font-weight: 700;
            color: #B7410E;
            margin-bottom: 1rem;
            font-family: 'Gotham', sans-serif;
          }
          
          .services-subtitle {
            font-size: 1.125rem;
            color: #6B7280;
            max-width: 32rem;
            margin: 0 auto;
            font-family: 'Lato', sans-serif;
          }
          
          .services-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            justify-content: center;
          }
          
          .service-column {
            width: 100%;
            padding: 0 0.75rem 1.5rem 0.75rem;
            text-align: center;
          }
          
          .service-card {
            width: 100%;
            height: 100%;
            padding: 1.5rem 1rem;
            background: linear-gradient(#ffffff 50%, #B7410E 50%);
            background-size: 100% 200%;
            background-position: 0 2.5%;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(183, 65, 14, 0.1);
            cursor: pointer;
            transition: all 0.5s ease;
            border: 2px solid transparent;
            min-height: 280px;
          }
          
          .service-card:hover {
            background-position: 0 100%;
            transform: translateY(-4px);
            box-shadow: 0 8px 30px rgba(183, 65, 14, 0.2);
          }
          
          .icon-wrapper {
            background-color: #B7410E;
            position: relative;
            margin: 0 auto 1.5rem auto;
            font-size: 2rem;
            height: 4rem;
            width: 4rem;
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.5s ease;
          }
          
          .icon-wrapper img {
            width: 2rem;
            height: 2rem;
            object-fit: contain;
            transition: all 0.3s ease;
          }
          
          .service-card:hover .icon-wrapper {
            background-color: #ffffff;
            color: #B7410E;
            transform: scale(1.05);
          }
          
          .service-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1f194c;
            margin: 1rem 0;
            font-family: 'Gotham', sans-serif;
            transition: color 0.5s ease;
          }
          
          .service-card:hover .service-title {
            color: #ffffff;
          }
          
          .service-description {
            color: #6B7280;
            font-size: 0.875rem;
            line-height: 1.6;
            letter-spacing: 0.025em;
            font-family: 'Lato', sans-serif;
            transition: color 0.5s ease;
          }
          
          .service-card:hover .service-description {
            color: #f0f0f0;
          }
          
          /* Small mobile improvements */
          @media screen and (min-width: 480px) {
            .services-section {
              padding: 2.5rem 1.5rem;
            }
            
            .services-title {
              font-size: 2.25rem;
            }
            
            .service-card {
              padding: 1.75rem 1.25rem;
            }
          }
          
          @media screen and (min-width: 768px) {
            .services-section {
              padding: 3rem 2rem;
            }
            
            .services-title {
              font-size: 2.75rem;
            }
            
            .service-card {
              padding: 2rem 1.5rem;
            }
            
            .service-column {
              flex: 0 0 50%;
              max-width: 50%;
            }
          }
          
          @media screen and (min-width: 992px) {
            .services-section {
              padding: 4rem 2.5rem;
            }
            
            .services-title {
              font-size: 3rem;
            }
            
            .service-card {
              padding: 2rem 1.5rem;
            }
            
            .service-column {
              flex: 0 0 33.33%;
              max-width: 33.33%;
            }
          }
          
          @media screen and (min-width: 1200px) {
            .services-section {
              padding: 5rem 3rem;
            }
            
            .services-title {
              font-size: 3.5rem;
            }
            
            .service-column {
              flex: 0 0 25%;
              max-width: 25%;
            }
          }
          
          /* Touch device optimizations */
          @media (hover: none) and (pointer: coarse) {
            .service-card:hover {
              transform: none;
            }
            
            .service-card:active {
              transform: translateY(-2px);
              background-position: 0 100%;
            }
            
            .service-card:active .icon-wrapper {
              background-color: #ffffff;
              color: #B7410E;
              transform: scale(1.05);
            }
            
            .service-card:active .service-title {
              color: #ffffff;
            }
            
            .service-card:active .service-description {
              color: #f0f0f0;
            }
          }
        `}
      </style>
      
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Our Services</h2>
            <p className="services-subtitle">
              Comprehensive restaurant solutions from concept to success
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-column">
                <div 
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
  
  export default RestaurantServices;