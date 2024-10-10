
const Footer = () => {
    return ( 
        <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Soko</h4>
            <p className="text-gray-400">
              Muguga street.<br />
              Westlands, Nairobi, Kenya
            </p>
            <p className="text-gray-400 mt-2">Email: info@soko.com</p>
            <p className="text-gray-400">Phone: 0717988187</p>
          </div>

          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors">Products</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors">Return & Refund policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Resources</h4>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors">Products</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500">&copy; 2024 Soko. All rights reserved.</p>
        </div>
      </div>
    </footer>
     );
}
 
export default Footer;