import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
// import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: '/sign-up',
            element: <SignUp></SignUp>
        },
        {
            path: '/checkOut/:id',
            element: <CheckOut></CheckOut>,
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);


  export default router;