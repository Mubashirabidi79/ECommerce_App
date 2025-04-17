import { useNavigate } from "react-router-dom";

const About = () => {

     const navigateAbout = useNavigate()
      const goToProduct = ()=>{
        navigateAbout('/products')
      }
    
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About ShopEasy</h1>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2023, ShopEasy started as a small online store with a big vision - to make online shopping 
              easy, enjoyable, and accessible to everyone. What began as a passion project has now grown into a 
              trusted e-commerce platform serving thousands of happy customers worldwide.
            </p>
            <p className="text-gray-700">
              We carefully curate our product selection to bring you the best quality items at competitive prices. 
              Our team works tirelessly to ensure your shopping experience is seamless from start to finish.
            </p>
          </div>
  
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At ShopEasy, our mission is simple: to provide exceptional value through high-quality products, 
              outstanding customer service, and a user-friendly shopping experience.
            </p>
            <p className="text-gray-700">
              We believe that shopping online should be convenient, secure, and fun. That's why we're constantly 
              improving our platform and services to meet your needs.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-600">Quality Products</h3>
                <p className="text-gray-700">
                  We source only the best products from trusted suppliers and manufacturers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-600">Fast Shipping</h3>
                <p className="text-gray-700">
                  Get your orders delivered quickly with our efficient shipping network.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-600">Customer Support</h3>
                <p className="text-gray-700">
                  Our friendly support team is always ready to assist you with any questions.
                </p>

     
              </div>
            </div>
          </div>
        </div>
        <button onClick={goToProduct} className= "  bg-green-600 text-white font-bold py-3 px-6 rounded-full hover:text-green-600 hover:bg-white transition duration-300" > Product </button>
      </div>
    );
  };
  
  export default About;