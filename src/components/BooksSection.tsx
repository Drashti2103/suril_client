import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const BooksSection = () => {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) videoRef.current.pause();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // optional: restart from beginning
      videoRef.current.play();
    }
  };

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-0">
        {/* Full-width video hero */}
        <div
          className="relative w-full aspect-[2/1] mb-12 overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            src="/gif/book.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: hovered ? 0.5 : 1 }}
          />
          {hovered && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 p-8 text-center z-10 transition-opacity duration-300">
              <div className="text-soft-black text-base md:text-lg font-[Lato,sans-serif] mb-4">
                From his rich experience, Suril has written books for aspiring restaurateurs and culinary enthusiasts, his collection offers valuable insights into the art of restaurant management, culinary trends, restaurant operations and the finer aspects of the food industry. Explore his book recommendations for a taste of industry expertise and gastronomic inspiration.
              </div>
              <a
                href="#"
                className="inline-block mt-2 text-[#A4442E] font-semibold underline text-base md:text-lg font-[Gotham,sans-serif] hover:text-[#7a2e1c] transition"
              >
                Read More
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;