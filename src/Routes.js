import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Home from "./Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[{
            path:'/',
            element: <Home></Home>
        }]
    }
])