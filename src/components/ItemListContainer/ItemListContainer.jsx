import { useState,useEffect } from "react"
import ItemList from "../ItemList/itemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"
const ItemListContainer = ({greeting})=>{
    const[products,setProducts]= useState([])
    const [loading,setLoading] = useState(true)
    const {prodId} = useParams();
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch("/productos.json")
                const data = await response.json()
                const filterProds = prodId ? data.filter((p)=> p.category === prodId):data;
                setProducts(filterProds)
            }catch(error){
                console.log(error)
            } finally{
                setLoading(false)
            }
        }
        fetchData()
    },[prodId])
    return(
        <div className='container'>
            <h1>{greeting}</h1>
            {loading? <Spinner/> : <ItemList products={products}/>}
        </div>
    )
}
export default ItemListContainer