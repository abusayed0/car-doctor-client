import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home-page/HomePage";
import MainLayout from "../layouts/main-layout/MainLayout";
import Login from "../pages/login/Login";
import About from "../pages/home-page/About";
import SingUp from "../pages/singup/SingUp";
import Checkout from "../pages/checout/Checkout";
import Booking from "../pages/booking/Booking";
import PrivatePage from "../private-page/PrivatePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signup",
                element: <SingUp/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/checkout/:id",
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <PrivatePage><Checkout/></PrivatePage>
            },
            {
                path: "/bookings",
                element: <PrivatePage><Booking/></PrivatePage>
            }
        ]
    }
]);

export default router;