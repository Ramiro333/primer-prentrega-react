import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Carrousel from '../Carrousel/Carrousel'
import { ProductosContext } from '../../context/ProductsContext/ProductsProvider'
import Spinner from '../Spinner/Spinner'
import "./MainPage.css"
const MainPage = () => {
    const { products } = useContext(ProductosContext)
    return (
        <div>
            <div>
                <div>
                    <h1>Bienvenido a Clean Soles</h1>
                    <p>Bienvenidos a Clean Soles, el destino ideal para los amantes de las zapatillas exclusivas. Nos especializamos en ofrecer una selección curada de sneakers de alta gama que combinan estilo, calidad y diseño innovador. Cada par es una declaración de moda, creada para aquellos que valoran el lujo y la autenticidad. Explora nuestra colección y encuentra el par perfecto que te acompañe en cada paso.</p>
                </div>
                {(!products || products.length === 0) ? <Spinner></Spinner> : <Carrousel products={products} />}
                <div className='link-main-page'>
                    <Link to="/productos" >
                        <button className='boton-main-page'> ir a los productos</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainPage
