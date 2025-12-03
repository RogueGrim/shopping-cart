import styles from './Home.module.css'
import img from'../resources/logo.svg'

const Home = ()=>{

    return(
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src={img} alt="" />
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

export default Home

