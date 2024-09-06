import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartProvider'
const Cart = () => {
    const {removeItems,clearCart,cart,getAllProductsPrice} = useContext(CartContext)
    console.log(cart)
return (
    <div>
        {cart.length === 0 ? (
            <p>no hay productos en el carrito</p>
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
                <h3>Total a pagar: {getAllProductsPrice()}</h3>
            </>
        )}
    </div>
);
};

export default Cart
