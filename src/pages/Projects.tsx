import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const currentProjects = [
    {
      name: "Under the Neem Tree",
      subtitle: "Heritage Flavors, Modern Soul",
      location: "Ahmedabad",
      type: "Fine Dining",
      description: "A contemporary interpretation of traditional Gujarati cuisine in an elegant setting.",
      image: "/placeholder.svg"
    },
    {
      name: "Patang",
      subtitle: "Elevated Street Food Culture",
      location: "Mumbai",
      type: "Casual Dining",
      description: "Transforming beloved street food into refined culinary experiences.",
      image: "/placeholder.svg"
    }
  ];

  const pastProjects = [
    {
      name: "Rungg",
      subtitle: "Colors of Spice",
      location: "Delhi",
      type: "Restaurant Consulting",
      description: "Complete menu overhaul and kitchen optimization for authentic regional cuisine."
    },
    {
      name: "Pihu Baug",
      subtitle: "Garden to Table",
      location: "Pune",
      type: "Concept Development",
      description: "Farm-to-table concept celebrating organic vegetarian ingredients."
    },
    {
      name: "Mango",
      subtitle: "Tropical Vegetarian",
      location: "Goa",
      type: "Menu Engineering",
      description: "Innovative tropical vegetarian menu with coastal influences."
    },
    {
      name: "Neem Bagan",
      subtitle: "Bengali Vegetarian Heritage",
      location: "Kolkata",
      type: "Cultural Consulting",
      description: "Authentic Bengali vegetarian cuisine with contemporary presentation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="serif-heading text-5xl md:text-6xl text-charcoal mb-6">
            Culinary Projects
          </h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed italic">
            Each project tells a story of cultural heritage, innovation, and the artistry of vegetarian cuisine.
          </p>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif-heading text-4xl text-charcoal mb-12 text-center">
            Current Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {currentProjects.map((project, index) => (
              <div key={index} className="group editorial-hover">
                <div className="bg-cream overflow-hidden">
                  <div className="aspect-[4/3] bg-stone"></div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-rust font-gotham text-sm font-semibold">
                        {project.type}
                      </span>
                      <span className="text-charcoal/50">•</span>
                      <span className="text-charcoal/70 text-sm">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="serif-heading text-2xl text-charcoal mb-2">
                      {project.name}
                    </h3>
                    <p className="text-rust italic mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-charcoal/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="bg-stone py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif-heading text-4xl text-charcoal mb-12 text-center">
            Past Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {pastProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 editorial-hover">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-rust font-gotham text-sm font-semibold">
                    {project.type}
                  </span>
                  <span className="text-charcoal/50">•</span>
                  <span className="text-charcoal/70 text-sm">
                    {project.location}
                  </span>
                </div>
                <h3 className="serif-heading text-xl text-charcoal mb-2">
                  {project.name}
                </h3>
                <p className="text-rust italic text-sm mb-3">
                  {project.subtitle}
                </p>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;