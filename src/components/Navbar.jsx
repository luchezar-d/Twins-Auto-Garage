import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Track scroll on all pages now
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // UPDATED LOGIC: All pages respond to scroll
  // Homepage not scrolled = transparent + white text
  // Homepage scrolled = white bg + black text  
  // Other pages not scrolled = black bg + white text (no border)
  // Other pages scrolled = white bg + black text
  const isTransparent = isHomePage && !isScrolled;
  
  let navbarBg, textColor, forceTextColor;
  
  if (isTransparent) {
    // Homepage, not scrolled
    navbarBg = 'bg-transparent';
    textColor = 'text-white drop-shadow-lg';
    forceTextColor = { color: 'white' };
  } else if (isHomePage && isScrolled) {
    // Homepage, scrolled
    navbarBg = 'bg-white border-b border-gray-100 shadow-sm';
    textColor = 'text-black';
    forceTextColor = { color: 'black' };
  } else if (!isHomePage && !isScrolled) {
    // Other pages, not scrolled - black background, no border
    navbarBg = 'bg-black shadow-sm';
    textColor = 'text-white';
    forceTextColor = { color: 'white' };
  } else {
    // Other pages, scrolled - white background
    navbarBg = 'bg-white border-b border-gray-100 shadow-sm';
    textColor = 'text-black';
    forceTextColor = { color: 'black' };
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className={`font-bold text-lg tracking-wider transition-colors duration-300 ${textColor} hover:opacity-80`} style={forceTextColor}>
          TWINS AUTO GARAGE
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/accessories" className={`text-xs font-medium tracking-widest uppercase transition-opacity duration-200 ${textColor} hover:opacity-70`} style={forceTextColor}>
            ACCESSORIES
          </Link>
          <Link to="/parts" className={`text-xs font-medium tracking-widest uppercase transition-opacity duration-200 ${textColor} hover:opacity-70`} style={forceTextColor}>
            PARTS
          </Link>
          <Link to="/tint" className={`text-xs font-medium tracking-widest uppercase transition-opacity duration-200 ${textColor} hover:opacity-70`} style={forceTextColor}>
            TINT
          </Link>
          <Link to="/about" className={`text-xs font-medium tracking-widest uppercase transition-opacity duration-200 ${textColor} hover:opacity-70`} style={forceTextColor}>
            ABOUT
          </Link>
          <Link to="/contact" className={`text-xs font-medium tracking-widest uppercase transition-opacity duration-200 ${textColor} hover:opacity-70`} style={forceTextColor}>
            CONTACT
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className={`text-xs font-medium tracking-widest uppercase transition-opacity duration-200 ${textColor} hover:opacity-70`} style={forceTextColor}>
            LOGIN
          </button>
          <button className={`text-lg transition-opacity duration-200 ${textColor} hover:opacity-70`} style={forceTextColor}>
            🔍
          </button>
          <button className={`text-lg transition-opacity duration-200 ${textColor} hover:opacity-70`} style={forceTextColor}>
            🛒
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`focus:outline-none ${textColor}`}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-6 py-4 space-y-3">
            <Link to="/accessories" className="block text-black text-sm font-medium tracking-wide uppercase hover:opacity-70">
              ACCESSORIES
            </Link>
            <Link to="/parts" className="block text-black text-sm font-medium tracking-wide uppercase hover:opacity-70">
              PARTS
            </Link>
            <Link to="/tint" className="block text-black text-sm font-medium tracking-wide uppercase hover:opacity-70">
              TINT
            </Link>
            <Link to="/about" className="block text-black text-sm font-medium tracking-wide uppercase hover:opacity-70">
              ABOUT
            </Link>
            <Link to="/contact" className="block text-black text-sm font-medium tracking-wide uppercase hover:opacity-70">
              CONTACT
            </Link>
            <div className="border-t pt-3 mt-3">
              <button className="block text-black text-sm font-medium tracking-wide uppercase hover:opacity-70 mb-2">
                LOGIN
              </button>
              <button className="block text-black text-sm font-medium tracking-wide uppercase hover:opacity-70">
                CART 🛒
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
