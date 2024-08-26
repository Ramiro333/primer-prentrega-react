import ContadorSec from "../ItemCount/ItemCount"
const ItemDetail = ({product}) => {
return (
    <div>
        <h2>{product.name}</h2>
        <img src={product.image} alt="" />
        <p>Precio: {product.price}US$</p>
        <p>{product.description}</p>
        <p>Color: {product.color[0]}, {product.color[1]}</p>
        <p>Marca: {product.category}</p>

    <ContadorSec initial={1} stock={15} />

    </div>
)
}

export default ItemDetail
