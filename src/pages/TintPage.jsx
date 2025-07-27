import { useNavbarHeight } from '../hooks/useNavbarHeight';

const TintPage = () => {
  const navbarHeight = useNavbarHeight();
  
  const tintServices = [
    {
      id: 1,
      name: "CERAMIC WINDOW TINT",
      description: "PREMIUM PROTECTION",
      features: ["99% UV Protection", "Superior Heat Rejection", "Crystal Clear Visibility", "Lifetime Warranty"],
      price: "From $299",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: true
    },
    {
      id: 2,
      name: "CARBON WINDOW TINT",
      description: "PERFORMANCE GRADE",
      features: ["Non-Metallic Construction", "No Signal Interference", "Fade Resistant", "5 Year Warranty"],
      price: "From $199",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: false
    },
    {
      id: 3,
      name: "DYED WINDOW TINT",
      description: "CLASSIC SOLUTION",
      features: ["Cost Effective", "Enhanced Privacy", "Glare Reduction", "2 Year Warranty"],
      price: "From $149",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: "🌡️",
      title: "HEAT REDUCTION",
      description: "Up to 60% heat rejection for enhanced comfort"
    },
    {
      icon: "☀️",
      title: "UV PROTECTION",
      description: "99% UV ray protection for you and your interior"
    },
    {
      icon: "🔒",
      title: "PRIVACY & SECURITY",
      description: "Enhanced privacy and shatter protection"
    },
    {
      icon: "🏆",
      title: "PROFESSIONAL INSTALL",
      description: "Expert installation with precision and care"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="bg-black text-white py-20" 
        style={{ 
          marginTop: navbarHeight ? `${navbarHeight}px` : '72px'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              PREMIUM WINDOW
              <br />
              <span className="text-red-500">TINTING</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional window tinting services for ultimate protection, comfort, and style. Transform your vehicle today.
            </p>
            <button className="btn-primary">
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">WHY CHOOSE PROFESSIONAL TINTING?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">TINT PACKAGES</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tintServices.map((service) => (
              <div key={service.id} className="relative">
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-red-500 text-white px-6 py-2 text-sm font-bold uppercase tracking-wide rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="product-card h-full">
                  <div className="relative">
                    <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white text-sm font-semibold uppercase tracking-wide">
                        {service.description}
                      </p>
                      <h3 className="text-white text-xl font-bold">{service.name}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold">{service.price}</span>
                      </div>
                      <button className="btn-primary w-full">
                        CHOOSE PACKAGE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-white">OUR INSTALLATION PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "CONSULTATION", desc: "Discuss your needs and select the perfect tint" },
              { step: "02", title: "PREPARATION", desc: "Thorough cleaning and surface preparation" },
              { step: "03", title: "INSTALLATION", desc: "Precision application by certified professionals" },
              { step: "04", title: "QUALITY CHECK", desc: "Final inspection and customer walkthrough" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-black text-red-500 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">READY TO UPGRADE?</h2>
          <p className="text-gray-600 mb-8">Schedule your professional window tinting appointment today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              BOOK APPOINTMENT
            </button>
            <button className="btn-secondary">
              GET QUOTE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TintPage;
