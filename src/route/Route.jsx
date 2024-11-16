import { createBrowserRouter } from "react-router-dom";
import { Overview } from "../component/Dashboard-cmp/Overview";
import MainLayout from "../layouts/MainLayout";
import { AboutUs } from "../pages/AboutUs";
import { Contact } from "../pages/Contact";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import { Products } from "../pages/Products";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

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
          element: <PrivateRoute><Products></Products></PrivateRoute>
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
    {
      path: "/dashboard",
      element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: '/dashboard/overview',
          element: <Overview></Overview>
        }
      ]
    }
  ]);