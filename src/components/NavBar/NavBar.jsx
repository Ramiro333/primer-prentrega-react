import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"; 
import { Link,NavLink } from "react-router-dom";
const NavBar = ()=>{

    return(
        <nav className="navegacion">
            <div className="navegacion-logo">
                <Link to="/">UnLogo</Link>
            </div>
            <div className="navegacion-a">
                <ul className="navegacion-ul">
                    <li>
                        <Link to="/category/jordan" className="navegacion-a">Jordan</Link>
                    </li>
                    <li>
                        <Link to="/category/new-balance" className="navegacion-a">New Balance</Link>
                    </li>
                    <li>
                        <Link to="/category/adidas" className="navegacion-a">Adidas</Link>
                    </li>
                    <li>
                        <Link to="/category/fila" className="navegacion-a">Fila</Link>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;