import './signup2.css'
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

export function Signup2() {
  return (
    <ResizablePanelGroup 
      direction="horizontal"
      className="min-h-[460px] max-w-md rounded-none  md:min-w-[950px] "
    >
      <ResizablePanel defaultSize={39} id="group">
        
          <img id='img' src={img1} alt=""/>
          
        
      </ResizablePanel>
      
      <ResizablePanel defaultSize={75}>
        <div >
          <Card className="w-full max-w-sm rounded-none min-h-[400px] max-w-md rounded-none  md:min-w-[100px]"><br /><br /><br /><br />
      <p id='otp'>we sent OTP using your phone number</p><br />
      <CardContent>
        <form id="form"> 
          <div className="flex flex-col gap-2 border-none h-20">
            
             <div className="grid gap-3 border-none  h-12" >
              
              <Input className="border-none   absolute x-10 h-10 w-83"
                id="otp"
                type="number"
                placeholder="Enter OTP"
                required
              />
            </div>
             
           
        
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 ">
       
        <Button  className="w-[340px] x-100">
          Sign Up
        </Button>
        <h2 className="text-[13px] pb-11">Alredy have an account? <a href="#"
                >
                  Login
                </a></h2>
      </CardFooter>
    </Card>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
