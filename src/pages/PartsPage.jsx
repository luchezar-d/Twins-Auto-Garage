import { useNavbarHeight } from '../hooks/useNavbarHeight';

const PartsPage = () => {
  const navbarHeight = useNavbarHeight();
  
  const autoparts = [
    {
      id: 1,
      name: "Premium Brake Pads",
      category: "BRAKES",
      description: "High-performance ceramic brake pads for superior stopping power and durability",
      price: "89.99",
      originalPrice: "109.99",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      inStock: true,
      isNew: true
    },
    {
      id: 2,
      name: "LED Headlight Kit",
      category: "LIGHTING",
      description: "Ultra-bright LED conversion kit for enhanced visibility and modern styling",
      price: "149.99",
      originalPrice: null,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      inStock: true,
      isNew: false
    },
    {
      id: 3,
      name: "Performance Air Filter",
      category: "ENGINE",
      description: "High-flow air filter for improved engine performance and efficiency",
      price: "29.99",
      originalPrice: "39.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      inStock: true,
      isNew: false
    },
    {
      id: 4,
      name: "Sport Exhaust System",
      category: "EXHAUST",
      description: "Cat-back exhaust system for enhanced performance and aggressive sound",
      price: "799.99",
      originalPrice: "899.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      inStock: false,
      isNew: true
    },
    {
      id: 5,
      name: "Coilover Suspension Kit",
      category: "SUSPENSION",
      description: "Adjustable coilover suspension for improved handling and stance",
      price: "1299.99",
      originalPrice: null,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1621274403997-37aace184f49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      inStock: true,
      isNew: false
    },
    {
      id: 6,
      name: "Cold Air Intake",
      category: "ENGINE",
      description: "Cold air intake system for increased horsepower and torque",
      price: "299.99",
      originalPrice: "349.99",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      inStock: true,
      isNew: false
    }
  ];

  const categories = ["ALL", "BRAKES", "LIGHTING", "ENGINE", "EXHAUST", "SUSPENSION"];

  return (
    <div className="min-h-screen">
      {/* Hero Section - dynamically positioned below navbar */}
      <section 
        className="bg-black text-white py-20" 
        style={{ 
          marginTop: navbarHeight ? `${navbarHeight}px` : '72px' // fallback to estimated height
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              PREMIUM AUTO PARTS
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              High-performance automotive parts engineered for excellence. Upgrade your vehicle with our premium selection.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 text-sm font-semibold uppercase tracking-wide border-2 border-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {autoparts.map((part) => (
              <div key={part.id} className="product-card">
                <div className="relative">
                  <img src={part.image} alt={part.name} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {part.isNew && (
                      <span className="bg-red-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                        NEW
                      </span>
                    )}
                    {!part.inStock && (
                      <span className="bg-gray-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                        OUT OF STOCK
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    {part.category}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{part.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{part.description}</p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(part.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({part.rating})</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold">${part.price}</span>
                      {part.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${part.originalPrice}</span>
                      )}
                    </div>
                    <button 
                      className={`btn-primary text-xs px-4 py-2 ${!part.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={!part.inStock}
                    >
                      {part.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">PERFORMANCE NEWSLETTER</h2>
          <p className="text-gray-600 mb-8">Get exclusive deals on premium auto parts and performance upgrades.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="btn-primary">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartsPage;
