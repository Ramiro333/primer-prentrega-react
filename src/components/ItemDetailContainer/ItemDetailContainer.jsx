import { useState,useEffect } from "react"
import ItemDetail from "../ItemaDetail/ItemDetail"
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
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
    console.log(id)
    return (
        <div>
            {!product ? <Spinner/> : <ItemDetail product={product}/>}
            
        </div>
    )
}

export default ItemDetailContainer
