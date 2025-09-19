import './signup2.css'
import { Link } from "react-router-dom"
import img1 from './image/img1.jpg';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function Signup2() {
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
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-white px-4">
        {/* 👉 Text OUTSIDE the card */}
        <p className="text-center text-gray-600 mb-6">
          We sent OTP using your phone number
        </p>

        <Card className="w-full max-w-md p-6 shadow-none rounded-none border-none">
          <CardContent>
            <form className="flex flex-col gap-4">
              <Input
                type="number"
                placeholder="Enter OTP"
                required
                className="h-12 border border-gray-300"
              />
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button className="w-full bg-black text-white hover:bg-gray-800">
              Sign Up
            </Button>
            <h2 className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </h2>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
