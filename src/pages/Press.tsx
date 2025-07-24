import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Press = () => {
  const pressReleases = [
    {
      title: "Suril Udeshi Named Restaurant Consultant of the Year 2024",
      date: "March 1, 2024",
      publication: "Restaurant Guru",
      excerpt: "The prestigious award recognizes Udeshi's innovative approach to vegetarian cuisine consulting and his impact on the hospitality industry.",
      type: "Award"
    },
    {
      title: "The Future of Vegetarian Fine Dining",
      date: "February 15, 2024",
      publication: "Food & Wine Magazine",
      excerpt: "An in-depth feature exploring Udeshi's philosophy and approach to elevating plant-based cuisine in luxury dining experiences.",
      type: "Feature"
    },
    {
      title: "Cultural Heritage Meets Modern Innovation",
      date: "January 20, 2024",
      publication: "The Hindu",
      excerpt: "A profile piece examining how traditional Indian vegetarian cuisine is being reimagined for contemporary palates.",
      type: "Profile"
    }
  ];

  const mediaKit = [
    {
      title: "High-Resolution Photos",
      description: "Professional headshots and kitchen photography",
      format: "JPG, 300 DPI"
    },
    {
      title: "Biography",
      description: "Complete professional biography and achievements",
      format: "PDF, DOC"
    },
    {
      title: "Press Release Templates",
      description: "Ready-to-use press release formats",
      format: "PDF, DOC"
    },
    {
      title: "Interview Talking Points",
      description: "Key topics and expertise areas",
      format: "PDF"
    }
  ];

  const mediaAppearances = [
    {
      title: "The Art of Vegetarian Cuisine",
      platform: "MasterChef India",
      date: "February 2024",
      type: "TV Appearance"
    },
    {
      title: "Sustainable Dining Practices",
      platform: "Food Network Podcast",
      date: "January 2024",
      type: "Podcast"
    },
    {
      title: "Heritage Cooking Techniques",
      platform: "Times Food Festival",
      date: "December 2023",
      type: "Speaking Engagement"
    },
    {
      title: "The Future of Plant-Based Fine Dining",
      platform: "Conde Nast Traveller",
      date: "November 2023",
      type: "Magazine Feature"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="serif-heading text-5xl md:text-6xl text-charcoal mb-6">
            Press & Media
          </h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            Media resources, press releases, and coverage of Suril Udeshi's work in vegetarian cuisine consulting.
          </p>
        </div>
      </section>

      {/* Recent Press */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif-heading text-4xl text-charcoal mb-12 text-center">
            Recent Press Coverage
          </h2>
          <div className="space-y-8">
            {pressReleases.map((item, index) => (
              <article key={index} className="bg-cream p-8 editorial-hover">
                <div className="md:flex md:items-start md:gap-8">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="text-rust font-gotham font-semibold mb-2">
                      {item.date}
                    </div>
                    <div className="text-charcoal/70 text-sm mb-2">
                      {item.publication}
                    </div>
                    <div className="inline-block bg-rust text-white px-3 py-1 text-xs font-gotham tracking-wide">
                      {item.type}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="serif-heading text-2xl text-charcoal mb-3">
                      {item.title}
                    </h3>
                    <p className="text-charcoal/80 leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                    <button className="text-rust font-gotham text-sm font-semibold hover:underline">
                      Read Full Article →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Appearances */}
      <section className="bg-stone py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif-heading text-4xl text-charcoal mb-12 text-center">
            Media Appearances
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mediaAppearances.map((appearance, index) => (
              <div key={index} className="bg-white p-6 editorial-hover">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-rust font-gotham text-sm font-semibold">
                    {appearance.type}
                  </span>
                  <span className="text-charcoal/50">•</span>
                  <span className="text-charcoal/70 text-sm">
                    {appearance.date}
                  </span>
                </div>
                <h3 className="serif-heading text-xl text-charcoal mb-2">
                  {appearance.title}
                </h3>
                <p className="text-charcoal/70 font-gotham text-sm mb-4">
                  {appearance.platform}
                </p>
                <button className="text-rust font-gotham text-sm font-semibold hover:underline">
                  View/Listen →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif-heading text-4xl text-charcoal mb-12 text-center">
            Media Kit
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaKit.map((item, index) => (
              <div key={index} className="bg-cream p-6 text-center editorial-hover">
                <h3 className="serif-heading text-lg text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal/80 text-sm mb-4">
                  {item.description}
                </p>
                <p className="text-rust text-xs font-gotham mb-4">
                  {item.format}
                </p>
                <button className="bg-rust text-white px-4 py-2 text-xs font-gotham tracking-wide hover:bg-rust-dark transition-colors">
                  DOWNLOAD
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Press */}
      <section className="bg-ivory py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif-heading text-3xl text-charcoal mb-4">
            Press Inquiries
          </h2>
          <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
            For media requests, interviews, and press-related inquiries, please contact our media relations team.
          </p>
          <div className="space-y-4">
            <p className="text-charcoal/80">
              <span className="font-gotham font-semibold">Email:</span> press@suriludeshi.com
            </p>
            <p className="text-charcoal/80">
              <span className="font-gotham font-semibold">Phone:</span> +91 98765 43210
            </p>
            <p className="text-charcoal/80 text-sm">
              Response time: Within 24 hours for urgent media requests
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;