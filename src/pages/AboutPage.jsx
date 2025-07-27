import { useNavbarHeight } from '../hooks/useNavbarHeight';

const AboutPage = () => {
  const navbarHeight = useNavbarHeight();
  
  return (
    <div className="min-h-screen">
      <div 
        className="bg-gradient-to-r from-green-800 to-blue-800 text-white py-16" 
        style={{ 
          marginTop: navbarHeight ? `${navbarHeight}px` : '72px'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">About Twins Auto Garage</h1>
          <p className="text-xl font-light">
            Your trusted automotive partner since 2010, serving the community with quality parts and exceptional service
          </p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <h2>Our Story</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Founded by twin brothers John and Mike in 2010, Twins Auto Garage began as a small family business 
            with a simple mission: to provide high-quality automotive parts and services at fair prices.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            What started in a modest garage has grown into a full-service automotive parts store and service center, 
            but we've never forgotten our roots. We still treat every customer like family and stand behind every 
            part we sell and every service we provide.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            Today, we're proud to serve thousands of customers throughout the region, from weekend mechanics 
            to professional shops, all while maintaining the personal touch that makes us different.
          </p>
        </div>
      </section>
      
      <section className="section bg-gray">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div className="text-center" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
              <h3>Quality First</h3>
              <p>We source only the highest quality parts from trusted manufacturers</p>
            </div>
            <div className="text-center" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👥</div>
              <h3>Expert Service</h3>
              <p>Our knowledgeable team is always ready to help you find the right parts</p>
            </div>
            <div className="text-center" style={{ padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times and efficient service are our priorities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
