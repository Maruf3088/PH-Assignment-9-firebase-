import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaTags,
  FaInfoCircle,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  const links = (
    <ul className="flex flex-col lg:flex-row gap-6 items-center list-none font-medium text-white">
      {[
        { to: "/", icon: <FaHome />, label: "Home" },
        { to: "/brands", icon: <FaTags />, label: "Brands" },
        { to: "/myProfile", icon: <FaUser />, label: "My Profile" },
        { to: "/about", icon: <FaInfoCircle />, label: "About" },
      ].map(({ to, icon, label }) => (
        <li key={to}>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-md transition duration-300 ${
                isActive
                  ? "bg-white text-blue-600 font-bold"
                  : "hover:bg-green-700 hover:bg-opacity-50"
              }`
            }
            to={to}
            onClick={handleNavLinkClick}
          >
            {icon} {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 fixed z-50 w-full top-0 shadow-md">
      <div className="navbar w-11/12 mx-auto py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white font-bold text-2xl">
          <img
            src="https://plus.unsplash.com/premium_vector-1723275529922-26d0951e9602?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbGV8ZW58MHx8MHx8fDA%3D"
            alt="Logo"
            className="w-10 h-10"
          />
          <span className="font-sora tracking-wide">Discount PRO</span>
        </div>

        <div className="hidden lg:flex">{links}</div>

        <div className="hidden lg:flex space-x-3">
          {user ? (
            <div className="flex items-center gap-4">
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full object-cover border border-white"
              />
              <div className="text-white text-right">
                <p className="font-semibold">{user.displayName || "User"}</p>
                <p className="text-sm">{user.email}</p>
              </div>
              <button
                onClick={() => logOut()}
                className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-md font-medium shadow-md hover:bg-gray-200 transition"
              >
                <FaSignOutAlt /> Log Out
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-md font-medium shadow-md hover:bg-gray-200 transition"
              >
                <FaSignInAlt /> Login
              </NavLink>
              <NavLink
                to="/register"
                className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-md font-medium shadow-md hover:bg-gray-200 transition"
              >
                <FaUserPlus /> Register
              </NavLink>
            </>
          )}
        </div>

        <div className="lg:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md rounded-md absolute w-10/12 mx-auto left-0 right-0 z-50 mt-2 py-4 transition-transform duration-300 ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}
      >
        {links}
        {user ? (
          <div className="flex flex-col items-center gap-4 mt-4">
            <img
              src={user.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full object-cover border border-gray-400"
            />
            <p className="font-semibold">{user.displayName || "User"}</p>
            <p className="text-sm">{user.email}</p>
            <button
              onClick={() => logOut()}
              className="w-10/12 bg-red-500 text-white px-4 py-2 rounded-md font-medium shadow-md hover:bg-red-600 transition"
            >
              <FaSignOutAlt className="inline-block mr-2" /> Log Out
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 mt-4">
            <NavLink
              to="/login"
              className="w-10/12 bg-blue-500 text-white px-4 py-2 rounded-md font-medium shadow-md hover:bg-blue-600 transition flex items-center justify-center"
            >
              <FaSignInAlt className="mr-2" /> Login
            </NavLink>
            <NavLink
              to="/register"
              className="w-10/12 bg-green-500 text-white px-4 py-2 rounded-md font-medium shadow-md hover:bg-green-600 transition flex items-center justify-center"
            >
              <FaUserPlus className="mr-2" /> Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;