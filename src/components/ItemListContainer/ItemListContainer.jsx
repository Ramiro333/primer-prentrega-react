import { useState,useEffect,useContext } from "react"
import ItemList from "../ItemList/itemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"
import { ProductosContext } from '../../context/ProductsContext/ProductsProvider'
const ItemListContainer = () =>{
    const {products} = useContext(ProductosContext)
    const[productos,setProducts]= useState([])
    const {prodId} = useParams();
        useEffect(()=>{
        const fetchData = async () => {
            try{
                const data = products;
                const filterProds = prodId ? data.filter((p)=> p.category === prodId):data;
                setProducts(filterProds)
            }catch(error){
                console.log(error)
            } 
        }
        fetchData()
    },[prodId,products])
    return(
        <div className='container'>
            <h1>Clean Soles</h1>
            {productos.length === 0  ? <Spinner/> : <ItemList productos ={productos}/>}
        </div>
    )
}
export default ItemListContainer
