import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPages from "../pages/Error/ErrorPages";


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
      ]
    },
  ]);

  export default router;