import { createContext,useState } from "react";
const CartContext = createContext();
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addItems = (product, quantity)=>{
        setCart([...cart, {product,quantity}])
    }
    const removeItems = (itemId) => {
        setCart(cart.filter(deleteItem =>deleteItem.product.id !==itemId))
    }
    const isInCart = (itemIdEncontrar,product, quantity) => {
        if(cart.some(item => item.product.id === itemIdEncontrar)){
            alert("el item ya esta en el carrito, se a agregado la cantidad de productos al carrito")
            const itemRepetido = cart.find (item => item.product.id === itemIdEncontrar)
            itemRepetido.quantity = itemRepetido.quantity+quantity;
        }else{
            addItems(product, quantity)
        }
    }
    const clearCart = () => {
        setCart([])
    }
    const getTotal = () => {
        const productsQuantity = cart.reduce((acc,item)=>acc+item.quantity,0)
        return productsQuantity
        
    }
    const getAllProductsPrice = () =>{
        return cart.reduce((total,item)=> total+item.product.price * item.quantity,0);
    }
    return (
        <CartContext.Provider value={{cart,addItems,isInCart,clearCart,removeItems,getAllProductsPrice,getTotal}}>
            {children}
        </CartContext.Provider>
    );
};
export { CartContext, CartProvider };