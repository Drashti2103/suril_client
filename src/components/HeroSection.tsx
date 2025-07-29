import { useRef } from "react";

const images = [
  "/images/SurilUdeshi/ALI01094.jpg",
  "/images/SurilUdeshi/ALI01112.jpg", 
  "/images/SurilUdeshi/ALI01132.jpg",
  "/images/SurilUdeshi/WhatsApp Image 2025-07-05 at 4.53.30 PM.jpeg",
  "/images/SurilUdeshi/WhatsApp Image 2025-07-05 at 4.53.30 PM (1).jpeg",
  "/images/SurilUdeshi/WhatsApp Image 2025-07-05 at 4.53.32 PM.jpeg"
];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <style>
        {`
          /* Ensure minimum height on all devices */
          .hero-section {
            min-height: 100vh;
          }

          /* Mobile devices */
          @media (max-width: 768px) {
            .hero-section {
              min-height: 100vh;
              height: auto;
            }
            .hero-image-container {
              min-height: 60vh;
              height: 60vh;
              width: 100% !important;
              max-width: 400px;
            }
            .offset-box {
              right: 0 !important;
              box-shadow: 0 8px 20px 0 rgba(183,65,14,0.1);
            }
            .large-screen-content {
              display: none; /* Hide additional content on mobile */
            }
          }

          /* Tablet devices */
          @media (min-width: 769px) and (max-width: 1024px) {
            .hero-section {
              min-height: 90vh;
            }
            .hero-image-container {
              min-height: 70vh;
              height: 70vh;
            }
            .offset-box {
              right: min(-10px, -1vw);
            }
            .large-screen-content {
              display: none; /* Hide additional content on tablet */
            }
          }

          /* Desktop devices */
          @media (min-width: 1025px) {
            .hero-section {
              min-height: 90vh;
            }
            .hero-image-container {
              min-height: 80vh;
              height: 80vh;
              width: min(500px, 90vw);
            }
            .offset-box {
              right: min(-10px, -1vw);
            }
            .large-screen-content {
              display: block; /* Show additional content on desktop */
            }
          }

          /* Large desktop devices */
          @media (min-width: 1440px) {
            .hero-image-container {
              min-height: 85vh;
              height: 85vh;
            }
          }

          /* Extra large desktop devices */
          @media (min-width: 1920px) {
            .hero-image-container {
              min-height: 90vh;
              height: 90vh;
            }
          }

          /* Fix flex alignment and height to avoid negative spacing */
          .hero-flex-container {
            height: 100%;
            align-items: stretch;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            height: 100%;
          }
        `}
      </style>
      <section
        ref={containerRef}
        className="hero-section relative w-full bg-white overflow-hidden pb-8 sm:pb-12 md:pb-16 lg:pb-12 mt-24"
      >
        <div className="flex flex-col lg:flex-row h-full hero-flex-container">
          {/* LEFT SIDE - Image with offset bg */}
          <div className="flex w-full lg:w-1/2 relative items-start justify-center h-full mb-8 lg:mb-0">
            <div className="relative w-full h-full flex items-start justify-center">
              <div 
                className="relative flex items-center justify-center mx-auto hero-image-container"
                style={{ 
                  width: 'min(500px, 90vw)', 
                  marginTop: '0px' 
                }}
              >
                {/* Offset colored box behind image */}
                <div
                  className="absolute z-0 offset-box"
                  style={{
                    width: 'min(480px, 88vw)',
                    height: '100%',
                    background: '#B7410E',
                    right: 'min(-10px, -1vw)',
                    bottom: 'min(-10px, -2vh)',
                    boxShadow: '0 8px 32px 0 rgba(183,65,14,0.10)',
                    transition: 'right 0.3s ease',
                  }}
                />
                {/* Main static image */}
                <div className="relative z-10 w-full h-full">
                  <img
                    src={images[1]}
                    alt="Suril Udeshi"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 0,
                      boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT SIDE - Content */}
          <div className="w-full lg:w-[45%] px-4 md:px-8 lg:pl-12 lg:pr-0 relative z-10 hero-content">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h1 className="text-black text-3xl md:text-4xl lg:text-4xl font-light tracking-[0.02em] mb-6 md:mb-8 leading-tight font-[Gotham,sans-serif] text-left">
                <span>Who is</span><br />
                <span className="tracking-[0.05em] font-bold" style={{ color: '#B7410E', fontFamily: 'Gotham, sans-serif' }}>SURIL UDESHI?</span>
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
                {/* Recognition */}
                <div className="flex flex-col h-full">
                  <h2 className="text-[#B7410E] text-base md:text-lg font-semibold mb-2 tracking-[0.05em] md:mb-3 font-[Gotham,sans-serif]">
                    Recognition
                  </h2>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed tracking-[0.02em] flex-grow font-[Lato,sans-serif] mb-0">
                    <span className="text-black font-medium font-[Lato,sans-serif]">"Restaurant Consultant of the Year 2024"</span> by Restaurant Guru. 
                    Winner of Gujarat Tourism Awards & Food Connoisseurs awards in 2024 and 2022.
                  </p>
                  <a href="#recognition" className="mt-1 text-[#B7410E] text-xs md:text-sm font-[Lato,sans-serif] inline-flex items-center hover:underline w-fit">
                    Know more <span className="ml-1">&#8594;</span>
                  </a>
                </div>
                {/* Notable Clients */}
                <div className="flex flex-col h-full">
                  <h2 className="text-[#B7410E] text-base md:text-lg font-semibold mb-2 tracking-[0.05em] md:mb-3 font-[Gotham,sans-serif]">
                    Notable Clients
                  </h2>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed tracking-[0.02em] flex-grow font-[Lato,sans-serif] mb-0">
                    At Mango, Under The Neem Trees, Patang, Kuhoo, Pathikashram, 
                    Starz Club, The Bizz Hotel, Sun Solace.
                  </p>
                  <a href="#clients" className="mt-1 text-[#B7410E] text-xs md:text-sm font-[Lato,sans-serif] inline-flex items-center hover:underline w-fit">
                    Know more <span className="ml-1">&#8594;</span>
                  </a>
                </div>
                {/* Expertise */}
                <div className="flex flex-col h-full">
                  <h2 className="text-[#B7410E] text-base md:text-lg font-semibold mb-2 tracking-[0.05em] md:mb-3 font-[Gotham,sans-serif]">
                    Expertise
                  </h2>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed tracking-[0.02em] flex-grow font-[Lato,sans-serif] mb-0">
                    High-end restaurant conceptualization and operations. 
                    <span className="text-black font-medium font-[Lato,sans-serif]"> Vegetarian cuisine specialist</span> transforming 
                    dishes into exquisite masterpieces.
                  </p>
                  <a href="#expertise" className="mt-1 text-[#B7410E] text-xs md:text-sm font-[Lato,sans-serif] inline-flex items-center hover:underline w-fit">
                    Know more <span className="ml-1">&#8594;</span>
                  </a>
                </div>
                {/* Services */}
                <div className="flex flex-col h-full">
                  <h2 className="text-[#B7410E] text-base md:text-lg font-semibold mb-2 tracking-[0.05em] md:mb-3 font-[Gotham,sans-serif]">
                    Services
                  </h2>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed tracking-[0.02em] flex-grow font-[Lato,sans-serif] mb-0">
                    Menu engineering, team planning, kitchen design, tableware curation, 
                    operations management, and restaurant makeovers.
                  </p>
                  <a href="#services" className="mt-1 text-[#B7410E] text-xs md:text-sm font-[Lato,sans-serif] inline-flex items-center hover:underline w-fit">
                    Know more <span className="ml-1">&#8594;</span>
                  </a>
                </div>
              </div>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed tracking-[0.03em] font-[Lato,sans-serif] mb-6">
                For restaurateurs aiming to elevate offerings and achieve extraordinary success, 
                Suril Udeshi is the definitive choice.
              </p>
              
              {/* Additional content for larger screens only */}
              <div className="large-screen-content">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed tracking-[0.02em] font-[Lato,sans-serif] mb-4">
                  With over a decade of experience in transforming culinary visions into reality, Suril brings 
                  an unparalleled understanding of both traditional flavors and contemporary dining expectations. 
                  His approach combines meticulous attention to detail with innovative thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
