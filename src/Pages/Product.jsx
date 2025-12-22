import styles from './Product.module.css'
import img from '../resources/star.png'
import { useOutletContext } from 'react-router'

const Product = ()=>{
    const {selected, setCart} = useOutletContext()

    const onClick = ()=>{
        setCart((prev)=>[...prev,selected])
    }

    if(!selected) return <p>Loading...</p>
    return(
        <div key={selected.id} className={styles.container}>
            <img src={selected.image} alt="Image" />
            <div>
                <div className={styles.titleContainer}>    
                    <p className={styles.title} >{selected.title}</p>   
                    <div className={styles.ratingDiv}>
                        <img src={img} alt="" />
                        <p>{selected.rating.rate}/{selected.rating.count}</p>
                    </div>    
                    <p className={styles.price}>${selected.price}</p>
                </div>
                <div>    
                    <p className={styles.description}>{selected.description}</p>
                    <button className={styles.btn} onClick={onClick} >Add To Cart</button>
                </div>
            </div>    
        </div>
    )
}

export default Product