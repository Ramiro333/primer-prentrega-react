import './App.css'
import NavBar from './components/NavBar/NavBar'
// import ContadorSec from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Foter/Footer'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Error from './components/Error/Error'
const App = () => {

  return (
  <>
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:prodId' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>

  {/* <ContadorSec/> */}
  </>
  )
}

export default App
