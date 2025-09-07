import { useState } from "react"
import './signup.css'
import { Link } from "react-router-dom"
import img1 from './image/img1.jpg';
import { Button } from "@/components/ui/button"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function Sign1() {
  
  return (
    <ResizablePanelGroup 
      direction="horizontal"
      className="mt-[30px] ml-[150px] min-h-[460px] max-w-md rounded-none  md:min-w-[1200px] "
    >
      <ResizablePanel defaultSize={39} id="group">
        
          <img id='img' src={img1} alt=""/>
          
        
      </ResizablePanel>
      
      <ResizablePanel defaultSize={75}>
        <div >
          <Card id='bgg3' className="w-full max-w-sm rounded-none min-h-[400px] max-w-md rounded-none  md:min-w-[500px]">
      <CardHeader>
        <h2 id="sii2" className="text-[39px]">Create an Account</h2>
      </CardHeader>
      <CardContent>
        <form id="form"> 
          <div className="flex flex-col gap-2 border-none h-90 ">
            <div className="grid gap-3 border-none rounded-none h-12" >
              
              <Input id="input" className="border-none   absolute x-10 h-10 w-83 " 
                id="fulname"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
             <div className="grid gap-3 border-none  h-12" >
              
              <Input className="border-none   absolute x-10 h-10 w-83"
                id="Phone-number"
                type="number"
                placeholder="Phone Number"
                required
              />
            </div>
             <div className="grid gap-3 border-none  h-12" >
              
              <Input className="border-none   absolute x-10 h-10 w-83"
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
             <div className="grid gap-3 border-none = h-12" >
              
              <Input className="border-none   absolute x-10 h-10 w-83"
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
             <div className="grid gap-3 border-none  h-12" >
              
              <Input className="border-none   absolute x-10 h-10 w-83"
                id="password2"
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <h2 id="sii2" >OR</h2>
           
        <Button  className="" id="google">
          Google
        </Button>
         <Button  className="w-full" id="facebook">
          Facebook
        </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 ">
       
        <Button type="submit" className="w-[340px] x-100 text-white"id='logg3'>
          Next
        </Button>
        <h2 className="text-[13px] pb-2">Alredy have an account? <Link to ='/login' className="text-blue-500">Login</Link></h2>
      </CardFooter>
    </Card>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
