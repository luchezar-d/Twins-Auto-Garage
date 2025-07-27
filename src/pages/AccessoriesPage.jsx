import { useNavbarHeight } from '../hooks/useNavbarHeight';

const AccessoriesPage = () => {
  const navbarHeight = useNavbarHeight();
  
  const customAccessories = [
    {
      id: 1,
      name: "Premium Phone Integration",
      category: "INTERIOR TECH",
      description: "Professional phone mount installation with wireless charging integration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      featured: true
    },
    {
      id: 2,
      name: "Custom Steering Upgrade",
      category: "INTERIOR STYLING",
      description: "Premium leather steering wheel cover with custom stitching and enhanced grip",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      featured: false
    },
    {
      id: 3,
      name: "Power Solution Install",
      category: "ELECTRONICS",
      description: "Professional dual USB fast charging adapter installation with LED indicators",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      featured: true
    },
    {
      id: 4,
      name: "Interior Organization System",
      category: "STORAGE SOLUTIONS",
      description: "Custom backseat organizer with tablet integration and premium materials",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="bg-gradient-to-r from-gray-900 to-black text-white py-20" 
        style={{ 
          marginTop: `${Math.max(navbarHeight, 72)}px` // Ensure minimum 72px margin
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              CUSTOM ACCESSORIES
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Personalize your vehicle with our premium custom accessories and professional installation services
            </p>
          </div>
        </div>
      </section>

      {/* Accessories Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium tracking-[0.25em] uppercase text-gray-500 mb-4">
              PREMIUM INSTALLATIONS
            </h2>
            <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-wider uppercase">
              ACCESSORY SHOWCASE
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional installation of premium accessories designed to enhance both functionality and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customAccessories.map((accessory) => (
              <div key={accessory.id} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={accessory.image} 
                    alt={accessory.name} 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  {accessory.featured && (
                    <span className="absolute top-4 left-4 bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-wide">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="p-8">
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-500 mb-3">
                    {accessory.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-4 text-black">{accessory.name}</h3>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">{accessory.description}</p>
                  <div className="flex justify-center">
                    <button className="px-8 py-3 bg-black text-white text-sm font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="px-10 py-4 border-2 border-black text-black font-semibold text-sm tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300">
              VIEW ALL ACCESSORIES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessoriesPage;
