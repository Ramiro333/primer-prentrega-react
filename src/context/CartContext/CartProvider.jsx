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
        const productsQuantity = cart.reduce((acumulador,item)=>acumulador+item.quantity,0)
        return productsQuantity
        
    }
    const getAllProducts = () =>{

    }
    {console.log(cart)}
    return (
        <CartContext.Provider value={{cart,addItems,isInCart,clearCart,removeItems,getAllProducts,getTotal}}>
            {children}
        </CartContext.Provider>
    );
};
export { CartContext, CartProvider };