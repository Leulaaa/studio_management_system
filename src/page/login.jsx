import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import img1 from "./image/img1.jpg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function Login1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.email || !formData.password) {
      setErrorMsg("❌ Both fields are required.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:9000/api/login", {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = res.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/dashboard", { replace: true });
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "❌ Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-md overflow-hidden w-full max-w-[1100px] min-h-[460px]">
        <div className="w-full md:w-1/2 h-60 md:h-auto">
          <img src={img1} alt="Login" className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <Card className="w-full max-w-md border-none shadow-none">
            <CardHeader>
              <h2 className="text-3xl font-semibold text-center">Sign In</h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-none shadow-none bg-gray-100 focus:outline-none focus:ring-0"
                  required
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border-none shadow-none bg-gray-100 focus:outline-none focus:ring-0"
                  required
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white bg-black hover:bg-gray-900"
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
                {errorMsg && (
                  <p className="text-sm text-red-600 text-center mt-2">
                    {errorMsg}
                  </p>
                )}
              </form>
            </CardContent>
            <CardFooter className="text-center mt-4">
              <p className="text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Signup Here
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
