const PhilosophySection = () => {
  // Sample image URLs - replace with your actual images
  const bentoImages = [
    "/images/food/3.jpg",
    "/images/food/4.jpg",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=300&fit=crop",
    "/images/food/2.jpg?h=300&fit=crop",
    "/images/food/food3.png",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop"
  ];

  return (
    <>
      <style>
        {`
          .bento-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 200px);
            gap: 1rem;
            height: fit-content;
          }
          
          .bento-item {
            border-radius: 0;
            overflow: hidden;
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }
          
          .bento-item:hover {
            border-color: #F7F4F4;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          }
          
          .bento-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
          }
          
          .bento-item:hover img {
            transform: scale(1.05);
          }
          
          /* Bento grid layout */
          .bento-item:nth-child(1) {
            grid-column: span 2;
            grid-row: span 1;
          }
          
          .bento-item:nth-child(2) {
            grid-column: span 2;
            grid-row: span 2;
          }
          
          .bento-item:nth-child(3) {
            grid-column: span 2;
            grid-row: span 1;
          }
          
          .bento-item:nth-child(4) {
            grid-column: span 1;
            grid-row: span 1;
          }
          
          .bento-item:nth-child(5) {
            grid-column: span 2;
            grid-row: span 1;
          }
          
          .bento-item:nth-child(6) {
            grid-column: span 1;
            grid-row: span 1;
          }
          
          .content-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
          }
          
          /* Mobile - natural content flow */
          @media (max-width: 640px) {
            .content-container {
              min-height: auto;
            }
          }
          
          /* Small tablets - align with bento grid height */
          @media (min-width: 641px) and (max-width: 768px) {
            .content-container {
              min-height: 480px;
            }
          }
          
          /* iPad and medium tablets - better height alignment */
          @media (min-width: 769px) and (max-width: 1024px) {
            .content-container {
              min-height: 520px;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
          }
          
          /* Large screens - match bento grid height */
          @media (min-width: 1025px) {
            .content-container {
              min-height: 620px; /* Match large bento: 3 rows × 180px + gaps + padding */
            }
          }
          
          /* Large screens */
          @media (min-width: 1025px) {
            .bento-grid {
              grid-template-rows: repeat(3, 180px);
            }
          }
          
          /* iPad specific adjustments */
          @media (min-width: 768px) and (max-width: 834px) {
            .content-container {
              min-height: 500px;
            }
            .bento-grid {
              grid-template-rows: repeat(3, 155px);
            }
          }
          
          /* Tablet landscape */
          @media (max-width: 1024px) and (min-width: 769px) {
            .bento-grid {
              grid-template-columns: repeat(3, 1fr);
              grid-template-rows: repeat(3, 160px);
              gap: 0.75rem;
            }
            
            .bento-item:nth-child(1) {
              grid-column: span 2;
              grid-row: span 1;
            }
            
            .bento-item:nth-child(2) {
              grid-column: span 1;
              grid-row: span 2;
            }
            
            .bento-item:nth-child(3) {
              grid-column: span 2;
              grid-row: span 1;
            }
            
            .bento-item:nth-child(4) {
              grid-column: span 1;
              grid-row: span 1;
            }
            
            .bento-item:nth-child(5) {
              grid-column: span 2;
              grid-row: span 1;
            }
            
            .bento-item:nth-child(6) {
              grid-column: span 1;
              grid-row: span 1;
            }
          }
          
          /* Tablet portrait */
          @media (max-width: 768px) and (min-width: 641px) {
            .bento-grid {
              grid-template-columns: repeat(2, 1fr);
              grid-template-rows: repeat(3, 150px);
              gap: 0.5rem;
            }
            
            .bento-item:nth-child(1),
            .bento-item:nth-child(3),
            .bento-item:nth-child(5) {
              grid-column: span 2;
              grid-row: span 1;
            }
            
            .bento-item:nth-child(2),
            .bento-item:nth-child(4),
            .bento-item:nth-child(6) {
              grid-column: span 1;
              grid-row: span 1;
            }
          }
          
          /* Mobile */
          @media (max-width: 640px) {
            .bento-grid {
              grid-template-columns: 1fr;
              grid-template-rows: repeat(6, 180px);
              gap: 0.75rem;
            }
            
            .bento-item:nth-child(1),
            .bento-item:nth-child(2),
            .bento-item:nth-child(3),
            .bento-item:nth-child(4),
            .bento-item:nth-child(5),
            .bento-item:nth-child(6) {
              grid-column: span 1;
              grid-row: span 1;
            }
          }
          
          /* iPad Pro specific spacing fixes */
          @media (min-width: 820px) and (max-width: 850px) and (min-height: 1000px) {
            .philosophy-section {
              padding-top: 2rem !important;
            }
          }
          
          /* iPad Pro 11" landscape */
          @media (min-width: 1180px) and (max-width: 1210px) and (max-height: 850px) {
            .philosophy-section {
              padding-top: 2.5rem !important;
            }
          }
          
          /* iPad Pro 12.9" portrait */
          @media (min-width: 1010px) and (max-width: 1040px) and (min-height: 1350px) {
            .philosophy-section {
              padding-top: 2rem !important;
            }
          }
          
          /* iPad Pro 12.9" landscape */
          @media (min-width: 1350px) and (max-width: 1380px) and (max-height: 1040px) {
            .philosophy-section {
              padding-top: 3rem !important;
            }
          }
        `}
      </style>
      
      <section className="philosophy-section pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12 lg:pt-16 lg:pb-8" style={{ backgroundColor: '#B7410E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Content - Center aligned with bento grid */}
            <div className="lg:col-span-6">
              <div className="content-container">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 lg:mb-8 leading-tight font-[Gotham,sans-serif]">
                    <span className="font-bold">Veg-Culinary</span><br />
                    <span>Expert</span>
                  </h2>
                  
                  <div className="space-y-4 lg:space-y-6">
                    <p className="text-base lg:text-lg leading-relaxed font-[Lato,sans-serif]" style={{ color: '#F7F4F4' }}>
                      Suril Udeshi has an unparalleled expertise in vegetarian cuisine. Known for his 
                      innovative approach, Suril has a remarkable ability to transform Indian & 
                      international dishes into exquisite vegetarian masterpieces.
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed font-[Lato,sans-serif]" style={{ color: '#F7F4F4' }}>
                      His visionary strategies have consistently propelled his consulted restaurants to new heights 
                      of success, earning him a stellar reputation in the culinary world.
                    </p>
                    
                    <p className="text-base lg:text-lg leading-relaxed font-[Lato,sans-serif]" style={{ color: '#F7F4F4' }}>
                      Connoisseurs are continually delighted by the inventive twists he brings to 
                      vegetarian dining.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Bento Grid */}
            <div className="lg:col-span-6">
              <div className="bento-grid">
                {bentoImages.map((image, index) => (
                  <div key={index} className="bento-item">
                    <img
                      src={image}
                      alt={`Culinary expertise ${index + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhilosophySection;