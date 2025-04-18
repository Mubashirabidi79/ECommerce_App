import { useNavigate } from 'react-router-dom';

const ProductCard = ({ 
  id,
  title, 
  image, 
  description, 
  price, 
  discountedPrice, 
  discountPercentage 
}) => {

    const navigate = useNavigate()


  return (
    <div className='inline-flex p-0.5 '>
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-gray-200 w-3xs ">
      {/* Product Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold mb-1 line-clamp-1">{title}</h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        
        {/* Pricing */}
        <div className="flex items-center gap-2 mb-3">
          {discountedPrice && (
            <>
              <span className="text-green-600 font-bold text-lg">${discountedPrice}</span>
              <span className="text-gray-400 line-through text-sm">${price}</span>
              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                {discountPercentage}% OFF
              </span>
            </>
          )}
          {!discountedPrice && (
            <span className="text-green-600 font-bold text-lg">${price}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
          onClick={() => navigate(`/products/${id}`)}

            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded text-sm text-center transition"
          
          >
            Details
          </button>
          <button
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-sm transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;