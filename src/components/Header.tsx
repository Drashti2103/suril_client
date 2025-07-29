import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigation = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "/services" },
    { name: "PROJECTS", href: "/projects" },
    { name: "EVENTS", href: "/events" },
    { name: "BLOGS", href: "/blogs" },
    { name: "AWARDS", href: "/awards" },
    { name: "PRESS", href: "/press" },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <style>
        {`
          .nav-link {
            position: relative;
            display: inline-block;
          }
          
          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 50%;
            background-color: white;
            transition: all 0.3s ease;
            transform: translateX(-50%);
          }
          
          .nav-link:hover::after,
          .nav-link.active::after {
            width: 100%;
          }
          
          .nav-link:hover {
            transform: translateY(-1px);
          }
          
          /* Mobile menu animation */
          .mobile-menu-enter {
            opacity: 0;
            transform: translateY(-10px);
          }
          
          .mobile-menu-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.3s ease;
          }
          
          .mobile-menu-exit {
            opacity: 1;
            transform: translateY(0);
          }
          
          .mobile-menu-exit-active {
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.3s ease;
          }
        `}
      </style>
      
      <header className="bg-[#B7410E] py-2 px-4 md:px-6 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Suril Udeshi Logo" 
              className="h-8 w-auto"
            />
            <div className="text-white text-lg md:text-xl font-gotham font-semibold tracking-wider">
              SURIL UDESHI
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link text-white font-gotham text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive(item.href) ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-[#B7410E] font-gotham text-sm px-4 py-1.5 rounded-none transition-all duration-300 hover:shadow-lg"
            >
              GET IN TOUCH
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#B7410E] border-t border-white/20 shadow-lg">
            <nav className="flex flex-col py-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={`px-6 py-3 text-white font-gotham text-sm font-medium tracking-wide transition-all duration-200 hover:bg-white/10 border-b border-white/10 last:border-b-0 ${
                    isActive(item.href) ? "bg-white/20" : ""
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'slideInLeft 0.3s ease forwards'
                  }}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="px-6 pt-4">
                <Button
                  variant="outline"
                  className="w-full border-white text-white bg-transparent hover:bg-white hover:text-[#B7410E] font-gotham text-sm px-4 py-2 rounded-none transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  GET IN TOUCH
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <style>
        {`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default Header;