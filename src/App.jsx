import styles from "./App.module.css"
import img from'./resources/logo.svg'
import Cart from "./Pages/Cart"
import { useState,useEffect } from "react"
function App() {

    const [data, setData] = useState([]) 

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
        
    return(
        <>       
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={img} alt="Logo"/>
                    <h1>Shopify</h1>
                </div>

                <div className={styles.routes}>
                    <h1>Home</h1>
                    <h1>Shop</h1>
                    <h1>About Us</h1>
                    <h1>Cart</h1>
                </div>
            </header>
            { data.length != 0 ? <Cart data={[data[0],data[1]]}/> : <p>loading...</p>}
        </>
    )
}

export default App
