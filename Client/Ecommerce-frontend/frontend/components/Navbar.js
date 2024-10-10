"use client";
import {useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./Register";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const pathname = usePathname()

    

    const isCartOrCheckout = pathname === "/cart" || pathname === "/checkout";
    return ( 
        <div className="sticky top-0 z-50">
            <div className="bg-gray-800 text-gray-200 text-sm py-2 animate-flash-bright">
                <div className="container mx-auto flex justify-around items-center">
                    <span>
                        <i className="fa-solid fa-phone mr-2"></i> 0717988187
                    </span>
                    <span>
                        <h3 className=" mr-2">Discounted prices</h3>
                    </span>
                    <span>
                        <i className="fa-solid fa-envelope mr-2"></i> info@soko.com
                    </span>
                </div>
            </div>
        
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex justify-between items-centerpy-4">
                        <div className="flex items-center">
                            <img src="/images/soko logo.png" className="h-12 rounded-full w-auto mr-4" alt="" />
                            {/* <a href="/" className="text-2xl font-bold text-blue-600"><h1>Soko</h1></a> */}
                        </div>


                        


                        <div className="relative flex items-center max-w-md mx-auto">
                            
                        <>
                            {!isCartOrCheckout ? ( <>
                                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                   
                                    <i className="fa-solid fa-search text-gray-500 px-4"></i>
                                    
                                    <input
                                    type="text"
                                    placeholder="Search for products"
                                    className="flex-grow py-2 px-4 border-none focus:outline-none"
                                    style={{width: '450px'}}
                                    />
                                </div>
                                
                                <button
                                    type="button"
                                    className="bg-yellow-500 text-white py-2 px-4 ml-4 rounded-lg border border-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                                    >
                                    SEARCH
                                </button>
                                </>
                                ) : (
                                    
                                    <div>
                                      <h1 className="text-gray-700 text-lg font-bold">{pathname === '/cart' ? 'Your Cart' : 'Checkout'} page</h1>
                                    </div>
                                  )}
                                  </>
                            </div>

                      

                        <div className="flex items-center space-x-4">
                            
                            <a href="/cart" className="text-gray-700 hover:text-blue-600 relative">
                            <i class="fa-solid fa-cart-shopping fa-lg"></i> Shopping Cart
                            <span className="absolute top-4 right-12 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">3</span>
                            </a>

                            <div className="relative group">

                            <a href="/account" className="text-gray-700 hover:text-blue-600">
                            <i class="fa-solid fa-user fa-lg"></i> Account
                            </a>

                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg py-2 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-4 transition duration-300 ease-in-out">
                                <a
                                    href="#loginModal"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Login
                                </a>
                                <a
                                    href="#registerModal"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Register
                                </a>
                                </div>

                            </div>
                        </div>

                        

                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                            </button>
                        </div>
                        </div>
                        
                    </div>

                
                    {isOpen && (
                        <div className="md:hidden">
                        <a href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
                        <a href="/shop" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Shop</a>
                        <a href="/category/men" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Men</a>
                        <a href="/category/women" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Women</a>
                        <a href="/category/electronics" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Electronics</a>
                        <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
                        <a href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
                        </div>
                    )}

                   
                    
                
            
            </nav>
            <RegisterModal />
            <LoginModal />
            

            

        </div>

        
        
     );
}
 
export default Navbar;