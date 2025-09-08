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



export function Dashboard2() {
  return (
  <>
    
    <Table className=" w-[840px]">

      
      <TableHeader >
        <TableRow id='taa3'>
          <TableHead id='taa2' className=" ">BOOKING ID</TableHead>
          <TableHead className=""id='table1234'>STATUS</TableHead>
          <TableHead className=""id='table1234'>DATE</TableHead>
          <TableHead className=""id='table1234'>TOTAL</TableHead>
          <TableHead id='taa2' className="text-right">ACTION</TableHead>
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
      <TableFooter id='taa1'>
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

    
  </>
  )
}