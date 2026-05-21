import { createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import MainLayout from "./components/MainLayout/MainLayout";
import DashLayout from "./components/MainLayout/DashLayout";
import Admin from "./components/Admin/Admin";
import Pizza from "./components/Pizza/Pizza";
import Strawberry from "./components/Strawberry/Strawberry";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "pizza",
                element: <Pizza />,
            },
            {
                path: "admin",
                element: <Admin />,
            },
                        {
                path: "strawberry",
                element: <Strawberry />,
            },
        ],
    },

    {
        path: "/admin",
        element: <DashLayout />,
        children: [
            {
                index: true,
                element: <h2 className=" bg-danger-subtle"> This is Admin Page Test</h2>,
            },
            {
                path: "1", //http://localhost:5173/admin/1
                element: <Admin />,
            },
        ]

    }


]);

export default router;