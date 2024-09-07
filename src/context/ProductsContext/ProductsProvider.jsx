import {createContext,useState,useEffect } from "react";
import { getFirestore, collection, getDocs,query,where, QuerySnapshot } from 'firebase/firestore'
const ProductosContext = createContext();
const ProductosProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "products"));
    getDocs(q).then((querySnapshot)=>{
        if(querySnapshot.size===0){
        console.log("no hay resultados")
        }
        setProducts(querySnapshot.docs.map((doc)=> ({id:doc.id, ...doc.data()})))
    })
      // .collection("products")
      // .where("price", ">=", 150)
      // .orderBy("price", "desc")

      // const productsCollection = collection(db,"products")
      // getDocs(productsCollection).then((snapshot)=>{
      //   setProducts(snapshot.docs.map((doc)=>(
      //     {id:doc.id,...doc.data()}
      //   )))
      // })
    },[]);
return (
  <ProductosContext.Provider value={{products}}>
      {children}
  </ProductosContext.Provider>
);
}

export {ProductosContext, ProductosProvider};