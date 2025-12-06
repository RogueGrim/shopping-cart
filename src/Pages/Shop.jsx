import { useEffect, useState } from "react"
import styles from './Shop.module.css'
import star from '../resources/star.png'

const Card = ({image,title,price,rating,count})=>{
    return(
        <div className={styles.card}>
            <img src={image} alt="Image" />
            <div>
                <p className={styles.title}>{title}</p>
                <div className={styles.priceDiv}>
                    <p className={styles.price}> $ {price}</p>
                    <div className={styles.ratingDiv}>
                        <img src={star} alt="star" className={styles.ratingImg} />
                        {rating}/{count}
                    </div>
                </div>    
            </div>
        </div>
    )
}


const Shop = ()=>{
    const [ data, setData ] = useState([])

    useEffect(()=>{
        const url = 'https://fakestoreapi.com/products'
        fetch(url)
        .then(response => response.json())
        .then(response => setData(response))
    })
    return(
        <section className={styles.mainContainer}>
            <h1>Our Stock</h1>
            <div className={styles.container}>
                {
                    data.map((item)=>(
                        <Card 
                            key={item.id} 
                            image={item.image} 
                            title={item.title} 
                            price={item.price} 
                            rating={item.rating.rate} 
                            count={item.rating.count}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Shop