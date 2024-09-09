import "./ItemDetail.css"
import ContadorSec from "../ItemCount/ItemCount"
import { useContext } from "react";
import {CartContext} from "../../context/CartContext/CartProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
const ItemDetail = ({product}) => {
    const [showItemCount, setshowItemCount] = useState(true);
    const {isInCart} = useContext(CartContext)
    const onAdd = (quantity) => {
        isInCart(product.id, product, quantity)
        setshowItemCount(false)
    };
return (
    <div className="container-detail">
        <h2>{product.name}</h2>
        <img src={product.image} alt="" />
        <p>Precio: {product.price}US$</p>
        <p>stock: {product.stock}</p>
        <p>{product.description}</p>
        <div className="contenedor-colores">
            <p>Color:</p>
            <div style={{backgroundColor: product.color[0]}} className="colores"></div>
            <div style={{backgroundColor: product.color[1]}} className="colores"></div>
        </div>
        <p>Marca: {product.category}</p>
        {showItemCount ? (<ContadorSec initial={1} stock={product.stock }onAdd={onAdd} />) : (<Link to="/cart">terminar mi compra</Link>)}

    </div>
)
}

export default ItemDetail
