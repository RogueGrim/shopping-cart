import App from '../App.jsx'
import Cart from "../Pages/Cart"
import Home from "../Pages/Home"
import Shop from "../Pages/Shop"
import AboutUs from "../Pages/AboutUs"
import Product from '../Pages/Product.jsx'
import Error from '../Pages/ErrorPage.jsx'
import { createBrowserRouter } from "react-router"


//router for page browsing

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>, //parent component
    errorElement:<Error/>,
    children:[
      {index:true , element:<Home/>},
      {path:'shop', element:<Shop/>},
      {path:'product',element:<Product/>},
      {path:'aboutUs', element:<AboutUs/>},
      {path:'cart', element:<Cart/>},
    ],
  }
])

export default router