import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OurStudios from "./pages/OurStudios";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-studios" element={<OurStudios />} />
            {/* placeholders for About & Contact */}
            <Route path="/about" element={<div className="p-10">About Page</div>} />
            <Route path="/contact" element={<div className="p-10">Contact Page</div>} />
            <Route path="/book" element={<div className="p-10">Booking Page</div>} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
