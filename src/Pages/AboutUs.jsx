import stock from "../resources/stock.jpg"
import styles from "./AboutUs.module.css"
import email from "../resources/email.png"
import phone from "../resources/phone.png"
import location from "../resources/location.png"

const AboutUs = ()=>{
    return(
        <section className={styles.container}>
            <img  className={styles.img} src={stock} alt="" />
            <div className={styles.text}>
                <h1>About Us</h1>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>

                <h1>Contact Us</h1>
                <div className={styles.contact}> 
                    <div>
                        <img src={phone} alt="" />
                        <p>79909090</p>
                    </div>
                    <div>
                        <img src={email} alt="" />
                        <p>Emial.com</p>
                    </div>
                    <div>
                        <img src={location} alt="" />
                        <p>adrres,ass,2010</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs