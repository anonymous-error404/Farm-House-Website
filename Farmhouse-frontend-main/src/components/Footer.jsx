import logo from '../assets/logo.png'; 
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-green-100 text-gray-800 py-8 border-t border-green-300">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Logo and Tagline */}
        <div>
          <div className="flex items-center justify-center md:justify-start mb-2">
            <img src={logo} alt="Nirmal Farm Logo" className="h-10 w-10" />
            <h2 className="text-2xl font-semibold text-green-800">Nirmal Farm</h2>
          </div>
          <p className="text-sm italic text-green-700">Connect with nature</p>
           <p>
                          <a
                            href="https://www.instagram.com/nirmal_farmstays"  
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green-700 hover:text-green-800"
                          >
                            <FaInstagram className="text-lg" />
                            <span>@nirmal_farmstays</span> 
                          </a>
                        </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Numbers</h3>
          <p><a href="tel:9870204394">📞 9870204394</a></p>
          <p><a href="tel:9870204424">📞 9870204424</a></p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p>64/1, Madhuban Society</p>
          <p>Chon Gaon, Barvi Dam Road,</p>
          <p>Badlapur (W), Thane 421503.</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-600 mt-6 border-t pt-4">
        &copy; {new Date().getFullYear()} Nirmal Farm. All rights reserved.
      </div>
    </footer>
  );
}