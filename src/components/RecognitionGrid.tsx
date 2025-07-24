const RecognitionGrid = () => {
  const awards = [
    {
      icon: "🏆",
      title: "Restaurant Consultant of the Year 2024",
      organization: "Restaurant Guru"
    },
    {
      icon: "🌟",
      title: "Gujarat Tourism Award",
      organization: "Government of Gujarat"
    },
    {
      icon: "👨‍🍳",
      title: "Food Connoisseurs Award 2024",
      organization: "Indian Culinary Federation"
    },
    {
      icon: "🥇",
      title: "Excellence in Vegetarian Cuisine",
      organization: "Times Food Awards"
    },
    {
      icon: "📜",
      title: "Heritage Chef Recognition",
      organization: "Cultural Ministry"
    },
    {
      icon: "✨",
      title: "Innovation in Plant-Based Dining",
      organization: "Modern Restaurant Association"
    }
  ];

  return (
    <section className="bg-ivory py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="serif-heading text-3xl lg:text-4xl text-soft-black mb-6">
            Recognition & Awards
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Celebrating excellence in vegetarian culinary arts and restaurant consultancy across India and beyond.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white p-6 lg:p-8 text-center editorial-hover group"
            >
              <div className="text-3xl lg:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {award.icon}
              </div>
              <h3 className="gotham-heading font-semibold text-soft-black text-sm lg:text-base mb-2 leading-tight">
                {award.title}
              </h3>
              <p className="text-muted-foreground text-xs lg:text-sm">
                {award.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionGrid;