import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* About Section */}
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <h3 className="text-xl font-bold mb-4">ShopEasy</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop shop for all your needs. We provide high-quality products with excellent customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/products" className="text-gray-400 hover:text-white">Products</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">123 Shopping Street, Retail City</p>
              <p className="mb-2">Email: info@shopeasy.com</p>
              <p className="mb-2">Phone: +1 234 567 890</p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;