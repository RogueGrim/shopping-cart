import styles from './Product.module.css'
import img from '../resources/star.png'
import { useOutletContext } from 'react-router'
import { useEffect, useState } from 'react'

const Added = ()=>{
    return(
        <div className={styles.added}>
            <p>Added to Cart!</p>
        </div>
    )
}

const Product = ()=>{
    const {selected, setCart} = useOutletContext()
    const [showAdded, setShowAdded] = useState(false)

    useEffect(()=>{
        setTimeout(()=>setShowAdded(false),1000)
    },[showAdded])

    const onClick = ()=>{
        setCart((prev)=>[...prev,selected])
        setShowAdded(true)

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
                    {showAdded ? <Added/> : null}  
                </div>
            </div>  
        </div>
    )
}

export default Product