import img1 from './image/img1.jpg';
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function Login1() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img 
          className="w-full h-full object-cover opacity-70" 
          src={img1} 
          alt="login background" 
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6">
        <Card className="w-full max-w-md p-6 shadow-none rounded-none border-none">
          <CardHeader>
            <h2 className="text-3xl font-semibold text-center">
              Sign In
            </h2>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input 
                type="email" 
                placeholder="Email" 
                required 
                className="h-12"
              />
              <Input 
                type="password" 
                placeholder="Password" 
                required 
                className="h-12"
              />
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full bg-black text-white hover:bg-gray-800">
              Login
            </Button>
            <h2 className="text-sm">
              Don’t have an account?{" "}
              <Link to='/signup' className="text-blue-500">
                Signup Here
              </Link>
            </h2>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
