import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Aos from "aos";

const MainLayout = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
      easing: "ease-in-out", // Type of easing
      offset: 100, // Offset in pixels
      delay: 100, // Delay in milliseconds

    });
  }, []);

  return (
    <div className="font-poppins ">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
