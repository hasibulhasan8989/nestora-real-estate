import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "../Pages/RootPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PropertyDetails from "../Pages/PropertyDetails";
import ContactUs from "../Pages/ContactUs";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile";
import UpdateProfile from "../Pages/UpdateProfile";



const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage></RootPage>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch('/estate.json')
        },
        {
          path:"/login",
          element:<Login></Login>,
         
        },
        {
          path:"/register",
          element:<Register></Register>,
         
        },
        {
          path:"/propertyDetails/:id",
          element:<PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
          loader:()=>fetch('/estate.json')

        },
        {
          path:'/contact-us',
          element:<PrivateRoute><ContactUs></ContactUs></PrivateRoute>
        },
        {
          path:'/userProfile',
          element:<PrivateRoute> <UserProfile></UserProfile> </PrivateRoute>
        },
        {
          path:'/updateProfile',
          element:<UpdateProfile></UpdateProfile>
        },
        
       

    ]
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
