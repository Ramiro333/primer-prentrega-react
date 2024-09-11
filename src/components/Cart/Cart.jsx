import { useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartProvider'
import { Link } from 'react-router-dom';
const Cart = () => {
    const {removeItems,clearCart,cart,getAllProductsPrice} = useContext(CartContext)
return (
    <div>
        {cart.length === 0 ? (
            <div>
                <p>no hay productos en el carrito</p>
                <Link to={"/productos"} >quiero ver las suelas</Link>
            </div>
        ) : (
            <>
                {cart.map((item) => (
                    <div key={item.product.id}>
                        <p>{item.product.name}</p>
                        
                        <p>{item.quantity}</p>
                        <button onClick={() => removeItems(item.product.id)}> eliminar producto</button>
                    </div>
                ))}
                <button onClick={()=> clearCart()}>eliminar todo el carrito</button>
                <button>
                    <Link to={"/checkout"}>comprar</Link>
                </button>
                <h3>Total a pagar: {getAllProductsPrice()}</h3>
            </>
        )}
    </div>
);
};

export default Cart
