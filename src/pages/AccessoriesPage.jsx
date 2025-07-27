import { useNavbarHeight } from '../hooks/useNavbarHeight';

const AccessoriesPage = () => {
  const navbarHeight = useNavbarHeight();
  
  const accessories = [
    {
      id: 1,
      name: "Car Phone Mount",
      description: "Universal magnetic dashboard mount for smartphones",
      price: "24.99",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Steering Wheel Cover",
      description: "Premium leather steering wheel cover with grip enhancement",
      price: "34.99",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Car Charger",
      description: "Dual USB fast charging adapter with LED indicator",
      price: "15.99",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Seat Organizer",
      description: "Multi-pocket backseat organizer with tablet holder",
      price: "29.99",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div 
        className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16" 
        style={{ 
          marginTop: navbarHeight ? `${navbarHeight}px` : '72px'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">Car Accessories</h1>
          <p className="text-xl font-light">
            Enhance your driving experience with our premium collection of automotive accessories
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {accessories.map((product) => (
              <div key={product.id} className="card">
                <img src={product.image} alt={product.name} />
                <div className="card-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="price">${product.price}</span>
                    <button className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessoriesPage;
