import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Blog from "../components/Blog/Blog"
import Home from "../components/Home/Home"

export const router= createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<Home/>
            },{
                path:'/blogs',
                element:<Blog/>
            }
        ]
    }
])