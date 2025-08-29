import './login.css'
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

export function Login1() {
  return (
    <ResizablePanelGroup 
      direction="horizontal"
      className="min-h-[460px] max-w-md rounded-none  md:min-w-[1200px] "
    >
      <ResizablePanel defaultSize={39} id="group">
        
          <img id='img' src={img1} alt=""/>
          
        
      </ResizablePanel>
      
      <ResizablePanel defaultSize={75}>
        <div >
          <Card className="w-full max-w-sm rounded-none min-h-[400px] max-w-md rounded-none  md:min-w-[500px]">
      <CardHeader>
        <h2 className="text-[39px]">Sign-in</h2>
      </CardHeader>
      <CardContent>
        <form id="form"> 
          <div className="flex flex-col gap-2 border-none h-90">
            
             
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
             
           
           
        
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 ">
       
        <Button  className="w-[340px] x-100">
          Login
        </Button>
        <h2 className="text-[13px] pb-2">Don't have an account? <a href="#"
                >
                  Signup Here
                </a></h2>
      </CardFooter>
    </Card>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
