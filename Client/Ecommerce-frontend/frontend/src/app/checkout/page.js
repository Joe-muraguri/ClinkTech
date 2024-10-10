"use client"
import { useState } from "react";

const Checkout = () => {
    const [isOpen, setIsOpen] = useState(false);
    

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return ( 
        <div className="grid md:grid-cols-3 gap-6 p-6 bg-gray-100">
            <div className="col-span-2 space-y-4">
                {/* Customer Address */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">1. CUSTOMER ADDRESS</h2>
                <p className="mt-2">Joe Muraguri</p>
                <p>Kahawa West | Nairobi - Outskirts.....</p>
                </div>
                
                {/* Delivery Details */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700">2. DELIVERY DETAILS</h2>
                <p>Change</p>
                <p className="mt-2">Pick-up Station</p>
                <p>Delivery between 29 August and 31 August</p>
                <div className="mt-4 p-3 border rounded">
                    <p>Cossim Kahawa West Station</p>
                    <p>...</p>
                </div>

                <div>
      <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded-md">Change Location</button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Change Location</h2>
              <button onClick={closeModal} className="text-gray-600 hover:text-gray-900">&times;</button>
            </div>
            
            {/* Modal Content */}
            <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
              <select
                value=""
                onChange=""
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option>Nairobi</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <select
                value=""
                onChange="{(e) => setCity(e.target.value)}"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option>Kahawa west/Githurai 44</option>
             
              </select>
            </div>
          </div>
          <div className="bg-pink-50 border border-pink-100 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-lg mb-2">Kahawa West <span className="text-orange-500">KSH 140</span></h3>
            <p className="text-sm text-gray-600 mb-2">Kahawa West Station Kahawa West QuickMart Supermarket</p>
            
            
            
            <div className="mt-4">
              <p className="text-sm font-semibold mb-1">Opening hours:</p>
              <p className="text-sm text-gray-600">Mon-Fr  Sun- Close</p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-semibold mb-1">Payment options:</p>
              <p className="text-sm text-gray-600">Pay on Delivery, Pre-pay Now</p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-semibold mb-1">Contact Information</p>
              <p className="text-sm text-gray-600">Customer Care 0717988187</p>
            </div>
          </div>

          
            <div className="mt-6 flex justify-end">
              <button onClick={closeModal} className="bg-gray-500 text-white p-2 rounded-md mr-2">Cancel</button>
              <button className="bg-orange-500 text-white p-2 rounded-md">Confirm</button>
            </div>
          </div>
        </div>





      )}
    </div>
                </div>

               
                <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                <h2 className="text-lg font-semibold text-gray-700">3. PAYMENT METHOD</h2>

                
                <div className="space-y-4">
                    <label className="flex items-start space-x-2">
                    <input type="radio" name="payment" className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-400" />
                    <div>
                        <p className="font-semibold">Pay Now M-Pesa.</p>
                        

                        

                        <div className="flex space-x-2 mt-2">
                        <img src="/images/mpesa.png" alt="M-Pesa" className="h-6" />
                        
                        
                        </div>
                    </div>
                    </label>
                </div>

                
                <div className="space-y-4">
                    <label className="flex items-start space-x-2">
                    <input type="radio" name="payment" className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-400" />
                    <div>
                        <p className="font-semibold">Pay on delivery</p>
                        <p className="text-gray-500">Pay on delivery with Mobile Money</p>
                    </div>
                    </label>
                </div>

                
                <button className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
                    CONFIRM PAYMENT METHOD
                </button>
</div>
            </div>

            
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700 text-right">Order summary</h2>
                <div className="mt-4 text-right">
                <p>Item's total: KSh 2,790</p>
                <p>Delivery fees: KSh 140</p>
                <p className="text-green-600">90% off : -KSh 288</p>
                <p className="font-bold">Total: KSh 2,642</p>
                </div>
                <button className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg">CONFIRM ORDER</button>
            </div>
</div>
     );
}
 
export default Checkout;