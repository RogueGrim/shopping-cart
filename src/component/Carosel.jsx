import { useEffect, useState } from "react"
import styles from './Carosel.module.css'
import { useOutletContext } from "react-router"
//component for roating images in the home page
const Carosel = ()=>{
    const {images} = useOutletContext()

    const [ activeIndex,  setActiveIndex ] = useState(0)


    //effect fro infinte loop of images
    useEffect(()=>{
        const infiniteScroll = ()=>{
            if(activeIndex == images.length-1){
                setActiveIndex(0)
            }else{
                setActiveIndex(activeIndex+1)
            }
        }
        const interval = setInterval(()=>infiniteScroll(),5000)

        return ()=> clearInterval(interval)
    })
    
    return(
        <div className={styles.container}>
            {images.map((img,index)=>(
                <img 
                    src={img.download_url} 
                    className={index == activeIndex ? styles.active : styles.img} 
                    key={img.id}>
                </img>
            ))}
        </div>
    )
}

export default Carosel