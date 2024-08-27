import { useState,useEffect } from "react"
import ItemDetail from "../ItemaDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"
import "./ItemDetailContainer.css"
const ItemDetailContainer = () => {
    const[product,setProduct]= useState(null);
    const {id} = useParams();
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch("/productos.json");
                const data = await response.json();
                const newProduct = data.find(prod => prod.id === Number(id)); 
                setProduct(newProduct) 
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    },[id]);
    return (
        <div className="container-item-detail">
            {!product ? <Spinner/> : <ItemDetail product={product}/>}
            
        </div>
    )
}

export default ItemDetailContainer
