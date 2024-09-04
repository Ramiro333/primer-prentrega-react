import { createContext,useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addItems = (product, quantity)=>{
        setCart([...cart, {product,quantity}])
    }
    const removeItems = () => {

    }
    const isInCart = () => {

    }
    const clearCart = () => {

    }
    const getTotal = () => {

    }
    const getAllProducts = () =>{

    }
    return (
        <CartContext.Provider value={{cart,addItems,isInCart,clearCart,removeItems,getAllProducts,getTotal}}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider