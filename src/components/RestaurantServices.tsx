import React, {
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
  } from "react";
  
  const useMedia = (
    queries: string[],
    values: number[],
    defaultValue: number
  ): number => {
    const get = () =>
      values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;
  
    const [value, setValue] = useState<number>(get);
  
    useEffect(() => {
      const handler = () => setValue(get);
      queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
      return () =>
        queries.forEach((q) =>
          matchMedia(q).removeEventListener("change", handler)
        );
    }, [queries]);
  
    return value;
  };
  
  const useMeasure = <T extends HTMLElement>() => {
    const ref = useRef<T | null>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });
  
    useLayoutEffect(() => {
      if (!ref.current) return;
      const ro = new ResizeObserver(([entry]) => {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      });
      ro.observe(ref.current);
      return () => ro.disconnect();
    }, []);
  
    return [ref, size] as const;
  };
  
  const preloadImages = async (urls: string[]): Promise<void> => {
    await Promise.all(
      urls.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = () => resolve();
          })
      )
    );
  };
  
  interface ServiceItem {
    id: string;
    name: string;
    img: string;
    height: number;
    description?: string;
  }
  
  interface ServicesMasonryProps {
    services: ServiceItem[];
    ease?: string;
    duration?: number;
    stagger?: number;
    animateFrom?: "bottom" | "top" | "left" | "right" | "center" | "random";
    onServiceClick?: (service: ServiceItem) => void;
  }
  
  const ServicesMasonry: React.FC<ServicesMasonryProps> = ({
    services,
    ease = "power3.out",
    duration = 0.6,
    stagger = 0.08,
    animateFrom = "bottom",
    onServiceClick,
  }) => {
    const columns = useMedia(
      [
        "(min-width:1200px)",
        "(min-width:900px)",
        "(min-width:600px)",
        "(min-width:400px)",
      ],
      [4, 3, 2, 2],
      1
    );
  
    const [containerRef, { width }] = useMeasure<HTMLDivElement>();
    const [imagesReady, setImagesReady] = useState(false);
    const [hoveredService, setHoveredService] = useState<string | null>(null);
  
    const getInitialPosition = (item: any) => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return { x: item.x, y: item.y };
  
      let direction = animateFrom;
      if (animateFrom === "random") {
        const dirs = ["top", "bottom", "left", "right"];
        direction = dirs[
          Math.floor(Math.random() * dirs.length)
        ] as typeof animateFrom;
      }
  
      switch (direction) {
        case "top":
          return { x: item.x, y: -200 };
        case "bottom":
          return { x: item.x, y: typeof window !== 'undefined' ? window.innerHeight + 200 : 800 };
        case "left":
          return { x: -200, y: item.y };
        case "right":
          return { x: typeof window !== 'undefined' ? window.innerWidth + 200 : 800, y: item.y };
        case "center":
          return {
            x: containerRect.width / 2 - item.w / 2,
            y: containerRect.height / 2 - item.h / 2,
          };
        default:
          return { x: item.x, y: item.y + 100 };
      }
    };
  
    useEffect(() => {
      preloadImages(services.map((s) => s.img)).then(() => setImagesReady(true));
    }, [services]);
  
    const grid = useMemo(() => {
      if (!width) return [];
      const colHeights = new Array(columns).fill(0);
      const gap = 20;
      const totalGaps = (columns - 1) * gap;
      const columnWidth = (width - totalGaps) / columns;
  
      return services.map((service) => {
        const col = colHeights.indexOf(Math.min(...colHeights));
        const x = col * (columnWidth + gap);
        const height = service.height;
        const y = colHeights[col];
  
        colHeights[col] += height + gap;
        return { ...service, x, y, w: columnWidth, h: height };
      });
    }, [columns, services, width]);
  
    const hasMounted = useRef(false);
  
    useLayoutEffect(() => {
      if (!imagesReady || typeof window === 'undefined') return;
  
      // Simple CSS transitions instead of GSAP for initial animation
      grid.forEach((item, index) => {
        const element = document.querySelector(`[data-key="${item.id}"]`) as HTMLElement;
        if (!element) return;
  
        if (!hasMounted.current) {
          // Initial animation
          element.style.opacity = '0';
          element.style.transform = 'translateY(50px)';
          
          setTimeout(() => {
            element.style.transition = `all 0.6s ease-out`;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.left = `${item.x}px`;
            element.style.top = `${item.y}px`;
            element.style.width = `${item.w}px`;
            element.style.height = `${item.h}px`;
          }, index * stagger * 1000);
        } else {
          // Layout updates
          element.style.transition = `all ${duration}s ${ease}`;
          element.style.left = `${item.x}px`;
          element.style.top = `${item.y}px`;
          element.style.width = `${item.w}px`;
          element.style.height = `${item.h}px`;
        }
      });
  
      hasMounted.current = true;
    }, [grid, imagesReady, stagger, duration, ease]);
  
    const handleMouseEnter = (serviceId: string) => {
      setHoveredService(serviceId);
    };
  
    const handleMouseLeave = () => {
      setHoveredService(null);
    };
  
    const handleServiceClick = (service: ServiceItem) => {
      if (onServiceClick) {
        onServiceClick(service);
      } else {
        console.log(`Clicked on ${service.name}`);
      }
    };
  
    return (
      <div className="w-full bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#B7410E] mb-4" style={{ fontFamily: 'Gotham, sans-serif' }}>
              Our Services
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Lato, sans-serif' }}>
              Comprehensive restaurant solutions from concept to success
            </p>
          </div>
          
          <div
            ref={containerRef}
            className="relative w-full"
            style={{ height: grid.length ? Math.max(...grid.map(item => item.y + item.h)) : 0 }}
          >
            {grid.map((item) => (
              <div
                key={item.id}
                data-key={item.id}
                className="absolute cursor-pointer group"
                style={{ 
                  willChange: "transform, width, height, opacity",
                  left: 0,
                  top: 0,
                  width: item.w,
                  height: item.h
                }}
                onClick={() => handleServiceClick(item)}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="relative w-full h-full bg-cover bg-center shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  
                  {/* Bottom info box on hover */}
                  <div 
                    className={`absolute bottom-0 left-0 right-0 bg-[#B7410E] text-white p-4 transition-all duration-300 ${
                      hoveredService === item.id ? 'opacity-100 translate-y-0 shadow-lg' : 'opacity-0 translate-y-full'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 
                        className="text-lg font-bold"
                        style={{ fontFamily: 'Gotham, sans-serif' }}
                      >
                        {item.name}
                      </h3>
                      <div className="flex items-center text-sm font-medium">
                        <span style={{ fontFamily: 'Lato, sans-serif' }}>Know more</span>
                        <svg 
                          className="ml-2 w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  // Sample component with restaurant service data
  const RestaurantServices: React.FC = () => {
    const services: ServiceItem[] = [
      {
        id: "menu-planning",
        name: "Menu Planning",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop",
        height: 280,
        description: "Strategic menu development and optimization"
      },
      {
        id: "kitchen-planning", 
        name: "Kitchen Planning",
        img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=350&fit=crop",
        height: 320,
        description: "Efficient kitchen layout and workflow design"
      },
      {
        id: "boh-planning",
        name: "BOH Planning", 
        img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&h=300&fit=crop",
        height: 260,
        description: "Back of house operations optimization"
      },
      {
        id: "prelaunch-preview",
        name: "Prelaunch Preview",
        img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=500&h=380&fit=crop", 
        height: 340,
        description: "Comprehensive prelaunch testing and refinement"
      },
      {
        id: "post-launch-supervision",
        name: "Post-Launch Supervision",
        img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=320&fit=crop",
        height: 290,
        description: "Ongoing support and performance monitoring"
      },
      {
        id: "launch-process",
        name: "Launch Process",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&h=360&fit=crop",
        height: 310,
        description: "Seamless restaurant opening coordination"
      },
      {
        id: "food-trials", 
        name: "Food Trials",
        img: "/images/food/4.jpg",
        height: 270,
        description: "Recipe development and taste testing"
      },
      {
        id: "food-styling",
        name: "Food Styling & Presentation", 
        img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=400&fit=crop",
        height: 350,
        description: "Visual appeal and plating excellence"
      },
      {
        id: "retainership",
        name: "Retainership",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=280&fit=crop", 
        height: 250,
        description: "Long-term partnership and advisory services"
      },
      {
        id: "hiring-training",
        name: "Hiring & Training",
        img: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=500&h=340&fit=crop",
        height: 300,
        description: "Staff recruitment and skill development"
      }
    ];
  
    const handleServiceClick = (service: ServiceItem) => {
      alert(`Learn more about ${service.name}: ${service.description}`);
    };
  
    return (
      <ServicesMasonry 
        services={services}
        animateFrom="bottom"
        stagger={0.1}
        onServiceClick={handleServiceClick}
      />
    );
  };
  
  export default RestaurantServices;