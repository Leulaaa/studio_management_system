import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // ✅ New import
import './dashboard.css';
import { Link } from "react-router-dom";

// Icons
import { SiApacherocketmq } from 'react-icons/si';
import { HiOutlineReceiptRefund } from 'react-icons/hi';
import { FiPackage } from 'react-icons/fi';

import {
  Table,
  TableBody,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableCell
} from "@/components/ui/table";

export function Dashboard() {
  const [user, setUser] = useState({
    full_name: "",
    email: "",
    phone: ""
  });

  const location = useLocation(); // ✅ Detect route change

  useEffect(() => {
    const updateUserFromStorage = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    updateUserFromStorage(); // ✅ Run on initial mount and route changes
  }, [location]); // ✅ Triggers whenever the route (page) changes

  return (
    <>
      <div>
        <div>
          <h1 id="welcome" className="mt-5">Hello, {user.full_name}</h1>
          <h3 id="welcome1">
            From your account dashboard, you can easily check & view your <br />
            Recent Bookings, manage your payments and edit your <br />
            Password and Account Details.
          </h3><br />
        </div>

        <div id="box">
          {/* ACCOUNT INFO */}
          <div id="box1">
            <h1 id="boxh1">ACCOUNT INFO</h1>
            <div id="box2">
              <h2 id="boxh2">{user.full_name} <br /><p>Addis Ababa</p></h2>
            </div>
            <h2 id="boxh3">Email:<p>{user.email}</p></h2>
            <h2 id="boxh3">Sec Email:<p>example@gmail.com</p></h2>
            <h2 id="boxh3">Phone:<p>+251 {user.phone}</p></h2>
           
          </div>

          {/* PAYMENT DETAILS */}
          <div id="box01">
            <h1 id="boxh1">PAYMENT DETAILS</h1>
            <h2 id="boxh4">{user.full_name} <br /><p>Addis Ababa</p></h2>
            <h2 id="boxh3">Phone Number:<p>+251 {user.phone}</p></h2>
            <h2 id="boxh3">Email:<p>{user.email}</p></h2>
            
          </div>

          {/* METRICS */}
          <div id="box6">
            <div id="box7">
              <SiApacherocketmq id="icon2" />
              <div id="box8">
                <h1>3 <p>Total Bookings</p></h1>
              </div>
            </div>
            <div id="box07">
              <HiOutlineReceiptRefund id="icon02" />
              <div id="box8">
                <h1>1 <p>Pending Bookings</p></h1>
              </div>
            </div>
            <div id="box017">
              <FiPackage id="icon012" />
              <div id="box8">
                <h1>2 <p>Completed Bookings</p></h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PAYMENT SECTION */}
      {/* 
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>BOOKING ID</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead>TOTAL</TableHead>
            <TableHead>ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          ...
        </TableBody>
      </Table> 
      */}
    </>
  );
}
