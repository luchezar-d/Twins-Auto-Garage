import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">TWINS AUTO GARAGE</h3>
            <p className="text-gray-300 mb-4">
              Professional automotive customization and premium parts installation. Transforming vehicles with precision and style.
            </p>
            <div className="space-y-2 mb-4">
              <p className="text-gray-300 text-sm">📍 123 Main Street, Your City, State 12345</p>
              <p className="text-gray-300 text-sm">📞 (555) 123-4567</p>
              <p className="text-gray-300 text-sm">✉️ info@twinsautogarage.com</p>
              <p className="text-gray-300 text-sm">🕒 Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/twinsautogarage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                title="Follow us on Instagram"
              >
                📷
              </a>
              <a 
                href="mailto:info@twinsautogarage.com" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                title="Email us"
              >
                ✉️
              </a>
              <a 
                href="https://wa.me/5551234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
                title="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wide">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/parts" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wide">
                  Auto Parts
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wide">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/tint" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wide">
                  Window Tint
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wide">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wide">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center text-sm">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                123 Auto Street, City, State 12345
              </p>
              <p className="flex items-center text-sm">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                (555) 123-4567
              </p>
              <p className="flex items-center text-sm">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                info@twinsautogarage.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300 text-sm">
            © 2025 Twins Auto Garage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
