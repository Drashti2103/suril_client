const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Suril's expertise in vegetarian cuisine is unparalleled. His ability to create sophisticated, restaurant-quality dishes while maintaining authentic flavors is truly remarkable.",
      author: "Rajesh Sharma",
      title: "Executive Chef, The Oberoi"
    },
    {
      quote: "Working with Suril transformed our approach to vegetarian dining. His consultancy elevated our menu to new heights of culinary excellence.",
      author: "Priya Mehta",
      title: "Restaurant Owner, Mumbai"
    },
    {
      quote: "A true master of his craft. Suril's deep understanding of ingredients and cultural nuances makes him India's finest vegetarian culinary consultant.",
      author: "Dr. Anjali Patel",
      title: "Food Critic & Author"
    }
  ];

  return (
    <section className="bg-stone py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone via-transparent to-cream opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-8 relative">
        <div className="text-center mb-16">
          <h2 className="serif-heading text-3xl lg:text-4xl text-soft-black mb-6">
            Trusted By Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from renowned chefs, restaurant owners, and culinary experts who have experienced excellence firsthand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 lg:p-10 editorial-hover group"
            >
              <div className="text-rust text-4xl mb-6 opacity-20 group-hover:opacity-40 transition-opacity">
                "
              </div>
              
              <blockquote className="text-soft-black leading-relaxed mb-6 italic">
                {testimonial.quote}
              </blockquote>
              
              <div className="border-t border-stone pt-6">
                <div className="gotham-heading font-semibold text-soft-black">
                  {testimonial.author}
                </div>
                <div className="text-muted-foreground text-sm mt-1">
                  {testimonial.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;