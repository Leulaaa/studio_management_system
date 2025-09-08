import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard.css';
import { ImStack } from 'react-icons/im'
import { RiStore2Line } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'
import { FiLogOut } from 'react-icons/fi'
import img1 from './image/img2.jpg';
import img3 from './image/img3.png';
import img4 from './image/img4.png';
import img5 from './image/img5.png';
import img6 from './image/img6.webp';
import { SiApacherocketmq } from 'react-icons/si'
import { HiOutlineReceiptRefund } from 'react-icons/hi'
import { FiPackage } from 'react-icons/fi'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const invoices = [
  {
    bookingid: "INV001",
    status: <div className='text-orange-400'>IN PROGRESS</div>,
    Date: "12/08/2025",
    total: "1,500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details  </Link>
  },
  {
    bookingid: "INV002",
    status: <div className='text-green-500'>COMPLETED</div>,
    Date: "15/08/2025",
    total: "1,800.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details  </Link>
  },
  {
   bookingid: "INV003",
    status:<div className='text-red-500'>CANCELLED</div>,
    Date: "1/09/2025",
    total: "600.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details  </Link>
  },
  {
    bookingid: "INV004",
    status: <div className='text-green-500'>COMPLETED</div>,
    Date: "12/11/2025",
    total: "1,500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details  </Link>
  },
  {
    bookingid: "INV005",
    status: <div className='text-green-500'>COMPLETED</div>,
    Date: "1/08/2025",
    total: "1,500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details  </Link>
  },
  {
    bookingid: "INV006",
    status: <div className='text-red-500'>CANCELLED</div>,
    Date: "12/3/2025",
    total: "500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details  </Link>
  },
  {
    bookingid: "INV007",
    status:<div className='text-green-500'>COMPLETED</div>,
    Date: "12/08/2025",
    total: "1,500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details  </Link>
  },
]



export function Dashboard() {
  return (
  <>
  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    
  
      
      <div>
      <div>
        <h1 id='welcome'>Hello, Abebe</h1>
        <h3 id='welcome1'>From your account dashboard. you can easily check & view your <br />
        Recent Bookings, manage your payments and edit your 
        Password and Account Details. </h3><br />

      
      </div>
      <div id='box'>
        <div id='box1'>
          <h1 id='boxh1'>ACCOUNT INFO</h1>
          <div id='box2'>
            <img id='im1' src={img1} alt=""/>
            <h2 id='boxh2'>Abebe Kebede <br /><p>Addis Ababa</p></h2>
          </div>
          <h2 id='boxh3'>Email:<p>abebe.kebede@gmail.com</p></h2>
          <h2 id='boxh3'>Sec Email:<p>Abebe12345@gmail.com</p></h2>
          <h2 id='boxh3'>Phone:<p>+251 912345678</p></h2>
          <button id='butt'>EDIT ACCOUNT</button>
        </div>
        <div id='box01'>
          <h1 id='boxh1'>PAYMENT DETAILS</h1> 
           <h2 id='boxh4'>Abebe Kebede <br /><p>Addis Ababa</p></h2>
           <h2 id='boxh3'>Phone Number:<p>+251 912345678</p></h2>
          <h2 id='boxh3'>Email:<p>abebe.kebede@gmail.com</p></h2>
          <button id='butt'>EDIT ADDRESS</button>
          
        </div>
        <div id='box6'>
          <div id='box7'>
            <SiApacherocketmq id='icon2'/> <div id='box8' ><h1>154 <p>Total Bookings</p></h1></div>
          </div>
          <div id='box07'>
            <HiOutlineReceiptRefund id='icon02'/> <div id='box8'><h1>05 <p>Pending Bookings</p></h1></div>
          </div>
          <div id='box017'>
            <FiPackage id='icon012'/> <div id='box8'><h1>149 <p>Completed Bookings</p></h1></div>
          </div>
          
        </div>
        
      </div>
      </div>
     
    <div id='line'>
      <h1 id='payment01'>PAYMENT OPTION</h1>
      <Link id='add0' to="/addpayment">+ Add Card </Link>
    </div> 
    <div>
      <h1 id='paymenth'>Select Payment Method</h1>
      <div id='card001'>
        <div id='card01'>
          <img id='im01' src={img6} alt=""/>
          <h2 id='cardh02'>TeleBirr</h2>
          
        </div>
        <div id='card01'>
          <img id='im01' src={img5} alt=""/>
          <h2 id='cardh02'>M-Pesa</h2>
          
        </div>
      </div>
      <div id='card001'>
        <div id='card01'>
          <img id='im01' src={img4} alt=""/>
          <h2 id='cardh02'>CBE Birr</h2>
          
        </div>
        <div id='card01'>
          <img id='im01' src={img3} alt=""/>
          <h2 id='cardh02'>E-Birr</h2>
          
        </div>
      </div>
    </div>
    
    <div id='line'>
      <h1 id='payment012'>RECENT BOOKING HISTORY</h1>
      <Link id='add012' to="/dashboard">View All </Link>
    </div> 
    <div id='tbb'>
    <Table  >

      
      <TableHeader >
        <TableRow id='taa3'>
          <TableHead id='taa2' className="">BOOKING ID</TableHead>
          <TableHead className=""id='table1234'>STATUS</TableHead>
          <TableHead className=""id='table1234'>DATE</TableHead>
          <TableHead className=""id='table1234'>TOTAL</TableHead>
          <TableHead id='taa2'className="text-right">ACTION</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="ml-[200px] w-[762px]"id='taa1'  >
        {invoices.map((invoice) => (
          <TableRow   key={invoice.invoice} >
            <TableCell id='taa2'  className="font-medium ">{invoice.bookingid}</TableCell>
            <TableCell >{invoice.status}</TableCell>
            <TableCell id='taa2' >{invoice.Date}</TableCell>
            <TableCell id='taa2'>{invoice.total}</TableCell>
            <TableCell className="text-right">{invoice.link}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter id='taa1' >
        <TableRow >
          <TableCell  colSpan={0}></TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </div>
  </>
  )
}