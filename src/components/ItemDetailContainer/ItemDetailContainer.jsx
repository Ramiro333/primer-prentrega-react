import { useState,useEffect } from "react"
import ItemDetail from "../ItemaDetail/ItemDetail"

const ItemDetailContainer = () => {
    const[product,setProduct]= useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch("/productos.json");
                const data = await response.json();
                const newProduct = data.find(prod => prod.id === 1);
                console.log(newProduct);
                setProduct(newProduct) ;
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
    },[]);
    if (!product) {
        return <div>Cargando...</div>;
    }
    console.log(product);
    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
