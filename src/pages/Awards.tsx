import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Awards = () => {
  const awards = [
    {
      year: "2024",
      title: "Restaurant Consultant of the Year",
      organization: "Restaurant Guru",
      description: "Recognized for outstanding contributions to vegetarian cuisine consulting and innovation.",
      category: "Industry Recognition"
    },
    {
      year: "2024",
      title: "Gujarat Tourism Excellence Award",
      organization: "Gujarat Tourism Board",
      description: "Honoring exceptional promotion of Gujarat's culinary heritage through restaurant consulting.",
      category: "Tourism"
    },
    {
      year: "2022",
      title: "Food Connoisseurs Award",
      organization: "Indian Culinary Federation",
      description: "For pioneering work in elevating traditional vegetarian cuisine to contemporary standards.",
      category: "Culinary Excellence"
    },
    {
      year: "2023",
      title: "Sustainable Cuisine Champion",
      organization: "Green Hospitality Network",
      description: "Recognizing leadership in promoting sustainable practices in vegetarian cuisine.",
      category: "Sustainability"
    },
    {
      year: "2021",
      title: "Cultural Preservation Award",
      organization: "Heritage Cuisine Foundation",
      description: "For outstanding efforts in preserving and modernizing traditional vegetarian recipes.",
      category: "Cultural Heritage"
    },
    {
      year: "2023",
      title: "Innovation in Vegetarian Cuisine",
      organization: "International Food & Wine Society",
      description: "Celebrating innovative approaches to plant-based fine dining experiences.",
      category: "Innovation"
    }
  ];

  const pressQuotes = [
    {
      quote: "Suril Udeshi has redefined what vegetarian cuisine can be, bringing sophistication and innovation to traditional flavors.",
      source: "Food & Wine Magazine",
      publication: "2024"
    },
    {
      quote: "A true visionary in the culinary world, Udeshi's approach to vegetarian cuisine is both respectful of tradition and boldly innovative.",
      source: "The Hindu",
      publication: "2023"
    },
    {
      quote: "His restaurants don't just serve food; they tell stories of culture, heritage, and the future of sustainable dining.",
      source: "Conde Nast Traveller",
      publication: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="serif-heading text-5xl md:text-6xl text-charcoal mb-6">
            Recognition & Awards
          </h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            Celebrating achievements in vegetarian cuisine consulting, cultural preservation, and culinary innovation.
          </p>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif-heading text-4xl text-charcoal mb-12 text-center">
            Industry Recognition
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-cream p-6 editorial-hover">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-rust font-gotham font-bold text-2xl">
                    {award.year}
                  </span>
                  <span className="bg-rust text-white px-3 py-1 text-xs font-gotham tracking-wide">
                    {award.category}
                  </span>
                </div>
                <h3 className="serif-heading text-xl text-charcoal mb-2">
                  {award.title}
                </h3>
                <p className="text-rust text-sm font-gotham mb-3">
                  {award.organization}
                </p>
                <p className="text-charcoal/80 text-sm leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Quotes */}
      <section className="bg-stone py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif-heading text-4xl text-charcoal mb-12 text-center">
            Press Recognition
          </h2>
          <div className="space-y-8">
            {pressQuotes.map((quote, index) => (
              <div key={index} className="bg-white p-8 max-w-4xl mx-auto editorial-hover">
                <blockquote className="text-lg text-charcoal/80 leading-relaxed mb-4 italic">
                  "{quote.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <cite className="text-rust font-gotham font-semibold">
                    — {quote.source}
                  </cite>
                  <span className="text-charcoal/60 text-sm">
                    {quote.publication}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="serif-heading text-4xl text-charcoal mb-12 text-center">
            Achievement Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-rust/30"></div>
            {awards.sort((a, b) => parseInt(b.year) - parseInt(a.year)).map((award, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-4 border border-charcoal/10">
                    <h4 className="serif-heading text-lg text-charcoal mb-1">
                      {award.title}
                    </h4>
                    <p className="text-rust text-sm font-gotham">
                      {award.organization}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rust rounded-full border-4 border-white"></div>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
                  <span className="text-rust font-gotham font-bold text-xl">
                    {award.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Awards;