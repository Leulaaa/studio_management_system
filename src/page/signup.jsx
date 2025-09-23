import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import img1 from "./image/img1.jpg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";

export function Sign1() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (
      !formData.full_name ||
      !formData.phone ||
      !formData.email ||
      !formData.password ||
      !formData.password_confirmation
    ) {
      setMessage("❌ All fields are required.");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setMessage("❌ Invalid email address.");
      return false;
    }

    if (formData.password.length < 6) {
      setMessage("❌ Password must be at least 6 characters.");
      return false;
    }

    if (formData.password !== formData.password_confirmation) {
      setMessage("❌ Passwords do not match.");
      return false;
    }

    return true;
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");
  if (!validate()) return;

  try {
    setLoading(true);
    const response = await axios.post("http://localhost:9000/api/register", {
      full_name: formData.full_name,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.password_confirmation,
    });

    const { user, token } = response.data.data;

    // ✅ Store user & token
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);

    // ✅ Navigate to Dashboard
    navigate("/login");
  } catch (err) {
    setMessage(err.response?.data?.message || "❌ Server error.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-md overflow-hidden w-full max-w-[1100px] min-h-[460px]">
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-60 md:h-auto">
          <img
            src={img1}
            alt="Signup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <Card className="w-full max-w-md border-none shadow-none">
            <CardHeader>
              <h2 className="text-3xl font-semibold text-center">
                Create an Account
              </h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="full_name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.full_name}
                  onChange={handleChange}
                  className="border-none shadow-none bg-gray-100 focus:outline-none focus:ring-0"
                />
                <Input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-none shadow-none bg-gray-100 focus:outline-none focus:ring-0"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-none shadow-none bg-gray-100 focus:outline-none focus:ring-0"
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border-none shadow-none bg-gray-100 focus:outline-none focus:ring-0"
                />
                <Input
                  name="password_confirmation"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  className="border-none shadow-none bg-gray-100 focus:outline-none focus:ring-0"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white bg-black hover:bg-gray-900"
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </Button>
                {message && (
                  <p className="text-sm text-red-600 text-center mt-2">
                    {message}
                  </p>
                )}
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
