import styles from "./App.module.css"
import img from'./resources/logo.svg'
import { useState,useEffect } from "react"
import { Link, Outlet } from "react-router"

function App() {

    const [data, setData] = useState([]) // state to manage product list
    const [images, setImages] = useState([]) //state to manage images for carsel
    const [cart, setCart] = useState([]) // state to manage cart items
    const [selected, setSelected] = useState() //state for managing selected product

    //effect for fetching products for shop page
    useEffect(()=>{
        const url = 'https://fakestoreapi.com/products'
        try{    
            fetch(url)
            .then(response => response.json())
            .then(response => setData(response))
        }catch(error){
            console.log(error)
        }
    },[])

    //effect for loading carosel images for the home page
    useEffect(()=>{
            const fetchData = async ()=>{
                const url = 'https://picsum.photos/v2/list?page=1&limit=10'
                const data = await fetch(url)
                const res = await data.json()
                setImages(res)
            }
            fetchData()
        },[])
        
    return(
        <>       
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={img} alt="Logo"/>
                    <h1>Shopify</h1>
                </div>
                <nav className={styles.routes}>
                    <Link  to={"/"}>Home</Link>
                    <Link to={"/shop"}>Shop</Link>
                    <Link to={"/aboutUs"}>About-Us</Link>
                    <Link to={"/cart"}>Cart</Link> 
                    <p className={styles.count}>{cart.length}</p>
                </nav>
            </header>
            <Outlet context={{data, images, cart, selected, setCart, setSelected}}/>
        </>
    )
}

export default App
