import styles from './Home.module.css'
import img from'../resources/logo.svg'
import Carosel from '../component/Carosel'

const Home = ()=>{

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
            <Carosel/>
            <div className={styles.para}>
                <h1 className={styles.title}>
                    Shop With Us
                </h1>
                <p className={styles.lines}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta enim tenetur facilis quisquam placeat perspiciatis veniam mollitia iure blanditiis, exercitationem quibusdam dolor, quasi at esse iusto harum expedita nesciunt qui?
                </p>
            </div>
            <div className={styles.button}>
                <button className={styles.buy}>Shop Now</button>
                <button className={styles.membership}>Get Membership</button>
            </div>
        </>
    )
}

export default Home

