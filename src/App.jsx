import './App.css'
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
const App = () => {

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
