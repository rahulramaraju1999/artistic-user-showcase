
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="section-container py-0">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-bold text-xl md:text-2xl text-navy">
            Rahul<span className="text-highlight">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="font-medium highlight-link text-navy"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button
              variant="ghost" 
              className="p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-4 md:hidden bg-white rounded-lg py-2 px-4 shadow-lg animate-fade-in">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="block py-2 px-4 text-navy font-medium hover:bg-softgray hover:text-highlight rounded-md transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
