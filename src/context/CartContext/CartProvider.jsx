import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItems = (product, quantity) => {
        // Lógica para no agregar más productos que el stock disponible
        const quantityToAdd = quantity > product.stock ? product.stock : quantity;
        setCart([...cart, { product, quantity: quantityToAdd }]);
    };

    const removeItems = (itemId) => {
        setCart(cart.filter((deleteItem) => deleteItem.product.id !== itemId));
    };

    const isInCart = (itemIdEncontrar, product, quantity) => {
        const existingItem = cart.find((item) => item.product.id === itemIdEncontrar);
        if (existingItem) {
            alert("El item ya está en el carrito, se ha agregado más cantidad.");
            // Asegúrate de no exceder el stock al sumar cantidades
            const newQuantity = existingItem.quantity + quantity;
            const adjustedQuantity = newQuantity > product.stock ? product.stock : newQuantity;

            // Actualizar el carrito con el nuevo array
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
        // Sumar la cantidad de productos en el carrito
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getAllProductsPrice = () => {
        // Sumar el precio total de los productos en el carrito
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