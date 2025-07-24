import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "Culinary Consulting",
      description: "Comprehensive menu development, kitchen optimization, and culinary strategy for restaurants and hospitality brands.",
      features: ["Menu Engineering", "Cost Optimization", "Culinary Training", "Brand Positioning"]
    },
    {
      title: "Menu Engineering",
      description: "Data-driven menu design that maximizes profitability while maintaining exceptional vegetarian cuisine standards.",
      features: ["Recipe Development", "Pricing Strategy", "Seasonal Planning", "Nutritional Balance"]
    },
    {
      title: "Kitchen Staff Training",
      description: "Elevate your culinary team with specialized training in vegetarian cuisine techniques and presentation.",
      features: ["Technique Mastery", "Presentation Skills", "Quality Standards", "Team Leadership"]
    },
    {
      title: "Experiential Dining Concepts",
      description: "Create memorable dining experiences that celebrate vegetarian cuisine and cultural heritage.",
      features: ["Concept Development", "Ambiance Design", "Cultural Storytelling", "Guest Experience"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="serif-heading text-5xl md:text-6xl text-charcoal mb-6">
            Signature Services
          </h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            Transforming culinary visions into extraordinary vegetarian dining experiences through expertise, innovation, and cultural authenticity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group editorial-hover">
                <div className="bg-cream p-8 h-full">
                  <h3 className="serif-heading text-2xl text-rust mb-4">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/80 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-charcoal/70 flex items-center">
                        <span className="w-2 h-2 bg-rust rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-stone py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif-heading text-3xl text-charcoal mb-4">
            Ready to Transform Your Culinary Vision?
          </h2>
          <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can elevate your vegetarian cuisine and create memorable dining experiences.
          </p>
          <button className="bg-rust text-white px-8 py-3 font-gotham tracking-wide hover:bg-rust-dark transition-colors">
            GET IN TOUCH
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;