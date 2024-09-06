import './App.css'
import { useState,useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Foter/Footer'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Error from './components/Error/Error'
import './global.css'
import ThemeProvider from './context/ThemeContext/ThemeProvider'
import { CartProvider } from './context/CartContext/CartProvider'
import Cart from './components/Cart/Cart'
import { db } from './main'
// import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { getFirestore, collection, getDocs,query,where, QuerySnapshot } from 'firebase/firestore'
const App = () => {
  const [products, setProducts] = useState([]);
    useEffect(() => {
      const db = getFirestore();
      const q = query(collection(db, "products"),where("price", "<=", 180));
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
  console.log(products)
  // const [product, setProduct] = useState(null);
  // useEffect(() => {
  //   const db = getFirestore();
  //   const productRef = doc(db,"products","L2oNBYYUQJuRmXy7cBkO");
  //   getDoc(productRef).then((snapshot)=>{
  //     if(snapshot.exists()){
  //       setProduct({id:snapshot.id,...snapshot.data()})
  //     }
  //   })
  // },[]);
  // console.log(product)

  return (
  <>
    <ThemeProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/cart' element={<Cart/>} />
              <Route path='/category/:prodId' element={<ItemListContainer/>} />
              <Route path='/item/:id' element={<ItemDetailContainer/>} />
              <Route path='*' element={<Error/>} />
            </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  </>
  )
}

export default App
