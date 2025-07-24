import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Vegetarian Culinary Masterclass",
      date: "March 15, 2024",
      location: "Mumbai",
      type: "Workshop",
      description: "An intensive masterclass exploring traditional techniques and modern innovations in vegetarian cuisine."
    },
    {
      title: "Heritage Flavors Conference",
      date: "April 22, 2024",
      location: "Delhi",
      type: "Conference",
      description: "A gathering of culinary experts discussing the preservation and evolution of regional vegetarian traditions."
    }
  ];

  const pastEvents = [
    {
      title: "Farm to Table Symposium",
      date: "January 2024",
      location: "Ahmedabad",
      type: "Symposium",
      description: "Exploring sustainable practices in vegetarian cuisine with local farmers and chefs."
    },
    {
      title: "Spice Route Culinary Journey",
      date: "November 2023",
      location: "Kochi",
      type: "Pop-up",
      description: "A unique dining experience showcasing regional spice traditions across India."
    },
    {
      title: "Traditional Techniques Workshop",
      date: "September 2023",
      location: "Jaipur",
      type: "Workshop",
      description: "Hands-on learning of ancestral cooking methods and their modern applications."
    },
    {
      title: "Vegetarian Innovation Summit",
      date: "July 2023",
      location: "Bangalore",
      type: "Summit",
      description: "Industry leaders discussing the future of vegetarian cuisine and sustainability."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="serif-heading text-5xl md:text-6xl text-charcoal mb-6">
            Events & Experiences
          </h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            Join immersive culinary experiences that celebrate the artistry and heritage of vegetarian cuisine.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif-heading text-4xl text-charcoal mb-12 text-center">
            Upcoming Events
          </h2>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-cream p-8 editorial-hover">
                <div className="md:flex md:items-start md:gap-8">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="text-rust font-gotham font-semibold mb-2">
                      {event.date}
                    </div>
                    <div className="text-charcoal/70 text-sm">
                      {event.location}
                    </div>
                    <div className="inline-block bg-rust text-white px-3 py-1 text-xs font-gotham tracking-wide mt-2">
                      {event.type}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="serif-heading text-2xl text-charcoal mb-3">
                      {event.title}
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <button className="text-rust font-gotham text-sm font-semibold hover:underline">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-stone py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif-heading text-4xl text-charcoal mb-12 text-center">
            Past Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 editorial-hover">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-rust font-gotham text-sm font-semibold">
                    {event.type}
                  </span>
                  <span className="text-charcoal/50">•</span>
                  <span className="text-charcoal/70 text-sm">
                    {event.location}
                  </span>
                </div>
                <h3 className="serif-heading text-xl text-charcoal mb-2">
                  {event.title}
                </h3>
                <p className="text-rust text-sm mb-3">
                  {event.date}
                </p>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif-heading text-3xl text-charcoal mb-4">
            Stay Updated
          </h2>
          <p className="text-charcoal/80 mb-8">
            Be the first to know about upcoming events and culinary experiences.
          </p>
          <div className="flex justify-center">
            <div className="flex max-w-md w-full">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-charcoal/20 focus:outline-none focus:border-rust"
              />
              <button className="bg-rust text-white px-6 py-3 font-gotham text-sm tracking-wide hover:bg-rust-dark transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;