import { useRef } from "react";

const images = [
  "/images/SurilUdeshi/ALI01094.jpg",
  "/images/SurilUdeshi/ALI01112.jpg", 
  "/images/SurilUdeshi/ALI01132.jpg",
  "/images/SurilUdeshi/WhatsApp Image 2025-07-05 at 4.53.30 PM.jpeg",
  "/images/SurilUdeshi/WhatsApp Image 2025-07-05 at 4.53.30 PM (1).jpeg",
  "/images/SurilUdeshi/WhatsApp Image 2025-07-05 at 4.53.32 PM.jpeg"
];

const knowMoreLinks = [
  "#recognition",
  "#clients",
  "#expertise",
  "#services"
];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <section ref={containerRef} className="relative w-full md:h-[90vh] bg-white overflow-hidden pb-8 sm:pb-12 md:pb-16 lg:pb-12 mt-14">
        <div className="flex flex-col lg:flex-row h-full">
          {/* LEFT SIDE - Image with offset bg */}
          <div className="flex w-full lg:w-1/2 relative items-start justify-center h-full mb-8 lg:mb-0">
            <div className="relative w-full h-full flex items-start justify-center">
              <div 
                className="relative flex items-center justify-center mx-auto"
                style={{ 
                  width: 'min(500px, 90vw)', 
                  height: 'min(600px, 70vh)', 
                  marginTop: '0px' 
                }}
              >
                {/* Offset colored box behind image */}
                <div
                  className="absolute z-0"
                  style={{
                    width: 'min(480px, 88vw)',
                    height: 'min(580px, 68vh)',
                    background: '#B7410E',
                    right: 'min(-10px, -1vw)',
                    bottom: 'min(-10px, -2vh)',
                    boxShadow: '0 8px 32px 0 rgba(183,65,14,0.10)',
                  }}
                />
                {/* Main static image */}
                <div className="relative z-10">
                  <img
                    src={images[1]}
                    alt="Suril Udeshi"
                    style={{
                      width: "min(500px, 90vw)",
                      height: "min(600px, 70vh)",
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
          <div className="w-full lg:w-[45%] flex flex-col justify-start px-4 md:px-8 lg:pl-12 lg:pr-0 relative z-10">
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
              <p className="text-gray-800 text-sm md:text-base leading-relaxed tracking-[0.03em] font-[Lato,sans-serif] mb-0">
                For restaurateurs aiming to elevate offerings and achieve extraordinary success, 
                Suril Udeshi is the definitive choice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;