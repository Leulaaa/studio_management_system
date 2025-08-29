import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Sign1} from './page/signup'
import { Login1 } from './page/login'
import { Signup2 } from './page/signup2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




function App() {
  return (
< div className="App" > 
  <Router>
    <Routes>
      <Route path='/' element={<Sign1/>}/>
      <Route path='/login' element={<Login1/>}/>
      <Route path='/signup2' element={<Signup2/>}/>
    </Routes>
  </Router>
</div>
  )
}

export default App
