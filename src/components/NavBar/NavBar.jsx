import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"; 
const NavBar = ()=>{

    return(
        <nav className="navegacion">
            <div className="navegacion-logo">
                <p>UnLogo</p>
            </div>
            <div className="navegacion-a">
                <ul className="navegacion-ul">
                    <a href="#" className="navegacion-a"><li>tienda</li></a>
                    <a href="#" className="navegacion-a"><li>carrito</li></a>
                    <a href="#" className="navegacion-a"><li>nosotros</li></a>
                    <a href="#" className="navegacion-a"><li>lo nuevo</li></a>
                    <a href="#" className="navegacion-a"><li>comprar</li></a>
                </ul>

            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;