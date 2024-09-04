import "./ItemDetail.css"
import ContadorSec from "../ItemCount/ItemCount"
import { useContext } from "react";
import {CartContext} from "../../context/CartContext/CartProvider";
import { Link } from "react-router-dom";
const ItemDetail = ({product}) => {
    const {addItems} = useContext(CartContext)
    const onAdd = (quantity) => {
        addItems(product, quantity)
    };
return (
    <div className="container-detail">
        <h2>{product.name}</h2>
        <img src={product.image} alt="" />
        <p>Precio: {product.price}US$</p>
        <p>{product.description}</p>
        <div className="contenedor-colores">
            <p>Color:</p>
            <div style={{backgroundColor: product.color[0]}} className="colores"></div>
            <div style={{backgroundColor: product.color[1]}} className="colores"></div>
        </div>
        <p>Marca: {product.category}</p>
    <ContadorSec initial={1} stock={product.stock }onAdd={onAdd} />
    <Link to="/cart">terminar mi compra</Link>

    </div>
)
}

export default ItemDetail
