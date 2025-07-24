const PhilosophySection = () => {
  const philosophyPillars = [
    {
      title: "Pure Ingredients",
      description: "Sourcing the finest vegetarian ingredients with deep respect for their natural essence and seasonal availability.",
      icon: "🌱"
    },
    {
      title: "Rooted in Culture",
      description: "Honoring traditional vegetarian cooking methods while embracing contemporary culinary innovations.",
      icon: "🏛️"
    },
    {
      title: "Elevated Modern Plates",
      description: "Transforming classic vegetarian dishes into sophisticated, restaurant-quality dining experiences.",
      icon: "✨"
    }
  ];

  return (
    <section className="bg-cream py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="serif-heading text-3xl lg:text-4xl text-soft-black mb-6">
            Vegetarian Culinary Philosophy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A harmonious blend of tradition and innovation, creating extraordinary vegetarian experiences that honor both heritage and modernity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {philosophyPillars.map((pillar, index) => (
            <div
              key={index}
              className="editorial-hover bg-white p-8 lg:p-10 text-center group cursor-pointer"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h3 className="gotham-heading text-xl lg:text-2xl text-soft-black mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;