import styles from './Product.module.css'
import img from '../resources/star.png'

const Product = ({data})=>{
    if(!data) return <p>Loading...</p>
    return(
        <div key={data.id} className={styles.container}>
            <img src={data.image} alt="Image" />
            <div>
                <div className={styles.titleContainer}>    
                    <p className={styles.title} >{data.title}</p>   
                    <div className={styles.ratingDiv}>
                        <img src={img} alt="" />
                        <p>{data.rating.rate}/{data.rating.count}</p>
                    </div>    
                    <p className={styles.price}>${data.price}</p>
                </div>
                <div>    
                    <p className={styles.description}>{data.description}</p>
                    <button className={styles.btn}>Add To Cart</button>
                </div>
            </div>    
        </div>
    )
}

export default Product