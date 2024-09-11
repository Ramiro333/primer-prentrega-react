import { useState,useEffect,useContext } from "react"
import ItemDetail from "../ItemaDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Spinner from "../Spinner/Spinner"
import "./ItemDetailContainer.css"
import { ProductosContext } from "../../context/ProductsContext/ProductsProvider"
const ItemDetailContainer = () => {
    const[product,setProduct]= useState(null);
    const {id} = useParams();
    const {products} = useContext(ProductosContext)
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const data = products;
                const newProduct = data.find(prod => prod.id === id); 
                setProduct(newProduct) 
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    },[id,products]);
    return (
        <div className="container-item-detail">
            {!product ? <Spinner /> : <ItemDetail product={product} />}
            
        </div>
    )
}

export default ItemDetailContainer
