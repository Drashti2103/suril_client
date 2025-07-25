import './PhilosophySection.css';

const PhilosophySection = () => {
  const expertisePoints = [
    {
      number: "01",
      title: "Innovative Approach",
      description: "Suril has a remarkable ability to transform Indian & international dishes into exquisite vegetarian masterpieces with his innovative culinary strategies.",
      icon: "fas fa-layer-group"
    },
    {
      number: "02", 
      title: "Stellar Reputation",
      description: "His visionary strategies have consistently propelled his consulted restaurants to new heights of success, earning him recognition in the culinary world.",
      icon: "far fa-chart-bar"
    },
    {
      number: "03",
      title: "Creative Excellence", 
      description: "Connoisseurs are continually delighted by the inventive twists he brings to vegetarian dining through masterful flavor combinations.",
      icon: "fas fa-database"
    },
    {
      number: "04",
      title: "Definitive Choice",
      description: "Suril's passion for expanding the boundaries of vegetarian cuisine ensures each dish is a delightful fusion of flavour, creativity, and nutritional balance.",
      icon: "fas fa-cogs"
    }
  ];

  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <section className="py-20 lg:py-32" style={{ backgroundColor: '#F7F4F4' }}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            {/* Left Content - Reduced from lg:grid-cols-2 to smaller span */}
            <div className="lg:col-span-4">
              <h2 className="text-4xl lg:text-5xl font-light text-soft-black mb-8 leading-tight font-[Gotham,sans-serif]">
                <span className="font-bold" style={{ color: '#A4442E' }}>Veg-Culinary</span><br />
                <span>Expert</span>
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="text-lg text-gray-700 leading-relaxed font-[Lato,sans-serif]">
                  Suril Udeshi has an unparalleled expertise in vegetarian cuisine. Known for his 
                  innovative approach, Suril has a remarkable ability to transform indian & 
                  international dishes into exquisite vegetarian masterpieces.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed font-[Lato,sans-serif]">
                  His visionary strategies have consistently propelled his consulted restaurants to new heights 
                  of success, earning him a stellar reputation in the culinary world.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed font-[Lato,sans-serif]">
                  Connoisseurs are continually delighted by the inventive twists he brings to 
                  vegetarian dining.
                </p>
              </div>
            </div>

            {/* Right Grid - Expanded to take more space */}
            <div className="lg:col-span-8 relative">

              {/* Central Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-48 h-48 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#A4442E', fontFamily: 'Gotham, sans-serif' }}>
                      RESTAURANT<br />EXPERT
                    </h3>
                    <div className="text-3xl">🍽️</div>
                  </div>
                </div>
              </div>

              {/* Corner Cards */}
              <div className="grid grid-cols-2 gap-8 relative z-0">
                {expertisePoints.map((point, index) => (
                  <div
                    key={index}
                    className={`service-wrap ${
                      index === 0 ? 'mt-0 mr-12' : 
                      index === 1 ? 'mt-0 ml-12' : 
                      index === 2 ? 'mb-0 mr-12' : 
                      'mb-0 ml-12'
                    }`}
                  >
                    <div className="service-icon text-center">
                      <i className={point.icon}></i>
                    </div>
                    <h4 className="service-wrap-title">
                      {point.title}
                    </h4>
                    <p className="service-wrap-description">
                      {point.description}
                    </p>
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