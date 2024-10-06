import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPages from "../pages/Error/ErrorPages";
import Checkout from "../pages/CheckOut/Checkout";



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
          element: <Checkout></Checkout>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router;