import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartProvider'
const Cart = () => {
    const {cart} = useContext(CartContext);
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
                    </div>
                ))}
            </>
        )}
    </div>
  );
};

export default Cart
