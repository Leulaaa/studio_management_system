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
    
  },
  
  {
    bookingid: "INV007",
    status:<div className='text-green-500'>COMPLETED</div>,
    Date: "12/08/2025",
    total: "1,500.00 ETB",
    
  },
  {
    bookingid: "INV004",
    status: <div className='text-green-500'>COMPLETED</div>,
    Date: "12/11/2025",
    total: "1,500.00 ETB",
   
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
    

    
  </>
  )
}