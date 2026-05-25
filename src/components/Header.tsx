import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Hammer, MessageSquare } from "lucide-react";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { label: "נעים להכיר", target: "about" },
    { label: "שירותים", target: "services" },
    { label: "צור קשר", target: "contact" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-gradient-to-b from-black/60 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white block">
                עידן <span className="text-brown-400">שיפוצים</span>
              </span>
              <span className="text-xs tracking-[0.2em] font-light text-gray-400 block -mt-1">
                אחזקות ועבודות גמר
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 border-r border-white/10 pr-6 mr-6 flex-grow justify-start">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-gray-200 hover:text-brown-400 text-sm font-semibold transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Call to Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-brown-500 to-brown-600 hover:from-brown-600 hover:to-brown-700 text-white font-bold text-base px-8 py-3.5 rounded-full shadow-lg shadow-brown-500/25 hover:shadow-brown-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Phone className="h-5 w-5 animate-pulse" />
              <span>לפרטים נוספים</span>
            </button>
          </div>

          {/* Mobile hamburger icon */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white bg-white/10 hover:bg-white/20 rounded-full"
              id="mobile-menu-trigger"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Slide Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 shadow-2xl py-6 px-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="text-right text-gray-200 hover:text-brown-400 py-3 text-base font-semibold border-b border-gray-800/60"
              >
                {link.label}
              </button>
            ))}

            <div className="mt-4 flex flex-col pt-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-brown-500 to-brown-600 hover:from-brown-600 hover:to-brown-700 text-white font-bold text-base px-8 py-4 rounded-full mt-2 shadow-lg transition-all duration-300"
              >
                <Phone className="h-5 w-5" />
                <span>לפרטים נוספים</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
