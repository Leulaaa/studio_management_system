import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
  
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">🎬 Studio Managment</h2>
          <p className="text-sm">
            A creative space for musicians, podcasters, filmmakers, and artists
            to bring their visions to life.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/our-studios" className="hover:text-white">Our Studios</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">📍 Addis Ababa, Ethiopia</p>
          <p className="text-sm">📞 +251 900 123 456</p>
          <p className="text-sm">✉️ info@studiomanagement.com</p>
        </div>

 
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 rounded-full text-black"
            />
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
              →
            </button>
          </form>
        </div>
      </div>

      
      <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Studio Management. All Rights Reserved.
      </div>
    </footer>
  );
}
