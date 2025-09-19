import { Link } from "react-router-dom"
import img1 from './image/img1.jpg';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function Sign1() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img 
          className="w-full h-full object-cover opacity-70" 
          src={img1} 
          alt="signup background" 
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6">
        <Card className="w-full max-w-md p-6 shadow-none rounded-none border-none">
          <CardHeader>
            <h2 className="text-3xl font-semibold text-center">
              Create an Account
            </h2>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input type="text" placeholder="Full Name" required />
              <Input type="number" placeholder="Phone Number" required />
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Password" required />
              <Input type="password" placeholder="Confirm Password" required />

              {/* OR */}
              <div className="flex items-center my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-3 text-sm text-gray-500">OR</span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              {/* Social Buttons */}
              <Button 
                className="w-full border border-black bg-white text-black hover:bg-gray-100"
              >
                Google
              </Button>
              <Button 
                className="w-full bg-black text-white hover:bg-gray-800"
              >
                Facebook
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
              Next
            </Button>
            <h2 className="text-sm">
              Already have an account?{" "}
              <Link to='/login' className="text-blue-500">
                Login
              </Link>
            </h2>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
