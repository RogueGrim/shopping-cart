import styles from './Shop.module.css'
import star from '../resources/star.png'
import { Link, useOutletContext } from 'react-router'


//component to render product cards on the shop page
const Card = ({id,image,title,price,rating,count, onClick})=>{
    return(
        <div className={styles.card}>
            <Link to={'/product'} data-id={id} onClick={()=>onClick(id)}>
                <img src={image} alt="Image"  className={styles.img}/>
            </Link>
            <div>
                <p className={styles.title}>{title}</p>
                <div className={styles.priceDiv}>
                    <p className={styles.price}> ${price}</p>
                    <div className={styles.ratingDiv}>
                        <img src={star} alt="star" className={styles.ratingImg} />
                        {rating}/{count}
                    </div>
                </div>    
            </div>
        </div>
    )
}

//Shop component to hold the rendered product cards
const Shop = ()=>{
    
    const  {data, setSelected}  = useOutletContext()

    const onClick = (id)=>{
        setSelected(data[id-1])
    }

    return(
        <section className={styles.mainContainer}>
            <h1>Our Stock</h1>
            {
                (data) ? 
                <div className={styles.container}>
                    {  
                        data.map((item)=>(
                            <Card 
                                key={item.id}
                                id={item.id} 
                                image={item.image} 
                                title={item.title} 
                                price={item.price} 
                                rating={item.rating.rate} 
                                count={item.rating.count}
                                onClick={onClick}
                            />
                        ))
                    }
                </div>  : <h1 className={styles.loading}>Loading...</h1>
            }
        </section>
    )
}

export default Shop