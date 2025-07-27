import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
    }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      
      {/* Content positioned at bottom third */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center pb-20 text-white text-center px-4">
        <div className="space-y-4">
          {/* Subtitle */}
          <p className="text-sm tracking-widest uppercase text-gray-300 mb-2">
            Premium Automotive Showcase
          </p>
          
          {/* Main title */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Custom Builds
          </h1>
          
          {/* CTA Button */}
          <Link 
            to="/parts"
            className="inline-block px-6 py-2 border border-white text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300 mb-8"
          >
            Explore Builds
          </Link>
          
          {/* Scroll indicator - bouncing arrow */}
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
