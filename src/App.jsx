import { useState } from 'react'


import './App.css'
import Home from "./pages/Home";
import OurStudios from "./pages/OurStudios";
import Music from './pages/Musicstudio';
import Podcaststudio from './pages/Podcaststudio';
import Artstudio from './pages/Artstudio';
import Dashboard3 from './pages/Dashboard3';
import BlogPage from './pages/BlogPage';
import BookingPage from "./pages/BookingPage";
import SummaryPage from "./pages/SummaryPage";

import {Sign1} from './page/signup'
import { Login1 } from './page/login'
import { Signup2 } from './page/signup2'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
< div className="App" > 
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-studio" element={<OurStudios />} />
      
      <Route path="/dashboard" element={<Dashboard3 />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/musicstudio" element={<Music />} />
      <Route path="/podcaststudio" element={<Podcaststudio />} />
      <Route path="/artstudio" element={<Artstudio />} />
       <Route path="/summary" element={<SummaryPage />} />
      <Route path='/signup' element={<Sign1/>}/>
      <Route path='/login' element={<Login1/>}/>
      <Route path='/signup2' element={<Signup2/>}/>

    </Routes>
  </Router>
</div>
  )
}

export default App