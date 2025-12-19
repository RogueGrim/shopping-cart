import styles from './Home.module.css'
import Carosel from '../component/Carosel'

const Home = ()=>{

    return(
        <>
            <Carosel/>{/*Rotating Images */}
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

