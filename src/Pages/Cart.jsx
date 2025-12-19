import styles from "./Cart.module.css"

const Card = ({info})=>{
    return(
        <div className={styles.card}>
            <div>
                <img src={info.image} alt="Image" />
                <p className={styles.cardTitle}>{info.title}</p>
            </div>
            <div>
                <button className={styles.quantity}>-</button>
                <input type="number"  className={styles.itemNos}/>
                <button className={styles.quantity}>+</button>
            </div>
            <p>$ {info.price}</p>
            <button className={styles.button}>X</button>
        </div>
    )
}

const Cart = ({data})=>{
    return(
        <section className={styles.container}>
            <div className={styles.cart}>
                <h1>Cart</h1>
                <span className={styles.span}></span>
                { data.length == 0  ? <p>Cart is Empty!!!</p> : data.map( (e,i)=> <Card  key={i} info={e}/>) }
            </div>
            <div className={styles.summary}>
                <h1>Summary</h1>
                <span className={styles.span}></span>
                <p>No of items</p>
                <div>
                    <p>Total:</p>
                    <h1>${data.reduce((sum,item)=>sum + item.price,0)}</h1>
                </div>
                <button className={styles.checkout}>CheckOut</button>
            </div>
            
        </section>
    )
}

export default Cart