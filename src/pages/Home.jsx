import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Smart Watch', price: 199.99, image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Bluetooth Speaker', price: 79.99, image: 'https://via.placeholder.com/300' },
  ];
  const navigateAbout = useNavigate()
  const goToAbout = ()=>{
    navigateAbout('/about')
  }

  return (



    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 px-4 rounded-lg mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ShopEasy</h1>
          <p className="text-xl mb-8">Discover amazing products at unbeatable prices</p>
          <Link 
            to="/products" 
            className="bg-white text-green-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

        <button onClick={goToAbout} className="bg-green-600 text-white font-bold py-3 px-6 rounded-full hover:text-green-600 hover:bg-white transition duration-300" > About </button>
     
      {/* Call to Action */}
      <section className="bg-gray-100 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Sign Up for Our Newsletter</h2>
        <p className="mb-6">Get the latest updates on new products and special offers</p>
        <div className="max-w-md mx-auto flex">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none"
          />
          <button className="bg-green-500 text-white px-6 py-2 rounded-r-lg hover:bg-green-600 transition duration-300">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;