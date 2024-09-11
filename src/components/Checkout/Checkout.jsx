import {useState,useContext} from 'react'
import { CartContext } from '../../context/CartContext/CartProvider'
import { getFirestore,collection,addDoc,updateDoc,doc,getDoc } from 'firebase/firestore'
import { ProductosContext } from "../../context/ProductsContext/ProductsProvider"
// import { db } from './main'

const Checkout = () => {
    const {cart, getTotal,getAllProductsPrice, clearCart}= useContext(CartContext)
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");
    const {updateProductStock} = useContext(ProductosContext)
    const handleForm = (e)=>{
        e.preventDefault();
        if(!nombre ||!apellido||!celular||!email||!emailConfirmacion){
            setError("porfavor completa todos los campos wachin");
            return;
        }
        if(email !==emailConfirmacion){
            setError("los emails son diferentes wachin");
            return;
        }
        const db = getFirestore()
        const order = {
            items: cart.map((product) =>({
                id: product.product.id,
                name: product.product.name,
                quantity: product.quantity,
                stock: product.product.stock,
            })),
            total:getAllProductsPrice(),
            purchasedProduct: getTotal(),
            date: new Date(),
            nombre,apellido,celular,email
        };
        Promise.all(
            order.items.map(async (productOrder)=>{
                const productRef = doc(db, "products", productOrder.id);
                const productDoc = await getDoc(productRef);
                const stock = productDoc.data().stock;
                await updateDoc(productRef,{
                    stock: stock - productOrder.quantity,
                })
                updateProductStock(productOrder.id,stock - productOrder.quantity )
            })
        ).then(()=> {
            addDoc(collection(db,"orders"),order)
            .then((docRef)=>{
                setOrderId(docRef.id);
                clearCart()
            })
            .catch((error)=>{
                console.log("error updating document: ", error)
                setError("no se pudo generar la orden ")
            })
        })
        .catch((error)=>{
            console.log("error",error)
            setError("no se puede actualizar, intente nuevamente ")
        })
    }

return (
<div>
    <h2>ingresa tus datos</h2>
    <div>
        {cart.map((product) => (
        <div key={product.product.id}>
            <p>{""} {product.product.name}</p>
            <p>{product.product.price}</p>
            <hr />
        </div>
        ))}
    </div>
    <form onSubmit={handleForm}>
        <div>
            <label htmlFor="">nombre</label>
            <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">apellido</label>
            <input type="text" onChange={(e)=> setApellido(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="">celular</label>
            <input type="number" onChange={(e)=> setCelular(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">email</label>
            <input type="email"onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">email de confirmacion</label>
            <input type="email"onChange={(e)=> setEmailConfirmacion(e.target.value)} />
        </div>
        <button type="submit">generar orden de compra</button>
        {error && <p>{error}</p>}
        {orderId && (
            <p>Gracias por tu compra uwu! tu numero de orden es : {orderId}</p>
        )}
    </form>
</div>
)
}

export default Checkout
