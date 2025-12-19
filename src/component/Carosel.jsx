import { useEffect, useState } from "react"
import styles from './Carosel.module.css'
//component for roating images in the home page
const Carosel = ()=>{
    const [ data, setData ] = useState([])
    const [ activeIndex,  setActiveIndex ] = useState(0)

    useEffect(()=>{
        const infiniteScroll = ()=>{
            if(activeIndex == data.length-1){
                setActiveIndex(0)
            }else{
                setActiveIndex(activeIndex+1)
            }
        }
        const interval = setInterval(()=>infiniteScroll(),5000)

        return ()=> clearInterval(interval)
    })
    
    useEffect(()=>{
        const fetchData = async ()=>{
            const url = 'https://picsum.photos/v2/list?page=1&limit=10'
            const data = await fetch(url)
            const res = await data.json()
            setData(res)
            console.log(res)
        }
        fetchData()
    },[])
    return(
        <div className={styles.container}>
            {data.map((img,index)=>(
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