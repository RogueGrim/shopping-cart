import styles from './Product.module.css'
import img from '../resources/star.png'
import { useOutletContext } from 'react-router'
import { useEffect, useState } from 'react'
import items from '../component/Class'

// component to show added div on product page
const Added = ()=>{
    return(
        <div className={styles.added}>
            <p>Added to Cart!</p>
        </div>
    )
}


//compent to display product page via the selected state
const Product = ()=>{
    const {selected, setCart} = useOutletContext()
    const [showAdded, setShowAdded] = useState(false)

    //effect for timeout for the added component div
    useEffect(()=>{
        setTimeout(()=>setShowAdded(false),1000)
    },[showAdded])



    const onClick = ()=>{
        const item = new items(selected.id,selected,1)
        setCart(prev => {
            const exists = prev.find(item => item.id === selected.id)
            if (exists) {
                return prev.map(item =>
                    item.id === selected.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    )
            }
            return [...prev, item]
        })
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