import React from 'react'
import useFetch from '../hooks/useFetch';
import ProductCard from '../components/ProductCard';

export default function Products() {
    const [loading,error,data] = useFetch('https://dummyjson.com/products')
    
    
    
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <p className="text-gray-700"></p>

        {loading && <h1>Loading</h1>}
        {error && <h1>Error Occurred</h1>}
        {data && 
        data.products.map((item)=>{
            
            return<ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.thumbnail}
            description={item.description} 
            // price={item.price + 100}
            discountedPrice={item.price}
            discountPercentage={item.discountPercentage}
            
            />  
        }) }
      </div>
    );
  }
  
