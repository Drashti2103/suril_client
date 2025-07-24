import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blogs = () => {
  const featuredPost = {
    title: "The Art of Slow Cooking: Rediscovering Traditional Techniques",
    excerpt: "In our fast-paced world, the ancient art of slow cooking offers not just superior flavors, but a return to mindful culinary practices that honor ingredients and tradition.",
    date: "February 28, 2024",
    readTime: "8 min read",
    category: "Philosophy"
  };

  const blogPosts = [
    {
      title: "Seasonal Ingredients: Cooking with Nature's Calendar",
      excerpt: "Understanding the rhythm of seasons transforms not only our cooking but our connection to the land and its bounty.",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Techniques"
    },
    {
      title: "The Science of Spices: Beyond Flavor",
      excerpt: "Delving into the medicinal properties and cultural significance of spices in traditional Indian cuisine.",
      date: "February 2, 2024",
      readTime: "10 min read",
      category: "Culture"
    },
    {
      title: "Minimalism in Vegetarian Cuisine",
      excerpt: "How restraint and simplicity can elevate the natural flavors of vegetables to extraordinary heights.",
      date: "January 20, 2024",
      readTime: "5 min read",
      category: "Philosophy"
    },
    {
      title: "Building Flavor Layers in Dal",
      excerpt: "The humble dal becomes a canvas for complex flavor development through traditional tempering techniques.",
      date: "January 8, 2024",
      readTime: "7 min read",
      category: "Techniques"
    },
    {
      title: "Regional Vegetables: Hidden Gems",
      excerpt: "Exploring lesser-known regional vegetables and their unique contributions to local cuisines.",
      date: "December 25, 2023",
      readTime: "9 min read",
      category: "Culture"
    },
    {
      title: "The Ritual of Meal Preparation",
      excerpt: "How the act of cooking becomes a meditative practice that nourishes both body and soul.",
      date: "December 10, 2023",
      readTime: "6 min read",
      category: "Philosophy"
    }
  ];

  const categories = ["All", "Philosophy", "Techniques", "Culture"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="serif-heading text-5xl md:text-6xl text-charcoal mb-6">
            Culinary Thoughts
          </h1>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed italic">
            Reflections on vegetarian cuisine, cultural heritage, and the philosophy of mindful cooking.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-cream p-12 editorial-hover mb-16">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-rust text-white px-3 py-1 text-xs font-gotham tracking-wide">
                  FEATURED
                </span>
                <span className="text-charcoal/70 text-sm">
                  {featuredPost.category}
                </span>
                <span className="text-charcoal/50">•</span>
                <span className="text-charcoal/70 text-sm">
                  {featuredPost.readTime}
                </span>
              </div>
              <h2 className="serif-heading text-3xl md:text-4xl text-charcoal mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-rust text-sm">
                  {featuredPost.date}
                </span>
                <button className="text-rust font-gotham text-sm font-semibold hover:underline">
                  Read Article →
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-6">
              {categories.map((category) => (
                <button
                  key={category}
                  className="text-charcoal/70 font-gotham text-sm hover:text-rust transition-colors pb-2 border-b-2 border-transparent hover:border-rust"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="group editorial-hover">
                <div className="bg-white border border-charcoal/10 p-6 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-rust font-gotham text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-charcoal/50">•</span>
                    <span className="text-charcoal/70 text-xs">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="serif-heading text-lg text-charcoal mb-3 group-hover:text-rust transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/80 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-charcoal/60 text-xs">
                      {post.date}
                    </span>
                    <button className="text-rust text-xs font-gotham font-semibold hover:underline">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-stone py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif-heading text-3xl text-charcoal mb-4">
            Join the Conversation
          </h2>
          <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
            Subscribe to receive weekly insights on vegetarian cuisine, cultural traditions, and culinary philosophy.
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

export default Blogs;