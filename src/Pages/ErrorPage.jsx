import styles from "./Error.module.css"
import { Link } from "react-router"

const Error = ()=>{
    return(
        <div className={styles.container}> 
            <h1>Error</h1>
            <p>The Selected Page Does Not Exist!</p>
            <Link to={'/'}>
                Click Here to Go Back
            </Link>
        </div>
    )
}

export default Error