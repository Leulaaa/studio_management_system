import React from 'react'
import { Link } from 'react-router-dom'
import './dashboard2.css';
import { ImStack } from 'react-icons/im'
import { RiStore2Line } from 'react-icons/ri'
import { FiSettings } from 'react-icons/fi'
import { FiLogOut } from 'react-icons/fi'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
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
    link:<Link id='view01' to="/addpayment">View Details -> </Link>
  },
  {
    bookingid: "INV002",
    status: <div className='text-green-500'>COMPLETED</div>,
    Date: "15/08/2025",
    total: "1,800.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details -> </Link>
  },
  {
   bookingid: "INV003",
    status:<div className='text-red-500'>CANCELLED</div>,
    Date: "1/09/2025",
    total: "600.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details -> </Link>
  },
  {
    bookingid: "INV004",
    status: <div className='text-green-500'>COMPLETED</div>,
    Date: "12/11/2025",
    total: "1,500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details -> </Link>
  },
  {
    bookingid: "INV005",
    status: <div className='text-green-500'>COMPLETED</div>,
    Date: "1/08/2025",
    total: "1,500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details -> </Link>
  },
  {
    bookingid: "INV006",
    status: <div className='text-red-500'>CANCELLED</div>,
    Date: "12/3/2025",
    total: "500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details -> </Link>
  },
  {
    bookingid: "INV007",
    status:<div className='text-green-500'>COMPLETED</div>,
    Date: "12/08/2025",
    total: "1,500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details -> </Link>
  },
  {
    bookingid: "INV004",
    status: <div className='text-green-500'>COMPLETED</div>,
    Date: "12/11/2025",
    total: "1,500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details -> </Link>
  },
  {
    bookingid: "INV005",
    status: <div className='text-green-500'>COMPLETED</div>,
    Date: "1/08/2025",
    total: "1,500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details -> </Link>
  },
 
  {
    bookingid: "INV004",
    status: <div className='text-green-500'>COMPLETED</div>,
    Date: "12/11/2025",
    total: "1,500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details -> </Link>
  },
  {
    bookingid: "INV005",
    status: <div className='text-green-500'>COMPLETED</div>,
    Date: "1/08/2025",
    total: "1,500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details -> </Link>
  },
  {
    bookingid: "INV006",
    status: <div className='text-red-500'>CANCELLED</div>,
    Date: "12/3/2025",
    total: "500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details -> </Link>
  },
  {
    bookingid: "INV007",
    status:<div className='text-green-500'>COMPLETED</div>,
    Date: "12/08/2025",
    total: "1,500.00 ETB",
    link:<Link id='view01' to="/addpayment">View Details -> </Link>
  },
]



export function Dashboard2() {
  return (
  <>
   <body className="dashboard"id='dashboard'>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    </body>
    <div id='dashboard'>
      <ul id='nav'> 
        <li ><Link className='h' id='h' to="/dashboard"><ImStack /> <h2 id='h2'>Dashboard</h2></Link></li>
        <li id='active'><Link id='h3' to="/dashboard2"> <RiStore2Line  /> <h2 id='h2'>Booking History</h2></Link></li>
        <li><Link id='h' to="/addcourse"><FiSettings /> <h2 id='h2'>Setting</h2></Link></li>
        <li><Link id='h' to="/login"><FiLogOut /><h2 id='h2'>Log-out</h2></Link></li>
      </ul>
      
      
     
    <div id='dashboard01'>
    <div id='linee'>
      <h1 id='payment012'>ORDER HISTORY</h1>
      
    </div> 
    <Table className="ml-[50px] w-[970px]">

      
      <TableHeader >
        <TableRow id='table123'>
          <TableHead className=" w-[0px]">BOOKING ID</TableHead>
          <TableHead className=""id='table1234'>STATUS</TableHead>
          <TableHead className=""id='table1234'>DATE</TableHead>
          <TableHead className=""id='table1234'>TOTAL</TableHead>
          <TableHead className="text-right">ACTION</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody >
        {invoices.map((invoice) => (
          <TableRow  key={invoice.invoice}>
            <TableCell className="font-medium ">{invoice.bookingid}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell >{invoice.Date}</TableCell>
            <TableCell >{invoice.total}</TableCell>
            <TableCell className="text-right">{invoice.link}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={0}></TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableFooter>
      
    </Table>
    <Pagination id='num01' className="ml-[60px] mt-4 text-black-500">
      <PaginationContent >
        <PaginationItem >
          <PaginationPrevious id='num01' href="#" />
        </PaginationItem>
        <PaginationItem  >
          <PaginationLink id='num01'  href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  id='num01'href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink id='num01' href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext id='num01' href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  </div >
    </div>
  </>
  )
}