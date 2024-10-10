"use client";
import Image from "next/image";
import { useState } from "react";
const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
    return ( 
        <>
        Single product page
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            
            <div className="md:col-span-1">
            <div className="relative w-full h-[400px]">
                <Image
                src= "/images/p5.jpg"
                alt='product'
                layout="fill"
                
                objectFit="cover"
                className="w-full rounded shadow-lg"
                />
                </div>
            </div>

            
            <div className="md:col-span-2">
                <h1 className="text-2xl font-bold text-gray-800">Product Name</h1>
                <div className="flex items-center my-4">
                <span className="text-yellow-400 mr-2">⭐</span>
                <span className="text-gray-600"><i class="fa-solid fa-clock"></i></span>
                </div>
                <div className="text-3xl font-semibold text-orange-500 mb-2">
                KSh 2000
                </div>
                <div className="text-sm text-gray-500 line-through mb-2">
                KSh 3500
                </div>
                <div className="text-sm text-green-600">-7%</div>

                
                <div className="flex items-center mt-4">
                <button
                    className="text-gray-500 bg-gray-200 rounded-l px-3 py-1"
                    onClick={decreaseQuantity}
                    disabled={quantity === 1}
                >
                    -
                </button>
                <input
                    type="text"
                    className="w-12 text-center border-t border-b"
                    value="5"
                    readOnly
                />
                <button
                    className="text-white bg-orange-500 rounded-r px-3 py-1"
                    onClick={increaseQuantity}
                >
                    +
                </button>
                </div>

                
                <button className="mt-6 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                ADD TO CART
                </button>

                
                <div className="mt-10">
                <div className="border-b border-gray-300 mb-4">
                    <button className="text-gray-700 py-2 px-4 mr-2">
                    Product Details
                    </button>
                    <button className="text-gray-500 py-2 px-4">Specs</button>
                    <button className="text-gray-500 py-2 px-4">
                    Product benefits
                    </button>
                </div>
                <div className="text-sm text-gray-700 leading-6">
                    <p>Description of product</p>
                </div>
                </div>
            </div>

            
            <div className="md:col-span-1 mt-6 md:mt-0">
                <div className="bg-white p-4 rounded shadow-lg mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                    Shipping & Delivery
                </h2>
                <div className="mt-2">
                    <select className="w-full border rounded py-2 px-3">
                    <option>Select your location</option>
                    <option>Nairobi</option>
                    <option>Mombasa</option>
                    </select>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                    <p>Pickup Station: Delivery Fees KSh 45</p>
                    <p>Door Delivery: Delivery Fees KSh 500</p>
                    <p>
                    Instant delivery 
                    </p>
                </div>
                </div>
                <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800">Promotions</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Free delivery for orders above KSh 1000
                </p>
                </div>
            </div>
            </div>
        </>
     );
}
 
export default ProductPage;