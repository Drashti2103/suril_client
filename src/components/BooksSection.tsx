import { Button } from "@/components/ui/button";

const BooksSection = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="bg-ivory p-8 lg:p-12 editorial-hover">
              <div className="aspect-square bg-stone rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-6xl mb-4">📚</div>
                  <p className="text-lg">Book Collection</p>
                  <p className="text-sm">Hand-curated culinary wisdom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h2 className="serif-heading text-3xl lg:text-4xl text-soft-black mb-6">
              Books & Thought Leadership
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Dive deep into the world of vegetarian culinary excellence through carefully curated insights, recipes, and philosophies that have shaped modern Indian cuisine.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="border-l-4 border-rust pl-6">
                <h3 className="gotham-heading text-lg font-semibold text-soft-black mb-2">
                  The Art of Vegetarian Cooking
                </h3>
                <p className="text-muted-foreground">
                  A comprehensive guide to elevating plant-based cuisine through traditional techniques and modern innovation.
                </p>
              </div>
              
              <div className="border-l-4 border-rust pl-6">
                <h3 className="gotham-heading text-lg font-semibold text-soft-black mb-2">
                  Keynote: Future of Indian Vegetarian Cuisine
                </h3>
                <p className="text-muted-foreground">
                  Exploring how traditional vegetarian cooking is evolving in contemporary restaurant environments.
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              className="border-rust text-rust hover:bg-rust hover:text-white font-gotham px-8 py-3 rounded-none"
            >
              View Books
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;