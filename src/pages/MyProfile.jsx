import React, { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const MyProfile = () => {
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logged out successfully!"))
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen  bg-gray-50 my-10">
      {/* Cover Section */}
      <div className="  h-64 bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center text-white text-4xl font-semibold shadow-lg">
        <h1 className="animate-bounce" data-aos="fade-up" data-aos-delay="100">Welcome, {user?.displayName || "User"}!</h1>
      </div>
      
      {/* Profile Card */}
      <div data-aos="fade-up" className="flex justify-center mt-[-5rem]">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center w-11/12 border border-gray-200 ">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-600 mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName}</h2>
          <p className="text-gray-500">{user?.email}</p>
          <p className="text-gray-400 mt-1">User ID: {user?.uid}</p>
          <p className="text-gray-400">Provider: {user?.providerData[0]?.providerId}</p>
          <p className="text-gray-400">Email Verified: {user?.emailVerified ? "Yes" : "No"}</p>

          <div className="mt-6 flex justify-center gap-6">
            <NavLink to={"/update-profile"} className="bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 focus:outline-none transition">
              <FaEdit /> Update Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-red-700 focus:outline-none transition"
            >
              <FaSignOutAlt /> Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
