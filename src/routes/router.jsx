import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import BrandDetails from "../components/BrandDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../private route/PrivateRoute";
import MyProfile from "../pages/MyProfile";
import About from "../components/About";
import UpdateProfile from "../components/UpdateProfile";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/brands",
        element: <Brands></Brands>,
      },
      {
        path: "/brand/:id",
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
