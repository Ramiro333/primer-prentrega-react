import './App.css'
import { useState,useEffect, useContext } from 'react'
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
import { ProductosProvider } from './context/ProductsContext/ProductsProvider'
import Checkout from './components/Checkout/Checkout'
import MainPage from './MainPage'
const App = () => {
  return (
  <>
    <ThemeProvider>
      <CartProvider>
        <ProductosProvider>
          <BrowserRouter>
            <NavBar/>
              <Routes>
              <Route path='/' element={<MainPage/>}/>
                <Route path='/productos' element={<ItemListContainer/>}/>
                <Route path='/cart' element={<Cart/>} />
                <Route path='/category/:prodId' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='*' element={<Error/>} /> 
              </Routes>
            <Footer/>
          </BrowserRouter>
        </ProductosProvider>
      </CartProvider>
    </ThemeProvider>
  </>

  )
}

export default App
