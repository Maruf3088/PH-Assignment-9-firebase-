import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext); // Removed logOut from here
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const image = e.target.imageUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;


    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password doesn't match");
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least one uppercase letter and one lowercase letter"
      );
      return;
    }

    createUser(email, password)
      .then((res) => {
        toast.success("User created successfully!");
        e.target.reset();
  
        updateUserProfile(userName, image);
        logOut();
        navigate("/login"); // Redirect to login after successful registration
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-11/12 mx-auto my-10">
      {/* Image Section */}
      <div data-aos="fade-left" className="hidden md:flex w-1/2 justify-center">
        <img
          src="/images/signUp.png"
          alt="Register Illustration"
          className="w-3/4"
        />
      </div>

      {/* Registration Form Section */}
      <div
        data-aos="fade-right"
        className="flex items-center justify-center w-full md:w-1/2 p-6"
      >
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Create Your Account
          </h2>
          <hr className="my-6 border-gray-300" />

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                placeholder="Enter your username"
                name="username"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                placeholder="Enter your image URL"
                name="imageUrl"
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <div className="mb-4 relative">
              <label className="block font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                placeholder="Enter your password"
                name="password"
              />
              <button
                type="button"
                className="absolute right-3 top-10 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
            <div className="mb-4 relative">
              <label className="block font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                placeholder="Confirm your password"
                name="confirmPassword"
              />
              <button
                type="button"
                className="absolute right-3 top-10 text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 font-bold rounded-lg hover:opacity-90 transition duration-200"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <NavLink className="text-blue-500 font-medium" to="/login">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
