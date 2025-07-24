import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "RECOGNITION", href: "/recognition" },
    { name: "BLOGS", href: "/blogs" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="hero-rust py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl font-gotham font-semibold tracking-wider">
          SURIL UDESHI
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-white font-gotham text-sm font-medium tracking-wide transition-opacity hover:opacity-80 ${
                isActive(item.href) ? "opacity-100" : "opacity-90"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-white text-white bg-transparent hover:bg-white hover:text-rust font-gotham text-sm px-6 py-2"
          >
            GET IN TOUCH
          </Button>
          <Button
            className="bg-white text-rust hover:bg-ivory font-gotham text-sm px-6 py-2"
          >
            Apply for Job
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;