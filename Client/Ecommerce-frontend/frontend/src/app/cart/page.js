"use client";
import Image from "next/image";
import { useState } from "react";
const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    

    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
        if (quantity > 0) {
        setQuantity(prev => prev - 1);
        }
    };
    return ( 
        <>
            
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-semibold mb-4">Cart (1)</h1>
                <div className="lg:flex lg:space-x-8">
                    
                    <div className="lg:w-2/3 space-y-4">
                    <div className="bg-white p-4 shadow-md rounded-lg flex items-start space-x-4">
                        <div className="w-24 h-24 relative">
                        <Image
                            src="/images/p8.jpg"
                            alt="Product Name"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                        />
                        </div>
                        <div className="flex-grow">
                        <h2 className="text-lg font-medium">Product Name & main description</h2>
                        <p className="text-sm text-gray-600">more description</p>
                        <p className="text-sm text-green-600 mt-1">Available</p>
                        <div className="flex items-center space-x-2 mt-4">
                            <button
                            onClick={handleDecrease}
                            className={`px-2 py-1 border rounded-md text-white ${quantity === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
                            disabled={quantity === 0}
                            >
                            -
                            </button>
                            <span className="text-lg">{quantity}</span>
                            <button
                            onClick={handleIncrease}
                            className="px-2 py-1 border rounded-md bg-orange-500 text-white hover:bg-orange-600"
                            >
                            +
                            </button>
                            <i className="text-red-500 hover:text-red-700 ml-4 fa-solid fa-trash"></i>
                        </div>
                        </div>
                        <div className="text-right">
                        <p className="text-xl font-semibold">KSh 720</p>
                        <p className="text-sm text-gray-400 line-through">KSh 1000</p>
                        <p className="text-sm text-orange-600">-28%</p>
                        </div>
                        
                        
                    </div>
                    

                    
                    </div>

                    
                    <div className="lg:w-1/3 bg-white p-6 shadow-md rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Your Cart Summary</h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                        <span>Items (1)</span>
                        <span>KSh 2,700</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                        <span>70% Discount</span>
                        <span>-KSh 258</span>
                        </div>
                        <div className="border-t border-gray-300 my-4"></div>
                        <div className="flex justify-between font-bold">
                        <span>Subtotal</span>
                        <span>KSh 2,500</span>
                        </div>
                    </div>
                    <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
                        CHECKOUT (KSh 2,502)
                    </button>
                    </div>
                </div>
                </div>
        </>
     );
}
 
export default Cart;