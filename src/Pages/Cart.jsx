import { useOutletContext } from "react-router"
import styles from "./Cart.module.css"


//card component for displaying products in a cart
const Card = ({info,quantity,index, increment, decrement, remove})=>{
    return(
        <div className={styles.card}>
            <div>
                <img src={info.image} alt="Image" />
                <p className={styles.cardTitle}>{info.title}</p>
            </div>
            <div>
                <button className={styles.quantity} data-id={index} onClick={(e)=>decrement(e.target.dataset.id)}>-</button>
                <input type="number"  className={styles.itemNos} value={quantity} readOnly/>
                <button className={styles.quantity} data-id={index} onClick={(e)=>increment(e.target.dataset.id)}>+</button>
            </div>
            <p>${info.price}</p>
            <button className={styles.button} data-id={index} onClick={(e)=>remove(e.target.dataset.id)}>X</button>
        </div>
    )
}

//cart page
const Cart = ()=>{

    const {cart, increment, decrement, remove} = useOutletContext()

    return(
        <section className={styles.container}>
            <div className={styles.cart}>
                <h1>Cart</h1>
                <span className={styles.span}></span>
                { cart.length == 0  ? <p>Cart is Empty!!!</p> : cart.map((e,i)=> 
                    <Card 
                        key={i} 
                        info={e.item} 
                        quantity={e.quantity} 
                        index={i} 
                        increment={increment}
                        decrement={decrement}
                        remove={remove}
                    />) }
            </div>
            <div className={styles.summary}>
                <h1>Summary</h1>
                <span className={styles.span}></span>
                <p>{cart.length} Item(s)</p>
                <div>
                    <p>Total:</p>
                    <h1>${cart.reduce((sum,items)=>sum + items.item.price*items.quantity,0)}</h1> {/* total price of cart */}
                </div>
                <button className={styles.checkout}>CheckOut</button>
            </div>
            
        </section>
    )
}

export default Cart