import { createBrowserRouter } from "react-router-dom";
import { Available } from "../component/Dashboard-cmp/Available";
import { Wishlist } from "../component/Dashboard-cmp/wishlist";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import { AboutUs } from "../pages/AboutUs";
import { Contact } from "../pages/Contact";
import { AddProduct } from "../pages/Dashboard/AddProduct";
import { MyProduct } from "../pages/Dashboard/MyProduct";
import { Overview } from "../pages/Dashboard/Overview";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import { Products } from "../pages/Products";
import Register from "../pages/Register";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

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
      element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
      children: [
        {
          path: '/dashboard/overview',
          element: <Overview></Overview>
        },
        {
          path: '/dashboard/my-product',
          element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
        },
        {
          path: '/dashboard/add-product',
          element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
        },
        {
          path: '/dashboard/avaiable',
          element: <BuyerRoute><Available></Available></BuyerRoute>
        },
        {
          path: '/dashboard/wishlist',
          element: <BuyerRoute><Wishlist></Wishlist></BuyerRoute>
        }
      ]
    }
  ]);