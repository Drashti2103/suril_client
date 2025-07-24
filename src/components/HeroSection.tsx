import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-white">
      {/* Main Hero Content */}
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left - Rust Background with Portrait */}
        <div className="hero-rust relative">
          <div className="absolute inset-0 p-8 lg:p-16">
            <img
              src="/lovable-uploads/4a6e82c4-71e5-4a90-920f-3d130cc132da.png"
              alt="Suril Udeshi"
              className="w-full h-full object-cover object-center rounded-lg"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="bg-ivory px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="serif-heading text-4xl lg:text-5xl xl:text-6xl text-soft-black mb-6 leading-tight">
              Who is{" "}
              <span className="text-rust block">SURIL UDESHI?</span>
            </h1>
            
            <div className="space-y-8">
              {/* Recognition Blocks - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-rust font-gotham font-semibold text-lg mb-2">
                    Recognition
                  </h3>
                  <p className="text-charcoal text-sm leading-relaxed">
                    "Restaurant Consultant of the Year 2024"<br />
                    by Restaurant Guru.Winner of Gujarat<br />
                    Tourism Awards & Food Connoisseurs<br />
                    awards in 2024 and 2022.
                  </p>
                </div>

                <div>
                  <h3 className="text-rust font-gotham font-semibold text-lg mb-2">
                    Recognition
                  </h3>
                  <p className="text-charcoal text-sm leading-relaxed">
                    "Restaurant Consultant of the Year 2024"<br />
                    by Restaurant Guru.Winner of Gujarat<br />
                    Tourism Awards & Food Connoisseurs<br />
                    awards in 2024 and 2022.
                  </p>
                </div>

                <div>
                  <h3 className="text-rust font-gotham font-semibold text-lg mb-2">
                    Recognition
                  </h3>
                  <p className="text-charcoal text-sm leading-relaxed">
                    "Restaurant Consultant of the Year 2024"<br />
                    by Restaurant Guru.Winner of Gujarat<br />
                    Tourism Awards & Food Connoisseurs<br />
                    awards in 2024 and 2022.
                  </p>
                </div>

                <div>
                  <h3 className="text-rust font-gotham font-semibold text-lg mb-2">
                    Recognition
                  </h3>
                  <p className="text-charcoal text-sm leading-relaxed">
                    "Restaurant Consultant of the Year 2024"<br />
                    by Restaurant Guru.Winner of Gujarat<br />
                    Tourism Awards & Food Connoisseurs<br />
                    awards in 2024 and 2022.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Introduction Section */}
      <div className="bg-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="serif-heading text-3xl lg:text-4xl xl:text-5xl text-soft-black mb-8 leading-tight">
            India's Foremost Vegetarian Culinary Expert
          </h2>
          <p className="serif-heading italic text-xl lg:text-2xl text-muted-foreground mb-12">
            Slow living. High taste. Timeless expertise.
          </p>
          <Button
            variant="outline"
            className="border-rust text-rust hover:bg-rust hover:text-white font-gotham text-lg px-8 py-3 rounded-none"
          >
            Explore Culinary Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;