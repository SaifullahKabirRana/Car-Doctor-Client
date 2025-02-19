import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPages from "../pages/Error/ErrorPages";
import Checkout from "../pages/CheckOut/Checkout";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPages></ErrorPages>,
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({ params }) => fetch(`https://car-doctor-server-lilac-delta.vercel.app/services/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
      }
    ]
  },
]);

export default router;