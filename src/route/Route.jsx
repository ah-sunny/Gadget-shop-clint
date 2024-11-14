import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { AboutUs } from "../pages/AboutUs";
import { Contact } from "../pages/Contact";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import { Products } from "../pages/Products";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: '/Products',
          element: <Products></Products>
        },
        {
          path: '/Contact',
          element: <Contact></Contact>
        },
        {
          path: '/AboutUs',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
         path: "/Register",
         element: <Register></Register> 
        }
      ]
    },
  ]);