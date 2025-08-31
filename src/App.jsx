import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import SummaryPage from "./pages/SummaryPage";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingPage />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Router>
  );
}
