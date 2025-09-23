// Signup2.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "./image/img1.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Signup2() {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle OTP verification logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-md overflow-hidden w-full max-w-[1100px]">
        {/* Image panel */}
        <div className="w-full md:w-1/2 h-60 md:h-auto">
          <img
            src={img1}
            alt="OTP Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form panel */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <Card className="w-full max-w-md border-none shadow-none">
            <CardHeader>
              <h2 className="text-3xl font-semibold text-center">
                Verify OTP
              </h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="otp"
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="border-none shadow-none bg-gray-100 focus:outline-none focus:ring-0"
                />
                <Button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-gray-800"
                >
                  Confirm
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center mt-4">
              <p className="text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
