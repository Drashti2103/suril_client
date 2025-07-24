import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  const milestones = [
    { year: "2024", event: "Restaurant Consultant of the Year Award" },
    { year: "2022", event: "Gujarat Tourism Award Winner" },
    { year: "2020", event: "Founded Vegetarian Culinary Consultancy" },
    { year: "2018", event: "First Michelin-recommended vegetarian restaurant consultation" },
    { year: "2015", event: "Published 'The Art of Vegetarian Cooking'" },
    { year: "2010", event: "Began journey in vegetarian culinary arts" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Quote */}
      <section className="bg-rust py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <blockquote className="serif-heading text-3xl lg:text-4xl xl:text-5xl text-white leading-tight">
            "Vegetarian cuisine is not about limitation—it's about infinite possibility, 
            rooted in tradition and elevated through passion."
          </blockquote>
          <cite className="block text-white/80 text-lg mt-8 not-italic">
            — Suril Udeshi
          </cite>
        </div>
      </section>

      {/* Full-bleed Photo with Overlapping Text */}
      <section className="relative">
        <div className="h-96 lg:h-[70vh] bg-stone flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-8xl mb-4">👨‍🍳</div>
            <p className="text-xl">Master at Work</p>
          </div>
        </div>
        
        {/* Overlapping Content */}
        <div className="absolute -bottom-20 left-8 right-8 lg:left-16 lg:right-16">
          <div className="bg-white p-8 lg:p-12 max-w-2xl editorial-hover">
            <h2 className="serif-heading text-2xl lg:text-3xl text-soft-black mb-4">
              A Journey of Culinary Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From humble beginnings in traditional kitchens to becoming India's most sought-after 
              vegetarian culinary consultant, my journey has been one of continuous learning, 
              innovation, and deep respect for the art of plant-based cuisine.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Narrative */}
      <section className="bg-cream py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Journey Column */}
            <div>
              <h3 className="gotham-heading text-2xl font-semibold text-rust mb-8">
                The Journey
              </h3>
              <div className="space-y-6 text-charcoal leading-relaxed">
                <p>
                  My relationship with vegetarian cuisine began in my grandmother's kitchen, 
                  where I learned that every ingredient has a story, every spice has a purpose, 
                  and every dish carries the weight of tradition.
                </p>
                <p>
                  Over two decades, I've had the privilege of working with renowned restaurants, 
                  luxury hotels, and culinary institutions across India and internationally. 
                  Each project has been an opportunity to bridge the gap between traditional 
                  vegetarian cooking and contemporary dining expectations.
                </p>
                <p>
                  My approach isn't just about creating beautiful plates—it's about understanding 
                  the cultural significance of vegetarian cuisine and translating that into 
                  experiences that resonate with modern diners while honoring ancestral wisdom.
                </p>
              </div>
            </div>

            {/* Values Column */}
            <div>
              <h3 className="gotham-heading text-2xl font-semibold text-rust mb-8">
                Core Values
              </h3>
              <div className="space-y-8">
                <div className="bg-white p-6 lg:p-8 editorial-hover">
                  <h4 className="gotham-heading font-semibold text-soft-black mb-3">
                    Authenticity
                  </h4>
                  <p className="text-muted-foreground">
                    Every recipe, every technique, every flavor profile is deeply researched 
                    and respectfully interpreted to maintain its cultural integrity.
                  </p>
                </div>
                
                <div className="bg-white p-6 lg:p-8 editorial-hover">
                  <h4 className="gotham-heading font-semibold text-soft-black mb-3">
                    Innovation
                  </h4>
                  <p className="text-muted-foreground">
                    While honoring tradition, I believe in the power of thoughtful innovation 
                    to make vegetarian cuisine accessible and exciting for contemporary palates.
                  </p>
                </div>
                
                <div className="bg-white p-6 lg:p-8 editorial-hover">
                  <h4 className="gotham-heading font-semibold text-soft-black mb-3">
                    Excellence
                  </h4>
                  <p className="text-muted-foreground">
                    Every dish must meet the highest standards of taste, presentation, 
                    and nutritional value. Compromise is not in our vocabulary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="serif-heading text-3xl lg:text-4xl text-center text-soft-black mb-16">
            Milestones in Excellence
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-stone lg:left-1/2 lg:-ml-px"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-rust rounded-full lg:left-1/2 lg:-ml-2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                  }`}>
                    <div className="bg-ivory p-6 lg:p-8 editorial-hover">
                      <div className="gotham-heading text-2xl font-semibold text-rust mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-charcoal leading-relaxed">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h3 className="serif-heading text-3xl lg:text-4xl text-soft-black mb-6">
            Let's Create Something Extraordinary
          </h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you're looking to elevate your restaurant's vegetarian offerings or 
            create a completely new culinary experience, I'd love to discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-rust hover:bg-rust-dark text-white font-gotham px-8 py-3"
            >
              Start a Project
            </Button>
            <Button
              variant="outline"
              className="border-rust text-rust hover:bg-rust hover:text-white font-gotham px-8 py-3"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;