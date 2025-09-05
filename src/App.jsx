import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import { Dashboard2 } from './page/dashboard2'
import { Dashboard } from './page/dashboard'
import {Sign1} from './page/signup'
import { Login1 } from './page/login'
import { Signup2 } from './page/signup2'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




function App() {
  return (
< div className="App" > 
  <Router>
    <Routes>
      <Route path='/dashboard2' element={<Dashboard2/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/signup' element={<Sign1/>}/>
      <Route path='/login' element={<Login1/>}/>
      <Route path='/signup2' element={<Signup2/>}/>

    </Routes>
  </Router>
</div>
  )
}

export default App