import { useNavbarHeight } from '../hooks/useNavbarHeight';

const PartsPage = () => {
  const navbarHeight = useNavbarHeight();
  
  const performanceBuilds = [
    {
      id: 1,
      name: "Premium Brake Upgrade",
      category: "BRAKES",
      description: "High-performance ceramic brake pad installation with custom rotors for superior stopping power",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      name: "LED Lighting Conversion",
      category: "LIGHTING",
      description: "Complete LED headlight and taillight conversion with professional installation and wiring",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 3,
      name: "Performance Air Intake",
      category: "ENGINE",
      description: "Cold air intake system installation for improved horsepower and engine efficiency",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 4,
      name: "Custom Exhaust Build",
      category: "EXHAUST",
      description: "Cat-back exhaust system design and installation for enhanced performance and sound",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 5,
      name: "Suspension Upgrade",
      category: "SUSPENSION",
      description: "Coilover installation with custom tuning for improved handling and stance",
      image: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 6,
      name: "Turbo Installation",
      category: "ENGINE",
      description: "Complete turbocharger installation with custom piping and tuning",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    }
  ];

  const categories = ["ALL", "BRAKES", "LIGHTING", "ENGINE", "EXHAUST", "SUSPENSION"];

  return (
    <div className="min-h-screen">
      {/* Hero Section - dynamically positioned below navbar */}
      <section 
        className="bg-black text-white py-20" 
        style={{ 
          marginTop: `${Math.max(navbarHeight, 72)}px` // Ensure minimum 72px margin
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              PERFORMANCE BUILDS
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcase of high-performance automotive upgrades and custom installations. Explore our latest builds and premium parts.
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
            {performanceBuilds.map((build) => (
              <div key={build.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={build.image} 
                    alt={build.name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  {build.featured && (
                    <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-2">
                    {build.category}
                  </p>
                  <h3 className="text-xl font-bold mb-3 text-black">{build.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{build.description}</p>
                  <div className="flex justify-center">
                    <button className="px-6 py-3 bg-black text-white text-sm font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300">
                      VIEW BUILD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">GET IN TOUCH</h2>
          <p className="text-gray-600 mb-8">Ready to upgrade your vehicle? Contact us to discuss your next performance build.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button className="px-8 py-3 bg-black text-white text-sm font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300">
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartsPage;
