import './App.css'
import NavBar from './components/NavBar/NavBar'
// import ContadorSec from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
function App() {

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="holaa"/>
    {/* <ContadorSec/> */}
    {/* <ItemDetailContainer/> */}
    </>
  )
}

export default App
