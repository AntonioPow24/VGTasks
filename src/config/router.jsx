import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import Login from "../pages/Login";
import PrivateLayout from "../layout/PrivateLayout";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<PublicLayout />,
        children:[
            {
                index:true,
                element:<Login />
            },
            {
                path:'/dashboard',
                element:<PrivateLayout />,
                children:[
                    {
                        index:true,
                        element:<Dashboard />
                    },
                    {
                        path:'/dashboard/users',
                        element:<Users />
                    }
                ]
            },

        ]
    }
])