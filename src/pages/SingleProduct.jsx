import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const SingleProduct = () => {
  const params = useParams();
  const [loading, error, data] = useFetch(`https://dummyjson.com/products/${params.id}`);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-3xl font-bold">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-3xl font-bold">
        <h1 className="text-red-300">Error occurred</h1>
      </div>
    );
  }

  const originalPrice = (data.price / (1 - data.discountPercentage / 100)).toFixed(2);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl shadow-md">
      <img
        src={data.thumbnail}
        alt={data.title}
        className="w-full md:w-96 h-auto object-cover rounded-xl"
      />

      <div className="flex-1 space-y-4">
        <h2 className="text-3xl font-bold">{data.title}</h2>

        <div className="flex items-center space-x-2">
          <div className="text-yellow-500">{'★'.repeat(Math.round(data.rating))}</div>
          <span className="text-gray-500 text-sm">{data.rating} / 5</span>
        </div>

        <p className="text-gray-700">{data.description}</p>

        <div className="flex items-center gap-4 text-lg font-semibold">
          <span>${originalPrice}</span>
          {data.discountPercentage && (
            <>
              <span className="line-through text-gray-500">${data.price}</span>
              <span className="text-green-600 text-sm">
                ({data.discountPercentage}% OFF)
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-4">
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="border border-gray-300 rounded-md p-2 w-24"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Add to Cart
          </button>
        </div>

        <hr className="my-4" />

        <div className="text-sm text-gray-600 space-y-2">
          <p>
            <strong>Availability:</strong> {data.availabilityStatus} ({data.stock} left)
          </p>
          <p>
            <strong>Minimum Order Quantity:</strong> 24
          </p>
          <p>
            <strong>Shipping:</strong> Ships in 1 month
          </p>
          <p>
            <strong>Warranty:</strong> {data.warrantyInformation}
          </p>
          <p>
            <strong>Return Policy:</strong> {data.returnPolicy}
          </p>
        </div>

        <div className="mt-4">
          <img
            src="https://assets.dummyjson.com/public/qr-code.png"
            alt="QR Code"
            className="w-24"
          />
          <p className="text-sm text-gray-600 mt-2">
            <strong>Barcode:</strong> {data.sku}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
