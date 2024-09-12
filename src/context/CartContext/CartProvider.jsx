import { createContext, useState } from "react";
import { toast } from "react-toastify";
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItems = (product, quantity) => {
        const quantityToAdd = quantity > product.stock ? product.stock : quantity;
        setCart([...cart, { product, quantity: quantityToAdd }]);
    };

    const removeItems = (itemId) => {
        setCart(cart.filter((deleteItem) => deleteItem.product.id !== itemId));
    };

    const isInCart = (itemIdEncontrar, product, quantity) => {
        const existingItem = cart.find((item) => item.product.id === itemIdEncontrar);
        if (existingItem) {
            toast.info('el item que has agregado ya existe en el carrito, hemos agregado mas unidades de este producto :)');
            const newQuantity = existingItem.quantity + quantity;
            const adjustedQuantity = newQuantity > product.stock ? product.stock : newQuantity;

            const updatedCart = cart.map((item) =>
                item.product.id === itemIdEncontrar
                    ? { ...item, quantity: adjustedQuantity }
                    : item
            );
            setCart(updatedCart);
        } else {
            addItems(product, quantity);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getAllProductsPrice = () => {
        return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItems,
                isInCart,
                clearCart,
                removeItems,
                getAllProductsPrice,
                getTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };