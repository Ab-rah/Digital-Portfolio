'use client'
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Nav items with dropdown for Projects
  const navItems = [
    { name: "Home", href: "#home", hasDropdown: false },
    { name: "About", href: "#about", hasDropdown: false },
    { 
      name: "Projects", 
      href: "#projects", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Web Development", href: "#web-development" },
        { name: "Mobile Apps", href: "#mobile-apps" },
        { name: "UI/UX Design", href: "#ui-ux-design" }
      ]
    },
    { name: "Contact", href: "#contact", hasDropdown: false }
  ];

  // Handle navigation item click
  const handleNavItemClick = (section:any) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      {/* Background with gradient and blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-indigo-900/90 backdrop-blur-md shadow-lg transform-gpu"></div>
      
      {/* Decorative curved shape at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden h-3">
        <svg 
          className="absolute bottom-0 w-full h-24 transform translate-y-1/2" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C300,90 600,-20 1200,80 L1200,120 L0,120 Z" 
            className="fill-white/10"
          ></path>
        </svg>
      </div>
      
      {/* Navbar Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <span className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                SYMBOL MASTER
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-purple-400/0"></span>
            </div>
          </div>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  onClick={() => handleNavItemClick(item.name.toLowerCase())}
                  className={`
                    px-4 py-2 mx-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center
                    ${activeSection === item.name.toLowerCase() 
                      ? "text-white bg-white/10" 
                      : "text-white/70 hover:text-white hover:bg-white/5"}
                  `}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown size={14} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </a>
                
                {/* Dropdown for Projects */}
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-1 w-48 origin-top-left rounded-lg bg-white/10 backdrop-blur-xl shadow-lg ring-1 ring-black/5 
                                 opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                 transition-all duration-300 transform scale-95 group-hover:scale-100">
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Animated underline */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 
                  rounded-full transition-all duration-300 ${activeSection === item.name.toLowerCase() ? "w-3/4 opacity-100" : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-70"}`}>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-medium
                             shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transform hover:-translate-y-0.5 
                             transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors duration-200"
            >
              {isOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div 
        className={`
          md:hidden fixed inset-0 z-40 bg-gradient-to-b from-indigo-900/95 to-purple-900/95 backdrop-blur-lg
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-20 space-y-8">
          {navItems.map((item) => (
            <div key={item.name} className="text-center">
              <a
                href={item.href}
                onClick={() => handleNavItemClick(item.name.toLowerCase())}
                className={`text-2xl font-medium ${
                  activeSection === item.name.toLowerCase() 
                    ? "text-cyan-400" 
                    : "text-white hover:text-cyan-300"
                } transition-colors duration-200`}
              >
                {item.name}
              </a>
              
              {/* Dropdown items for mobile */}
              {item.hasDropdown && item.name.toLowerCase() === "projects" && (
                <div className="mt-4 space-y-4">
                  {item.dropdownItems.map((dropdownItem) => (
                    <a
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block text-lg text-white/80 hover:text-cyan-300 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <button className="mt-8 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-medium
                           shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transform hover:-translate-y-0.5 
                           transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-400">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}