import App from '../App.jsx'
import Cart from "../Pages/Cart"
import Home from "../Pages/Home"
import Shop from "../Pages/Shop"
import AboutUs from "../Pages/AboutUs"
import { createBrowserRouter } from "react-router"

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {index:true , element:<Home/>},
      {path:'shop', element:<Shop/>},
      {path:'aboutUs', element:<AboutUs/>},
      {path:'cart', element:<Cart/>},
    ],
  }
])

export default router