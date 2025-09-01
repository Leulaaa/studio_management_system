import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css';
import { ImStack } from 'react-icons/im'
import { RiStore2Line } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'
import { FiLogOut } from 'react-icons/fi'

export function Dashboard() {
  return (
  <>
   <body className="dashboard"id='dashboard'>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    </body>
    <div id='dashboard'>
      <ul id='nav'> 
        <li id='active'><Link className='h' id='h3' to="/dashboard"><ImStack /> <h2 id='h2'>Dashboard</h2></Link></li>
        <li><Link id='h' to="/addstudent"> <RiStore2Line  /> <h2 id='h2'>Booking History</h2></Link></li>
        <li><Link id='h' to="/addcourse"><FiSettings /> <h2 id='h2'>Setting</h2></Link></li>
        <li><Link id='h' to="/addcourse"><FiLogOut /><h2 id='h2'>Log-out</h2></Link></li>
      </ul>
      <div>
        <h1 id='welcome'>Hello, Abebe</h1>
        <h3 id='welcome1'>From your account dashboard. you can easily check & view your <br /> 
        Recent Bookings, manage your payments and edit your <br /> 
        Password and Account Details. </h3>
      </div>
      

    </div>
  </>
  )
}