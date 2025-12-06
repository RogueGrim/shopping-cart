import styles from "./App.module.css"
import img from'./resources/logo.svg'
function App() {
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
        </>
    )
}

export default App
