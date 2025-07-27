import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Brake System",
      category: "PERFORMANCE PARTS",
      description: "High-performance ceramic brake pads and rotors for superior stopping power",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: true
    },
    {
      id: 2,
      name: "LED Headlight System", 
      category: "LIGHTING",
      description: "Ultra-bright LED conversion kit for enhanced visibility and style",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: false
    },
    {
      id: 3,
      name: "Carbon Fiber Spoiler",
      category: "ACCESSORIES", 
      description: "Lightweight carbon fiber rear spoiler for enhanced aerodynamics",
      price: "$549.99",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: true
    }
  ];

  const categories = [
    {
      name: "BRAKE SYSTEMS",
      subtitle: "OUR FLAGSHIP DESIGN", 
      description: "BUILT STRONGER AND MADE TO LAST",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/parts",
      buttonText: "SHOP BRAKE SYSTEMS"
    },
    {
      name: "WINDOW TINTING",
      subtitle: "THE NEW STANDARD",
      description: "THE ULTIMATE PROTECTION UPGRADE", 
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "/tint",
      buttonText: "BOOK TINTING"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Intro Text Section - Bridge between hero and categories */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-medium tracking-[0.25em] uppercase text-gray-500 mb-6">
            PREMIUM AUTOMOTIVE SOLUTIONS
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            EXPLORE OUR CATEGORIES
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            From high-performance parts to premium accessories, discover everything you need to transform your vehicle. 
            Each category features carefully curated products designed for excellence and built to last.
          </p>
        </div>
      </section>

      {/* Main Product Categories - Like RRW's main sections */}
      {categories.map((category, index) => (
        <section key={index} className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${category.image}')` }}
          ></div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <p className="text-gray-300 text-sm font-medium tracking-[0.25em] uppercase mb-4 opacity-90">
              {category.subtitle}
            </p>
            <h2 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider uppercase leading-none mb-6">
              {category.name}
            </h2>
            <p className="text-gray-200 text-lg font-light mb-8 opacity-90">
              {category.description}
            </p>
            <Link 
              to={category.link}
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              {category.buttonText}
            </Link>
          </div>
        </section>
      ))}

      {/* New Arrivals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-black font-bold text-3xl md:text-4xl tracking-widest uppercase text-center mb-16">
            NEW ARRIVALS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                      NEW
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-bold mb-3 text-black">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-black">{product.price}</span>
                    <button className="px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300">
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/parts"
              className="px-8 py-3 border-2 border-black text-black font-semibold text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300"
            >
              SHOP ALL
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white font-bold text-2xl md:text-3xl tracking-widest uppercase mb-4">
            STAY IN TOUCH
          </h2>
          <p className="text-gray-300 mb-8 text-sm">
            Subscribe to get special offers, new product announcements and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 px-4 py-3 bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white uppercase text-xs tracking-wide"
            />
            <button className="px-8 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold text-lg tracking-wider mb-4">TWINS AUTO GARAGE</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Your premier destination for auto parts, accessories, and professional window tinting services.
              </p>
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-400 hover:text-black transition-colors duration-300">
                  <span className="text-lg">📘</span>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-black transition-colors duration-300">
                  <span className="text-lg">📷</span>
                </Link>
              </div>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-bold text-sm tracking-widest uppercase mb-4">SHOP</h4>
              <ul className="space-y-2">
                <li><Link to="/parts" className="text-gray-600 hover:text-black text-sm uppercase tracking-wide transition-colors duration-300">Auto Parts</Link></li>
                <li><Link to="/accessories" className="text-gray-600 hover:text-black text-sm uppercase tracking-wide transition-colors duration-300">Accessories</Link></li>
                <li><Link to="/tint" className="text-gray-600 hover:text-black text-sm uppercase tracking-wide transition-colors duration-300">Window Tinting</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-sm tracking-widest uppercase mb-4">COMPANY</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-black text-sm uppercase tracking-wide transition-colors duration-300">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-black text-sm uppercase tracking-wide transition-colors duration-300">Contact</Link></li>
                <li><Link to="/careers" className="text-gray-600 hover:text-black text-sm uppercase tracking-wide transition-colors duration-300">Careers</Link></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-sm tracking-widest uppercase mb-4">SUPPORT</h4>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-gray-600 hover:text-black text-sm uppercase tracking-wide transition-colors duration-300">Help Center</Link></li>
                <li><Link to="/shipping" className="text-gray-600 hover:text-black text-sm uppercase tracking-wide transition-colors duration-300">Shipping Info</Link></li>
                <li><Link to="/returns" className="text-gray-600 hover:text-black text-sm uppercase tracking-wide transition-colors duration-300">Returns</Link></li>
                <li><Link to="/warranty" className="text-gray-600 hover:text-black text-sm uppercase tracking-wide transition-colors duration-300">Warranty</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs">
              © 2025 Twins Auto Garage. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <span className="text-gray-400 text-xs">💳</span>
              <span className="text-gray-400 text-xs">💳</span>
              <span className="text-gray-400 text-xs">💳</span>
              <span className="text-gray-400 text-xs">💳</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
