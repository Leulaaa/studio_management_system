import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import SummaryPage from "./pages/SummaryPage";
import Photographystudio from "./pages/Photographystudio";

import Musicstudio from "./pages/Musicstudio";
import Artstudio from "./pages/Artstudio";
import Podcaststudio from "./pages/Podcaststudio";

export default function App() {
  return (
  
    <Router>
      <Routes>
         <Route path="/" element={<Photographystudio />} />
        <Route path="/photographystudio" element={<Photographystudio />} />
        <Route path="/Booking/:studio" element={<BookingPage />} />
         <Route path="/Summary" element={<SummaryPage />} />
         <Route path="/musicstudio" element={<Musicstudio />} />
          <Route path="/artstudio" element={<Artstudio />} />
          <Route path="/podcaststudio" element={<Podcaststudio />} />
      </Routes>
    </Router>
  );
}
