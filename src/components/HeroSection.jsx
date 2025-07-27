import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Centered Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Small Top Line - Gray */}
        <p className="text-gray-300 text-sm sm:text-base font-medium tracking-[0.25em] uppercase mb-4 opacity-90">
          THIS SEASON'S HOTTEST
        </p>
        
        {/* Main Title - White Bold */}
        <h1 className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider uppercase leading-none mb-8">
          AUTO UPGRADES
        </h1>
        
        {/* CTA Button */}
        <Link 
          to="/parts"
          className="inline-block mt-4 px-8 py-3 border-2 border-white text-white font-semibold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
        >
          FIND YOURS HERE
        </Link>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white opacity-60">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
